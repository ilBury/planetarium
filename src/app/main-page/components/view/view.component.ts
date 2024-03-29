import { ViewEncapsulation } from '@angular/compiler';
import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ForwardsService } from 'src/app/shared/services/forwards.service';
import { News } from 'src/app/shared/types/news.type';
import { news, Questions, questions } from 'src/app/types/mocData';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements AfterViewInit {

  @Input() viewNews: News[] = news;
  public questionsView: Questions[] = questions;

  constructor(
    private forwards: ForwardsService,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngAfterViewInit (): void {
    let news = document.querySelector('.news');
    for(let i = 0; i < 4; i++) {
      let oneNews = document.createElement('div');
      oneNews.classList.add('new');
      oneNews.style.cssText = `
        width: 23%;
        display: flex;
        flex-direction: column;
      `

      let img = document.createElement('img');
      let newTags = document.createElement('div');
      newTags.classList.add('new-tags');
      newTags.style.cssText = `
        color: #E7D795;
        padding: 10px 0;
        font-size: 12px;
      `

      let imgEllipse = document.createElement('img');
      imgEllipse.setAttribute('src', 'assets/images/ellipse.png');
      imgEllipse.style.cssText = `
        padding-right: 5px;
      `

      let header = document.createElement('span');


      let content = document.createElement('span');

      content.style.cssText = `
        width: 80%;
      `
      this.viewNews.forEach((val, index) => {
        if(val.content) {
          img.setAttribute('src', `${this.viewNews[index].picture![i]}`);
          content.innerHTML = this.viewNews[index].content![i];
          header.innerHTML = this.viewNews[index].header;
        }
      })

      newTags.append(imgEllipse);
      newTags.append(header);
      oneNews.append(img);
      oneNews.append(newTags);
      oneNews.append(content);
      news?.append(oneNews);
    }

  }


  news(): void {
    this.forwards.forwardNews(this.activatedRoute);
  }

  forwardSession(): void {
    this.forwards.forwardSession(this.activatedRoute);
  }

}
