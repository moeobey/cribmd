import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CorporatePlanComponent } from './corporate-plan/corporate-plan.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { IndividualPlanComponent } from './individual-plan/individual-plan.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppRoutes } from './routes';
import { HomeLayoutComponent } from './_layout/home-layout.component';
import { AuthLayoutComponent } from './_layout/auth/auth-layout.component';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { faCapsules, faBaby, faStethoscope, faFemale, faEyeDropper,
  faTooth, faTint, faHeartbeat, faBriefcaseMedical, faVideo, faPills,
  faShieldAlt, faMapMarkerAlt, faPhoneAlt, faUser, faDollarSign, faHome,
   faTimes, faCheck, faFlag, faMoneyBill, faHospital  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter,  faLinkedinIn, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FooterComponent } from './footer/footer.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { SwiperModule } from 'swiper/angular';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    AboutUsComponent,
    CorporatePlanComponent,
    IndividualPlanComponent,
    FaqComponent,
    BlogComponent,
    HomeLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    AppLogoComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    SwiperModule,
    MatInputModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  //export angular fort awesome icons
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCapsules, faBaby, faStethoscope, faFemale, faEyeDropper, faTooth, faTint,
      faHeartbeat,faBriefcaseMedical, faVideo, faPills, faShieldAlt, faFacebookF, faTwitter, faLinkedinIn,
       faInstagram, faYoutube,faMoneyBill, faHospital, faMapMarkerAlt,faFlag, faPhoneAlt, faCheck, faUser,faTimes, faDollarSign, faHome);
  }

}
