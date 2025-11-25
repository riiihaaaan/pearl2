import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * useDraggableNodes Hook
 *
 * Manages draggable node positions with:
 * - Pointer-based drag interaction (mouse/touch)
 * - Keyboard navigation (arrow keys for nudging)
 * - localStorage persistence
 * - Bounding box constraints
 * - Smooth animations via requestAnimationFrame
 *
 * @param {Array} nodesData - Array of node objects with { id, label, src, defaultPos: {x,y} }
 * @returns {Object} State and handlers
 */
const useDraggableNodes = (nodesData) => {
  // Initialize positions from localStorage or use defaults
  const [positions, setPositions] = useState(() => {
    if (typeof window === 'undefined') {
      // SSR fallback
      return nodesData.reduce((acc, node) => {
        acc[node.id] = node.defaultPos;
        return acc;
      }, {});
    }

    const saved = localStorage.getItem('pearl-node-positions');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate that all nodes have positions
        const allPresent = nodesData.every(node => node.id in parsed);
        if (allPresent) {
          return parsed;
        }
      } catch (e) {
        console.warn('Failed to parse saved node positions:', e);
      }
    }

    // Fallback to defaults
    return nodesData.reduce((acc, node) => {
      acc[node.id] = node.defaultPos;
      return acc;
    }, {});
  });

  // Initialize current positions ref
  useEffect(() => {
    currentPositionsRef.current = positions;
  }, [positions]);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [activeDragId, setActiveDragId] = useState(null);

  // Refs for drag tracking
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    nodeStartX: 0,
    nodeStartY: 0,
    nodeId: null,
  });

  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const persistenceTimeoutRef = useRef(null);

  const currentPositionsRef = useRef(positions);

  // Persist positions to localStorage
  const persistPositions = useCallback((newPositions) => {
    try {
      localStorage.setItem('pearl-node-positions', JSON.stringify(newPositions));
    } catch (e) {
      console.warn('Failed to save node positions to localStorage:', e);
    }
  }, []);

  // Reset positions to defaults
  const resetPositions = useCallback(() => {
    const defaultPos = nodesData.reduce((acc, node) => {
      acc[node.id] = node.defaultPos;
      return acc;
    }, {});
    setPositions(defaultPos);

    // Clear localStorage
    try {
      localStorage.removeItem('pearl-node-positions');
    } catch (e) {
      console.warn('Failed to clear node positions from localStorage:', e);
    }
  }, [nodesData]);

  // Handle pointer down (start drag)
  const handlePointerDown = useCallback((e, nodeId) => {
    if (e.button && e.button !== 0) return; // Only primary mouse button

    e.preventDefault();
    setIsDragging(true);
    setActiveDragId(nodeId);

    const containerRect = containerRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };

    dragRef.current = {
      startX: e.clientX || (e.touches && e.touches[0]?.clientX) || 0,
      startY: e.clientY || (e.touches && e.touches[0]?.clientY) || 0,
      nodeStartX: positions[nodeId].x,
      nodeStartY: positions[nodeId].y,
      nodeId,
      containerRect,
    };

    // Add pointer move/up listeners
    const handlePointerMove = (moveEvent) => {
      if (!dragRef.current || !dragRef.current.nodeId) return;

      const currentX = moveEvent.clientX || (moveEvent.touches && moveEvent.touches[0]?.clientX) || 0;
      const currentY = moveEvent.clientY || (moveEvent.touches && moveEvent.touches[0]?.clientY) || 0;

      const deltaX = currentX - dragRef.current.startX;
      const deltaY = currentY - dragRef.current.startY;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const newX = dragRef.current.nodeStartX + deltaX;
        const newY = dragRef.current.nodeStartY + deltaY;

        // Constrain to bounding box (simplified: ~150px from center)
        const maxDistance = 250;
        const distance = Math.sqrt(newX * newX + newY * newY);
        let constrainedX = newX;
        let constrainedY = newY;

        if (distance > maxDistance) {
          const ratio = maxDistance / distance;
          constrainedX = newX * ratio;
          constrainedY = newY * ratio;
        }

        const newPositions = {
          ...positions,
          [dragRef.current.nodeId]: { x: constrainedX, y: constrainedY },
        };
        currentPositionsRef.current = newPositions;
        setPositions(newPositions);
      });
    };

    const handlePointerUp = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      setIsDragging(false);
      setActiveDragId(null);

      // Persist the final position
      persistPositions(positions);

      // Remove listeners
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('touchmove', handlePointerMove);
      document.removeEventListener('touchend', handlePointerUp);

      dragRef.current = { startX: 0, startY: 0, nodeStartX: 0, nodeStartY: 0, nodeId: null };
    };

    document.addEventListener('pointermove', handlePointerMove, { passive: false });
    document.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('touchmove', handlePointerMove, { passive: false });
    document.addEventListener('touchend', handlePointerUp);
  }, [positions, persistPositions]);

  // Handle keyboard navigation (arrow keys)
  const handleKeyDown = useCallback(
    (e, nodeId) => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

      e.preventDefault();
      const NUDGE_DISTANCE = 8; // pixels per arrow press

      const currentPos = positions[nodeId];
      let newX = currentPos.x;
      let newY = currentPos.y;

      switch (e.key) {
        case 'ArrowUp':
          newY -= NUDGE_DISTANCE;
          break;
        case 'ArrowDown':
          newY += NUDGE_DISTANCE;
          break;
        case 'ArrowLeft':
          newX -= NUDGE_DISTANCE;
          break;
        case 'ArrowRight':
          newX += NUDGE_DISTANCE;
          break;
        default:
          return;
      }

      // Constrain to bounding box
      const maxDistance = 250;
      const distance = Math.sqrt(newX * newX + newY * newY);
      if (distance > maxDistance) {
        const ratio = maxDistance / distance;
        newX = newX * ratio;
        newY = newY * ratio;
      }

      const newPositions = {
        ...positions,
        [nodeId]: { x: newX, y: newY },
      };

      setPositions(newPositions);
      persistPositions(newPositions);
    },
    [positions, persistPositions]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (persistenceTimeoutRef.current) {
        clearTimeout(persistenceTimeoutRef.current);
      }
    };
  }, []);

  return {
    positions,
    setPositions,
    isDragging,
    activeDragId,
    resetPositions,
    handlePointerDown,
    handleKeyDown,
    containerRef,
  };
};

export default useDraggableNodes;
