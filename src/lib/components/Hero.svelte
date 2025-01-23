<script>
	import { inview } from 'svelte-inview';
	// Imagens
	import bpo from '$lib/assets/bpo.webp';
	import timelapse from '$lib/assets/timelapse.webm';
	import moveicon from '$lib/assets/hero.png';

	// @ts-ignore
	import Laurell from 'virtual:icons/hugeicons/laurel-wreath-left-03';
	// @ts-ignore
	import Laurelr from 'virtual:icons/hugeicons/laurel-wreath-right-03';

	let { pixelRatio, inviewOpt, numbersInView, avgFPS } = $props();

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
				if (anos < 15) {
					setTimeout(() => {
						anos++;
						raiseAnos();
					}, 200);
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

<div class="2xl:w-[1500px] h-screen mt-5 flex relative items-center justify-center">
	<div
		class={pixelRatio > 1
			? 'flex flex-col relative w-1/2 pl-5'
			: 'flex flex-col relative w-1/2 pl-5'}
	>
		<div class="w-fit rounded-full items-center z-10">
			<a
				href="https://www.youtube.com/watch?v=atn1FXDDswY"
				target="blank_"
				class="flex group items-center transition-all tracking-wider text-sm text-move/60 hover:text-move rounded-full"
			>
				<Laurell class="" /><span
					class="font-bold group-hover:text-white text-[#ebebeb] mx-1.5 transition-all"
					>PRÊMIO CONTA AZUL BPO FINANCEIRO UAU 2024</span
				><Laurelr class="" />
			</a>
		</div>
		<div class="flex justify-center z-10 my-6">
			<p
				class={pixelRatio > 1
					? 'text-4xl lg:text-6xl font-bold font-grifter w-full uppercase leading-snug bg-gradient-to-r from-move to-yellow-600 text-transparent bg-clip-text'
					: 'drop-shadow-xl text-4xl lg:text-7xl font-bold font-grifter w-full uppercase leading-snug bg-gradient-to-r from-move to-yellow-600 text-transparent bg-clip-text'}
			>
				Saia do amadorismo
			</p>
		</div>
		<div class="flex justify-start text-white z-10 items-center w-full">
			<p class=" w-9/12 text-lg">
				Gestão Contábil completa e a melhor terceirização de Financeiro do Brasil!
			</p>
		</div>
		<div class="flex h-fit justify-start gap-10 z-10 my-8">
			<a
				aria-label="Clique para falar com o nosso time"
				href="#servicos"
				class="px-8 group flex justify-center relative p-4 rounded-xl text-md lg:text-lg shadow-xl font-bold w-fit hover:bg-white hover:text-black border-white/40 border text-white transition-all"
			>
				<span class="uppercase">SERVIÇOS</span>
			</a>
			<a
				aria-label="Clique para falar com o nosso time"
				href="https://wa.me/5541998163983"
				target="_blank"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.2)] flex justify-center px-8 group relative p-4 rounded-xl w-fit text-md lg:text-lg shadow-xl font-bold hover:bg-yellow-400/90 bg-move text-black transition-all"
			>
				<span class="uppercase">Economize tempo e dinheiro agora!</span>
			</a>
		</div>
		<div
			use:inview={inviewOpt}
			oninview_enter={raiseNumbers}
			class={numbersInView
				? 'flex gap-2 transition-all text-sm w-full z-10 duration-[2500ms] mb-10 text-[#ebebeb]'
				: 'transition-all opacity-0 flex gap-2 text-sm duration-[2500ms] mb-10 text-[#ebebeb] translate-y-10'}
		>
			<div class="lg:w-32 w-20">
				<p class="lg:text-3xl text-lg font-bold">+{clientes}</p>
				<p class="text-xs lg:text-sm">Clientes<br /> ativos</p>
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
	</div>
	<div class="w-1/2 z-10 flex justify-center translate-y-20"><img src={moveicon} alt="" /></div>
</div>

<video
	tabindex="-1"
	autoplay
	muted
	loop
	playsinline
	class={avgFPS < 24
		? 'hidden'
		: 'absolute touch-none pointer-events-none -z-0 lg:bottom-1/4 2xl:translate-y-60 xl:translate-y-20 lg:top-auto top-0 opacity-35 blur-[5px] w-full'}
>
	<source src={timelapse} type="video/webm" />
</video>
