import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useDraggableNodes from '../hooks/useDraggableNodes';
import '../styles/interactive-graph.css';

/**
 * InteractiveGraph Component
 *
 * An interactive, animated graph displaying a central pearl with four connected nodes.
 * Features:
 * - Central pearl with gentle float animation
 * - 4 nodes (Diagnostician, Prescriber, DrawBack Tester, NLP) positioned around the pearl
 * - SVG connector paths animated on scroll with GSAP + ScrollTrigger
 * - Draggable nodes with live SVG updates
 * - Keyboard navigation (arrow keys) for accessibility
 * - localStorage persistence of node positions
 * - Reset button to restore default layout
 * - Respects prefers-reduced-motion
 * - Loading pulse animation (when isLoading={true})
 *
 * USAGE:
 * ```jsx
 * import InteractiveGraph from './components/InteractiveGraph';
 * import { usePearlChat } from '../hooks/usePearlChat';
 *
 * // In your Hero component:
 * const { isLoading } = usePearlChat();
 * <InteractiveGraph isLoading={isLoading} />
 * ```
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.isLoading=false] - Trigger thinking pulse animation on pearl
 * @param {Array} [props.nodes] - Optional custom node array. Shape: { id, label, src, defaultPos: {x,y} }
 * @returns {JSX.Element}
 */
const InteractiveGraph = ({ isLoading = false, nodes: customNodes = null }) => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Default nodes using provided asset paths
  const defaultNodes = [
    {
      id: 'diagnostician',
      label: 'Diagnostician',
      src: '/src/assets/diagnose.png',
      defaultPos: { x: -180, y: -100 },
    },
    {
      id: 'prescriber',
      label: 'Prescriber',
      src: '/src/assets/prescribe.png',
      defaultPos: { x: 180, y: -100 },
    },
    {
      id: 'drawback',
      label: 'DrawBack Tester',
      src: '/src/assets/drawback tester.png',
      defaultPos: { x: -150, y: 140 },
    },
    {
      id: 'nlp',
      label: 'NLP',
      src: '/src/assets/NLP.png',
      defaultPos: { x: 150, y: 140 },
    },
  ];

  const nodesData = customNodes || defaultNodes;

  // Container references
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const pearlRef = useRef(null);
  const pathRefs = useRef({});
  const containerDimsRef = useRef({ width: 400, height: 500 });

  // GSAP timeline and ScrollTrigger references for cleanup
  const tlRef = useRef(null);
  const scrollTriggersRef = useRef([]);

  // State for node positions and interaction
  const [selectedNode, setSelectedNode] = useState(null);
  const [containerDims, setContainerDims] = useState({ width: 400, height: 500 });

  // Use draggable nodes hook
  const {
    positions,
    isDragging,
    activeDragId,
    resetPositions,
    handlePointerDown,
    handleKeyDown,
  } = useDraggableNodes(nodesData);

  // Update container dimensions on mount and resize
  useEffect(() => {
    const updateDims = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth || 400;
        const height = containerRef.current.offsetHeight || 500;
        containerDimsRef.current = { width, height };
        setContainerDims({ width, height });
      }
    };

    updateDims();
    const resizeObserver = new ResizeObserver(updateDims);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Pearl float animation + loading pulse
  useEffect(() => {
    if (!pearlRef.current) return;

    // Kill any existing timeline for this pearl
    if (tlRef.current) {
      tlRef.current.kill();
    }

    tlRef.current = gsap.timeline({ repeat: -1 });

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
      // Gentle float animation
      tlRef.current.to(
        pearlRef.current,
        {
          y: -20,
          duration: 5,
          ease: 'sine.inOut',
        },
        0
      );

      // Subtle rotation
      tlRef.current.to(
        pearlRef.current,
        {
          rotation: 360,
          duration: 12,
          ease: 'none',
        },
        0
      );

      // Loading pulse: brief scale + glow when isLoading
      if (isLoading) {
        tlRef.current.to(
          pearlRef.current,
          {
            scale: 1.08,
            boxShadow: '0 0 30px var(--accent-iridescent)',
            duration: 0.6,
            ease: 'power2.inOut',
          },
          0.5
        );
        tlRef.current.to(
          pearlRef.current,
          {
            scale: 1,
            boxShadow: 'var(--shadow-pearl)',
            duration: 0.6,
            ease: 'power2.inOut',
          },
          1.1
        );
      }
    }

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, [isLoading]);

  // SVG connector animations on scroll with ScrollTrigger
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animate each connector path
    nodesData.forEach((node) => {
      const pathEl = pathRefs.current[node.id];
      if (!pathEl) return;

      // Get path length for stroke-dash animation
      const pathLength = pathEl.getTotalLength();
      pathEl.style.strokeDasharray = pathLength;
      pathEl.style.strokeDashoffset = pathLength;

      if (!prefersReduced) {
        // Create scroll trigger for this path
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 20%',
            onEnter: () => {
              gsap.to(pathEl, {
                strokeDashoffset: 0,
                duration: 1.2,
                ease: 'power2.inOut',
              });
            },
          },
        });

        scrollTriggersRef.current.push(tl.scrollTrigger);
      } else {
        // If prefers-reduced-motion, just show the paths
        pathEl.style.strokeDashoffset = 0;
      }
    });

    return () => {
      // Kill all scroll triggers on unmount
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger) {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];
    };
  }, [nodesData]);

  // Update SVG paths when node positions change (during drag or keyboard)
  useEffect(() => {
    if (!svgRef.current) return;

    const centerX = containerDimsRef.current.width / 2;
    const centerY = containerDimsRef.current.height / 2;

    // Draw paths from pearl center to each node
    nodesData.forEach((node) => {
      const pathEl = pathRefs.current[node.id];
      if (!pathEl) return;

      const nodePos = positions[node.id] || node.defaultPos;
      const nodeX = centerX + nodePos.x;
      const nodeY = centerY + nodePos.y;

      const d = `M ${centerX} ${centerY} L ${nodeX} ${nodeY}`;
      pathEl.setAttribute('d', d);
    });
  }, [positions, nodesData]);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Calculate node position for rendering
  const getNodeRenderPos = (nodeId) => {
    const centerX = containerDims.width / 2;
    const centerY = containerDims.height / 2;
    const nodePos = positions[nodeId] || nodesData.find(n => n.id === nodeId)?.defaultPos || { x: 0, y: 0 };
    return {
      x: centerX + nodePos.x,
      y: centerY + nodePos.y,
    };
  };

  return (
    <div
      ref={containerRef}
      className="interactive-graph-container"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* SVG for connector lines */}
      <svg
        ref={svgRef}
        className="interactive-graph-svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {nodesData.map((node) => (
          <path
            key={`path-${node.id}`}
            ref={(el) => {
              if (el) pathRefs.current[node.id] = el;
            }}
            className="interactive-graph-connector"
            stroke="var(--line-soft)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))',
            }}
          />
        ))}
      </svg>

      {/* Central Pearl */}
      <div
        ref={pearlRef}
        className="interactive-graph-pearl"
        style={{
          position: 'absolute',
          zIndex: 10,
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-pearl)',
          willChange: 'transform',
        }}
      >
        <img
          src="/src/assets/pearl.png"
          alt="Pearl"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Node Elements */}
      {nodesData.map((node) => {
        const nodePos = getNodeRenderPos(node.id);
        const isActive = activeDragId === node.id;

        return (
          <div
            key={`node-${node.id}`}
            className="interactive-graph-node-wrapper"
            style={{
              position: 'absolute',
              left: `${nodePos.x}px`,
              top: `${nodePos.y}px`,
              transform: 'translate3d(-50%, -50%, 0)',
              cursor: isDragging && isActive ? 'grabbing' : 'grab',
            }}
            onPointerDown={(e) => handlePointerDown(e, node.id)}
            onKeyDown={(e) => {
              handleKeyDown(e, node.id);
              setSelectedNode(node.id);
            }}
            tabIndex={0}
            role="button"
            aria-label={`${node.label} node, currently at position ${nodePos.x.toFixed(0)}, ${nodePos.y.toFixed(0)}. Drag to move or use arrow keys.`}
          >
            {/* Node Badge with Pearl Ring */}
            <div
              className={`interactive-graph-node ${isActive ? 'active' : ''}`}
              style={{
                position: 'relative',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'var(--pearl-surface)',
                border: '2px solid var(--accent-iridescent-2)',
                boxShadow:
                  isActive || selectedNode === node.id
                    ? '0 0 20px var(--accent-iridescent), var(--shadow-pearl)'
                    : 'var(--shadow-pearl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                transform: isActive ? 'scale(1.06)' : 'scale(1)',
                transition: prefersReduced ? 'none' : 'transform 0.15s ease-out, box-shadow 0.15s ease-out',
                willChange: isDragging ? 'transform' : 'auto',
              }}
            >
              <img
                src={node.src}
                alt={node.label}
                style={{
                  width: '85%',
                  height: '85%',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Node Label */}
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                fontSize: '12px',
                fontWeight: '500',
                color: 'var(--pearl-muted)',
                pointerEvents: 'none',
              }}
            >
              {node.label}
            </div>
          </div>
        );
      })}

      {/* Reset Button */}
      <button
        className="interactive-graph-reset-btn"
        onClick={() => {
          resetPositions();
          setSelectedNode(null);
        }}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          zIndex: 15,
          padding: '8px 16px',
          fontSize: '12px',
          fontWeight: '600',
          background: 'var(--accent-iridescent)',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-pearl)',
          transition: prefersReduced ? 'none' : 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          if (!prefersReduced) {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 16px rgba(154,179,255,0.3)';
          }
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'var(--shadow-pearl)';
        }}
        aria-label="Reset nodes to default positions"
      >
        Reset Nodes
      </button>
    </div>
  );
};

export default InteractiveGraph;
