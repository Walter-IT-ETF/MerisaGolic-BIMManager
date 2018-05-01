import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';
import { AuthenticationModule } from './modules/authentication.module';
import { ProjectComponent } from './modules/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
