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
        return this.locationRepository.find();
    };
    
    public createLocation = async (payload: ILocationPayload): Promise<Location> => {
        const newLocation = this.locationRepository.create(payload);
        return this.locationRepository.save(newLocation);
    };
    
    public getLocation = async (locationName: string): Promise<Location | null> => {
        return this.locationRepository.findOne({ where: { locationName: locationName } });
    };
    
    public deleteLocation = async (locationName: string) => {
        return this.locationRepository.delete(locationName);
    };
    
    public updateLocation = async (payload: Location): Promise<Location> => {
        return this.locationRepository.update(payload.locationName, payload).then(() => {
            return this.getLocation(payload.locationName);
        });        
    };
}