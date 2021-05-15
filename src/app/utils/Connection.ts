import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AppConnect extends HttpClient {
    endPoint?: string;
    token?: string;

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
        return new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            "X-CLIENT-ID": environment.PUBLIC_KEY,
            "X-CLIENT-SECRET": environment.SECRET_KEY,
            "x-language": environment.lang,
            "X-DEVICE-ID": "WEB",
            "X-DEVICE-MODEL": "WEB-LOGIN",
            "X-TOKEN-ACCESS": this.token != null ? this.token! : ""
        });
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error.error.errors); // for demo purposes only
        return Promise.reject(error.error.errors);
    }


}