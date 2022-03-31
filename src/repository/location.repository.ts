import { time } from "console";
import { getRepository } from "typeorm";
import { Location } from "../model/location.model"

export interface ILocationPayload {
    locationName: string;
    timezoneName: string;
    timezoneAbbr: string;
    utcOffset: number;
}

export const getLocations = async (): Promise<Array<Location>> => {
    const locationRepository = getRepository(Location);
    return locationRepository.find();
};

export const createLocation = async (payload: ILocationPayload): Promise<Location> => {
    const locationRepository = getRepository(Location);
    const location = new Location();
    return locationRepository.save({
        ...location,
        ...payload,
    });
};

export const getLocation = async (locationName: string): Promise<Location | null> => {
    const locationRepository = getRepository(Location);
    const location = await locationRepository.findOne({ where: { locationName: locationName } });
    if (!location) return null;
    return location;
};