import { Routes } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {ContactComponent} from "./contact/contact.component";
import {OffersComponent} from "./offers/offers.component";
import {BiographyComponent} from "./biography/biography.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

export const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'biography', component: BiographyComponent},
  {path: 'portfolio', component: PortfolioComponent}
];
