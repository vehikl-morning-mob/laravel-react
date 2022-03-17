import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className='space-x-4'>
            <button
                className='py-2 px-4 border rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
                onClick={handleDecrement}
            >
                Decrease
            </button>
            <span>{count}</span>
            <button
                className='py-2 px-4 border rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
                onClick={handleIncrement}
            >
                Increase
            </button>
        </div>
    );
}
