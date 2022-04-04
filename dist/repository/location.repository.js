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
exports.getLocation = exports.createLocation = exports.getLocations = void 0;
const typeorm_1 = require("typeorm");
const location_model_1 = require("../model/location.model");
const getLocations = () => __awaiter(void 0, void 0, void 0, function* () {
    const locationRepository = (0, typeorm_1.getRepository)(location_model_1.Location);
    const locations = yield locationRepository.find();
    return locations;
});
exports.getLocations = getLocations;
const createLocation = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const locationRepository = (0, typeorm_1.getRepository)(location_model_1.Location);
    const location = new location_model_1.Location();
    return locationRepository.save(Object.assign(Object.assign({}, location), payload));
});
exports.createLocation = createLocation;
const getLocation = (locationName) => __awaiter(void 0, void 0, void 0, function* () {
    const locationRepository = (0, typeorm_1.getRepository)(location_model_1.Location);
    const location = yield locationRepository.findOne({ where: { locationName: locationName } });
    if (!location) {
        return null;
    }
    return location;
});
exports.getLocation = getLocation;
//# sourceMappingURL=location.repository.js.map