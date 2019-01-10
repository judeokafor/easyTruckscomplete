import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterializeModule } from "angular2-materialize";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexpageComponent } from './components/indexpage/indexpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from './components/chat/chat.component';
import { CommentComponent } from './components/comment/comment.component';


import { UserService } from './services/user.service';
import { DashboardcommentsComponent } from './components/dashboard/dashboardcomments/dashboardcomments.component';
import { DashboardnavbarComponent } from './components/dashboard/dashboardnavbar/dashboardnavbar.component';
import { DashboardfooterComponent } from './components/dashboard/dashboardfooter/dashboardfooter.component';
import { DashboardsectionComponent } from './components/dashboard/dashboardsection/dashboardsection.component';
import { AllquotesComponent } from './components/dashboard/allquotes/allquotes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexpageComponent,
    LoginComponent,
    RegisterComponent,
    QuotesComponent,
    DashboardComponent,
    ProfileComponent,
    ChatComponent,
    CommentComponent,
    DashboardcommentsComponent,
    DashboardnavbarComponent,
    DashboardfooterComponent,
    DashboardsectionComponent,
    AllquotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
