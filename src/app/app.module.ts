import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './pages/layout/layout.component'
import { LayoutModule } from './pages/layout/layout.module';
import { PipesModule } from './pipes/pipes.module';
import { ClientService } from './services/client.service';
import { ExtinguisherComponent } from './pages/extinguisher/extinguisher.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    ExtinguisherComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    PipesModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
