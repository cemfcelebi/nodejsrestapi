import { LocationRepository, ILocationPayload } from "../repository/location.repository";

export class LocationService {

    private locationRepository: LocationRepository

    constructor() {
        this.locationRepository = new LocationRepository();
    }

    public get = async (locationName: string) => {
        return await this.locationRepository.getLocation(locationName);
    }

    public getAll = async () => {
        return await this.locationRepository.getLocations();
    }

    public create = async (payload: ILocationPayload) => {
        return await this.locationRepository.createLocation(payload);
    }

    public update = async (payload: ILocationPayload) => {
        return await this.locationRepository.updateLocation(payload);
    }

    public delete = async (locationName: string) => {
        return await this.locationRepository.deleteLocation(locationName);
    }
}