import { useEffect } from "react";

// export async function getStaticProps() {
//   const res = await fetch('/api/pokemon'); // Replace with your API route
//   const pokemons = await res.json();
  
//   return {
//     props: {
//       pokemons,  // Pass the data to the page
//     },
//   };
// }

export default function PokemonPage() {
  // console.log(pokemons)
  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch("/api/pokemon");
      console.log("response", response);
    };
    getPokemons();
  }, []);

  return (
    <>
      <h1>Pokemon Works!</h1>
      <p>Pokemon Works ...</p>
    </>
  );
}
