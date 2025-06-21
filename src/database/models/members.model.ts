import mongoose, { Schema } from "mongoose";
import { IMember } from "types/member.type";

const schema = new Schema<IMember>({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true
  },

  tag: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true
  },

  role: {
    type: mongoose.SchemaTypes.String,
    required: true
  },

  description: {
    type: mongoose.SchemaTypes.String
  },

  socials: [{
    type: {
      name: mongoose.SchemaTypes.String,
      href: mongoose.SchemaTypes.String,
    }
  }],

  avatar: {
    type: mongoose.SchemaTypes.String,
    required: false
  },

  meta: {
    type: mongoose.SchemaTypes.String,
    required: false
  }
});

const model = mongoose.model("members", schema);

export {
  schema as MembersSchema,
  model as Members
};

export default model;
