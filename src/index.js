import Post from '@/Post';
import stoic from './assets/stoiс.jpg';
import './style.css';
import './style.scss'

const post = new Post('Hello webpack', stoic);
post.addImg();

console.log('Post stringify:', post.toString());