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
    [0, "0"],
    [0.25, "1/4"],
    [0.5, "1/2"],
    [1, "1"],
    [2, "2"]
  ]
  minCrSelect;
  maxCrSelect;
  constructor(private creatureService: CreatureService) { }

  ngOnInit() {
  }

  onChange(event) {
      this.creatureService.setCircle(event.checked);
      console.log(event);
  }

  spellChanged(event) {
    console.log(event);
    this.creatureService.setSpell(event.value)
    if(event.value === "conjure_animals"){
      this.minCrSelect=0.25;
      this.maxCrSelect=2;
    }
  }

  minCRChanged(event) {
    this.creatureService.setMinCR(event.value);
  }
  maxCRChanged(event) {
    console.log(event.value);
    this.creatureService.setMaxCR(event.value);
  }

}
