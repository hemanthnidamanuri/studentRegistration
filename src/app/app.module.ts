import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './route';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { LocalComponent } from './local/local.component';
import { HooksComponent } from './hooks/hooks.component';
import { PipesComponent } from './pipes/pipes.component';
import { GenderPipe } from './gender.pipe';
import { PhonePipe } from './phone.pipe';
import { BootstrapPractiseComponent } from './bootstrap-practise/bootstrap-practise.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    LocalComponent,
    HooksComponent,
    PipesComponent,
    GenderPipe,
    PhonePipe,
    BootstrapPractiseComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
