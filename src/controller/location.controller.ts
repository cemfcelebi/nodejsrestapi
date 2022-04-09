import { Router, Response, Request } from "express";
import { ILocationPayload } from "../repository/location.repository";
import { LocationService } from "../service/location.service";

export class LocationController {

    public router: Router;
    private locationService: LocationService;

    constructor() {
        this.router = Router();
        this.locationService = new LocationService();
        this.routes();
    }

    public get = async (req: Request, res: Response) => {
        let location = await this.locationService.get(req.params.locationName);
        if(!location) {
            return 
        }

        res.send(location);
    };

    public getAll = async (req: Request, res: Response) => {
        let locations = await this.locationService.getAll();

        res.send(locations);
    };

    public create = async (req: Request, res: Response) => {
        let newLocation = req.body as ILocationPayload;
        if(!newLocation || !newLocation.locationName) {
            return res.sendStatus(400);
        }

        let location = await this.locationService.create(newLocation); 
        
        res.send(location);
    }

    public update = async (req: Request, res: Response) => {
        let updatedLocation = req.body as ILocationPayload;
        if(!updatedLocation || !updatedLocation.locationName) {
            return res.sendStatus(400);
        }

        let currentlocation = await this.locationService.get(updatedLocation.locationName);
        if (!currentlocation) {
            return res.sendStatus(404);
        }

        let location = await this.locationService.update(updatedLocation);
        
        res.send(location);
    }

    public delete = async (req: Request, res: Response) => {
        let location = await this.locationService.get(req.params.locationName);
        if(!location) {
            return res.sendStatus(404);
        }

        this.locationService.delete(location.locationName);
        
        res.sendStatus(200);
    }

    public routes() {
        this.router.get("/:locationName", this.get);
        this.router.get("/", this.getAll);
        this.router.post("/", this.create);
        this.router.put("/", this.update);
        this.router.delete("/:locationName", this.delete);
    }
}