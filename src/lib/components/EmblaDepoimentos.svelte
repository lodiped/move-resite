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
	import { onMount } from 'svelte';

	let isFirefox = $state(false);
	let options = { loop: true };
	let plugins = [Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false })];
	let emblaApi;

	let depos = $state([Depo1, Depo2, Depo3, Depo4, Depo5, Depo6, Depo7]);

	function onInit(event) {
		emblaApi = event.detail;
		emblaApi.plugins().autoplay.play();
	}

	onMount(() => {
		isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
		console.log(navigator.userAgent);
	});
</script>

<div class="bg-move py-20 flex flex-col gap-12">
	<div class="flex justify-center">
		<h1 class="text-4xl font-bold font-grifter text-black">Depoimentos</h1>
	</div>
	<div
		class="overflow-hidden select-none py-5"
		use:emblaCarouselSvelte={{ options, plugins }}
		onemblaInit={{ onInit }}
	>
		<div class="flex">
			{#each depos as Depo}
				<div class="lg:flex-[0_0_500px] flex-[0_0_150px] mr-[5%] lg:mr-[15%] min-w-0">
					<div class="w-full">
						<div
							class={isFirefox
								? 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl bg-[#f9d010] w-[500px] text-black'
								: 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl backdrop-blur-md bg-move/40 w-[500px] text-black'}
						>
							<Depo />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
