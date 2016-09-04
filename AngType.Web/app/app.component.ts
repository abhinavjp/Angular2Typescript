import { Component } from '@angular/core';

export class Hero
{
    Id: number;
    Name: string;
}

const HEROES: Hero[] = [
    { Id: 11, Name: 'Mr. Nice' },
    { Id: 12, Name: 'Narco' },
    { Id: 13, Name: 'Bombasto' },
    { Id: 14, Name: 'Celeritas' },
    { Id: 15, Name: 'Magneta' },
    { Id: 16, Name: 'RubberMan' },
    { Id: 17, Name: 'Dynama' },
    { Id: 18, Name: 'Dr IQ' },
    { Id: 19, Name: 'Magma' },
    { Id: 20, Name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.Id}}</span> {{hero.Name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.Name}} details!</h2>
      <div><label>Id: </label>{{selectedHero.Id}}</div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="selectedHero.Name" placeholder="Name"/>
      </div>
    </div>
    `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    wIdth: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})



export class AppComponent
{
    title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void
    {
        this.selectedHero = hero;
    }
}