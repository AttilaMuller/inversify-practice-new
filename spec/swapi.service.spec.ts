import "reflect-metadata";
import {SwapiService} from "../src/services/swapi.service";
import {cleanUpMetadata} from "inversify-express-utils";

describe('Swapi service', () =>{

    let swapiService: SwapiService;

    beforeEach(() => {
        cleanUpMetadata();
       swapiService = new SwapiService();
    });

    it('should receive error if invalid page is received', (done) => {
        swapiService.getAllPlanets(2123123)
            .then(() => {
                fail('Should not accept page.');
                done();
            }).catch((err: Error) => {
                expect(err.message).toBe('Page must be between 1 and 7');
                done();
        });
    });
});