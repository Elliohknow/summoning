import { Component, OnInit } from '@angular/core';
import { CreatureService } from '../creature.service';
import { SpellsComponent } from '../spells/spells.component';
import { Spell } from '../spell';
import { SPELLS } from '../5e-SRD-Spells';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  checked = false;
  // spells: Spell[];
  selectedSpellVal: number;

  crs = [
    [0, '0'],
    [0.125, '1/8'],
    [0.25, '1/4'],
    [0.5, '1/2'],
    [1, '1'],
    [2, '2'],
    [3, '3'],
    [4, '4'],
    [5, '5'],
    [6, '6']
  ];
  minCrSelect;
  maxCrSelect;
  constructor(private creatureService: CreatureService, private spellService: SpellService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.creatureService.setCircle(event.checked);
    console.log(event);
  }
  // whoops, need to change this, or move most of it over to creature.service
  spellChanged(event) {
    console.log(event);
    this.creatureService.setSpell(event.value);
    if (event.value === 'conjure_animals') {
      this.minCrSelect = 0.25;
      this.maxCrSelect = 2;
      this.selectedSpellVal = 50;
    } else if (event.value === 'conjure_forest_friends') {
      this.minCrSelect = 0;
      this.maxCrSelect = 0.5;
      this.selectedSpellVal = 306;
    } else if (event.value === 'conjure_elemental') {
      this.minCrSelect = 2;
      this.maxCrSelect = 5;
      this.selectedSpellVal = 52;
    } else if (event.value === 'conjure_minor_elementals') {
      this.minCrSelect = 0;
      this.maxCrSelect = 2;
      this.selectedSpellVal = 54;
    } else if (event.value === 'conjure_fey') {
      this.minCrSelect = 0;
      this.maxCrSelect = 6;
      this.selectedSpellVal = 53;
    } else if (event.value === 'conjure_woodland_beings') {
      this.minCrSelect = 0;
      this.maxCrSelect = 2;
      this.selectedSpellVal = 55;
    } else if (event.value === 'conjure_celestial') {
      this.minCrSelect = 1;
      this.maxCrSelect = 4;
      this.selectedSpellVal = 51;
    } else if (event.value === 'find_steed') {
      this.minCrSelect = 0.125;
      this.maxCrSelect = 0.5;
      this.selectedSpellVal = 106;
    } else if (event.value === 'planar_ally') {
      this.minCrSelect = 1;
      this.maxCrSelect = 20;
      this.selectedSpellVal = 207;
    } else if (event.value === 'animate_dead') {
      this.minCrSelect = 0.25;
      this.maxCrSelect = 2;
      this.selectedSpellVal = 8;
    } else if (event.value === 'find_familiar') {
      this.minCrSelect = 0;
      this.maxCrSelect = 0;
      this.selectedSpellVal = 307;
    } else if (event.value === 'find_greater_steed') {
      this.minCrSelect = 1;
      this.maxCrSelect = 2;
      this.selectedSpellVal = 308;
    } else if (event.value === 'infernal_calling') {
      this.minCrSelect = 0;
      this.maxCrSelect = 6;
      this.selectedSpellVal = 309;
    } else if (event.value === 'summon_lesser_demons') {
      this.minCrSelect = 0.25;
      this.maxCrSelect = 1;
      this.selectedSpellVal = 310;
    } else if (event.value === 'summon_greater_demon') {
      this.minCrSelect = 0;
      this.maxCrSelect = 5;
      this.selectedSpellVal = 311;
    }
    this.spellService.setSpellVal(this.selectedSpellVal - 1);
  }


  minCRChanged(event) {
    this.creatureService.setMinCR(event.value);
    // this.creatureService.setMinCR(this.minCrSelect);
  }
  maxCRChanged(event) {
    console.log(event.value);
    this.creatureService.setMaxCR(event.value);
    // this.creatureService.setMaxCR(this.maxCrSelect);
  }

}
