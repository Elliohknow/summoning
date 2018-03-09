import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Spell } from './spell';
import { MessageService } from './message.service';
import { SPELLS } from './5e-SRD-Spells';
// import { MOCKSPELLS } from './mock-spells';

@Injectable()
export class SpellService {
  // circle: boolean;
  selectedSpell: Spell;
  spellVal: number;
  spells: Spell[];
  constructor(private messageService: MessageService) { }

  // getSpell(id: number): Observable<Spell> {
  //   return of(SPELLS.find(spell => spell[id] === id));
  // }

  setSpellVal(value: number) {
    this.spellVal = value;
  }
  getSpellVal() {
    return this.spellVal;
  }

  fetchSelectedSpell(): Observable<Spell> {
    // return of(this.selectedSpell = SPELLS[this.getSpellVal()]);
    // OR
    this.spells = SPELLS.filter((spell) => spell.index === this.getSpellVal());
    console.log(this.spells[0]);
    this.selectedSpell = this.spells[0];
    return of(this.selectedSpell);
  }

  // getSpells() {

  // }

}
