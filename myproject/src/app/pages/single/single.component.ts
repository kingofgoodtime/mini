import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  constructor(private Hero:HeroService){}
  ngOnInit()
  {
  let id=Number(localStorage.getItem('id'))
  // let singleDataArray =this.Hero.()
  // console.log(singleDataArray);
this.single = data.filter(e => e.id === id)
  console.log( "name",this.single)
}
}

