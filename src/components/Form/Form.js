import { Button, Paper, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import useStyles from './form.styles.js'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts.js'

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const post = useSelector(state => currentId ? state.posts.find((post) => post._id === currentId) : null)
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        clear()
    }

    useEffect(() => {
        if (post) setPostData(post)
        return () => {

        }
    }, [post])

    const clear = () => {
        setCurrentId(null)
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event) => setPostData({ ...postData, creator: event.target.value })}></TextField>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })}></TextField>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value })}></TextField>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value.split(',') })}></TextField>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    )
}

export default Form