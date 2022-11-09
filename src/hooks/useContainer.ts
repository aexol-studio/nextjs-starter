import { useState } from 'react';
import { createContainer } from 'unstated-next';

export type ContainerData = {
    counter: number;
};

const useCounter = createContainer((initialState: ContainerData = { counter: 0 }) => {
    const [count, setCount] = useState(initialState.counter);
    const decrement = () => setCount(count - 1);
    const increment = () => setCount(count + 1);

    return { count, decrement, increment };
});

export const UseCounterProvider = useCounter.Provider;
export const useCounterState = useCounter.useContainer;
