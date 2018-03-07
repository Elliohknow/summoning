import { Component, OnInit } from '@angular/core';
import { CreatureService } from '../creature.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  checked = false;
  selectedSpell;
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
  constructor(private creatureService: CreatureService) { }

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
    } else if (event.value === 'conjure_forest_friends') {
      this.minCrSelect = 0.125;
      this.maxCrSelect = 0.5;
    } else if (event.value === 'conjure_elemental') {
      this.minCrSelect = 2;
      this.maxCrSelect = 5;
    } else if (event.value === 'conjure_minor_elementals') {
      this.minCrSelect = 0.25;
      this.maxCrSelect = 2;
    } else if (event.value === 'conjure_fey') {
      this.minCrSelect = 3;
      this.maxCrSelect = 6;
    } else if (event.value === 'conjure_woodland_beings') {
      this.minCrSelect = 0.25;
      this.maxCrSelect = 2;
    } else if (event.value === 'conjure_celestial') {
      this.minCrSelect = 1;
      this.maxCrSelect = 4;
    } else if (event.value === 'find_steed') {
      this.minCrSelect = 0.125;
      this.maxCrSelect = 0.5;
    } else if (event.value === 'planar_ally') {
      this.minCrSelect = 1;
      this.maxCrSelect = 20;
    } else if (event.value === 'animate_dead') {
      this.minCrSelect = 0.25;
      this.maxCrSelect = 2;
    }
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
