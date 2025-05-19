1. What is useMemo?
   useMemo is a React Hook that memoizes the result of an expensive computation, preventing unnecessary recalculations unless the dependencies change.

Syntax :
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
