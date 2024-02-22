"use server";
import { connectToDataBase } from "@/lib/mongoose";
import {
  CreateUserParams,
  UpdateUserParams,
  DeleteUserParams,
} from "@/lib/actions/shared.types";
import User from "@/database/user.model";
import Question from "@/database/question.model";
import { revalidatePath } from "next/cache";

export async function getUserById(params: any) {
  try {
    connectToDataBase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(userDataParam: CreateUserParams) {
  try {
    connectToDataBase();
    const newUser = await User.create(userDataParam);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
export async function updateUser(userDataParam: UpdateUserParams) {
  const { clerkId, updateData, path } = userDataParam;
  try {
    connectToDataBase();
    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUser(userDataParam: DeleteUserParams) {
  const { clerkId } = userDataParam;
  try {
    connectToDataBase();
    const user = await User.findOneAndDelete({ clerkId });
    if (!user) {
      throw new Error("User Not Found");
    }
    // delete everything that user has ever done
    // and questions, answer ,comments
    // First focusing on questions by getting user question ids
    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    );
    await Question.deleteMany({ author: user._id });

    // TODO delete user answeres and commen

    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser
  } catch (error) {
    console.log(error);
  }
}
