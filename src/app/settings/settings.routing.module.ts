import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CardManagerComponent } from '../cards/card-manager/card-manager.component';
import { CreditcardComponent } from '../home/profile/creditcard/creditcard.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsManageComponent } from './settings-manage/settings-manage.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const SettingsRouting: Routes = [
    {
        path: '', component: SettingsManageComponent,
        children: [
            { path: 'fiscal-information', component: ProfileComponent },
            { path: 'subscription', component: SubscriptionComponent },
            { path: 'creditcard', component: CardManagerComponent },
            { path: 'payment', component: PaymentComponent },
        ]
    },
];

@NgModule({

    imports: [
        RouterModule.forChild(SettingsRouting)
    ],
    declarations: [],
    exports: [
        RouterModule
    ],
})
export class SettingsRoutingModule { }