1. # Virtual DOM
   React maintains a lightweight copy of the real DOM (Virtual DOM).
   When state/props change, React creates a new Virtual DOM tree.
   React compares the new tree with the previous one (diffing algorithm).
   Only the changed nodes are updated in the real DOM, making updates efficient.

2. # Reconciliation Steps
1. Trigger: A component’s state or props change.
2. Render Phase: React calls the component function to produce a new Virtual DOM.
3. Diffing: React compares old vs. new Virtual DOM trees.
4. If element type is the same → update attributes/props.
5. If type changes → destroy old and create new.
6. lists → keys help React track moved/updated elements.
Commit Phase: React applies the minimal set of changes to the real DOM.

3. # Fiber and Concurrent Rendering
1. The older reconciliation was synchronous (stack-based), which blocked rendering on heavy updates.
2. Fiber is React’s reimplementation of the reconciliation algorithm using a linked list of fibers.
3. Each component has a fiber node with information about work, state, and effects.
4. Fiber enables React to:
# Break rendering work into small units of work.
# Pause, prioritize, or abort work when higher-priority tasks (like user input) arrive.
# Support concurrent rendering, improving responsiveness for large apps.

# Compact Example:
1. You type in a text box while a large list re-renders.
2. With Fiber, React can pause list rendering, update the input immediately, then resume rendering the list.
# Recommendation: link Virtual DOM → Reconciliation → Fiber to see the full React rendering pipeline
 