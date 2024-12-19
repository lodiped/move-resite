<script>
	import foguetesmoke from '$lib/assets/foguete-fumaca.webp';
	import cafe from '$lib/assets/cafe.webp';

	// @ts-ignore
	import Handshake from 'virtual:icons/mdi/handshake';
	// @ts-ignore
	import HandHeart from 'virtual:icons/mdi/hand-heart';
	// @ts-ignore
	import Teaching from 'virtual:icons/mdi/teach';
	// @ts-ignore
	import RocketLaunch from 'virtual:icons/mdi/rocket-launch';

	import Sintonia from './diferenciais/Sintonia.svelte';
	import Solucao from './diferenciais/Solucao.svelte';
	import Tecnologia from './diferenciais/Tecnologia.svelte';
	import Podcast from './diferenciais/Podcast.svelte';

	let { avgFPS } = $props();
</script>

<div class="relative flex flex-col gap-12 lg:px-20 px-8 py-20 2xl:pt-10 mt-40 lg:mt-0 items-center">
	<div class="absolute w-full h-full flex justify-start items-end">
		<img src={foguetesmoke} alt="" class="opacity-30 w-2/3 lg:w-1/2 2xl:w-1/3" />
	</div>
	<div class="absolute md:hidden w-full h-full flex justify-end items-start">
		<img src={cafe} alt="" class="opacity-30 w-1/3" />
	</div>
	<div class="z-10 2xl:-translate-y-10">
		<h2 class="grifter-title">Diferenciais</h2>
	</div>
	<div class="flex lg:flex-row flex-col gap-12 justify-center">
		<div
			class={avgFPS < 24
				? 'p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[330px] md:h-[290px] border-move/10 rounded-xl lg:w-1/2 max-w-[600px] bg-black/50'
				: 'p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[330px] md:h-[290px] border-move/10 rounded-xl backdrop-blur-xl lg:w-1/2 max-w-[600px] bg-yellow-200/5'}
		>
			<Handshake
				class="absolute opacity-20 drop-shadow-[0_0_1rem_rgba(255,255,255,1)] text-9xl text-white right-2 bottom-2"
			/>
			<Sintonia />
		</div>
		<div
			class={avgFPS < 24
				? 'p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[330px] md:h-[290px] border-move/10 rounded-xl lg:w-1/2 max-w-[600px] bg-black/50'
				: 'p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[330px] md:h-[290px] border-move/10 rounded-xl backdrop-blur-xl lg:w-1/2 max-w-[600px] bg-yellow-200/5'}
		>
			<HandHeart
				class="absolute opacity-20 drop-shadow-[0_0_1rem_rgba(255,255,255,1)] text-9xl text-white right-2 bottom-2"
			/>
			<Solucao />
		</div>
	</div>
	<div class="flex lg:flex-row flex-col gap-12 justify-center">
		<div
			class={avgFPS < 24
				? 'p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[330px] md:h-[290px] border-move/10 rounded-xl lg:w-1/2 max-w-[600px] bg-black/50'
				: 'p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[330px] md:h-[290px] border-move/10 rounded-xl backdrop-blur-xl lg:w-1/2 max-w-[600px] bg-yellow-200/5'}
		>
			<RocketLaunch
				class="absolute opacity-20 drop-shadow-[0_0_1rem_rgba(255,255,255,1)] text-white text-9xl right-2 bottom-2"
			/>
			<Tecnologia />
		</div>
		<div
			class={avgFPS < 24
				? 'p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[330px] md:h-[290px] border-move/10 rounded-xl lg:w-1/2 max-w-[600px] bg-black/50'
				: 'p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[330px] md:h-[290px] border-move/10 rounded-xl backdrop-blur-xl lg:w-1/2 max-w-[600px] bg-yellow-200/5'}
		>
			<Teaching
				class="absolute opacity-20 drop-shadow-[0_0_1rem_rgba(255,255,255,1)] text-white text-9xl right-2 bottom-2"
			/>
			<Podcast />
		</div>
	</div>
</div>
