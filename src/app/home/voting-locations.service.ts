import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VotingLocationService {

    constructor(public http: Http) {

    }

    public getData() {
        return this.http.get(''
            // 'https://data.howardcountymd.gov/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=general:Voting_Locations&outputFormat=application/json')
            .map((res: any) => {
                return res.json();
            });
    }

}
