import mongoose from "mongoose";

const { Schema, model } = mongoose;

const OrganizerSchema = new Schema(
  {
    name: { type: String, required: true },
    descriptionUrl: { type: String },
    URL: { type: String },
    coverImg: { type: String },
    region: { type: String },
    city: { type: String },
    street: { type: String },
    streetNumber: { type: String },
    zip: { type: String },
    top: { type: Boolean },
    remarks: { type: String },
    type: { type: String },
  },
  { timestamps: true }
);

export default model("Organizer", OrganizerSchema);
