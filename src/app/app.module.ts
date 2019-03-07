import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { MaterializeModule } from "angular2-materialize";
import { Angular4PaystackModule } from 'angular4-paystack';
import { FlashMessagesModule } from 'angular2-flash-messages';
// import { AgmCoreModule } from '@agm/core';

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
import { CommentComponent } from './components/comment/comment.component';

import { UserService } from './services/user.service';

import { DashboardcommentsComponent } from './components/dashboard/dashboardcomments/dashboardcomments.component';
import { DashboardnavbarComponent } from './components/dashboard/dashboardnavbar/dashboardnavbar.component';
import { DashboardfooterComponent } from './components/dashboard/dashboardfooter/dashboardfooter.component';
import { DashboardsectionComponent } from './components/dashboard/dashboardsection/dashboardsection.component';
import { AllquotesComponent } from './components/dashboard/allquotes/allquotes.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FaqComponent } from './components/FAQ/faq.component';
import { CsComponent } from './components/commentslider/cs.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component'

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
    CommentComponent,
    DashboardcommentsComponent,
    DashboardnavbarComponent,
    DashboardfooterComponent,
    DashboardsectionComponent,
    AllquotesComponent,
    QuotationComponent,
    ContactusComponent,
    FaqComponent,
    CsComponent,
    ImageSliderComponent,
    SuccessPageComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    Angular4PaystackModule,
    FlashMessagesModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyC65bB_5bzEXEvvZpeNr7_TKwJ90FANtqA'
    // }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
