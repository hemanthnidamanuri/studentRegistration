import {Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LocalComponent} from './local/local.component';
import {HooksComponent} from './hooks/hooks.component';
import {PipesComponent} from './pipes/pipes.component';
export const routes: Routes = [

  {path: 'registration' , component: RegistrationComponent},
  {path: 'local' , component: LocalComponent},
  {path: 'hooks' , component: HooksComponent},
  {path: 'pipes' , component: PipesComponent}
];
