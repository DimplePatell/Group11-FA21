import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'search-results/:className', component: SearchResultsComponent },
    { path: 'user/:username', component: UserprofileComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
