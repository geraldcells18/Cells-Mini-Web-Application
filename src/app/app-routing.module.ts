import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { RouteGuard } from './guards/route.guard';
import { SuccessComponentComponent } from './success-component/success-component.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'success',
    component: SuccessComponentComponent,
    canActivate: [RouteGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
