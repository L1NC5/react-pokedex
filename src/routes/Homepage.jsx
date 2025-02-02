import HeroSection from 'src/components/HeroSection';
import PokemonList from 'src/components/PokemonList';
import { useState } from 'react';

export default function Homepage() {
	const [parameters, setParameters] = useState({ limit: 12, offset: 0 });

	return (
		<>
			<HeroSection />
			<section className="px-base flex-1 bg-stone-100 py-12">
				<div className="mx-auto max-w-4xl pb-4">
					<h1 className="text-lg font-semibold">...or browse all the existing pokèmons</h1>
				</div>
				<PokemonList limit={parameters.limit} offset={parameters.offset} />
			</section>
		</>
	);
}
