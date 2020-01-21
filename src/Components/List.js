import { Component } from 'react';

/* LISTS AND KEYS */

function List(props) {
  const { items } = props;
  return (
    <ul>
      {items.map(item => <li key={item.toString()}>{item}</li>)}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5, 7];

export default List;