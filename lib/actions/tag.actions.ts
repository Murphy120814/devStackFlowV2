"use server";
import { connectToDataBase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";
import User from "@/database/user.model";
export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  const { userId, limit = 3 } = params;
  const user = await User.findById(userId);
  if (!user) throw new Error("User Not Found");

  // find interaction for the user and group by tags

  try {
    connectToDataBase();
    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error) {
    console.log(error);
  }
}
