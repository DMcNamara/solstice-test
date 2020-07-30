export interface Message {
  message: string;
}

export interface Account {
    id: number;
    customer_id: number;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    solar_farm_id: number;
    capacity_share: number;
    created_date: string;
}

export interface Customer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    active: 0 | 1;
    account_manager_id: number;
    reason_for_joining: string;
    created_date: string;
}

export interface GetCustomerResponse {
    customer: Customer;
    accounts: Account[];
}

export interface Dictionary<T> {
    [id: number]: T;
}
