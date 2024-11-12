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

	let emblaApi;
	let options = { loop: true, dragFree: true };
	let plugins = [AutoScroll({ startDelay: 0, stopOnMouseEnter: true, stopOnInteraction: false })];

	let logos = [
		{ icon: seuelias, a: 'https://seuelias.com/' },
		{ icon: p2, a: 'https://www.potencialpleno.com.br/' },
		{ icon: taus, a: 'https://www.clinicataus.com.br/' },
		{ icon: ifb, a: 'https://www.institutofernandabenead.com.br/' },
		{ icon: iefe, a: 'https://evolucaoeducacional.com.br/' },
		{ icon: comendador, a: 'https://www.instagram.com/comendadorburguer/' },
		{ icon: europan, a: 'https://www.instagram.com/europanbrasil/' },
		{ icon: novaciencia, a: 'http://www.lojanovaciencia.com/' },
		{ icon: efficiency, a: 'https://www.instagram.com/efficiencygym/' }
	];
</script>

<div class="embla mb-40" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="embla__container">
		{#each logos as logo}
			<div class="lg:flex-[0_0_200px] flex-[0_0_150px] mr-[15%] lg:mr-[10%] min-w-0 invert">
				<div class="w-full">
					<a href={logo.a} class="border opacity-50 hover:opacity-100 transition-opacity">
						<img src={logo.icon} alt="" class="lg:w-[200px] w-[150px]" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		min-width: 0;
	}
</style>
