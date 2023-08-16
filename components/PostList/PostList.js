"use client"
import { experimental_useOptimistic as useOptimistic, useRef } from 'react'
import PostCard from '../PostCard/PostCard'

const PostList = ({posts}) => {
  // использую useOptimictic для удаления данных из бд
  const [optimisticPosts, addOptimisticPosts] = useOptimistic(
    { posts },
    (state, newPosts) => ({...state,  posts: newPosts})
  );

  async function handleDelete(postId){
    if(window.confirm("Do you want to delete this?")){
      const newPosts = posts.filter(post => post._id !== postId);
      addOptimisticPosts(optimisticPosts.posts = newPosts)
      
    }
  }

  return (
    <div style={{display: 'flex', gap: 20, flexWrap: 'wrap', paddingLeft: '50px'}}>
        { }
        {
            optimisticPosts.posts.map(post => (
                <PostCard key={post._id} post={post} handleDelete={handleDelete}/>
            ))
        }
    </div>
  )
}

export default PostList