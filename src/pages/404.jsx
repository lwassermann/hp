import React from 'react';
import { Link } from 'components/Router';

export default () => (
  <div>
    <h1>404 - Oh no! We couldn&apos;t find that page :(</h1>
    <p>
      Probably because the index is the only page that exists right now.
      <br />
      <Link to="/">Home</Link>
    </p>
  </div>
);
