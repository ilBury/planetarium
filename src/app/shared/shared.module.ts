import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatProgressBarModule
  ],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
