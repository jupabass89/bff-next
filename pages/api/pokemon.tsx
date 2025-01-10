import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const responsePokemonOne = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const responsePokemonTwo = await fetch("https://pokeapi.co/api/v2/pokemon/2");
  const dataPoke1 = await responsePokemonOne.json();
  const dataPoke2 = await responsePokemonTwo.json();
  res.status(200).json({ pokemons: [dataPoke1, dataPoke2] });
}
