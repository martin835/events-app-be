"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizer_model_1 = __importDefault(require("../models/organizer-model"));
function createError(arg0, arg1) {
    throw new Error("Function not implemented.");
}
const organizersRouter = express_1.default.Router();
organizersRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizers = yield organizer_model_1.default.find({});
        res.send(organizers);
    }
    catch (error) {
        next(error);
    }
}));
organizersRouter.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrganizer = new organizer_model_1.default(req.body);
        const { _id } = yield newOrganizer.save();
        res.status(201).send({ _id });
    }
    catch (error) {
        next(error);
    }
}));
organizersRouter.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizer = yield organizer_model_1.default.findById(req.params.id);
        if (organizer) {
            res.send(organizer);
        }
        else {
            next(createError(404, `Organizer with id ${req.params.id} not found!`));
        }
    }
    catch (error) {
        next(error);
    }
}));
exports.default = organizersRouter;
