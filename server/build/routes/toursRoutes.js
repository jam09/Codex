"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toursController_1 = __importDefault(require("../controller/toursController"));
class ToursRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', toursController_1.default.list);
        this.router.get('/:id', toursController_1.default.getOne);
        this.router.post('/', toursController_1.default.create);
        this.router.delete('/:id', toursController_1.default.delete);
        this.router.put('/:id', toursController_1.default.update);
    }
}
const toursRoutes = new ToursRoutes();
exports.default = toursRoutes.router;
