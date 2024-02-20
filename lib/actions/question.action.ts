"use server";
import { connectToDataBase } from "../mongoose";
import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
export async function createQuestion(params: any) {
  const { title, content, tags, author, path } = params;
  try {
    connectToDataBase();
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);

      await Question.findByIdAndUpdate(question._id, {
        $push: { tags: { $each: tagDocuments } },
      });
    }

    // Create interaction record for increment author reputation
  } catch (error) {
    console.log(error);
  }
}
