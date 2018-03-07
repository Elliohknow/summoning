export interface Spell {
  index: number;
  name: string;
  desc: any[];
  higher_level?: any[];
  page?: string;
  range: string;
  components: any[];
  material?: string;
  ritual?: string;
  duration: string;
  concentration: string;
  casting_time: string;
  level: number;
  school?: object;
  classes: any[];
  subclasses?: any[];
  creature_types?: any[];
  url?: string;
}
