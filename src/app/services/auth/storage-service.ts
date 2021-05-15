import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { BusinessAuthentication } from "src/app/models/business/business-authentication";
import { Session } from "src/app/models/business/session";

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private localStorageService;
    private businessAuthentication?: BusinessAuthentication;

    constructor(private router: Router) {
        this.localStorageService = localStorage;
        this.businessAuthentication = this.loadSessionData();
    }
    setCurrentSession(session: BusinessAuthentication): void {
        this.businessAuthentication = session;
        this.localStorageService.setItem('currentBusiness', JSON.stringify(session));
    }

    loadSessionData(): any {
        if (this.localStorageService.getItem('currentBusiness') != null) {
            return JSON.parse(this.localStorageService.getItem('currentBusiness') as string);
        }
    }

    getCurrentSession(): any {
        return this.businessAuthentication != null ? this.businessAuthentication : null;
    }

    removeCurrentSession(): void {
        this.localStorageService.removeItem('currentBusiness');
        this.businessAuthentication = undefined;
    }

    isAuthenticated(): boolean {
        return (this.getCurrentToken() != null) ? true : false;
    };

    getCurrentToken(): any {
        return this.businessAuthentication != null ? this.businessAuthentication?.token : null;
    };

    logout(): void {
        this.removeCurrentSession();
        this.router.navigate(['/login']);
    }

}