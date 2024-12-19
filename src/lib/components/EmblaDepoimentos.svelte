<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';
	import Autoplay from 'embla-carousel-autoplay';

	import Depo1 from './depoimentos/Depo1.svelte';
	import Depo2 from './depoimentos/Depo2.svelte';
	import Depo3 from './depoimentos/Depo3.svelte';
	import Depo4 from './depoimentos/Depo4.svelte';
	import Depo5 from './depoimentos/Depo1.svelte';
	import Depo6 from './depoimentos/Depo3.svelte';
	import Depo7 from './depoimentos/Depo4.svelte';
	import astronauta from '$lib/assets/astronauta.webp';
	import foguete from '$lib/assets/foguete.webp';
	import planeta from '$lib/assets/planeta.webp';

	let { avgFPS } = $props();

	let options = { loop: true };
	let plugins = [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false, delay: 10000 })];
	/** @type any*/
	let emblaApi;
	let scrollPrev = $state();
	let scrollNext = $state();

	let depos = $state([Depo1, Depo2, Depo3, Depo4, Depo5, Depo6, Depo7]);

	/** @param {any} event*/
	function onInit(event) {
		emblaApi = event.detail;
		emblaApi.plugins().autoplay.play();
		scrollPrev = () => {
			if (emblaApi) emblaApi.scrollPrev();
		};

		scrollNext = () => {
			if (emblaApi) emblaApi.scrollNext();
		};
	}
</script>

<div class="py-20 flex flex-col gap-12 relative">
	<img
		src={astronauta}
		alt=""
		class="absolute touch-none pointer-events-none animate-float left-[15%] top-10 opacity-75 w-[200px]"
	/>
	<img
		src={foguete}
		alt=""
		class="absolute touch-none pointer-events-none right-[15%] bottom-1/4 animate-spin-slow opacity-50 w-[200px]"
	/>
	<img
		src={planeta}
		alt=""
		class="absolute touch-none pointer-events-none left-[30%] top-3/4 animate-spin-reverse opacity-40 w-[200px]"
	/>
	<div class="flex justify-center z-10">
		<h1 class="grifter-title">Depoimentos</h1>
	</div>
	<div
		class="overflow-hidden select-none py-5 relative"
		use:emblaCarouselSvelte={{ options, plugins }}
		onemblaInit={onInit}
	>
		<div class="flex z-50">
			{#each depos as Depo}
				<div class="lg:flex-[0_0_500px] flex-[0_0_350px] mr-[50%] lg:mr-[15%] min-w-0">
					<div class="w-full">
						<div
							class={avgFPS < 24
								? 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[500px] border-move/10 backdrop-blur-xl rounded-xl bg-yellow-200/5 w-[350px] lg:w-[500px] '
								: 'h-[500px] flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border border-move/10 rounded-xl backdrop-blur-md bg-yellow-200/5 w-[500px] '}
						>
							<Depo />
							<div class="text-9xl font-serif absolute top-10 left-10 text-move/30 scale-150">
								&ldquo;
							</div>
							<div class="text-9xl font-serif absolute -bottom-12 right-10 text-move/30 scale-150">
								&rdquo;
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div
			class="absolute h-full top-0 -translate-x-5 xl:flex items-center hidden right-0 w-3/4 2xl:w-2/3"
		>
			<button
				onclick={scrollPrev}
				class="text-6xl text-move/30 transition-colors hover:text-move font-bold"
			>
				&lt;
			</button>
		</div>
		<div class="absolute h-full top-0 xl:flex items-center hidden right-0 w-1/4 2xl:w-1/3">
			<button
				onclick={scrollNext}
				class="text-6xl text-move/30 transition-colors hover:text-move font-bold"
			>
				&gt;
			</button>
		</div>
	</div>
	<div class="w-full justify-around flex z-20 -mt-10">
		<button onclick={scrollPrev} class="font-bold text-6xl text-move xl:hidden">&lt;</button>
		<button onclick={scrollNext} class="font-bold text-6xl text-move xl:hidden">&gt;</button>
	</div>
</div>
