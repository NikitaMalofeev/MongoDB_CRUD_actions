'use client'
import React, { useTransition } from "react";
import { useMyContext } from "@/context/Provider";
import { deletePost } from "@/actions/postActions";
import Image from "next/image";
import Link from "next/link";


const PostCard = ({post, handleDelete}) => {
  const { setEditPost } = useMyContext();
  // useTrans для удаления файлов из бд
  let [isPending, startTransition] = useTransition()

  
  
  return (
    <div>
      <Link href="/">
        <Image src={post?.image} alt='image' width={200} height={200} priority/>
        <h3>{post?.title}</h3>
      </Link>

      <div style={{display: 'flex', gap: 20}}>
        <button onClick={() => setEditPost(post)}>Edit</button>
        <button onClick={() => startTransition(() => handleDelete(post._id))}
        disabled={isPending}>
          { isPending ? 'Loading...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
