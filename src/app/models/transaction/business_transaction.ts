import { Edition } from "../home/home.model";
import { CardModel } from "../rates/rates";

export interface BusinessSubscriptionPurchase {
    pk: number;
    date_paid: null;
    is_paid: boolean;
    date_create: string;
    paymentez_response: PaymentezResponse;
    balance: Balance;
    business_subscription: BusinessSubscription;
}
export interface EditionPaid {
    pk: number;
    date_create: string;
    paymentez_response: PaymentezResponse;
    balance: Balance;
    business_subscription: BusinessSubscription;
    edition_language: Edition;
}

export interface Balance {
    pk: number;
    date_created: string;
    url_invoice: string;
    billing_number: number;
    is_paid: boolean;
    balance_detail: BalanceDetail[];
}

export interface BalanceDetail {
    pk: number;
    quantity: number;
    description: string;
    price: number;
    tax: number;
    total: number;
}

export interface BusinessSubscription {
    pk: number;
    frequency: number;
    label: string;
    quantity_physical_es: number;
    quantity_physical_en: number;
    quantity_device_es: number;
    quantity_device_en: number;
    base_price: number;
    physical_price_es: number;
    physical_price_en: number;
    price_extra_device: number;
    address: Address[];
    taxes: number;
}

export interface Address {
    pk: number;
    uuid: string;
    edition_physical: string;
    full_address: string;
    name: string;
    phone: string;
    city: string;
}

export interface PaymentezResponse {
    transaction: Transaction;
    card: CardModel;
}


export interface Transaction {
    status: string;
    payment_date: string;
    amount: number;
    authorization_code: string;
    installments: number;
    dev_reference: string;
    message: string;
    carrier_code: string;
    id: string;
    status_detail: number;
}