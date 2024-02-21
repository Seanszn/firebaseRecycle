import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-name">Recycle App</a>
      <ul>
        <li>
          <a href="/createAccount">Login</a>
        </li>
        <li>
          <a href="/Home">About</a>
        </li>
      </ul>
    </nav>
  );
}