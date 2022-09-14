"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const EventSchema = new Schema({
    title: { type: String, required: true },
    //description: { type: String, required: true },
    categories: [String],
    // startDate: { type: String, required: true },
    // endDate: { type: String, required: true },
    // month: { type: Number, required: true },
    // location: {
    //   country: { type: String, required: true },
    //   city: { type: String, required: true },
    //   region: { type: String, required: true },
    // },
    time: { type: String },
    webpage: { type: String },
    price: { type: Number },
    familyFriendly: { type: Boolean },
    forKids: { type: Boolean },
    language: { type: String },
}, { timestamps: true });
exports.default = model("Event", EventSchema);
