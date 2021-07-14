import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { RateModel } from "src/app/models/rates/rates";
import { Area, Country } from "src/app/models/utils";
import { AppConnect } from "src/app/utils/Connection";

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    constructor(private connect: AppConnect) {
    }
    /**
     * 
     * @returns 
     */
    getAreas(): Promise<Area[]> {
        this.connect.endPoint = "/areas";
        return this.connect.httpGet().then((e) => e["areas"]);
    }
    getCountries(): Promise<Country[]> {
        this.connect.endPoint = "/countries";
        return this.connect.httpGet().then((e) => e = e["countries"]);
    }
    getRates(): Promise<RateModel[]> {
        this.connect.endPoint = "/as-rate";
        return this.connect.httpGet().then((e) => e = e["rates"]);
    }

    getTerms(): Promise<String> {
        this.connect.endPoint = "/terms-condition/";
        return this.connect.httpGet().then((e) => e);
    }
}