# Layout Guidelines

This document provides guidelines for creating and maintaining layouts in the Pearl project. Adhering to these patterns will help ensure consistency and prevent common layout issues.

## Core Principles

1.  **Component Co-location:** Each React component should reside in its own directory, along with its specific CSS file.
    -   Component: `src/components/ComponentName/ComponentName.jsx`
    -   Styles: `src/components/ComponentName/ComponentName.css`

2.  **Grid for Macro Layout:** Use CSS Grid for page-level, two-column layouts. This provides a robust and predictable structure. Use `grid-template-areas` to define the layout semantically.

3.  **Flexbox for Micro Layout:** Use Flexbox for component-internal layouts, such as aligning items within a card or a header.

4.  **Defensive CSS:** Child elements of a grid or flex container that might contain long, unbroken text should have `min-width: 0` to prevent them from overflowing their container.

## Correct Layout Pattern Example

This example demonstrates the correct way to structure a two-column layout.

```css
/* in index.css or a global layout file */
.chat-layout-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  grid-template-areas: "chat sidebar";
  gap: 28px;
  align-items: start;
}

.chat-layout-grid .chat-card {
  grid-area: chat;
  min-width: 0; /* Prevents overflow */
}

.chat-layout-grid .chat-sidebar {
  grid-area: sidebar;
  min-width: 0; /* Prevents overflow */
}
```

```jsx
// in your component
<div className="chat-layout-grid">
  <ChatCard />
  <ChatSidebar />
</div>
```

## Incorrect Layout Pattern (Anti-Pattern)

This example demonstrates a common anti-pattern that caused layout bugs in this project. Using `display: flex` with `flex-wrap: wrap` for a main page layout can lead to unpredictable wrapping, especially when the content of one of the children is too wide.

**The Bug:** The `.chat-sidebar` would wrap below the `.chat-card` on certain screen sizes because the chat card's content would not shrink correctly.

**Incorrect Code (What to Avoid):**

```css
/* incorrect - causes wrapping issues */
.page-container {
  display: flex;
  flex-wrap: wrap; /* This can cause unpredictable wrapping */
  gap: 28px;
}

.chat-card {
  flex: 1 1 600px;
  /* Missing min-width: 0, which allows content to overflow */
}

.chat-sidebar {
  flex: 0 0 360px;
}
```

## CSS Rules

-   **`box-sizing: border-box`**: Apply this to all elements to ensure padding and borders are included in the element's total width and height.
-   **`min-width: 0` on Grid/Flex Children**: As mentioned, this is crucial for preventing overflow issues with long content.
-   **Component-specific CSS**: Each component should import its own CSS file. Avoid global selectors in component CSS files. Use classes specific to the component.
-   **Avoid `width: 100%` with large padding**: If an element is a child of a grid or flex container, setting `width: 100%` and then adding significant padding can cause it to overflow. Use `box-sizing: border-box` to mitigate this, but it's often better to let the grid/flex container manage the width.
