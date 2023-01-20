import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MatProgressBarModule
  ],
  exports: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
