"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const location_repository_1 = require("../repository/location.repository");
class LocationService {
    constructor() {
        this.get = (locationName) => {
            return (0, location_repository_1.getLocation)(locationName);
        };
        this.getAll = () => {
            return (0, location_repository_1.getLocations)();
        };
        this.create = () => {
            return "Create Item";
        };
        this.update = () => {
            return "Update Item";
        };
        this.delete = () => {
            return "Delete Item";
        };
    }
}
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map