"use server"
import connectDB from "@/database/mongodb"
import Post from "@/models/postModels"

connectDB();

export async function createPost(data){
   try {
    const newPost = new Post(data);
    await newPost.save();

    console.log({...newPost._doc, _id: newPost._id.toString()})
    console.log('новый фаил добавлен')
    return {...newPost._doc, _id: newPost._id.toString()};
   } catch (error) {
       throw new Error(error.message || 'Failed to create post!')
   }
}