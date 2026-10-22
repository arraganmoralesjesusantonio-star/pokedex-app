import { IStat } from "./stat.model";

export interface IPokemon {
  id: number;
  name: string;
  type1: string;
  type2?: string;
  image: string;
  height: number;
  weight: number;
  abilities: string;
  hidenAbility?: string;
  stat: IStat[];
}