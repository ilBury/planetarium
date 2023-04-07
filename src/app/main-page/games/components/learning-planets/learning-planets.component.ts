import { Component } from '@angular/core';
import { ForwardsService } from 'src/app/shared/services/forwards.service';

@Component({
  selector: 'app-learning-planets',
  templateUrl: './learning-planets.component.html',
  styleUrls: ['./learning-planets.component.scss']
})
export class LearningPlanetsComponent {

  public namePlanets = [
    {name:'Марс', img: 'mars'},
    {name:'Венера', img: 'venus'},
    {name:'Юпитер', img: 'jupiter'},
    {name:'Земля', img: 'earth'},
    {name:'Нептун', img: 'neptun'},
    {name:'Уран', img: 'uran'},
    {name:'Сатурн', img: 'saturn'},
    {name:'Меркурий', img: 'mercury'}
  ]
  public numberNames = ['Марс','Венера','Юпитер','Земля','Нептун','Уран','Сатурн','Меркурий'].sort(()=>Math.random()-0.5);
  public saturn = 'Сатурн';
  constructor(private forward: ForwardsService) {
    console.log(this.numberNames)
  }

  forwardGames(): void {
    this.forward.forwardGames();
  }
}
