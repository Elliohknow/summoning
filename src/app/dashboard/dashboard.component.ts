import { Component, OnInit } from '@angular/core';
import { Creature } from '../creature';
import { CreatureService } from '../creature.service';

import { FiltersComponent } from '../filters/filters.component';
import { CreaturesComponent } from '../creatures/creatures.component';
import { ActiveCreaturesComponent } from '../active-creatures/active-creatures.component';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  creatures: Creature[] = [];

  constructor(private creatureService: CreatureService) { }

  ngOnInit() {
    this.getCreatures();
  }

  addCreature(creature: Creature): void {
    console.log("add creature clicked");
    this.creatureService.addCreature(creature);
  }
  getCreatures(): void {
    // TODO change this so that it takes the most recent
    this.creatureService.getCreatures()
      .subscribe(creatures => this.creatures = creatures.slice(1, 5));
  }
}
