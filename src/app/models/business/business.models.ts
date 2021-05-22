import { Area, Country } from "../utils";

export interface BusinessModel {
    pk?: number;
    identification: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    area?: Area;
    country: Country;
    type_payment?: null;
    person_type: string;
    avatar?: null;
}

export interface BusinessSubscriptionAddressList {
    object_list: BusinessSubscriptionAddress[];
    number: number;
    page_size: number;
    count: number;
    total: number;
    num_pages: number;
}

export interface BusinessSubscriptionAddress {
    pk: number;
    uuid: string;
    name: string;
    edition_physical: string;
    full_address: string;
    phone: string;
    city: string;
}
