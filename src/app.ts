import cors from "cors";
import express from "express";
import morgan from "morgan";
import {
  badRequestHandler,
  forbiddenHandler,
  genericErrorHandler,
  notFoundHandler,
  unauthorizedHandler,
} from "./errorHandlers";
import eventsRouter from "./services/routers/events-router";
import organizersRouter from "./services/routers/organizers-router";
//import getShows from "./tools/eventScraper";

const app = express();

//***********************************Middlewares*******************************************************/
//passport.use("google", googleStrategy);

const whitelist = [
  process.env.FE_DEV_URL,
  //   process.env.FE_PROD_URL,
  //   process.env.REDIRECT,
];

app.use(
  cors({
    origin: function (origin, next) {
      //cors is a global middleware - for each request
      //console.log("ORIGIN: ", origin);
      // 0 \\ 0
      if (origin === undefined || whitelist.indexOf(origin) !== -1) {
        //console.log("ORIGIN ALLOWED");
        next(null, true);
      } else {
        console.log("ORIGIN NOT ALLOWED");
        next(new Error("CORS ERROR!"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
//app.use(passport.initialize());
app.use(morgan("combined"));

//***********************************Endpoints*********************************************************/

app.use("/events", eventsRouter);
app.use("/organizers", organizersRouter);

// For test purposes

app.get("/test", (req, res) => {
  res.send({ message: "Hello, World!" });
});

//***********************************Error handlers****************************************************/

app.use(badRequestHandler);
app.use(unauthorizedHandler);
app.use(forbiddenHandler);
app.use(notFoundHandler);
app.use(genericErrorHandler);

export default app;
