import React from 'react';

import './Category.css';

const category = (props) => (
    <button className="Category">
        {props.category}
    </button>
);

export default category;