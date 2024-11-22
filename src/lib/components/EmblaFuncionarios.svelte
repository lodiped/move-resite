<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';

	import Depo1 from './depoimentos/Depo1.svelte';
	import Depo2 from './depoimentos/Depo2.svelte';
	import Depo3 from './depoimentos/Depo3.svelte';
	import Depo4 from './depoimentos/Depo4.svelte';
	import Depo5 from './depoimentos/Depo1.svelte';
	import Depo6 from './depoimentos/Depo3.svelte';
	import Depo7 from './depoimentos/Depo4.svelte';

	let options = { loop: true, dragFree: true };
	let plugins = [AutoScroll({ startDelay: 0, stopOnMouseEnter: true, stopOnInteraction: false })];

	let depos = $state([Depo1, Depo2, Depo3, Depo4, Depo5, Depo6, Depo7]);
</script>

<div class="overflow-hidden select-none" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="flex">
		{#each depos as Depo}
			<div class="lg:flex-[0_0_500px] flex-[0_0_150px] mr-[5%] lg:mr-[15%] min-w-0">
				<div class="w-full">
					<div class="">
						<Depo />
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
