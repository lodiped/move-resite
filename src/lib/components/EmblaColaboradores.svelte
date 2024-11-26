<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';

	import { colaboradoresimg } from '$lib';

	let options = { loop: true, dragFree: true };
	let plugins = [AutoScroll({ startDelay: 0, stopOnInteraction: false, stopOnFocusIn: false })];
</script>

<div class="flex pt-20 justify-center flex-col items-center">
	<div class="overflow-hidden select-none" use:emblaCarouselSvelte={{ options, plugins }}>
		<div class="flex">
			{#each colaboradoresimg as colaborador}
				<div class="lg:flex-[0_0_330px] flex-[0_0_150px] min-w-0">
					<div class="w-full drop-shadow-[0_5px_0.5rem_rgba(0,0,0,0.7)]">
						<img src={colaborador} alt="" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
