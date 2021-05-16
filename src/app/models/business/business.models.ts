import { Area, Country } from "../utils";

export interface BusinessModel {
    pk: number;
    identification: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    area: Area;
    country: Country;
    type_payment: null;
    person_type: string;
    avatar: null;
}
