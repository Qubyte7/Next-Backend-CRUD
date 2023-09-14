import connectMongoDB from "@/libs/mongodb";
import TopicModel from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, description } = await req.json();
  console.log(title, description);
  await connectMongoDB();
  const newTopic = await TopicModel.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
  return NextResponse.json({ message: newTopic }, { status: 200 });
}


export async function GET(req,{params}){
  const {id} = params;
  await connectMongoDB();
  const topic = await TopicModel.findOne({_id:id});
  return NextResponse.json({ message: topic }, { status: 200 });
}