import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForwardsService {

  constructor(
    private router: Router
    ) { }


  forwardSession(activatedRoute: ActivatedRoute) {
    activatedRoute.parent ? this.router.navigate(['sessions'], {relativeTo: activatedRoute.parent})
    : this.router.navigate(['planetarium/sessions']);
  }

  forwardView() {
    this.router.navigate(['planetarium']);
  }

  forwardContacts(activatedRoute: ActivatedRoute) {
    activatedRoute.parent ? this.router.navigate(['abousUs'], {relativeTo: activatedRoute.parent})
    : this.router.navigate(['planetarium/aboutUs']);
  }

  forwardNews(activatedRoute: ActivatedRoute) {
    activatedRoute.parent ? this.router.navigate(['news'], {relativeTo: activatedRoute.parent})
    : this.router.navigate(['planetarium/news']);
  }

}
