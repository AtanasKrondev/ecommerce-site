import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductCard from './ProductList';
import data from './data'

ReactDOM.render(<ProductCard product={data[0]} counter={0} />, document.getElementById('root'));
