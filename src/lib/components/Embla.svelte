<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';

	import seuelias from '$lib/assets/empresas/seuelias.png';
	import comendador from '$lib/assets/empresas/comendador.png';
	import europan from '$lib/assets/empresas/europan.png';
	import ifb from '$lib/assets/empresas/ifb.png';
	import iefe from '$lib/assets/empresas/iefe.png';
	import novaciencia from '$lib/assets/empresas/novaciencia.png';
	import efficiency from '$lib/assets/empresas/efficiency.png';
	import p2 from '$lib/assets/empresas/p2.png';
	import taus from '$lib/assets/empresas/taus.png';

	let options = { loop: true, dragFree: true };
	let plugins = [AutoScroll({ startDelay: 0, stopOnMouseEnter: true, stopOnInteraction: false })];

	let logos = [
		{ icon: seuelias, a: 'https://seuelias.com/', alt: 'Seu Elias' },
		{ icon: p2, a: 'https://www.potencialpleno.com.br/', alt: 'Potencial Pleno' },
		{ icon: taus, a: 'https://www.clinicataus.com.br/', alt: 'Clínica Taus' },
		{ icon: ifb, a: 'https://www.institutofernandabenead.com.br/', alt: 'Instituto Fernanda Ben' },
		{ icon: iefe, a: 'https://evolucaoeducacional.com.br/', alt: 'IEFE Evolução Educacional' },
		{
			icon: comendador,
			a: 'https://www.instagram.com/comendadorburguer/',
			alt: 'Comendador Burger'
		},
		{ icon: europan, a: 'https://www.instagram.com/europanbrasil/', alt: 'Europan Brasil' },
		{ icon: novaciencia, a: 'http://www.lojanovaciencia.com/', alt: 'Nova Ciência' },
		{
			icon: efficiency,
			a: 'https://www.instagram.com/efficiencygym/',
			alt: 'Academia Efficiency Gym'
		}
	];
</script>

<div class="overflow-hidden select-none" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="flex">
		{#each logos as logo}
			<div class="lg:flex-[0_0_200px] flex-[0_0_150px] mr-[15%] lg:mr-[10%] min-w-0 invert">
				<div class="w-full">
					<a
						data-umami-event={`Embla ${logo.alt}`}
						href={logo.a}
						target="_blank"
						class="border opacity-50 hover:opacity-100 transition-opacity"
					>
						<img
							src={logo.icon}
							alt={logo.alt}
							class={logo.icon === comendador || logo.icon === seuelias || logo.icon === efficiency
								? 'lg:w-[200px] w-[150px] scale-150'
								: 'lg:w-[200px] w-[150px]'}
						/>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
