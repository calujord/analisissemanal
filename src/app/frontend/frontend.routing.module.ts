import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendBaseComponent } from './frontend-base/frontend-base.component';
import { FrontendContactComponent } from './frontend-contact/frontend-contact.component';
import { FrontendHomeComponent } from './frontend-home/frontend-home.component';
import { FrontendServicesComponent } from './frontend-services/frontend-services.component';
import { FrontendStaffComponent } from './frontend-staff/frontend-staff.component';
import { FrontendWhoareComponent } from './frontend-whoare/frontend-whoare.component';

const FrontendRouting: Routes = [
    // { path: 'fiscal-information', component: ProfileComponent, outlet: 'settings' },
    // { path: 'subscriptions', component: ProfileComponent, outlet: 'settings' },

    {
        path: '', component: FrontendBaseComponent,
        children: [
            { path: '', component: FrontendHomeComponent },
            { path: 'quienes-somos', component: FrontendWhoareComponent },
            { path: 'staff', component: FrontendStaffComponent },
            { path: 'productos', component: FrontendServicesComponent },
            { path: 'contactanos', component: FrontendContactComponent },
        ]
    },
];

@NgModule({

    imports: [
        RouterModule.forChild(FrontendRouting)
    ],
    declarations: [],
    exports: [
        RouterModule
    ],
})
export class FrontendRoutingModule { }
