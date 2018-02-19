import { Component, OnInit } from '@angular/core';
import { Creature } from '../creature';
import { CreatureService } from '../creature.service';

@Component({
  selector: 'creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})
export class CreaturesComponent implements OnInit {

  creatures: Creature[];

  selectedCreature: Creature;

  constructor(private creatureService: CreatureService) { }

  ngOnInit() {
    this.getCreatures();
  }

  onSelect(creature: Creature): void {
    this.selectedCreature = creature;
  }

  shouldFilter(creature: Creature): boolean {
    return this.creatureService.shouldFilter(creature);
  }

  getCreatures(): void{
    this.creatureService.getCreatures()
      .subscribe(creatures => this.creatures = creatures);

  }

}
