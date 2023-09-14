import mongoose, { Schema } from "mongoose";
const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const TopicModel =
  mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default TopicModel;
