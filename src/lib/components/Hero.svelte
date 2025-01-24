<script>
	import { inview } from 'svelte-inview';
	// Imagens
	import timelapse from '$lib/assets/timelapse.webm';
	import moveicon from '$lib/assets/hero.png';
	import { ctaInview } from '$lib/state.svelte';

	// @ts-ignore
	import Laurell from 'virtual:icons/hugeicons/laurel-wreath-left-03';
	// @ts-ignore
	import Laurelr from 'virtual:icons/hugeicons/laurel-wreath-right-03';

	let { ctaOpt, pixelRatio, inviewOpt, numbersInView, avgFPS, scrollToSection } = $props();

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

<div
	class="2xl:w-[1500px] xl:h-screen mt-5 flex xl:flex-row flex-col relative items-center justify-center"
>
	<div
		class="flex flex-col relative xl:w-1/2 mt-20 xl:mt-0 xl:pl-5 px-4 xl:px-0{pixelRatio > 1
			? ''
			: ''}"
	>
		<div class="xl:w-fit w-full rounded-full flex justify-center z-10">
			<a
				href="https://www.youtube.com/watch?v=atn1FXDDswY"
				target="blank_"
				class="flex group items-center transition-all tracking-wider xl:text-sm text-xs text-move/60 hover:text-move rounded-full"
			>
				<Laurell class="" /><span
					class="font-bold group-hover:text-white text-[#ebebeb] mx-1.5 transition-all"
					>PRÊMIO CONTA AZUL BPO FINANCEIRO UAU 2024</span
				><Laurelr class="" />
			</a>
		</div>
		<div class="flex justify-center z-10 my-6">
			<p
				class="text-5xl lg:text-7xl text-center xl:text-left font-bold font-grifter w-full uppercase leading-none bg-gradient-to-r from-move to-yellow-600 text-transparent bg-clip-text {pixelRatio >
				1
					? ''
					: ''}"
			>
				Saia do amadorismo
			</p>
		</div>
		<div class="flex justify-start text-white z-10 items-center w-full">
			<p class="xl:text-left text-center xl:w-9/12 w-full text-base xl:text-lg">
				Gestão Contábil completa e a melhor terceirização de Financeiro do Brasil!
			</p>
		</div>
		<div
			use:inview={ctaOpt}
			oninview_enter={() => {
				ctaInview.value = true;
			}}
			oninview_leave={() => {
				console.log('inview leave before declare:' + ctaInview.value);
				ctaInview.value = false;
				console.log('inview leave after declare:' + ctaInview.value);
			}}
			class="flex flex-col xl:flex-row h-fit justify-start xl:gap-10 gap-4 z-10 my-8"
		>
			<a
				data-umami-event="Hero Servicos"
				aria-label="Clique para falar com o nosso time"
				href="#servicos"
				onclick={scrollToSection(-80)}
				class="px-8 group flex justify-center relative p-4 rounded-xl xl:text-lg shadow-xl font-bold xl:w-fit w-full hover:bg-white hover:text-black border-white/40 border text-white transition-all"
			>
				<span class="uppercase text-center flex items-center">SERVIÇOS</span>
			</a>
			<a
				data-umami-event="Hero CTA Principal"
				aria-label="Clique para falar com o nosso time"
				href="https://wa.me/5541998163983"
				target="_blank"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.2)] duration-200 flex justify-center px-7 group relative p-4 rounded-xl xl:w-fit w-full xl:text-lg shadow-xl font-bold hover:bg-yellow-400/90 bg-move text-black transition-all {ctaInview.value
					? 'opacity-100'
					: 'xl:translate-y-60 xl:translate-x-60 xl:opacity-0'}"
			>
				<span class="uppercase text-center xl:leading-loose">Economize tempo e dinheiro agora!</span
				>
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
	<div class="w-1/2 hidden z-10 xl:flex justify-center translate-y-16">
		<img src={moveicon} alt="" />
	</div>
</div>

<video
	tabindex="-1"
	autoplay
	muted
	loop
	playsinline
	class={avgFPS < 24
		? 'hidden'
		: 'absolute touch-none pointer-events-none -z-0 lg:bottom-1/4 2xl:translate-y-60 xl:translate-y-20 lg:top-auto top-0 opacity-35 blur-[4px] w-full'}
>
	<source src={timelapse} type="video/webm" />
</video>
