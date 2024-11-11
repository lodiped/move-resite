<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';

	import seuelias from '$lib/assets/empresas/seuelias.png';
	import comendador from '$lib/assets/empresas/comendador.png';
	import europan from '$lib/assets/empresas/europan.png';
	import ifb from '$lib/assets/empresas/ifb.png';
	import iefe from '$lib/assets/empresas/iefe.png';

	let emblaApi;
	let options = { loop: true, dragFree: true };
	let plugins = [AutoScroll({ startDelay: 0, stopOnMouseEnter: true, stopOnInteraction: false })];

	let logos = [
		{ icon: seuelias, a: '/seuelias' },
		{ icon: comendador, a: '/comendador' },
		{ icon: europan, a: 'europoan' },
		{ icon: ifb, a: '/ifb' },
		{ icon: iefe, a: 'iefe' },
		{ icon: seuelias, a: '/seuelias' },
		{ icon: comendador, a: '/comendador' },
		{ icon: europan, a: 'europoan' }
	];
</script>

<div class="embla mb-40" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="embla__container">
		{#each logos as logo}
			<div class="flex-[0_0_100px] mr-[20%] min-w-0 invert">
				<div class="w-full">
					<a href={logo.a} class="border opacity-50 hover:opacity-100 transition-opacity">
						<img src={logo.icon} alt="" class="w-[100px]" />
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
