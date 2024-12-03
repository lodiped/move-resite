<script>
	import { inview } from 'svelte-inview';
	let { phraseInView, complicadoOpt } = $props();
	import peaksSvg from '$lib/assets/peaks.svg';
	import foguete from '$lib/assets/Foguete.png';
</script>

<div class="overflow-hidden">
	<img src={peaksSvg} alt="" class="w-full scale-y-50 translate-y-[calc(25%+2px)] -z-10" />
	<div
		use:inview={complicadoOpt}
		oninview_enter={() => {
			phraseInView = true;
		}}
		class="bg-move flex-col relative transition-all duration-[2500ms] opacity-100 flex items-center justify-center text-black pb-32 uppercase"
	>
		<p
			class={phraseInView
				? 'transition-all duration-[2500ms] text-[10vw] tracking leading-none flex justify-center z-10 tracking-tight font-grifter'
				: 'opacity-0 translate-y-10 text-[10vw] tracking leading-none flex justify-center z-10 tracking-tight font-grifter'}
		>
			Descomplicando
		</p>
		<p
			class={phraseInView
				? 'transition-all duration-[2500ms] text-[12.25vw] tracking leading-none flex z-30 justify-center tracking-tight font-grifter'
				: 'opacity-0 translate-y-10 text-[12.25vw] tracking leading-none flex justify-center tracking-tight font-grifter'}
		>
			o complicado
		</p>
		<div
			class={phraseInView
				? 'transition-all rotate-12 ease-linear duration-[3500ms] absolute origin-center z-20 translate-x-[600%] -translate-y-[250%] delay-700'
				: 'transition-all rotate-12 ease-linear absolute origin-center z-20 -translate-x-[600%] translate-y-[200%]'}
		>
			<img
				src={foguete}
				alt=""
				class="transition-all drop-shadow-[0_10px_1rem_rgba(0,0,0,0.5)] w-40"
			/>
		</div>
	</div>
</div>
