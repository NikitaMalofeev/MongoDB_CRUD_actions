"use client";
import { createPost, updatePost } from "@/actions/postActions";
import React, { useRef } from "react";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { useMyContext } from "@/context/Provider";
import style from './index.module.scss'

const PostForm = () => {
  const formRef = useRef();
  const { editPost, setEditPost } = useMyContext();

  async function handleAction(formData) {
    const title = formData.get("title");
    const image = formData.get("image");

    if (editPost) {
      await updatePost({ title, image, id: editPost._id });
    } else {
      await createPost({ title, image });
    }

    setEditPost();

    formRef.current.reset();
  }

  return (
    <form
      action={handleAction}
      ref={formRef}
      style={{ display: "flex", gap: 20, margin: "30px 0" }}
      className={style.form}
    >
      <input
        className={style.form__input}
        type="text"
        name="title"
        placeholder="title"
        required
        defaultValue={editPost?.title}
      />

      <input
        className={style.form__input}
        type="text"
        name="image"
        placeholder="url"
        required
        defaultValue={editPost?.image}
      />

      {editPost ? (
        <>
          <ButtonSubmit value="Update" />
          <button className={style.button}type="button" onClick={() => setEditPost()}>
            Cancel
          </button>
        </>
      ) : (
        <ButtonSubmit value="Create" />
      )}
    </form>
  );
};

export default PostForm;
