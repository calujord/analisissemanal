export interface BalanceListModel {
    balance_list: BalanceModel[];
    number: number;
    page_size: number;
    count: number;
    total: number;
    num_pages: number;
}

export interface BalanceModel {
    pk: number;
    date_created: string;
    url_invoice: null | string;
    billing_number: number | null;
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