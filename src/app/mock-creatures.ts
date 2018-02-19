import { Creature } from './creature';

export const CREATURES: Creature[] = [
  { id: 11, name: 'Giant Elk', tags:['beast'], cr: 1, stats:{hp:20, str:10, con:12}, instances:[{hp:20}]},
  { id: 12, name: 'Giant Badger',  tags:['beast'], cr: 0.25,stats:{ hp:20, str:10, con:12 }},
  { id: 13, name: 'Dragon', cr:20,  tags:[], stats:{ str:10, con:12, hp:20 },
  { id: 14, name: 'Dog', cr:0.25, tags:['beast'], stats:{ str:10, con:12, hp:20 } },
  { id: 15, name: 'Wolf',cr:0.5,  tags:['beast'], stats:{ str:10, con:12, hp:20 } },
  { id: 16, name: 'Direwolf', tags:['beast'], cr:1, stats:{ str:10, con:12, hp:20 } }
];
