export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: number;
}

export interface carSales {
    id : number;
    sales_id : number;
    date_of_purchase : string;
    customer_id : number;
    fuel : string;
    vehicle_segment : string;
    selling_price: number;
    power_steering : boolean;
    airbags : boolean;
    sunroof : boolean;
    matt_finish : boolean;
    music_system : boolean;
    customer_gender : string;
    customer_income_group : string;
    customer_region : string;
    customer_marital_status : boolean;
}
