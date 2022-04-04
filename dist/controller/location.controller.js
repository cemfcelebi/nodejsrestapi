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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationController = void 0;
const express_1 = require("express");
const location_service_1 = require("../service/location.service");
class LocationController {
    constructor() {
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let location = yield this.locationService.get(req.params.locationName);
            res.send(location);
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let locations = yield this.locationService.getAll();
            res.send(locations);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let newLocation = req.body;
            if (!newLocation || !newLocation.locationName) {
                console.log("Bad Request");
                return res.sendStatus(404);
            }
            let location = yield this.locationService.create(newLocation);
            res.send(location);
        });
        this.update = (req, res) => {
            res.send(this.locationService.update(req.body));
        };
        this.delete = (req, res) => {
            res.send(this.locationService.delete(req.params.locationName));
        };
        this.router = (0, express_1.Router)();
        this.locationService = new location_service_1.LocationService();
        this.routes();
    }
    routes() {
        this.router.get("/:locationName", this.get);
        this.router.get("/", this.getAll);
        this.router.post("/", this.create);
        this.router.put("/", this.update);
        this.router.delete("/:locationName", this.delete);
    }
}
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map