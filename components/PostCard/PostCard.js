'use client'
import React, { useTransition, useEffect } from "react";
import { useMyContext } from "@/context/Provider";
import Image from "next/image";
import Link from "next/link";
import style from './index.module.scss'

const PostCard = ({post, handleDelete}) => {
  const { setEditPost } = useMyContext();
  // useTrans для удаления файлов из бд
  let [isPending, startTransition] = useTransition()
  
  return (
    <div className={style.card__wrapper}>
      <Link href={`/pages/post/${post._id}`}>
        <Image src={post?.image} alt='image' width={200} height={200} priority/>
        <h3 className={style.card__title}>{post?.title}</h3>
      </Link>

      <div style={{display: 'flex', gap: 20}}>
        <button className={style.card__button} onClick={() => setEditPost(post)}>Edit</button>
        <button className={style.card__button} onClick={() => startTransition(() => handleDelete(post._id))}
        disabled={isPending}>
          { isPending ? 'Loading...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
