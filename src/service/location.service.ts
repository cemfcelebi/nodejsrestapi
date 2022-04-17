import { LocationRepository, ILocationPayload } from "../repository/location.repository";

export class LocationService {

    private locationRepository: LocationRepository

    constructor() {
        this.locationRepository = new LocationRepository();
    }

    public get = async (locationName: string) => {
        return this.locationRepository.getLocation(locationName);
    }

    public getAll = async () => {
        return this.locationRepository.getLocations();
    }

    public create = async (payload: ILocationPayload) => {
        return this.get(payload.locationName).then(currentlocation => {
            if (!currentlocation) {
                return this.locationRepository.createLocation(payload);
            }
        });
    }

    public update = async (payload: ILocationPayload) => {
        return this.get(payload.locationName).then(currentlocation => {
            if (currentlocation) {
                return this.locationRepository.updateLocation(payload);
            }
        });
    }

    public delete = async (locationName: string) => {
        return this.locationRepository.deleteLocation(locationName);
    }
}