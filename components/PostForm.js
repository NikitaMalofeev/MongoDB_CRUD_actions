'use client'
import { createPost } from '@/actions/postActions'
import React, { useRef } from 'react'

const PostForm = () => {
    const formRef = useRef()

    async function handleAction(formData) {
        
        const title = formData.get('title')
        const image = formData.get('image')

        await createPost({title, image})

        formRef.current.reset();
    }


  return (
    <form action={handleAction} ref={formRef} style={{display: 'flex', gap: 20, margin: '30px 0'}}>
        <input type="text" name="title" placeholder="title" required />

        <input type="text" name="image" placeholder="url" required />

        <button type="submit">Create</button>
    </form>
  )
}

export default PostForm