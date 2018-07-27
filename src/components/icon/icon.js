import React from 'react';

const Icon = (props) => {
    let I = require('react-icons/lib/'+props.set+'/'+props.symbol);
    return (
        <span>
            <I/>
        </span>
    );
}
export default Icon;