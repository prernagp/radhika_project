import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule,NbPasswordAuthStrategy } from '@nebular/auth';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './sharepages/footer/footer.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    AppRoutingModule,
    FormsModule,
    NbSidebarModule,
    NbButtonModule,
    HttpClientModule,
    NbMenuModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          login: {
            alwaysFail: false,
            redirect: {
              success: '/home',
              failure: '/home', // stay on the same page
            },
          },

          register: {
            redirect: {
              success: '/home',
              failure: '/home', // stay on the same page
            },
          }
        }),
      ],
      forms: {},
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
