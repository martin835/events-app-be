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

organizersRouter.get("/:id", async (req, res, next) => {
  try {
    const organizer = await OrganizerModel.findById(req.params.id);

    if (organizer) {
      res.send(organizer);
    } else {
      next(createError(404, `Organizer with id ${req.params.id} not found!`));
    }
  } catch (error) {
    next(error);
  }
});

export default organizersRouter;
