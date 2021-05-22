import { Injectable, Provider } from "@angular/core";
import { AppConnect } from "src/app/utils/Connection";
import { CardModel } from "../rates/rates";

@Injectable({
    providedIn: 'root'
})
export class CreditcardService {
    constructor(private connect: AppConnect) {
    }
    getCards(): Promise<CardModel[]> {
        this.connect.endPoint = "/my-credit-card/";
        return this.connect.httpGet().then((e) => {
            return e["cards"];
        });
    }

    setToken(token: string) {
        this.connect.token = token;
    }
    /**
     * 
     * @param number 
     * @param name 
     * @param month 
     * @param year 
     * @param cvc 
     * @returns 
     */
    addCard(number: number, name: string, month: number, year: number, cvc: number): Promise<CardModel> {

        this.connect.endPoint = "/my-credit-card/add/";
        return this.connect.httpPost({
            "number": number,
            "holder_name": name,
            "month": month,
            "year": year,
            "cvc": cvc,
        }).then((e) => {
            if (e["error"]) {
                throw new Error(e["error"]["type"]);
            }
            return e["card"];
        });
    }// 4111111111111111
    removeCard(card: CardModel): Promise<boolean> {
        this.connect.endPoint = "/my-credit-card/remove/";
        return this.connect.httpPost({
            "token_card": card.token
        }).then((e) => {
            return e["message"];
        });
    }
}