import {Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LocalComponent} from './local/local.component';
export const routes: Routes = [

  {path: 'registration' , component: RegistrationComponent},
  {path: 'local' , component: LocalComponent}
];
