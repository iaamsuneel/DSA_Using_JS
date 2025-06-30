What is useState?
     1. useState is a Hook in React that allows you to create and manage state in 
        functional components.
     2. useState gives you a variable to store data + a function to update it.
        When the data  changes, React re-renders your component.

    const [state, setState] = useState(initialValue);
          state: The current state value.
          setState: Function to update the state.
          initialValue: The initial state 
                        (can be any type: string, number, array, object, etc.).