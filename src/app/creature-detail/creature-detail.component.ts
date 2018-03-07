import { Component, OnInit, Input } from '@angular/core';
import { Creature } from '../creature';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CreatureService } from '../creature.service';
import { StatBlockComponent } from '../stat-block/stat-block.component';
@Component({
  selector: 'creature-detail',
  templateUrl: './creature-detail.component.html',
  styleUrls: ['./creature-detail.component.css']
})
export class CreatureDetailComponent implements OnInit {
  @Input() creature: Creature;
  @Input() added: boolean;
  showDetails: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private creatureService: CreatureService,
    private location: Location
  ) { }

  ngOnInit() {
    // this.getCreature();
  }

  removeInstance(instance): void {
    console.log(this.creature);
    const index = this.creature.instances.indexOf(instance);
    if (index > -1) {
      this.creature.instances.splice(index, 1);
    }
  }

  remove(): void {
    this.creatureService.removeAllInstancesAndDeactivate(this.creature);
  }

  addCreature(creature: Creature): void {
    this.creatureService.addCreature(creature);
  }
  toggleShowDetails(): void {
    this.showDetails = !this.showDetails;
  }

  getCreature(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.creatureService.getCreature(id)
      .subscribe(creature => this.creature = creature);
  }

  goBack(): void {
    this.location.back();
  }

}
