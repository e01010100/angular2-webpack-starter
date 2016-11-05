import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TransitService {
    value = 'Angular 2';
    constructor(public http: Http) {

    }

    getData() {

        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    }

}
