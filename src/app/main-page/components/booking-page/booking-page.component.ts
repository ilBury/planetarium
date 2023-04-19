import { Component, OnInit, ElementRef, OnDestroy, Input } from '@angular/core';
import { BookedTicket, DATE, Ticket } from 'src/app/shared/types/ticket.type';
import { ChooseSessionsService } from '../../services/choose-sessions.service';
import { whatSelected } from '../sessions/sessions.component';
import { FormControl } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ForwardsService } from 'src/app/shared/services/forwards.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent implements OnInit, OnDestroy {

  public selectedSession!: Ticket;


  public day: string = this.choose.day;
  @Input() date = new FormControl(this.choose.date);

  public reservedSeats: BookedTicket[] = this.choose.reservedSeats;

  public status = this.choose.status;
  public allTime: DATE[] = [];
  public hour = this.choose.hour;
  public hasTime: boolean = this.choose.hasTime;
  public get Status(): typeof whatSelected {
    return whatSelected;
  }
  public countSeats: number[] = [];


  constructor(
    private choose: ChooseSessionsService,
    private el: ElementRef,
    private router: Router,
    private forwards: ForwardsService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.choose.isPaymentComplete = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      data: {hour: this.hour, day: this.day, seats: this.countSeats, session: this.selectedSession, confirm: this.confirm}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cleansingSeats();
      if(!this.choose.isPaymentComplete) {
        this.reservedSeats.forEach(val => {
          if(val.day === this.day && val.hour === this.hour && val.name === val.name) {
            val.positions.forEach(value => {
              document.querySelectorAll('.seat')[value].setAttribute('src', 'assets/images/SeatBusy.svg')
            })
          }
        })
      }
      this.countSeats = [];
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnDestroy(): void {
    this.choose.date = undefined!;
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
    this.selectedSession.date?.forEach(val => {
      if(val.item.getDate() === Number(this.day)) {
        this.allTime.push(val);
      }
    })
    if(this.hour && this.day && this.selectedSession) {
      this.reservedSeats.forEach(val => {
        if(val.day === this.day && val.hour === this.hour && val.name === val.name) {
          val.positions.forEach(value => {
            document.querySelectorAll('.seat')[value].setAttribute('src', 'assets/images/SeatBusy.svg')
          })
        }
      })
    }

  }

  apply(event: any) {
    this.allTime = [];
    this.date = new FormControl(event.value);
    this.selectedSession.date?.forEach(val => {
      if(val.item.getDate() === this.date.value?.getDate()) {
        this.day = String(val.item.getDate());
        this.allTime.push(val)
      }
    })
    this.allTime.length === 0 ? this.hasTime = false : this.hasTime = true;
    this.cleansingSeats();
    this.hour = "";
  }

  chooseHour(event: any) {
    this.hour = event.target.innerHTML.trim();
    this.cleansingSeats();
    this.reservedSeats.forEach(val => {
      if(val.day === this.day && val.hour === this.hour && val.name === val.name) {
        val.positions.forEach(value => {
          document.querySelectorAll('.seat')[value].setAttribute('src', 'assets/images/SeatBusy.svg')
        })
      }
    })
  }

  cleansingSeats() {
    document.querySelectorAll('.seat').forEach(val => {
      val.setAttribute('src', 'assets/images/Seat.svg');
    })
  }

  active(item: any) {
    if(this.hour !== item + ':00') {
      return '';
    } else {
      return 'timeSelected';
    }
  }

  bookingSeat(event: any) {
    if(!this.hour || !this.day || !this.selectedSession){ this.openSnackBar('Укажите день и время', 'ок'); return;}
    if(event.target.getAttribute('src') === 'assets/images/SeatSelected.svg') {
      event.target.setAttribute('src', 'assets/images/Seat.svg');
      document.querySelectorAll('.seat').forEach((val, key) => {
        if(val === event.target) {
          this.countSeats.forEach((value, index) => {
            if(value === key) {
              this.countSeats.splice(index, 1);
            }
          })
        }
      })
      return;
    }
    if(event.target.getAttribute('src') !== 'assets/images/Seat.svg') return;
    document.querySelectorAll('.seat').forEach((val, key) => {
      if(val === event.target) {
        this.countSeats.push(key);
      }
    })
    event.target.setAttribute('src', 'assets/images/SeatSelected.svg');
  }

  pay() {
    if(this.countSeats.length === 0){ this.openSnackBar('Укажите место посадки ', 'ок') ;return;}


    this.openDialog();
  }

  public confirm = () => {
    let tempticket: BookedTicket = {name: this.selectedSession.name, hour: this.hour, day: this.day, positions: this.countSeats};
    this.reservedSeats.push(tempticket);
    this.forwards.forwardSession(this.activatedRoute);
    this.choose.reservedSeats = this.reservedSeats;
  }



}
