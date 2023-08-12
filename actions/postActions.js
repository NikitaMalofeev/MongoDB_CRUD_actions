"use server";
import connectDB from "@/database/mongodb";
import Post from "@/models/postModels";
import { revalidatePath } from "next/cache";

connectDB();

export async function getAllPosts(data) {
  try {
    const posts = await Post.find();

    const newData = posts.map((post) => ({
      ...post._doc,
      _id: post._doc._id.toString(),
    }));
    console.log(posts);

    return { posts: newData };
  } catch (error) {
    throw new Error(error.message || "Failed to fetch posts!");
  }
}

export async function createPost(data) {
  try {
    const newPost = new Post(data);
    await newPost.save();

    //функция edit для карточки
    revalidatePath("/");

    console.log({ ...newPost._doc, _id: newPost._id.toString() });
    console.log("новый фаил добавлен");
    return { ...newPost._doc, _id: newPost._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to create post!");
  }
}

// обновление данных с помощью id
export async function updatePost({ title, image, id }) {
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, image },
      { new: true }
    );
    revalidatePath("/");
    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to update post!");
  }
}

export async function deletePost(postId){
    try {
     const post = await Post.findByIdAndDelete(postId, {new: true})
 
     //функция edit для карточки
     revalidatePath("/")
     return {...post._doc, _id: post._id.toString()};
    } catch (error) {
        throw new Error(error.message || 'Failed to delete post!')
    }
 }
