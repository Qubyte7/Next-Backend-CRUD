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

export async function GET() {
  await connectMongoDB();
  const topics = await TopicModel.find();
  return NextResponse.json({ topics });
}
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await TopicModel.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Toppic have been sucessfully Deleted" },
    { status: 200 }
  );
}
