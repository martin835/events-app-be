"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const axios_1 = __importDefault(require("axios"));
const cheerio = __importStar(require("cheerio"));
const organizer_model_js_1 = __importDefault(require("../services/models/organizer-model.js"));
const scrapeShows = () => __awaiter(void 0, void 0, void 0, function* () {
    const shows = [];
    try {
        let response = yield (0, axios_1.default)("https://bdnr.sk/");
        const organizer = yield organizer_model_js_1.default.findById("62ea65b94aa5b228b3b93d2c");
        if (response.statusText === "OK") {
            let html = yield response.data;
            const $ = cheerio.load(html);
            $(`.program-block`, html).each(function () {
                const date = $(this).find(".datumX").text();
                const time = $(this).find(".casX").text();
                const title = $(this).find(".program-obsah").find("h2").text();
                shows.push({
                    date,
                    time,
                    title,
                });
            });
            //This function saves scraped shows into the DB
            // shows.forEach(async (show) => {
            //   const newEvent = new EventModel({
            //     title: show.title,
            //     // categories: ["theater"],
            //     // startDate: show.date,
            //     // endDate: show.date,
            //     // time: show.time,
            //   });
            //   const { _id } = await newEvent.save();
            // });
            console.log(organizer);
            console.log(shows);
        }
        else {
            console.log("ERROR - smth wrong with fetching data w/ axios");
        }
    }
    catch (error) {
        console.log(error);
    }
});
//scrapeShows();
//export default scrapeShows;
