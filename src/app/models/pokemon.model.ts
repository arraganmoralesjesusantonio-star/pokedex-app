export interface IPokemon{
	id: number;
	name: string;
	type1: string;
	// ?:Indica que es opcional(puede no existe)
	type2?: string;
	sprite: string;
	height: number;
	weight: number;
	abilities: string[];
	hidenAbility?: string;
	stat: {
	   //base_stat: number;
	   //name: string;	

	stat: IStat[]


}

}
