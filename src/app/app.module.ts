import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './core/interceptor/global.interceptor';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
