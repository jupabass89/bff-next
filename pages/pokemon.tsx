import { useEffect, useState } from "react";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const responseApi = await fetch("/api/pokemon");
      responseApi.json().then((res) => {
        setPokemons(res.pokemons);
      });
    };
    getPokemons();
  }, []);

  if (!pokemons?.length) {
    return null;
  }

  return (
    <>
      <h1>Pokemon works</h1>
      <h1>Pokemon response Lenght: {pokemons.length}</h1>
    </>
  );
}
