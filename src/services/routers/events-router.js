import express from "express";
import EventsModel from "../models/event-model.js";

const eventsRouter = express.Router();

eventsRouter.get("/", async (req, res, next) => {
  try {
    const events = await EventsModel.find({});

    res.send(events);
  } catch (error) {
    next(error);
  }
});

eventsRouter.post("/", async (req, res, next) => {
  try {
    const newEvent = new EventsModel(req.body);
    const { _id } = await newEvent.save();
    res.status(201).send({ _id });
  } catch (error) {
    next(error);
  }
});

export default eventsRouter;
