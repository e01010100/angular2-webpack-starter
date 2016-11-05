import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VotingLocationService {

    constructor(public http: Http) {

    }

    public getData() {
        return this.http.get('assets/voting-places.json')
            // 'https://data.howardcountymd.gov/geoserver/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=general:Voting_Locations&outputFormat=application/json')
            .map((res: any) => {
                let json =  res.json();
                let voting = [];
                voting = json.features;
                let voterLocations = voting.map((feature: any) => {
                    let v = new voterLocation();
                    v.long = feature.geometry.coordinates[0];
					v.lat = feature.geometry.coordinates[1];
					v.name = feature.properties.LOCATION;
					return v;
                })
                return voterLocations;
            });
    }

}

export class voterLocation {
    name;
    lat;
    long;
    constructor() {};
}
