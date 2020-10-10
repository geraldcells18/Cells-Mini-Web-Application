import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { FormsModule } from '@angular/forms';
import { SuccessComponentComponent } from './success-component/success-component.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponentComponent,
    CreateComponentComponent,
    SuccessComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
