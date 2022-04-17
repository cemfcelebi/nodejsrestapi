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
exports.LocationService = void 0;
const location_repository_1 = require("../repository/location.repository");
class LocationService {
    constructor() {
        this.get = (locationName) => __awaiter(this, void 0, void 0, function* () {
            return this.locationRepository.getLocation(locationName);
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return this.locationRepository.getLocations();
        });
        this.create = (payload) => __awaiter(this, void 0, void 0, function* () {
            return this.get(payload.locationName).then(currentlocation => {
                if (!currentlocation) {
                    return this.locationRepository.createLocation(payload);
                }
            });
        });
        this.update = (payload) => __awaiter(this, void 0, void 0, function* () {
            return this.get(payload.locationName).then(currentlocation => {
                if (currentlocation) {
                    return this.locationRepository.updateLocation(payload);
                }
            });
        });
        this.delete = (locationName) => __awaiter(this, void 0, void 0, function* () {
            return this.locationRepository.deleteLocation(locationName);
        });
        this.locationRepository = new location_repository_1.LocationRepository();
    }
}
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map