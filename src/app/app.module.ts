import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

import { UsersServiceService } from './Services/users-service.service';
import { CounterService } from './Services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UsersServiceService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
