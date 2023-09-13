import mongoose,{Schema} from "mongoose";
const topicSchema = new Schema(
    {
        title: String,
        description:String
    },
    {
        timestamps: true,
    }
);

const TopicModel =mongoose.models.topics|| mongoose.model("Topic",topicSchema)

export default  TopicModel



