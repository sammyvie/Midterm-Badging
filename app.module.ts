import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { App } from './app';
import { AppRoutingModule } from './app-routing.module';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { Navbar } from './shared/navbar/navbar';

import { TruncatePipe } from './pipes/truncate-pipe';
import { FilterPostsPipe } from './pipes/filter-posts-pipe';

@NgModule({
  declarations: [], // nothing here because all are standalone
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    App,            // standalone component
    Home,           // standalone component
    About,          // standalone component
    Services,       // standalone component
    Contact,        // standalone component
    Navbar,         // standalone component
    TruncatePipe,   // standalone pipe
    FilterPostsPipe // standalone pipe
  ],
  providers: [],
  bootstrap: [App] // root component
})
export class AppModule {}
