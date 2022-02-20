import { HttpParams } from "@angular/common/http";
import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { BusinessAuthentication } from "src/app/models/business/business-authentication";
import { CategoryList, Edition, EditionList, EditionRead, HomeModel } from "src/app/models/home/home.model";
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
    setSession(ba: BusinessAuthentication) {
        this.connect.session = ba;
    }
    getCategories(): Promise<CategoryList> {
        this.connect.endPoint = "/articles/categories/";
        return this.connect.httpGet();
    }

    payEdition(card: CardModel, editionPk: number): Promise<BusinessSubscriptionPurchase> {
        this.connect.endPoint = `/articles/pay-edition/${editionPk}/`;

        return this.connect.httpPost({
            token: card.token,
        });
    }
    search(page: string, query: string, category: number, date_range: string): Promise<EditionList> { // 
        let par = new HttpParams()
            .set("q", query)
            .set("category_id", category != null ? `${category}` : "")
            .set("publication_date", date_range != null ? `${date_range}` : "");
        this.connect.endPoint = `/articles/search/?${par.toString()}`;
        return this.connect.httpGet();

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