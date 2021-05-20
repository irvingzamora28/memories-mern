import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './post.styles.js';

const Post = () => {
	const classes = useStyles()
    const posts = useSelector(state => state.posts)
    console.log(posts);
    return(
        <h1>Post</h1>
    )
}

export default Post