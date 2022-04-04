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
            console.log("Bad Request");
            return res.sendStatus(400);
        }

        let location = await this.locationService.create(newLocation); 
        res.send(location);
    }

    public update = (req: Request, res: Response) => {
        res.send(this.locationService.update(req.body));
    }

    public delete = (req: Request, res: Response) => {
        res.send(this.locationService.delete(req.params.locationName));
    }

    public routes() {
        this.router.get("/:locationName", this.get);
        this.router.get("/", this.getAll);
        this.router.post("/", this.create);
        this.router.put("/", this.update);
        this.router.delete("/:locationName", this.delete);
    }
}