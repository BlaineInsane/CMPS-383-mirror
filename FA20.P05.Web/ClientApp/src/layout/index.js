import React from 'react';

const Layout = (props) =>
<div>
<nav>
    <ul>
        <li>
            <a href ='#'>Home</a>
        </li>
        <li>
            <a href = '#'>Admin Portal</a>
        </li>
        <li>
            <a href = '#'>View Public Data</a>
        </li>
    </ul>
</nav>

  
    {props.children}
  </div>;


export {Layout};