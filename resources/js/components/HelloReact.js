import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import '../../../i18n';

export default function HelloReact() {
    return (
        <div className='text-center py-6 bg-amber-50 h-screen'>
            <h2 className='text-3xl font-bold underline mb-4'>Our Laravel React App</h2>
            <Counter />
        </div>
    );
}

if (document.getElementById('react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('react'));
}
