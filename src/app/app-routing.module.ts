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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
