import mongoose, { Schema } from "mongoose";
import { IProject } from "types/project.type";

const user = {
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  
  tag: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
}

const schema = new Schema<IProject>({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true
  },

  author: {
    type: user,
    required: true
  },

  contributors: [user],

  description: {
    type: mongoose.SchemaTypes.String
  },

  urls: [{
    type: {
      name: mongoose.SchemaTypes.String,
      href: mongoose.SchemaTypes.String,
    }
  }],

  cover: {
    type: mongoose.SchemaTypes.String,
    required: false
  },

  icon_url: {
    type: mongoose.SchemaTypes.String,
    required: false
  }
});

const model = mongoose.model("projects", schema);

export {
  schema as ProjectsSchema,
  model as Projects
};

export default model;
