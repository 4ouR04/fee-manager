import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllComponent } from './dashboard/all/all.component';
import { WithBalComponent } from './dashboard/with-bal/with-bal.component';
import { WithoutBalComponent } from './dashboard/without-bal/without-bal.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddStudentComponent } from './dashboard/add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { ShortenPipe } from './dashboard/shorten.pipe';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivateChild: [AuthGuard],
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AllComponent,
      },
      {
        path: 'withbal',
        component: WithBalComponent,
      },
      {
        path: 'withoutbal',
        component: WithoutBalComponent,
      },
      {
        path: 'addstudent',
        component: AddStudentComponent,
      },
    ],
  },
  {
    path: 'Error',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'Error',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    AllComponent,
    WithBalComponent,
    WithoutBalComponent,
    PageNotFoundComponent,
    AddStudentComponent,
    ShortenPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
