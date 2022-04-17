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
const httpStatus_1 = require("../enum/httpStatus");
class LocationController {
    constructor() {
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let location = yield this.locationService.get(req.params.locationName);
            if (!location) {
                return res.sendStatus(httpStatus_1.HttpStatus.NotFound);
            }
            res.send(location);
        });
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let locations = yield this.locationService.getAll();
            res.send(locations);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let newLocation = req.body;
            if (!newLocation || !newLocation.locationName) {
                return res.sendStatus(httpStatus_1.HttpStatus.BadRequest);
            }
            let location = yield this.locationService.create(newLocation);
            if (!location) {
                return res.sendStatus(httpStatus_1.HttpStatus.AlreadyExist);
            }
            res.status(httpStatus_1.HttpStatus.Created).send(location);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //checking ViewModel 
            let updatedLocation = req.body;
            if (!updatedLocation || !updatedLocation.locationName) {
                return res.sendStatus(httpStatus_1.HttpStatus.BadRequest);
            }
            //
            let location = yield this.locationService.update(updatedLocation);
            if (!location) {
                return res.sendStatus(httpStatus_1.HttpStatus.NotFound);
            }
            res.send(location);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let location = yield this.locationService.get(req.params.locationName);
            if (!location) {
                return res.sendStatus(httpStatus_1.HttpStatus.NotFound);
            }
            yield this.locationService.delete(location.locationName);
            res.sendStatus(httpStatus_1.HttpStatus.Ok);
        });
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