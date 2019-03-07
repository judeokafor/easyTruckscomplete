import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexpageComponent } from './components/indexpage/indexpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CommentComponent } from './components/comment/comment.component';
import { DashboardsectionComponent } from "./components/dashboard/dashboardsection/dashboardsection.component";
import { DashboardcommentsComponent } from "./components/dashboard/dashboardcomments/dashboardcomments.component";
import { AllquotesComponent } from "./components/dashboard/allquotes/allquotes.component";
import { QuotationComponent } from "./components/quotation/quotation.component";
import { SuccessPageComponent } from "./components/success-page/success-page.component";
import { UserDashboardComponent } from "./components/user-dashboard/user-dashboard.component";

const routes: Routes = [
    
{
  path: '', component: IndexpageComponent
},
{
  path: 'register', component: RegisterComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'dashboard', component: DashboardComponent
},
{
  path: 'quotes', component: QuotesComponent
},
{ 
  path: 'quotation', component : QuotationComponent
},
{
  path: 'profile', component: ProfileComponent
},
{
  path: 'comment', component: CommentComponent
},
{
  path: 'dashboardsection', component: DashboardsectionComponent
},
{
  path: 'dashboardcomment', component: DashboardcommentsComponent
},
{
  path: 'allquotes', component: AllquotesComponent
},
{
  path: 'success', component: SuccessPageComponent
},

{
  path: 'userdashboard', component: UserDashboardComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
