import React from 'react';
import ReactDOM from 'react-dom';

export default function HelloReact() {
    return (
        <h1 class="text-3xl font-bold underline">Hello React!</h1>
    );
}

if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}
