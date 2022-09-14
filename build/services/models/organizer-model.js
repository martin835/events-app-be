"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const OrganizerSchema = new Schema({
    name: { type: String, required: true },
    descriptionUrl: { type: String },
    URL: { type: String },
    coverImg: { type: String },
    region: { type: String },
    city: { type: String },
    street: { type: String },
    streetNumber: { type: String },
    zip: { type: String },
    top: { type: String },
    remarks: { type: String },
    type: { type: String },
}, { timestamps: true });
exports.default = model("Organizer", OrganizerSchema);
