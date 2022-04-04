import { getLocation, getLocations, createLocation, ILocationPayload } from "../repository/location.repository";

export class LocationService {

    constructor() {

    }

    public get = async (locationName: string) => {
        return await getLocation(locationName);
    }

    public getAll = async () => {
        return await getLocations();
    }

    public create = async (payload: ILocationPayload) => {
        return await createLocation(payload);
    }

    public update = (payload: ILocationPayload) => {
        return "Update Item";
    }

    public delete = (locationName: string) => {
        return "Delete Item";
    }

}