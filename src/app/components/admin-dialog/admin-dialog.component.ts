import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent {


  public form = this.fb.group( {
    name: new FormControl<string>('', [

    ]),
    description: new FormControl<string>('', [

    ]),
    img: new FormControl<string>('', [

    ]),
    time: new FormControl<string>('', [

    ]),
    date: new FormControl<string>('', [

    ]),
    price: new FormControl<number>(0, [

    ])
  });
  constructor(private fb: FormBuilder) {

  }


}
