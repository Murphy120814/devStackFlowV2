"use server";
import { connectToDataBase } from "../mongoose";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import User from "@/database/user.model";
import {
  GetQuestionsParams,
  CreateQuestionParams,
  GetQuestionByIdParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDataBase();
    const questions = await Question.find({})
      .populate({
        path: "tags",
        model: Tag,
      })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error) {
    console.log(error);
  }
}
export async function createQuestion(params: CreateQuestionParams) {
  const { title, content, tags, author, path } = params; // have to add path
  try {
    connectToDataBase();
    const question = await Question.create({
      title,
      content,
      author,
    });
    console.log(question);
    const tagDocuments = [];

    for (const tag of tags) {
      const isTagAlreadyExist = await Tag.exists({
        name: { $regex: new RegExp(`^${tag}$`, "i") },
      });

      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
    revalidatePath(path);
  } catch (error) {
    // Create interaction record for increment author reputation
    console.log(error);
  }
}

export async function getQuestionById(params: GetQuestionByIdParams) {
  try {
    connectToDataBase();
    const { questionId } = params;
    const question = await Question.findById(questionId)
      .populate({ path: "tags", model: Tag, select: "_id name" })
      .populate({
        path: "author",
        model: User,
        select: "_id clerkId name picture",
      });

    return question;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
