import { getAllPosts } from '@/actions/postActions'
import PostForm from '@/components/PostForm'
import PostList from '@/components/PostList'
import Feature from '@/components/Feature'
import React from 'react'
import Pagination from '@/components/Pagination'

const Home = async ({params, searchParams}) => {
  const { posts, totalPage } = await getAllPosts(searchParams);
  
  return (
    <div>
      <PostForm />

      <Feature />

      { posts && <PostList posts={posts} />}

      { totalPage && <Pagination totalPage={totalPage}/>}

    </div>
  )
}

export default Home