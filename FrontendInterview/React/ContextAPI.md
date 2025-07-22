The Context API in React is a powerful way to share data between components without having to pass props manually at every level.

1. Create the Context
   import React, { createContext } from 'react';
   // Create a new context
   export const MyContext = createContext();

2. Create a Provider Component
   The Provider wraps around parts of your app and passes the context value.

import React, { useState } from 'react';
import { MyContext } from './MyContext';

const MyProvider = ({ children }) => {
const [value, setValue] = useState("Hello from Context!");

return (
<MyContext.Provider value={{ value, setValue }}>
{children}
</MyContext.Provider>
);
};

export default MyProvider;

3. Wrap Your App with the Provider
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   import MyProvider from './MyProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<MyProvider>
<App />
</MyProvider>
);

4. Consume Context in Any Component
   You can access the context in two main ways:

✅ Using useContext (for functional components)

import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const ChildComponent = () => {
const { value, setValue } = useContext(MyContext);

return (
<div>
<h1>{value}</h1>
<button onClick={() => setValue("New value!")}>Change Value</button>
</div>
);
};

export default ChildComponent;

Summary

1. createContext() – creates the context object.
2. Provider – used to wrap components and provide a value.
3. useContext(Context) – hook to access the context value.
