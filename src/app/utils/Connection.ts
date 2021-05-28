import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BusinessAuthentication } from "../models/business/business-authentication";
import * as uuid from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class AppConnect extends HttpClient {
    endPoint?: string;
    session?: BusinessAuthentication;

    httpGet(params?: HttpParams): Promise<any> {
        return this.get<Response>(`${environment.API_URL}${this.endPoint}`, {
            headers: this.getHeader(),
            params: {}
        }).toPromise().then((response: Response) => {
            return response
        }).catch(this.handleError);
    }
    httpPost(body?: any): Promise<any> {
        return this.post(`${environment.API_URL}${this.endPoint}`, body, {
            headers: this.getHeader(),
        }).toPromise().then((response) => {
            return response;
        }).catch(this.handleError);
    }
    getHeader() {
        if (this.session != null)
            return new HttpHeaders({
                'Content-Type': 'application/json; charset=UTF-8',
                "X-CLIENT-ID": environment.PUBLIC_KEY,
                "X-CLIENT-SECRET": environment.SECRET_KEY,
                "x-language": environment.lang,
                "X-DEVICE-ID": this.session.device_id,
                "X-DEVICE-MODEL": this.session.device_model,
                "X-TOKEN-ACCESS": this.session != null ? this.session.token! : ""
            });
        else
            return new HttpHeaders({
                'Content-Type': 'application/json; charset=UTF-8',
                "X-CLIENT-ID": environment.PUBLIC_KEY,
                "X-CLIENT-SECRET": environment.SECRET_KEY,
                "x-language": environment.lang,
                "X-DEVICE-ID": `WEB-${uuid.v4()}`,
                "X-DEVICE-MODEL": `WEB-${uuid.v4()}`,
            });
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error.error.errors); // for demo purposes only
        return Promise.reject(error.error.errors);
    }


}