import { Routes } from '@angular/router';

import { AfricaPageComponent } from './pages/africa-page/africa-page.component';
import { EuropePageComponent } from './pages/europe-page/europe-page.component';
import { AsiaPageComponent } from './pages/asia-page/asia-page.component';
import { AmericasPageComponent } from './pages/americas-page/americas-page.component';
import { OceaniaPageComponent } from './pages/oceania-page/oceania-page.component';

import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'africa' },
  { path: 'africa', component: AfricaPageComponent },
  { path: 'europe', component: EuropePageComponent },
  { path: 'asia', component: AsiaPageComponent },
  { path: 'americas', component: AmericasPageComponent },
  { path: 'oceania', component: OceaniaPageComponent },
  { path: 'countries', component: CountryListComponent },
  { path: 'country/:id', component: CountryDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', redirectTo: 'africa' }
];
