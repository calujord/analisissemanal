import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { HomeModel } from "src/app/models/home/home.model";
import { RateModel } from "src/app/models/rates/rates";
import { Area, Country } from "src/app/models/utils";
import { AppConnect } from "src/app/utils/Connection";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private connect: AppConnect) {
    }
    /**
     * 
     * @returns 
     */
    getHome(): Promise<HomeModel> {
        this.connect.endPoint = "/home";
        return this.connect.httpGet();
    }
    getCountries(): Promise<Country[]> {
        this.connect.endPoint = "/countries";
        return this.connect.httpGet().then((e) => e = e["countries"]);
    }
    getAreas(): Promise<Area[]> {
        this.connect.endPoint = "/areas";
        return this.connect.httpGet().then((e) => e = e["areas"]);
    }
    getRates(): Promise<RateModel[]> {
        this.connect.endPoint = "/as-rate";
        return this.connect.httpGet().then((e) => e = e["rates"]);
    }
}