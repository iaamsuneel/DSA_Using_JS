                             Redux
Redux is a state management library for JavaScript applications, including React.
It provides a centralized store to hold application state,
actions to update that state, and reducers to handle those updates.
• Store: Holds the entire application state as a single JavaScript object tree.
• Actions: Plain JavaScript objects describing the intention to change the state.
• Reducers: Pure functions that accept the current state and an action,
returning the new state.
Pros of Redux:
• Predictable State Management: Easier to reason about application state and track changes.
• Improved Testability: Easier to test components in isolation due to centralized state.
• Scalability: Well-suited for large and complex applications.
Cons of Redux:
• Boilerplate Code: Requires setting up stores, reducers, actions, and middleware.
• Complexity: Learning curve for managing state with reducers and actions.

1.  What are the main components of Redux?
    Answer:
    Store: Holds the state of the application.
    Actions: Plain JavaScript objects that describe what should happen.
    Reducers: Pure functions that update the state based on actions.
    Middleware: Enhances the store’s abilities (e.g., for handling async logic).
2.  What is middleware in Redux? Can you name some commonly used middleware?
    Answer:
    Middleware in Redux is a function that intercepts actions before they reach the reducer, allowing you to add custom logic.
    Common middleware includes:
    Redux Thunk: For handling async actions.
    Redux Saga: For managing complex side effects.
    Logger Middleware: For logging dispatched actions and state changes.

3.  What is the difference between Redux and Context API?
    Answer:
    Redux is a robust state management library with middleware, dev tools,
    and predictable updates, suited for large-scale applications.
    Context API is built into React for sharing state between components
    but lacks middleware and tooling, making it better for simple state sharing.

                                    // Context API Flow

Create Context: Define the context object.
Provider: Use the Provider to wrap the components
that need access to the shared state and pass the state through the value prop.
Consumer: Use the useContext hook or the Context.
Consumer to access the shared data inside any component.

// Use Cases of Context API
Global theme management (dark mode/light mode).
Authentication and user data.
Managing language or localization settings.
Sharing state between deeply nested components.
