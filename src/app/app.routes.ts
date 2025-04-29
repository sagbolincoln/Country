import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'countries', component: CountryListComponent },
  { path: 'country/:id', component: CountryDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', redirectTo: '' }
];