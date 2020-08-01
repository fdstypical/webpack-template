import Post from '@/Post';
import stoic from './assets/stoiс.jpg';
import './style.css';

const post = new Post('Hello webpack', stoic);
post.addImg();

console.log('Post stringify:', post.toString());