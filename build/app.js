"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const errorHandlers_js_1 = require("./errorHandlers.js");
const events_router_js_1 = __importDefault(require("./services/routers/events-router.js"));
const organizers_router_js_1 = __importDefault(require("./services/routers/organizers-router.js"));
//import getShows from "./tools/eventScraper.js";
const app = (0, express_1.default)();
//***********************************Middlewares*******************************************************/
//passport.use("google", googleStrategy);
const whitelist = [
    process.env.FE_DEV_URL,
    //   process.env.FE_PROD_URL,
    //   process.env.REDIRECT,
];
app.use((0, cors_1.default)({
    origin: function (origin, next) {
        //cors is a global middleware - for each request
        //console.log("ORIGIN: ", origin);
        // 0 \\ 0
        if (origin === undefined || whitelist.indexOf(origin) !== -1) {
            //console.log("ORIGIN ALLOWED");
            next(null, true);
        }
        else {
            console.log("ORIGIN NOT ALLOWED");
            next(new Error("CORS ERROR!"));
        }
    },
    credentials: true,
}));
app.use(express_1.default.json());
//app.use(passport.initialize());
app.use((0, morgan_1.default)("combined"));
//***********************************Endpoints*********************************************************/
app.use("/events", events_router_js_1.default);
app.use("/organizers", organizers_router_js_1.default);
// For test purposes
app.get("/test", (req, res) => {
    res.send({ message: "Hello, World!" });
});
//***********************************Error handlers****************************************************/
app.use(errorHandlers_js_1.badRequestHandler);
app.use(errorHandlers_js_1.unauthorizedHandler);
app.use(errorHandlers_js_1.forbiddenHandler);
app.use(errorHandlers_js_1.notFoundHandler);
app.use(errorHandlers_js_1.genericErrorHandler);
exports.default = app;
