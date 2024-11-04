import React from 'react';

import Homepage from './Homepage';
import NotFoundPage from './NotFoundPage';
import PokemonPage from './PokemonPage';
import TeamPage from './TeamPage';

const routes = [
	{
		path: '/',
		element: <Homepage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/team',
		element: <TeamPage />,
	},
	{
		path: '/pokemon/:pokemonName',
		element: <PokemonPage />
	}
];

export default routes;