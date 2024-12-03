<script>
	import { inview } from 'svelte-inview';
	// Imagens
	import bpo from '$lib/assets/bpo.png';
	import timelapse from '$lib/assets/timelapse.webm';

	let { pixelRatio, inviewOpt, numbersInView } = $props();

	// Efeito de aumento dos números
	let clientes = $state(0),
		anos = $state(0),
		solucoes = $state(0),
		dinheiros = $state(0),
		raiseNumbers = $derived(() => {
			let raiseClientes = () => {
				if (clientes < 330) {
					setTimeout(() => {
						clientes++;
						clientes++;
						raiseClientes();
					}, 15);
				}
			};
			let raiseAnos = () => {
				if (anos < 13) {
					setTimeout(() => {
						anos++;
						raiseAnos();
					}, 250);
				}
			};
			let raiseSolucoes = () => {
				if (solucoes < 20) {
					setTimeout(() => {
						solucoes++;
						raiseSolucoes();
					}, 150);
				}
			};
			let raiseDinheiros = () => {
				if (dinheiros < 42) {
					setTimeout(() => {
						dinheiros++;
						raiseDinheiros();
					}, 70);
				}
			};
			raiseClientes();
			raiseAnos();
			raiseSolucoes();
			raiseDinheiros();
			numbersInView = true;
		});
</script>

<div
	class={pixelRatio > 1
		? 'flex flex-col lg:gap-12 gap-8 pt-60 relative'
		: 'flex flex-col lg:gap-20 gap-12 pt-72 relative'}
>
	<div class="w-full absolute items-center flex justify-center z-10 top-[100px]">
		<a
			href="https://www.youtube.com/watch?v=atn1FXDDswY"
			target="blank_"
			class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] opacity-70 hover:opacity-100 drop-shadow-lg transition-all duration-700 tracking-widest rounded-full w-fit"
		>
			<img
				loading="lazy"
				src={bpo}
				class="h-[9rem]"
				alt="Prêmio Conta Azul BPO Financeiro UAU 2024"
			/>
		</a>
	</div>
	<div class="flex h-2/3 justify-center z-10">
		<p
			class={pixelRatio > 1
				? 'text-4xl lg:text-6xl font-bold font-grifter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] w-fit uppercase text-center leading-snug bg-gradient-to-r from-move to-yellow-600 text-transparent bg-clip-text'
				: 'text-4xl lg:text-7xl font-bold font-grifter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] w-fit uppercase text-center leading-snug bg-gradient-to-r from-move to-yellow-600 text-transparent bg-clip-text'}
		>
			Saia do amadorismo
		</p>
	</div>
	<div class="flex justify-center text-white z-10 items-center w-full text-center">
		<p
			class={pixelRatio > 1
				? 'w-2/3 lg:text-lg text-md text-justify lg:text-center'
				: 'w-2/3 text-md lg:text-xl text-justify lg:text-center'}
		>
			Gestão Contábil completa e o melhor BPO Financeiro do Brasil, com profissionais altamente
			qualificados e constantemente desenvolvidos. Tudo isso pensando no sucesso do SEU NEGÓCIO!
		</p>
	</div>
	<div
		use:inview={inviewOpt}
		oninview_enter={raiseNumbers}
		class={numbersInView
			? 'flex lg:gap-8 gap-2 transition-all text-sm w-full z-10 justify-center duration-[2500ms]'
			: 'transition-all opacity-0 flex lg:gap-8 gap-2 text-sm duration-[2500ms] translate-y-10'}
	>
		<div class="lg:w-32 w-20">
			<p class="lg:text-3xl text-lg font-bold">+{clientes}</p>
			<p class="text-xs lg:text-sm">Clientes ativos</p>
		</div>
		<div class="lg:w-32 w-20">
			<p class="lg:text-3xl text-lg font-bold">+{anos}</p>
			<p class="text-xs lg:text-sm">Anos de experiência</p>
		</div>
		<div class="lg:w-32 w-20">
			<p class="lg:text-3xl text-lg font-bold">+{solucoes}</p>
			<p class="text-xs lg:text-sm">Soluções para seu negócio</p>
		</div>
		<div class="lg:w-32 w-20">
			<p class="lg:text-3xl text-lg font-bold">+R${dinheiros}M</p>
			<p class="text-xs md:text-sm">Em valores administrados</p>
		</div>
	</div>
	<div class="flex flex-col h-fit justify-center items-center z-10">
		<a
			aria-label="Clique para falar com o nosso time"
			href="/"
			class="button-before group relative p-4 rounded-xl text-md lg:text-xl shadow-xl font-bold w-fit hover:bg-yellow-400/90 bg-move text-black transition-all"
		>
			<span class="uppercase"> Fazer um diagnóstico da sua empresa </span>
		</a>
	</div>
	<video
		tabindex="-1"
		autoplay
		muted
		loop
		playsinline
		class="absolute touch-none pointer-events-none -z-0 lg:bottom-1/4 2xl:translate-y-60 xl:translate-y-20 lg:top-auto top-0 opacity-40 blur-[3px] w-full"
	>
		<source src={timelapse} type="video/webm" />
	</video>
</div>
