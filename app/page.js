import { getAllPosts } from '@/actions/postActions'
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import React from 'react'

const Home = async () => {
  const { posts } = await getAllPosts();
  
  return (
    <div>
      <PostForm />

      { posts && <PostList posts={posts} />}
    </div>
  )
}

export default Home