export interface RateModel {
    pk: number;
    label: string;
    frequency: number;
    base_price: number;
    tax: number;
    devices_allowed: number;
    physical_price_es: number;
    physical_price_en: number;
    price_extra_device: number;
}
export interface CardModel {
    bin: string;
    status: string;
    token: string;
    holder_name: string;
    expiry_year: string;
    expiry_month: string;
    transaction_reference: any;
    type: string;
    number: string;
}