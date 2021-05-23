import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { BusinessAuthentication } from "src/app/models/business/business-authentication";
import { BusinessModel, BusinessSubscriptionAddress, BusinessSubscriptionAddressList } from "src/app/models/business/business.models";
import { RateModel } from "src/app/models/rates/rates";
import { Area, Country } from "src/app/models/utils";
import { AppConnect } from "src/app/utils/Connection";

@Injectable({
    providedIn: 'root'
})
export class BusinessService {
    private session: BusinessAuthentication;
    constructor(private connect: AppConnect) {
    }
    /**
     * 
     * @returns 
     */
    saveFiscalInformation(business: BusinessModel): Promise<BusinessModel> {
        this.connect.endPoint = "/business/update/";
        this.connect.session = this.session;
        return this.connect.httpPost({
            "person_type": business.person_type,
            "business_name": business.name,
            "business_identification": business.identification,
            "country": business.country != null ? business.country.pk : null,
            "area": business.area != null ? business.area.pk : null,
            "city": business.city,
            "phone": business.phone,
            "address": business.address,
        }).then((e) => e);
    }
    setSession(session) {
        this.session = session;
    }
    getListAdressSubscription(): Promise<BusinessSubscriptionAddressList> {
        this.connect.endPoint = "/business/subscription/address/";

        this.connect.session = this.session;
        return this.connect.httpGet().then((e) => e);
    }
    updateAddress(bsa: BusinessSubscriptionAddress) {
        this.connect.endPoint = "/business/subscription/address/update/";

        this.connect.session = this.session;
        return this.connect.httpPost({
            "bsl": [bsa]
        })
    }
}