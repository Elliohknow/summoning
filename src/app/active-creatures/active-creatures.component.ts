import { Component, OnInit } from '@angular/core';
import { CreatureService } from '../creature.service';
import { Creature } from '../creature'
@Component({
  selector: 'active-creatures',
  templateUrl: './active-creatures.component.html',
  styleUrls: ['./active-creatures.component.css']
})
export class ActiveCreaturesComponent implements OnInit {
  creatures: Creature[];
  constructor(private creatureService: CreatureService) { }

  ngOnInit() {
    this.getCreatures();
  }

  getCreatures(): void{
    this.creatureService.getCreatures()
      .subscribe(creatures => this.creatures = creatures);

  }
}
