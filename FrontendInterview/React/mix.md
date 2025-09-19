What is the difference between state and props?

// both state and props are used to manage and pass data — but they serve different purposes

📙 Definition of state

1. state is a local, mutable data managed within a component.
2. It is used to store information that can change over time, usually due to user interaction.
3. Updating state causes the component to re-render.

Example:
function Counter() {
const [count, setCount] = useState(0);
return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

📘 Definition of props

1. props (short for properties) are read-only inputs passed from a parent component to a child component.
2. They are used to customize or configure a component.
3. A component cannot change its own props.
   Example:
   function Greeting(props) {
   return <h1>Hello, {props.name}!</h1>;
   }
   // Usage:
   <Greeting name="Alice" />



  #  👉 What is code splitting in JavaScript/Webpack, and how can we use it in React?

📌 Answer:
Code splitting is the process of splitting JavaScript bundles into smaller chunks so the browser loads only the required code instead of everything at once. This makes apps load faster and improves performance.

⚡ In Webpack:
-Dynamic Imports (import()) → Load modules only when needed.
-SplitChunksPlugin → Extract common dependencies.
-Multiple Entry Points → Create separate bundles.

⚛️ In React:
React provides React.lazy + Suspense for component-level code splitting.
Example:

const Profile = React.lazy(() => import('./Profile'));

<Suspense fallback={<div>Loading...</div>}>
 <Profile />
</Suspense>
