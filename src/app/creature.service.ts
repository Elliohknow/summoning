import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Creature } from './creature';
// import { CREATURES } from './mock-creatures';
import { CREATURES } from './5e-SRD-Monsters';
import { MessageService } from './message.service';
// import { SPELLS } from './summoning-spells-alt';
import { Spell } from './spell';
import { SPELLS } from './5e-SRD-Spells';


@Injectable()
export class CreatureService {
  circle: boolean;
  spell: string;
  minCR: number;
  maxCR: number;
  selectedCreatures: Creature[] = [];
  constructor(private messageService: MessageService) { }

  getCreature(id: number): Observable<Creature> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`CreatureService: fetched creature id=${id}`);
    return of(CREATURES.find(creature => creature.index === id));
  }

  setCircle(state: boolean) {
    this.circle = state;
  }
  setSpell(value: string) {
    this.spell = value;
  }
  getSpell() {
    return this.spell;
  }
  getCircle(): boolean {
    return this.circle;
  }

  setMinCR(value): void {
    console.log('min cr set to ', value);
    this.minCR = value;
  }
  setMaxCR(value): void {
    console.log('max cr set to ', value);
    this.maxCR = value;
  }

  shouldFilter(creature: Creature): boolean {
    switch (this.spell) {
      case 'conjure_animals': {
        if (creature.type !== 'beast') {
          return false;
        } else if (creature.challenge_rating > 2
          || creature.challenge_rating < 0.25) {
          return false;
        }
        break;
      }
      case 'conjure_forest_friends': {
        if (creature.type !== 'beast') {
          return false;
        } else if (creature.challenge_rating > 0.5) {
          return false;
        }
        break;
      }
      case 'conjure_minor_elementals': {
        if (creature.type !== 'elemental') {
          return false;
        } else if (creature.challenge_rating > 2) {
          return false;
        }
        break;
      }
      case 'conjure_elemental': {
        if (creature.type !== 'elemental') {
          return false;
        } else if (creature.challenge_rating > 5) {
          return false;
        }
        break;
      }
      case 'conjure_fey': {
        if (creature.type !== 'fey'
        && creature.type !== 'beast') {
          return false;
        } else if (creature.challenge_rating > 6
          || creature.challenge_rating < 3) {
          return false;
        }
        break;
      }
      case 'conjure_woodland_beings': {
        if (creature.type !== 'fey') {
          return false;
        } else if (creature.challenge_rating > 2
          || creature.challenge_rating < 0.25) {
          return false;
        }
        break;
      }
      case 'conjure_celestial': {
        if (creature.type !== 'celestial') {
          return false;
        } else if (creature.challenge_rating > 4) {
          return false;
        }
        break;
      }
      case 'find_steed': {
        if (creature.type !== 'beast') {
          return false;
        } else if (creature.challenge_rating > 0.5
          || creature.challenge_rating < 0.125) {
          return false;
        }
        break;
      }
      case 'planar_ally': {
        if (creature.type !== 'celestial'
        && creature.type !== 'elemental'
        && creature.type !== 'fiend') {
          return false;
        }
        break;
      }
      case 'animate_dead': {
        if (creature.type !== 'undead') {
          return false;
        } else if (creature.challenge_rating > 2) {
          return false;
        }
        break;
      }
    }
    // const good = true;
    // if (this.spell === 'conjure_animals' && creature.type !== 'beast') {
    //   return false;
    // }
    if (creature.challenge_rating < this.minCR
      || creature.challenge_rating > this.maxCR) {
      return false;
    }
    // return good;
    return true;
  }


  addCreature(creature: Creature): void {
    this.messageService.add('CreatureService: added creature ' + creature.name);
    console.log(creature.instances);
    if (!creature.lastLetter) { creature.lastLetter = 'A'; }
    creature.lastLetter = creature.lastLetter + 1;
    const instance = {};
    instance['name'] = creature.name + ' ' + creature.lastLetter;
    instance['hp'] = creature.hit_points;
    if (!creature.instances) { creature.instances = []; }
    creature.instances.push(instance);
    creature.active = true;
  }

  removeAllInstancesAndDeactivate(creature: Creature): void {
    creature.instances = [];
    creature.active = false;
  }

  mod(score: number) {
    console.log('calculating mod for ' + score);
    return ((score - 10) / 2);
  }

  rollStat(creature: Creature, stat: string) {
    // this.messageService.add("CreatureService: " + creature.name + " rolled " +this.mod(creature.stats[stat]));
  }
  /*
  getActiveCreatures(): Observable<Creature[]>{
    this.messageService.add('CreatureService: fetched active creatures');
    return of(CREATURES.find(creature => {creature.instances !== 'undefined'}));
  }*/

  getCreatures(): Observable<Creature[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('CreatureService: fetched creatures');
    return of(CREATURES);
  }

}
