import { time } from "console";
import { getRepository, Repository } from "typeorm";
import { Location } from "../model/location.model"

export interface ILocationPayload {
    locationName: string;
    timezoneName: string;
    timezoneAbbr: string;
    utcOffset: number;
}

export class LocationRepository {

    private locationRepository: Repository<Location>

    constructor() {
        this.locationRepository = getRepository(Location);
    }

    public getLocations = async (): Promise<Array<Location>> => {
        const locations = await this.locationRepository.find();
        return locations;
    };
    
    public createLocation = async (payload: ILocationPayload): Promise<Location> => {
        const newLocation = this.locationRepository.create(payload);
        return this.locationRepository.save(newLocation);
    };
    
    public getLocation = async (locationName: string): Promise<Location | null> => {
        const location = await this.locationRepository.findOne({ where: { locationName: locationName } });
        if (!location) {
            return null;
        }
    
        return location;
    };
    
    public deleteLocation = async (locationName: string) => {
        await this.locationRepository.delete(locationName);
    };
    
    public updateLocation = async (payload: Location): Promise<Location | null> => {
        await this.locationRepository.update(payload.locationName, payload);        

        return await this.getLocation(payload.locationName);
    };
}