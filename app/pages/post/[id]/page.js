'use client'
import React from 'react'
import { getOnePost } from '@/actions/postActions'
import { PostCard } from '@/components/PostCard/PostCard'

// FIXME неподдерживаемый серверный компонент, пытаюсь сделать динамический роутинг  
const PostDetails = async ({params:{ id }}) => {
    
    const post = await getOnePost(id);
  return (
    <div>
        <PostCard post={post} />
    </div>
  )
}

export default PostDetails