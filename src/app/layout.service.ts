import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    private _isOpenSideBar: boolean = true;
    private _isOpenNavBar: boolean = true;
    constructor() {

    }
    showSideBar() {
        this._isOpenSideBar = true;
    }
    hideSideBar() {
        this._isOpenSideBar = false;
    }
    showNavBar() {
        this._isOpenNavBar = true;
    }
    hideNavBar() {
        this._isOpenNavBar = false;
    }
    isOpenSideBar(): boolean {
        return this._isOpenSideBar;
    }
    isOpenNavBar(): boolean {
        return this._isOpenNavBar;
    }
    login() {
        this.showNavBar();
        this.showSideBar();
    }
    logout() {
        this.hideNavBar();
        this.hideSideBar();
    }



}