import {controller, httpGet, interfaces, queryParam, requestParam, response} from "inversify-express-utils";
import {inject} from "inversify";
import {SwapiService} from "../services/swapi.service";
import {Request, Response} from "express";

@controller('/swapi')
export class SwapiController implements interfaces.Controller {

    constructor(@inject('SwapiService') private swapiService: SwapiService) { }

    @httpGet('/')
    private async get(@queryParam('page') page: number, @response() resp: Response): Promise<any> {
        try {
            return this.swapiService.getAllPlanets(page);
        } catch (error) {
            resp.status(404).send(error);
        }
    }

    @httpGet('/:id')
    private async getOne(@requestParam('id') id: number, @response() res: Response) {
        return this.swapiService.getPlanetById(id);
    }

}