import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChooseSessionsService } from 'src/app/main-page/services/choose-sessions.service';
import { AuthService } from 'src/app/services/auth.service';
import { sessions, users } from 'src/app/types/mocData';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements AfterViewInit, OnInit {
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource = new MatTableDataSource<any>(this.choose.sessionsForAdmin);
  public sessionsCount = this.choose.sessionsForAdmin.length;
  public user!: string;
  public personalUsers = users;
  public discount!: number;
  public avatarBody!: string;
  public delAndEditBtns: boolean = true;
  public addBtn: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private choose: ChooseSessionsService,
    private auth: AuthService,
    private dialog: MatDialog
  ) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  ngOnInit(): void {
    for(let i = 0; i < this.personalUsers.length; i++) {
      if(this.personalUsers[i].email === localStorage.getItem('userEmail')) {
        this.user = this.personalUsers[i].login;
        this.discount = this.personalUsers[i].discount;
        this.avatarBody = this.personalUsers[i].avatarBody;
      }
    }
  }

  logout(): void {
    this.auth.logout();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  select(event: any): void {

    document.querySelectorAll('.rows').forEach(val => {
      if(!(val === event.target.parentElement)) val.classList.remove('select');
    })

    event.target.parentElement.classList.toggle('select');
    if(document.querySelector('.select')) {
      this.addBtn = true;
      this.delAndEditBtns = false;
    } else {
      this.addBtn = false;
      this.delAndEditBtns = true;
    }

  }
}
