import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { DATE, Ticket } from 'src/app/shared/types/ticket.type';
import { sessions } from 'src/app/types/mocData';
import { ChooseSessionsService } from '../../services/choose-sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent {

  public tempSessions: Ticket[] = sessions;
  public chooseSessions: Ticket[] = [];
  public chooseDaySessions: Ticket[] = [];
  public allDate: DATE[] = [];
  public hour: string = "";
  public day!: string;
  public status: whatSelected = whatSelected.nothing;
  public favoriteSeason!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private choose: ChooseSessionsService
  ) {
    this.choose.hasTime = false;
    this.hour = "";
    this.choose.hour = this.hour;
  }

  filterSessionsByDay(val: Ticket) {
    let a = this.chooseSessions.filter((item, pos) => {
      return this.chooseSessions.indexOf(item) == pos;
    })
    this.chooseSessions = a;
  }

  selectedTime(event: any) {
    this.day = event.target.innerHTML;
    event.target.classList.add('active')
    this.tempSessions.forEach(val => {
      val.date?.forEach(value => {
        if(Number(this.day) === value.item.getDate()) {
          this.chooseSessions.push(val);
          this.filterSessionsByDay(val);
          if(!this.allDate.length){
            this.allDate.push(value);
          } else {
            if(!this.allDate.find((el) => el.item.getHours() === value.item.getHours())) this.allDate.push(value);
          }
        }
      })
    })
    this.allDate.sort((x, y) => x.item.getHours() - y.item.getHours());
  }

  booking(session: Ticket, allDate: DATE[]) : void {
    this.choose.status = this.status;
    this.choose.selectedSession = session;
    /* this.choose.reservedSeats.forEach(val => {
      if(val.day === this.day && val.hour === this.hour && val.name === val.name) {
        val.positions.forEach(value => {
          document.querySelectorAll('.seat')[value].setAttribute('src', 'assets/images/SeatBusy.svg')
        })
      }
    }) */
    this.router.navigate(['booking'], {relativeTo: this.activatedRoute})
  }

  chooseDay(event: any): void {
    this.allDate = [];
    this.chooseSessions = [];
    if(event.target.localName !== "li") return;
    if(document.querySelector('.active')) document.querySelector('.active')?.classList.remove('active');
    this.selectedTime(event);
    this.status = whatSelected.onlyDay;
    this.choose.day = this.day;
    this.choose.date = new Date(2023,1, Number(this.day));
    this.choose.hasTime = true;
    this.chooseDaySessions = this.chooseSessions;
  }



  choiceTime(event: any): void {
    let id: number;
    document.querySelectorAll('.radio').forEach((val, key) => {
      if(val.id === event.source.id){
        id = key;
        this.hour = val.textContent!.trim()

      }
    })

    let temp: Ticket[] = []
    this.chooseDaySessions.forEach(val => {
      val.date?.forEach(value => {
        if(value.item.getHours() === this.allDate[id].item.getHours() && value.item.getDate() === Number(this.day)) {
          temp.push(val);
        }
      })
    })
    this.choose.hour = this.hour;
    this.chooseSessions = temp;

  }
}

export enum whatSelected {
  onlyDay,
  all,
  nothing
}
