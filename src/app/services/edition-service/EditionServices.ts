import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { Edition, EditionRead, HomeModel } from "src/app/models/home/home.model";
import { CardModel, RateModel } from "src/app/models/rates/rates";
import { BusinessSubscriptionPurchase } from "src/app/models/transaction/business_transaction";
import { Area, Country } from "src/app/models/utils";
import { AppConnect } from "src/app/utils/Connection";

@Injectable({
    providedIn: 'root'
})
export class EditionService {
    constructor(private connect: AppConnect) {
    }
    /**
     * 
     * @returns 
     */
    getEdition(edition: Edition): Promise<EditionRead> {
        this.connect.endPoint = `/articles/read/${edition.pk}`;
        return this.connect.httpGet();
    }
    setToken(token: string) {
        this.connect.token = token;
    }

    subscribeAS(rate: RateModel, card: CardModel, quantityPhEn: number, quantityPhEs: number, quantityDEn: number, quantityDEs: number): Promise<BusinessSubscriptionPurchase> {
        this.connect.endPoint = "/articles/subscribe-as/";
        return this.connect.httpPost({
            "token": card.token,
            "quantity_physical_en": quantityPhEn,
            "quantity_physical_es": quantityPhEs,
            "quantity_device_es": quantityDEs,
            "quantity_device_en": quantityDEs,
            "rate_id": rate.pk
        });
    }
}