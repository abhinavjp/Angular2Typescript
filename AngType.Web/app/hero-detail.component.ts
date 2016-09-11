import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.Name}} details!</h2>
      <div><label>id: </label>{{hero.Id}}</div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="hero.Name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent
{
    @Input()
    hero: Hero;
}