import React from 'react';
import { render } from 'react-dom';
import Post from '@/Post';
import '@/script.ts';

import stoic from './assets/stoiс.jpg';

import './style.css';
import './style.scss'

const post = new Post('Hello webpack', stoic);
post.addImg(document);

const App = () => (
  <div className="react-app">
    Hello World! Hello React and Webpack!
  </div>
)

render(<App />, document.getElementById('root'));

console.log('Post stringify:', post.toString());