// import PokemonDetail from 'src/components/PokemonDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonPage() {
	const params = useParams();
	const pokemon = params.pokemonName;
	const BASE_URL = 'https://pokeapi.co/api/v2';
	const POKEMON_URL = `${BASE_URL}/pokemon`;

	const [pokemonData, setPokemonData] = useState();

	useEffect(() => {
		const fetchPokemonData = async () => {
			const response = await fetch(`${POKEMON_URL}/${pokemon}`);
			const data = await response.json();
			console.log(data);
			setPokemonData(data);
		};
		fetchPokemonData();
	}, [pokemon, POKEMON_URL]);

	useEffect(() => {
        if (!pokemonData) {
            return
        }
		console.log(pokemonData.abilities);
	}, [pokemonData]);

	return (
		<>
			<p>Ciao</p>
		</>
	);
}
