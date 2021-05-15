// To parse this data:
//
//   import { Convert, BusinessAuthentication } from "./file";
//
//   const businessAuthentication = Convert.toBusinessAuthentication(json);

import { UserModel } from "../user.models";
import { BusinessModel } from "./business.models";

export interface BusinessAuthentication {
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
    public static toBusinessAuthentication(json: string): BusinessAuthentication {
        return JSON.parse(json);
    }

    public static businessAuthenticationToJson(value: BusinessAuthentication): string {
        return JSON.stringify(value);
    }
}
