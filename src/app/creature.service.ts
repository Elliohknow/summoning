import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Creature } from './creature';
import { CREATURES } from './mock-creatures';
import { MessageService } from './message.service';

@Injectable()
export class CreatureService {
  circle:boolean;
  spell:string;
  minCR:number;
  maxCR:number;
  selectedCreatures:Creature[] = [];
  constructor(private messageService: MessageService) { }

  getCreature(id: number): Observable<Creature> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`CreatureService: fetched creature id=${id}`);
    return of(CREATURES.find(creature => creature.id === id));
  }

  setCircle(state:boolean){
    this.circle = state;
  }
  setSpell(value:string){
    this.spell = value;
  }
  getSpell(){
    return this.spell;
  }
  getCircle(): boolean{
    return this.circle;
  }

  setMinCR(value): void{
    this.minCR = value;
  }
  setMaxCR(value): void{
    this.maxCR = value;
  }

  shouldFilter(creature: Creature): boolean {
    if (this.spell === 'conjure_animals'){
      if (creature.tags.includes('beast')){
        return true;

      } else { //not a beast
        return false;
      }
    }    else return true;
  }


  addCreature(creature:Creature): void{
    this.messageService.add('CreatureService: added creature ' + creature.name);
    console.log(creature.instances)
    if(!creature.lastLetter) creature.lastLetter = "A"
    creature.lastLetter = creature.lastLetter+1
    var instance = {};
    instance['name'] = creature.name + " " + creature.lastLetter;
    instance['hp']=creature.stats.hp;
    if(!creature.instances) creature.instances=[];
    creature.instances.push(instance);
    creature.active=true;
  }

  removeAllInstancesAndDeactivate(creature:Creature):void{
    creature.instances = [];
    creature.active = false;
  }

  mod(score:number){
    console.log("calculating mod for " + score)
    return ((score-10)/2)
  }

  rollStat(creature:Creature, stat:string){
    this.messageService.add("CreatureService: " + creature.name + " rolled " +this.mod(creature.stats[stat]));
  }
  getActiveCreatures(): Observable<Creature[]>{
    this.messageService.add('CreatureService: fetched active creatures');
    return of(CREATURES.find(creature => {creature.instances !== 'undefined'}));
  }

  getCreatures(): Observable<Creature[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('CreatureService: fetched creatures');
    return of(CREATURES);
  }

}
