import { useState, createContext, ReactElement, useEffect } from 'react';

const initialState: any = {
  counter: 0,
};

export const AppContext = createContext(initialState);

type AppProviderProps = {
  children: ReactElement;
  port: chrome.runtime.Port;
};

export function AppProvider({
  children,
  port,
}: AppProviderProps): JSX.Element {
  const [counter, setCounter] = useState<number>(initialState.counter);

  useEffect(() => {   
    port.onMessage.addListener(msg => {
      if (msg.method === 'counterUpdate') {
        setCounter(msg.counter)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function incrementCounter ()  {
    port.postMessage({
      method: 'incrementCounter'
    })
  }

  function decrementCounter ()  {
    port.postMessage({
      method: 'decrementCounter'
    })
  }

  return (
    <AppContext.Provider
      value={{
        counter,
        incrementCounter,
        decrementCounter
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
