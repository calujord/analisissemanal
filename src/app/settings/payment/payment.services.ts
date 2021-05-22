import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { BalanceListModel } from "src/app/models/business/balance.model";
import { RateModel } from "src/app/models/rates/rates";
import { Area, Country } from "src/app/models/utils";
import { AppConnect } from "src/app/utils/Connection";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    constructor(private connect: AppConnect) {
    }

    getBalanceList(): Promise<BalanceListModel> {
        this.connect.endPoint = "/balance/";
        return this.connect.httpGet().then((e) => e);
    }
    setToken(token: string) {
        this.connect.token = token;
    }

}