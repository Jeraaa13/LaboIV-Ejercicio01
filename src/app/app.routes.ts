import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BindeosComponent } from './components/bindeos/bindeos.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = 
[
    {path: "login", component: LoginComponent},
    {path: "bindeos", component: BindeosComponent },
    {path: "bienvenido", component: BienvenidoComponent },
    {path: "error", component: ErrorComponent}
];