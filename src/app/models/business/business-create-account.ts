// To parse this data:
//
//   import { Convert, BusinessCreateAccount } from "./file";
//
//   const businessCreateAccount = Convert.toBusinessCreateAccount(json);

import { UserModel } from "../user.models";
import { BusinessModel } from "./business.models";

export interface BusinessCreateAccount {
    pk: number;
    user: UserModel;
    business: BusinessModel;
    date_created: string;
    device_id: string;
    device_model: string;
    token: string;
}



// Converts JSON strings to/from your types
export class Convert {
    public static toBusinessCreateAccount(json: string): BusinessCreateAccount {
        return JSON.parse(json);
    }

    public static businessCreateAccountToJson(value: BusinessCreateAccount): string {
        return JSON.stringify(value);
    }
}
