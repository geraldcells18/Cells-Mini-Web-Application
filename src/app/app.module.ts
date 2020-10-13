import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponentComponent,
    CreateComponentComponent,
    SuccessComponentComponent,
    HomeComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
