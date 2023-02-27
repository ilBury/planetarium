import { Component, OnInit, ElementRef } from '@angular/core';
import { BookedTicket, DATE, Ticket } from 'src/app/shared/types/ticket.type';
import { ChooseSessionsService } from '../../services/choose-sessions.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit {

  public selectedSession!: Ticket;
  public allDate: DATE[] = [];
  public month: string[] = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]
  public day: string[] = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ]
  public isPay: boolean = false;
  public isSelected: boolean = false;
  public countSeats: number = 0;
  public reservedSeats: BookedTicket[] = this.choose.reservedSeats;
  private tempBookedSeat: BookedTicket = {day: '', hour: '', name: '', positions: []};
  public currentHour = String(this.choose.currentHour).trim();

  constructor(
    private choose: ChooseSessionsService,
    private el: ElementRef
  ) {

  }

  ngOnInit(): void {
    let content = document.querySelector('leftRight-seats');
    let seats = document.querySelectorAll('.booking-seats');
    for(let k = 0; k < seats.length; k++) {
      content?.append(seats[k]);

      for(let i = 7; i >= 0 ;  i--) {
        let seat = document.createElement('img');
        seat.classList.add('seat');
        seat.style.cursor = 'pointer';
        seat.setAttribute('src', `assets/images/Seat.svg`);
        seat.addEventListener("click", (event) =>  this.bookingSeat(event));
        seat!.style.position = "relative";
        seat!.style.left = Math.pow(i*2.1, 1.9) - i + 40 + "px";
        seats[k].append(seat);
      }
      for(let i = 0; i < 8 ;  i++) {
        let seat = document.createElement('img');
        seat.classList.add('seat');
        seat.style.cursor = 'pointer';
        seat.setAttribute('src', `assets/images/Seat.svg`);
        seat.addEventListener("click", (event) =>  this.bookingSeat(event));
        seat!.style.position = "relative";
        seat!.style.left = Math.pow(i*2.1, 1.9) - i + 40 + "px";
        seats[k].append(seat);
      }
    }
    this.selectedSession = this.choose.selectedSession;

    for(let i = 0; i < this.choose.allDate.length; i++) {
      for(let j = 0; j < this.selectedSession.date!.length; j++) {
        if(this.choose.allDate[i].item.toLocaleTimeString([], {hour: 'numeric' , minute: '2-digit'}) === this.selectedSession.date![j].item.toLocaleTimeString([], {hour: 'numeric' , minute: '2-digit'})) {

          this.allDate.push(this.choose.allDate[i]);

          break;
        }
      }
    }

    console.log(this.choose.reservedSeats);
    console.log(this.choose.day, this.currentHour, this.choose.selectedSession.name);
    for(let item of this.choose.reservedSeats) {
      if(item.day === this.choose.day &&
        item.hour === String(this.choose.currentHour).trim() &&
        item.name === this.choose.selectedSession.name) {
        let tempSeat = document.querySelectorAll('.seat');
        tempSeat.forEach((value,index) => {

          item.positions.forEach((itemValue, itemIndex) => {
            if(index === itemValue) {
              value.setAttribute('src', `assets/images/SeatBusy.svg`);
              value.removeEventListener("click", (event) =>  this.bookingSeat(event));
            }
          })

        })
      }

    }
    console.log(this.selectedSession, this.allDate);
  }

  chooseHour(event: any): void {
    let disable = document.querySelectorAll('.active');
    if(disable) {
      disable.forEach(value => {
        value.classList.remove('active');
        value.classList.add('disable');
      })
    }
    event.target.classList.add('active');
    event.target.classList.remove('disable');
    this.currentHour = String(event.target.innerHTML).trim();
    /* this.tempBookedSeat.day = this.choose.day;
    this.tempBookedSeat.hour = String(event.target.innerHTML).trim();
    this.tempBookedSeat.name = this.selectedSession.name; */
    let flag = false;
    for(let item of this.choose.reservedSeats) {

      if(item.day === this.choose.day &&
        item.hour === String(event.target.innerHTML).trim() &&
        item.name === this.choose.selectedSession.name) {
        let tempSeat = document.querySelectorAll('.seat');
        tempSeat.forEach((value,index) => {
          flag = true;
          item.positions.forEach((itemValue, itemIndex) => {
            if(index === itemValue) {
              value.setAttribute('src', `assets/images/SeatBusy.svg`);
              value.removeEventListener("click", (event) =>  this.bookingSeat(event));
            } else {
              value.setAttribute('src', `assets/images/Seat.svg`);

             /*  value.addEventListener("click", (event) =>  this.bookingSeat(event)); */
            }
          })

        })
      }
      else {
        let tempSeat = document.querySelectorAll('.seat');
        tempSeat.forEach((value, index) => {

          value.setAttribute('src', `assets/images/Seat.svg`);
          value.addEventListener("click", (event) =>  this.bookingSeat(event));

        })
      }

    }


  }

  bookingSeat(event: any): void {

    console.log(event.target)
    if(event.target.getAttribute('src') === `assets/images/SeatSelected.svg`) {
      event.target.setAttribute('src', `assets/images/Seat.svg`);
    } else if(event.target.getAttribute('src') === `assets/images/Seat.svg`) {
      event.target.setAttribute('src', `assets/images/SeatSelected.svg`);
    }
    let tempSeat = document.querySelectorAll('.seat');
    tempSeat.forEach(value => {
      if(value.getAttribute('src') === `assets/images/SeatSelected.svg`) this.isSelected = true;

    })
    console.log(this.tempBookedSeat)
  }

  bookingTicket(): void {
    if(this.isSelected) {
      this.isPay = true;
      let tempSeat = document.querySelectorAll('.seat');
      tempSeat.forEach(value => {
        if(value.getAttribute('src') === `assets/images/SeatSelected.svg`) this.countSeats++;
      })
    }
  }

  buyTicket(): void {
    let tempSeat = document.querySelectorAll('.seat');
    this.tempBookedSeat.day = this.choose.day;
    this.tempBookedSeat.hour = this.currentHour;
    this.tempBookedSeat.name = this.selectedSession.name;

    tempSeat.forEach((value,index) => {
      if(value.getAttribute('src') === `assets/images/SeatSelected.svg`){
        value.setAttribute('src', `assets/images/SeatBusy.svg`);
        value.removeEventListener("click", (event) =>  this.bookingSeat(event));

        this.tempBookedSeat.positions.push(index);


      }
    })
    let flag = false;
    for(let item of this.choose.reservedSeats) {
      if(item.day === this.tempBookedSeat.day &&
        item.hour === this.tempBookedSeat.hour &&
        item.name === this.tempBookedSeat.name) {
          this.tempBookedSeat.positions.forEach(value => {
            item.positions.push(value);
          })
        flag = true;
      }
    }
    if(!flag) this.choose.reservedSeats.push(this.tempBookedSeat);

    console.log(this.choose.reservedSeats);
    this.tempBookedSeat = {day: '', hour: '', name: '', positions: []};
    this.isPay = false;;
  }

}
