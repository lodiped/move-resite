<script>
	import { inview } from 'svelte-inview';
	let { phraseInView, complicadoOpt } = $props();
	import peaksSvg from '$lib/assets/peaks.svg';
	import foguete from '$lib/assets/foguete.webp';
</script>

<div class="overflow-hidden">
	<img
		src={peaksSvg}
		alt=""
		class="w-full 2xl:-mt-24 scale-y-50 translate-y-[calc(25%+2px)] -z-10 pointer-events-none"
	/>
	<div
		use:inview={complicadoOpt}
		oninview_enter={() => {
			phraseInView = true;
		}}
		class="bg-move flex-col relative transition-all duration-[2500ms] opacity-100 flex items-center justify-center text-black pb-32 uppercase"
	>
		<p
			class={phraseInView
				? 'transition-all translate-y-10 lg:translate-y-0 duration-[2500ms] text-[12.5vw] tracking leading-none flex justify-center z-10 tracking-tight font-grifter'
				: 'opacity-0 translate-y-20 lg:translate-y-10 text-[12.5vw] tracking leading-none flex justify-center z-10 tracking-tight font-grifter'}
		>
			Você rumo ao
		</p>
		<p
			class={phraseInView
				? 'transition-all translate-y-10 lg:translate-y-0 duration-[2500ms] text-[12.25vw] tracking leading-none flex z-30 justify-center tracking-tight font-grifter'
				: 'opacity-0 translate-y-20 lg:translate-y-10 text-[12.25vw] tracking leading-none flex justify-center tracking-tight font-grifter'}
		>
			próximo nível
		</p>
		<div
			class={phraseInView
				? 'transition-all rotate-12 ease-linear duration-[3500ms] absolute origin-center z-20 translate-x-[600%] -translate-y-[200%] delay-700'
				: 'transition-all rotate-12 ease-linear absolute origin-center z-20 -translate-x-[600%] translate-y-[300%] 2xl:translate-y-[200%]'}
		>
			<img
				src={foguete}
				alt=""
				class="transition-all drop-shadow-[0_10px_1rem_rgba(0,0,0,0.5)] w-16 md:w-24 lg:w-40 2xl:w-60"
			/>
		</div>
	</div>
</div>
