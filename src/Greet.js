import React from 'react';
import Card from './Card';

function Greet({whom}) { // props is short for properties. This differentiates it from HTML attributes (it's an object) (correct way is just {whom} to go ahead and destructure it)
    // React functions lways return a single value written as HTML
    const greetText = `Hello, ${whom}`;
    return (
    <div>
        <Card text={greetText} />
     </div>
    );
}

export default Greet;