# 1. What is useMemo?
   useMemo is a React Hook that memoizes the result of an expensive computation, preventing unnecessary recalculations unless the dependencies change.

Syntax :
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


# Why Use React.memo?
Prevents Unnecessary Re-Renders
Components re-render only if their props change (shallow comparison by default).

Optimizes Expensive Components
Ideal for complex components with heavy rendering logic.

Breaks Re-Render Chains
Stops re-render propagation in child components.