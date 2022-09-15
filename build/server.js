"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
// Server connection
const port = process.env.PORT || 3001;
mongoose_1.default.connect(process.env.MONGO_CONNECTION);
mongoose_1.default.connection.on("connected", () => {
    console.log("👌 Connected to Mongo!");
    app_1.default.listen(port, () => {
        console.table((0, express_list_endpoints_1.default)(app_1.default));
        console.log(`🟢 Server listening on port ${port} 🚀 `);
    });
});
