export class Creature {
  id: number;
  name: string;
  tags: string[];
  stats:{
    hp:number;
    cr: number;
    str: number;
    con: number;
  };
  instances:any[];
}
