import express from "express";
import OrganizerModel from "../models/organizer-model.js";

const organizersRouter = express.Router();

organizersRouter.get("/", async (req, res, next) => {
  try {
    const organizers = await OrganizerModel.find({});

    res.send(organizers);
  } catch (error) {
    next(error);
  }
});

organizersRouter.post("/", async (req, res, next) => {
  try {
    const newOrganizer = new OrganizerModel(req.body);
    const { _id } = await newOrganizer.save();
    res.status(201).send({ _id });
  } catch (error) {
    next(error);
  }
});

export default organizersRouter;
