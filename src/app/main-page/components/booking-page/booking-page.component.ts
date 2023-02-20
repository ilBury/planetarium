import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {


  ngOnInit(): void {
    let content = document.querySelector('leftRight-seats');

    let seats = document.querySelectorAll('.booking-seats');
    for(let k = 0; k < seats.length; k++) {
      content?.append(seats[k]);

      for(let i = 7; i >= 0 ;  i--) {
        let seat = document.createElement('img');
        seat.setAttribute('src', `assets/images/Seat.png`);

        seat!.style.position = "relative";/*
        seat!.style.left = Math.pow(i*2, 1.6) + Math.pow(i*2, 1.6)   + "px"; */
        seat!.style.left = Math.pow(i*2.1, 1.9) - i + 40 + "px";

        seats[k].append(seat);
      }
      for(let i = 0; i < 8 ;  i++) {
        let seat = document.createElement('img');
        seat.setAttribute('src', `assets/images/Seat.png`);

        seat!.style.position = "relative";
        /* seat!.style.left = Math.pow(i*2, 1.6) + Math.pow(i*2, 1.6)   + "px"; */
        seat!.style.left = Math.pow(i*2.1, 1.9) - i + 40 + "px";

        seats[k].append(seat);
      }
    }



  }


}
