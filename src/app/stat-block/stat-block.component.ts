import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service'
import { CreatureService } from '../creature.service'
import { Creature } from '../creature'
@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css']
})
export class StatBlockComponent implements OnInit {
  @Input() creature:Creature;
  constructor(public messageService: MessageService, public creatureService:CreatureService) { }

  ngOnInit() {
  }

  statClicked(stat:string):void {
    this.creatureService.rollStat(this.creature, stat);
  }


}
