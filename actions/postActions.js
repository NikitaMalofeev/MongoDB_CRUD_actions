"use server";
import connectDB from "@/database/mongodb";
import Post from "@/models/postModels";
import { revalidatePath } from "next/cache";

connectDB();

export async function getAllPosts(searchParams) {
  const search = searchParams.search || "";
  const sort = searchParams.sort || 'createdAt';

  // устанавливаю лимит на отображение карточек на странице (5)
  const limit = searchParams.limit * 1 || 3;
  const page = searchParams.page * 1 || 1;
  const skip = searchParams.skip * 1 || limit * (page - 1);

  try {
    const posts = await Post.find({ title: { $regex: search } })
    .sort(sort).limit(limit).skip(skip)

    // if(posts) throw new Error('Posts Error!')

    const count = await Post.find({ title: { $regex: search } }).count()

    const totalPage = Math.ceil(count / limit);

    const newData = posts.map(post => ({
      ...post._doc,
      _id: post._doc._id.toString(),
    }));
    console.log(posts);

    return { posts: newData, count, totalPage };
  } catch (error) {
    throw new Error(error.message || "Failed to fetch posts!");
  }
}

export async function getOnePost(postId) {
  try {
    const post = await Post.findById(postId);

    return { ...post._doc, _id: post._doc._id.toString() };
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

export async function deletePost(postId) {
  try {
    const post = await Post.findByIdAndDelete(postId, { new: true });

    //функция edit для карточки
    revalidatePath("/");
    return { ...post._doc, _id: post._id.toString() };
  } catch (error) {
    throw new Error(error.message || "Failed to delete post!");
  }
}
