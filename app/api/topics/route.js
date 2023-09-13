import { NextResponse } from "next/server";
import TopicModel from "@/models/topic";
import connectMongoDB from "@/libs/mongodb";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await TopicModel.create({ title, description });
  
  return NextResponse.json(
    { message: "Topic have been created" },
    { status: 201 }
  );
}
