import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    FormsModule
  ],
  exports: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
