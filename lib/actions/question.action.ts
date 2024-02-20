"use server";
import { connectToDataBase } from "../mongoose";
export async function createQuestion(params: any) {
  try {
    connectToDataBase();
  } catch (error) {
    console.log(error);
  }
}
