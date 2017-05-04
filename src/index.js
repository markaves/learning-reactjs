import React from 'react';
import ReactDOM from 'react-dom';

import { data } from './data';

const Booklist = (props) => (
	<ul>
		{props.books.map(book => {
			return (
			<li key={book.id}>
				{book.title} -- {book.price}
			</li>
			);
		})}
	</ul>
	);

ReactDOM.render(
  <Booklist books={data.books} />,
  document.getElementById('root')
);
