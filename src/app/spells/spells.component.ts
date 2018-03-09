import { FiltersComponent } from '../filters/filters.component';
import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell';
import { SPELLS } from '../5e-SRD-Spells';
import { SpellService } from '../spell.service';

// import { of } from 'rxjs/observable/of';
// import { SpellService } from '../spell.service';
// import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  spells: Spell[] = [];

  spell: Spell;

  constructor(private spellService: SpellService) { }

  ngOnInit() {

  }

  // getSpell(): void {
  //   this.spellService.getSpell()
  //     .subscribe(creatures => this.creatures = creatures);

  // }

  // getSpell(id: number): Observable<Spell> {
  //   return of(SPELLS.find(spell => spell.index === id));
  // }

}
