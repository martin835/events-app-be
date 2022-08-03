import mongoose from "mongoose";

const { Schema, model } = mongoose;

const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    categories: [String],
    // startDate: { type: Date, required: true },
    // endDate: { type: Date, required: true },
    // month: { type: Number, required: true },
    // location: {
    //   country: { type: String, required: true },
    //   city: { type: String, required: true },
    //   region: { type: String, required: true },
    // },
    webpage: { type: String },
    price: { type: Number },
    familyFriendly: { type: Boolean },
    forKids: { type: Boolean },
    language: { type: String },
  },
  { timestamps: true }
);

export default model("Event", EventSchema);
