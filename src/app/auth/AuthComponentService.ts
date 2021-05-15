import { Injectable } from "@angular/core";

enum AuthComponentSel { LOGIN, SIGNIN, RECOVERY };
@Injectable({
    providedIn: 'root'
})
export class AuthComponentService {
    comp: AuthComponentSel = AuthComponentSel.LOGIN;

    showLogin() {
        this.comp = AuthComponentSel.LOGIN;
    }
    showRecoveryPassword() {
        this.comp = AuthComponentSel.RECOVERY;
    }
    showRegister() {
        this.comp = AuthComponentSel.SIGNIN;
    }
    isLoginPanel() {
        return this.comp == AuthComponentSel.LOGIN;
    }
    isRecoveryPasswordPanel() {
        return this.comp == AuthComponentSel.RECOVERY;
    }
    isRegister() {
        return this.comp == AuthComponentSel.SIGNIN;
    }

}