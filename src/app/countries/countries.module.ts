import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './components/pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './components/pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './components/pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './components/pages/country-page/country-page.component';
import { CountriesRoutingModuleModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModuleModule,
    SharedModule,
  ]
})
export class CountriesModule { }
