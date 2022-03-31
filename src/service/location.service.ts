import { getLocation, getLocations, createLocation, ILocationPayload } from "../repository/location.repository";

export class LocationService {

    constructor() {

    }

    public get = (locationName: string) => {
        return getLocation(locationName);
    }

    public getAll = () => {
        return getLocations();
    }

    public create = () => {
        return "Create Item";
    }

    public update = () => {
        return "Update Item";
    }

    public delete = () => {
        return "Delete Item";
    }

}