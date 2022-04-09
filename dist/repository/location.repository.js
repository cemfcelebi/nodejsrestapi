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
exports.LocationRepository = void 0;
const typeorm_1 = require("typeorm");
const location_model_1 = require("../model/location.model");
class LocationRepository {
    constructor() {
        this.getLocations = () => __awaiter(this, void 0, void 0, function* () {
            const locations = yield this.locationRepository.find();
            return locations;
        });
        this.createLocation = (payload) => __awaiter(this, void 0, void 0, function* () {
            const newLocation = this.locationRepository.create(payload);
            return this.locationRepository.save(newLocation);
        });
        this.getLocation = (locationName) => __awaiter(this, void 0, void 0, function* () {
            const location = yield this.locationRepository.findOne({ where: { locationName: locationName } });
            if (!location) {
                return null;
            }
            return location;
        });
        this.deleteLocation = (locationName) => __awaiter(this, void 0, void 0, function* () {
            yield this.locationRepository.delete(locationName);
        });
        this.updateLocation = (payload) => __awaiter(this, void 0, void 0, function* () {
            yield this.locationRepository.update(payload.locationName, payload);
            return yield this.getLocation(payload.locationName);
        });
        this.locationRepository = (0, typeorm_1.getRepository)(location_model_1.Location);
    }
}
exports.LocationRepository = LocationRepository;
//# sourceMappingURL=location.repository.js.map