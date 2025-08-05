import mongoose, { Schema } from "mongoose";
import { INews } from "types/news.type";

const schema = new Schema<INews>({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true
  },

  author: {
    type: mongoose.SchemaTypes.String,
    required: true
  },

  date: {
    type: mongoose.SchemaTypes.String,
    required: true
  },

  text: {
    type: mongoose.SchemaTypes.String,
    required: true
  },

  banner: {
    type: mongoose.SchemaTypes.String,
  },

  icon: {
    type: mongoose.SchemaTypes.String,
  },

  image: {
    type: mongoose.SchemaTypes.String,
  }
});

const model = mongoose.model("news", schema);

export {
  schema as NewsSchema,
  model as News
};

export default model;
