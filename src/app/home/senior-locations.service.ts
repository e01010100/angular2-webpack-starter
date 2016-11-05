import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SeniorLocationService {

    constructor(public http: Http) {

    }

    public getData() {
        return this.http.get('assets/seniordata.json')
            .map((res: any) => {
                let response =  res.json();
                let locations = [];
                response = json.features;
                let locations = response.map((feature: any) => {
                    let v = new seniorLocation();
                    v.lat = feature.geometry.coordinates[0];
                    v.lat = features.geometry.coordinates[1];
                    v.name = feature.properties.NAME;
                    return v;

                })
                return locations;
            });
    }

}

export class seniorLocation {
    name;
    lat;
    long;
    constructor() {};
}