import { Routes } from '@angular/router'
import { AboutUsComponent } from './about-us/about-us.component'
import { LoginComponent } from './auth/login/login.component'
import { SignUpComponent } from './auth/sign-up/signup.component'
import { BlogComponent } from './blog/blog.component'
import { CorporatePlanComponent } from './corporate-plan/corporate-plan.component'
import { FaqComponent } from './faq/faq.component'
import { HomeComponent } from './home/home.component'
import { IndividualPlanComponent } from './individual-plan/individual-plan.component'
import { HomeLayoutComponent } from './_layout/home-layout.component'
import { AuthLayoutComponent } from './_layout/auth/auth-layout.component'

export const AppRoutes: Routes = [
  // { path: 'login', component: LoginComponent, data: {animation: 'LoginPage'} },
  // { path: 'signup', component: SignUpComponent, data: {animation: 'SignupPage'}},
{

  path: '',
  component: HomeLayoutComponent  ,
  children: [
    { path: '', component: HomeComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'corporate', component: CorporatePlanComponent},
  { path: 'individual', component: IndividualPlanComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'blog', component: BlogComponent  },
  ]

},
{
  path: '',
  component: AuthLayoutComponent,
  children: [
    { path: 'login', component: LoginComponent, data: {animation: 'loginPage'} },
    { path: 'signup', component: SignUpComponent, data: {animation: 'signupPage'}},
  ]

}
]
