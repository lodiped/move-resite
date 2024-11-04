<script>
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	let options = { loop: true, dragFree: true, dragThreshold: 1 };

	// Components
	import Contabil from '$lib/components/Contabil.svelte';
	import Financeira from '$lib/components/Financeira.svelte';
	import Welcome from '$lib/components/Welcome.svelte';
	import Sintonia from '$lib/components/diferenciais/Sintonia.svelte';
	import Solucao from '$lib/components/diferenciais/Solucao.svelte';
	import Tecnologia from '$lib/components/diferenciais/Tecnologia.svelte';
	import Podcast from '$lib/components/diferenciais/Podcast.svelte';
	import Depo2 from '$lib/components/depoimentos/Depo2.svelte';
	import Depo1 from '$lib/components/depoimentos/Depo1.svelte';
	import AndreCastro from '$lib/components/AndreCastro.svelte';
	import ValdineiSilva from '$lib/components/ValdineiSilva.svelte';

	// Imagens
	import moveLogo from '$lib/assets/logo-move.webp';
	import moveIcon from '$lib/assets/move-icon.png';
	import bpo from '$lib/assets/bpo.png';
	import timelapse from '$lib/assets/timelapse.webm';
	import coin from '$lib/assets/coin.png';
	import andre from '$lib/assets/Andre.webp';
	import valdi from '$lib/assets/Valdi.webp';

	// @ts-ignore
	import Facebook from 'virtual:icons/mdi/facebook';
	// @ts-ignore
	import Email from 'virtual:icons/mdi/email';
	// @ts-ignore
	import Instagram from 'virtual:icons/mdi/instagram';
	// @ts-ignore
	import LinkedIn from 'virtual:icons/mdi/linkedin';
	// @ts-ignore
	import Hamburger from 'virtual:icons/mdi/menu';
	// @ts-ignore
	import BigX from 'virtual:icons/mdi/close';
	// @ts-ignore
	import WhatsApp from 'virtual:icons/mdi/whatsapp';
	// @ts-ignore
	import Phone from 'virtual:icons/mdi/phone';

	// Empresas
	import seuelias from '$lib/assets/empresas/seuelias.png';
	import comendador from '$lib/assets/empresas/comendador.png';
	import europan from '$lib/assets/empresas/europan.png';
	import ifb from '$lib/assets/empresas/ifb.png';
	import iefe from '$lib/assets/empresas/iefe.png';

	// InView stuff
	const inviewOpt = {}; //parte do InView (não sei se é necessário)
	let numbersInView = $state(false), //Checa se a section dos números está em vista (IntersectionObserver com InView)
		phraseInView = $state(false),
		// textarea Mensagem do Form de Contato
		charsUsed = $state(''), //Variável que insere todos os caracteres na textarea do form de contato
		charsMax = 2000,
		charsLeft = $derived(charsMax - charsUsed.length), //Calcula os caracteres restantes na textarea
		//Função que mede se a página está scrollada até o topo
		atTop = $state(true);
	function handleScroll() {
		if (window.scrollY === 0) {
			atTop = true;
		} else {
			atTop = false;
		}
	}

	// Checa a escala da UI do dispositivo (para entregar a hero section corretamente dimensionada em laptops)
	// Resto do código em onMount
	let pixelRatio = $state(1);

	//Mobile menu dropdown
	let mobileDrop = $state(false),
		mobileMenu = $derived(() => {
			mobileDrop = !mobileDrop;
		}),
		// Efeito de aumento dos números
		clientes = $state(0),
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

	// ESC para fechar o menu dropdown
	/** @param {{ key: string; }} event */
	function handleEsc(event) {
		if (event.key === 'Escape') {
			mobileDrop = false;
		}
	}

	/** @param {string} text */
	function copyToClipboard(text) {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('Text copied to clipboard:', text);
				// You can add a success message here if needed
			})
			.catch((err) => {
				console.error('Failed to copy text:', err);
				// You can add error handling here
			});
	}

	onMount(() => {
		handleScroll();
		pixelRatio = window.devicePixelRatio;
		console.log('Pixel Ratio: ' + window.devicePixelRatio);
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('keydown', handleEsc);
		return () => {
			window.removeEventListener('keydown', handleEsc);
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class={atTop && !mobileDrop
		? 'flex fixed flex-col lg:flex-row w-full justify-between px-10 lg:px-20 py-8 transition-all duration-700 z-20 border-move/5'
		: 'flex fixed flex-col lg:flex-row w-full justify-between px-10 lg:px-20 py-8 drop-shadow-lg shadow-[0px_3px_5px_rgba(0,0,0,0.1)] bg-black/10 z-20 transition-all duration-700 backdrop-blur-md border-b border-move/10'}
>
	<div class="flex justify-between w-full">
		<div>
			<a aria-label="Logo Move Negócios" href="/">
				<img src={moveLogo} class="w-64 drop-shadow-md" alt="Logo Move Negócios" />
			</a>
		</div>
		<div class="gap-10 font-bold justify-between hidden lg:flex">
			<a
				aria-label="Sobre"
				href="/sobre"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Sobre
			</a>
			<a
				aria-label="Serviços"
				href="/servicos"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Serviços
			</a>
			<a
				aria-label="Podcast"
				href="/podcast"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Podcast
			</a>
			<a
				aria-label="Contato"
				href="/contato"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Contato
			</a>
		</div>
		<div>
			<a
				aria-label="Área do Cliente"
				class="p-4 rounded-xl font-bold z-20 drop-shadow-lg w-fit bg-move text-black hover:text-move transition-all hover:bg-black hidden lg:inline"
				href="https://app.gestta.com.br/#/login/auth?isInitialPage=true%20"
			>
				Área do Cliente
			</a>
			<button
				onclick={mobileMenu}
				aria-label="Menu de navegação"
				class="z-20 lg:hidden text-xl drop-shadow w-fit"
			>
				{#if !mobileDrop}
					<Hamburger />
				{:else}
					<BigX />
				{/if}
			</button>
		</div>
	</div>
	{#if mobileDrop}
		<div class="w-full lg:hidden pt-2 drop-shadow-lg transition-all -z-10">
			<div class="gap-4 font-bold justify-between flex flex-col text-lg items-end">
				<a
					aria-label="Sobre"
					href="/sobre"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Sobre
				</a>
				<a
					aria-label="Serviços"
					href="/servicos"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Serviços
				</a>
				<a
					aria-label="Podcast"
					href="/podcast"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Podcast
				</a>
				<a
					aria-label="Contato"
					href="/contato"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Contato
				</a>
			</div>
		</div>
	{/if}
</header>

<div
	class={pixelRatio > 1
		? 'flex flex-col gap-12 pt-60 relative'
		: 'flex flex-col gap-20 pt-72 relative'}
>
	<div class="w-full absolute items-center flex justify-center z-10 top-[85px]">
		<a
			href="https://www.youtube.com/watch?v=atn1FXDDswY"
			target="blank_"
			class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] hover:scale-105 opacity-70 hover:opacity-100 drop-shadow-lg transition-all tracking-widest rounded-full w-fit"
		>
			<img src={bpo} class="h-[9rem]" alt="Prêmio Conta Azul BPO Financeiro UAU 2024" />
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
		<p class={pixelRatio > 1 ? 'w-2/3 text-lg' : 'w-2/3 text-xl'}>
			Gestão Contábil completa e o melhor BPO Financeiro do Brasil, com profissionais altamente
			qualificados e constantemente desenvolvidos. Tudo isso pensando no sucesso do SEU NEGÓCIO!
		</p>
	</div>
	<div
		use:inview={inviewOpt}
		oninview_enter={raiseNumbers}
		class={numbersInView
			? 'flex gap-8 transition-all  w-full z-10 justify-center duration-[2500ms] flex-col lg:flex-row'
			: 'transition-all opacity-0 flex gap-8 duration-[2500ms] translate-y-10 flex-col lg:flex-row'}
	>
		<div class="w-32">
			<p class="text-3xl font-bold">+{clientes}</p>
			<p>Clientes ativos</p>
		</div>
		<div class="w-32">
			<p class="text-3xl font-bold">+{anos}</p>
			<p>Anos de experiência</p>
		</div>
		<div class="w-32">
			<p class="text-3xl font-bold">+{solucoes}</p>
			<p>Soluções para seu negócio</p>
		</div>
		<div class="w-32">
			<p class="text-3xl font-bold">+R${dinheiros}M</p>
			<p>Em valores administrados</p>
		</div>
	</div>
	<div class="flex flex-col h-fit justify-center items-center z-10">
		<a
			aria-label="Clique para falar com o nosso time"
			href="/sobre"
			class="button-before relative p-4 rounded-xl text-xl shadow-xl font-bold uppercase w-fit bg-move text-black hover:bg-black hover:text-move transition-all"
		>
			Eu quero levar o meu negócio para o próximo nível!
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

<div
	class="flex flex-col lg:flex-row gap-10 px-10 lg:px-20 py-40 justify-center items-center lg:items-start"
>
	<div class="flex z-10 flex-col items-center gap-12 max-w-[500px]">
		<h2
			class="text-4xl font-bold relative font-grifter bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Soluções Contábeis.
			<span
				class="absolute text-3xl font-bold font-grifter text-move bottom-3 left-24 translate-x-2.5 -translate-y-0.5"
			>
				~
			</span>
		</h2>
		<Contabil />
		<a
			aria-label="Saiba mais sobre o serviço de Gestão Contábil"
			class="button-before relative p-4 rounded-xl shadow-xl font-bold w-fit bg-move text-black hover:bg-black hover:text-move transition-all"
			href="/"
		>
			Saiba Mais
		</a>
	</div>
	<div class="flex z-10 flex-col items-center gap-12 max-w-[500px]">
		<h2
			class="text-4xl font-bold font-grifter bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Gestão Financeira.
		</h2>
		<Financeira />
		<a
			aria-label="Saiba mais sobre o serviço de Gestão Financeira"
			class="button-before relative p-4 rounded-xl shadow-xl font-bold w-fit bg-move text-black hover:bg-black hover:text-move transition-all"
			href="/"
		>
			Saiba Mais
		</a>
	</div>
</div>

<div class="flex flex-col gap-5 items-center w-full z-10 mb-40">
	<span class="opacity-50 font-bold">Nossos clientes</span>
	<div class="embla hidden invert bg-black/10" use:emblaCarouselSvelte={{ options }}>
		<div class="embla__container">
			<div class="embla__slide">
				<a aria-labelledby="seuelias" href="https://www.seuelias.com/">
					<img
						id="seuelias"
						src={seuelias}
						alt="Seu Elias"
						class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
					/>
				</a>
			</div>
			<div class="embla__slide">
				<a aria-labelledby="comendador" href="https://www.instagram.com/comendadorburguer/?hl=en">
					<img
						id="comendador"
						src={comendador}
						alt="Comendador Burguer"
						class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
					/>
				</a>
			</div>
			<div class="embla__slide">
				<a
					aria-labelledby="iefe"
					href="https://evolucaoeducacional.com.br/"
					class="hidden lg:inline"
				>
					<img
						id="iefe"
						src={iefe}
						alt="IEFE - Evolução Educacional"
						class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
					/>
				</a>
			</div>
			<div class="embla__slide">
				<a
					aria-labelledby="ifb"
					href="https://www.institutofernandabenead.com.br/"
					class="hidden lg:inline"
				>
					<img
						id="ifb"
						src={ifb}
						alt="Instituto Fernanda Ben"
						class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
					/>
				</a>
			</div>
			<div class="embla__slide">
				<a aria-labelledby="europan" href="https://www.europanbrasil.com.br/">
					<img
						id="europan"
						src={europan}
						alt="Europan Brasil"
						class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
					/>
				</a>
			</div>
		</div>
	</div>
	<div class="flex justify-evenly w-full items-center invert">
		<a aria-labelledby="seuelias" href="https://www.seuelias.com/">
			<img
				id="seuelias"
				src={seuelias}
				alt="Seu Elias"
				class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
			/>
		</a>
		<a aria-labelledby="comendador" href="https://www.instagram.com/comendadorburguer/?hl=en">
			<img
				id="comendador"
				src={comendador}
				alt="Comendador Burguer"
				class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
			/>
		</a>
		<a aria-labelledby="iefe" href="https://evolucaoeducacional.com.br/" class="hidden lg:inline">
			<img
				id="iefe"
				src={iefe}
				alt="IEFE - Evolução Educacional"
				class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
			/>
		</a>
		<a
			aria-labelledby="ifb"
			href="https://www.institutofernandabenead.com.br/"
			class="hidden lg:inline"
		>
			<img
				id="ifb"
				src={ifb}
				alt="Instituto Fernanda Ben"
				class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
			/>
		</a>
		<a aria-labelledby="europan" href="https://www.europanbrasil.com.br/">
			<img
				id="europan"
				src={europan}
				alt="Europan Brasil"
				class="w-24 aspect-square transition-all opacity-50 hover:opacity-100"
			/>
		</a>
	</div>
</div>

<div
	use:inview={inviewOpt}
	oninview_enter={(phraseInView = true)}
	class="bg-move flex-col transition-all duration-[2500ms] opacity-100 flex items-center justify-center text-black py-32 uppercase"
>
	<p
		use:inview={inviewOpt}
		oninview_enter={(phraseInView = true)}
		class={phraseInView
			? 'transition-all duration-[2500ms] text-[10vw] tracking leading-none flex justify-center tracking-tight font-grifter'
			: 'opacity-0 translate-y-10 text-[10vw] tracking leading-none flex justify-center tracking-tight font-grifter'}
	>
		Descomplicando
	</p>
	<p
		class={phraseInView
			? 'transition-all duration-[2500ms] text-[12.25vw] tracking leading-none flex justify-center tracking-tight font-grifter'
			: 'opacity-0 translate-y-10 text-[12.25vw] tracking leading-none flex justify-center tracking-tight font-grifter'}
	>
		o complicado
	</p>
	<div class="drop-shadow-lg text-4xl hidden animate-bounce">🚀</div>
</div>

<div class="flex flex-col gap-10 px-10 lg:px-20 pb-32 bg-move text-black">
	<div class="flex justify-between relative">
		<div class="flex flex-col gap-10">
			<div class="flex flex-col">
				<h2 class="text-4xl font-bold font-grifter">Quem Somos</h2>
			</div>
			<div class="flex flex-col gap-5 w-1/2">
				<Welcome />
			</div>
		</div>
		<img src={coin} class="h-[400px] absolute top-0 right-[10%] drop-shadow-lg" alt="" />
	</div>
	<div class="flex flex-col gap-10 pt-60 pb-40 group">
		<div class="relative flex items-center mx-40 text-sm">
			<div class="w-full rounded-full h-[200px] absolute blur-3xl"></div>
			<div class="w-full bg-black h-1 z-10"></div>
			<div class="rounded-full absolute bg-black left-0 z-20 border-4 border-move w-5 h-5"></div>
			<div
				class="absolute group-hover:-bottom-12 -bottom-3 bg-move z-30 transition-all text-2xl left-[calc(0%-30px)] text-center w-fit px-2 font-bold"
			>
				2018
			</div>
			<div
				class="absolute bottom-0 group-hover:bottom-5 transition-all opacity-0 group-hover:opacity-100 left-[calc(0%-115px)] w-[250px] text-center"
			>
				Começamos uma história com vontade de vencer
			</div>
			<div
				class="rounded-full absolute bg-black left-[20%] z-20 border-4 border-move w-5 h-5"
			></div>
			<div class="absolute text-2xl -top-12 left-[calc(20%-90px)] text-center w-[200px] font-bold">
				2019
			</div>
			<div class="absolute top-5 left-[calc(20%-115px)] w-[250px] text-center">
				Mudamos para uma nova sede, a família cresceu
			</div>
			<div
				class="rounded-full absolute bg-black left-[40%] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute -bottom-12 text-2xl left-[calc(40%-90px)] text-center w-[200px] font-bold"
			>
				2020
			</div>
			<div class="absolute bottom-5 left-[calc(40%-115px)] w-[250px] text-center">
				Passamos a oferecer soluções de gestão financeira
			</div>
			<div
				class="rounded-full absolute bg-black left-[60%] z-20 border-4 border-move w-5 h-5"
			></div>
			<div class="absolute -top-12 text-2xl left-[calc(60%-90px)] w-[200px] text-center font-bold">
				2021
			</div>
			<div class="absolute top-5 left-[calc(60%-115px)] w-[250px] text-center">
				Ampliação do nosso escritório, a casa ficou maior
			</div>
			<div
				class="rounded-full absolute bg-black left-[80%] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute -bottom-12 text-2xl left-[calc(80%-90px)] w-[200px] text-center font-bold"
			>
				2022
			</div>
			<div class="absolute bottom-5 left-[calc(80%-115px)] w-[250px] text-center">
				Criação do nosso podcast &ldquo;Negócio em Jogo&rdquo;
			</div>
			<div
				class="rounded-full absolute bg-black left-[100%] z-20 border-4 border-move w-5 h-5"
			></div>
			<div class="absolute -top-12 text-2xl left-[calc(100%-90px)] w-[200px] text-center font-bold">
				2024
			</div>
			<div class="absolute top-5 left-[calc(100%-115px)] w-[250px] text-center">
				Prêmio Conta Azul de melhor escritório de BPO Financeiro do Brasil
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col gap-8 lg:px-20 px-8 py-20 items-center">
	<div>
		<h2
			class="text-4xl font-bold font-grifter pb-4 bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Diferenciais
		</h2>
	</div>
	<div class="flex lg:flex-row flex-col gap-8 justify-center">
		<div
			class="shadow-[0_5px_10px_rgba(0,0,0,0.2)] p-8 rounded-xl lg:w-1/2 max-w-[600px] bg-stone-700/50"
		>
			<Sintonia />
		</div>
		<div
			class="shadow-[0_5px_10px_rgba(0,0,0,0.2)] p-8 rounded-xl lg:w-1/2 max-w-[600px] bg-stone-700/50"
		>
			<Solucao />
		</div>
	</div>
	<div class="flex lg:flex-row flex-col gap-8 justify-center">
		<div
			class="shadow-[0_5px_10px_rgba(0,0,0,0.2)] p-8 rounded-xl lg:w-1/2 max-w-[600px] bg-stone-700/50"
		>
			<Tecnologia />
		</div>
		<div
			class="shadow-[0_5px_10px_rgba(0,0,0,0.2)] p-8 rounded-xl lg:w-1/2 max-w-[600px] bg-stone-700/50"
		>
			<Podcast />
		</div>
	</div>
</div>

<div class="flex flex-col gap-10 px-10 lg:px-20 py-20">
	<div>
		<h1
			class="text-4xl font-bold font-grifter bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Depoimentos
		</h1>
	</div>
	<div class="flex flex-col lg:flex-row">
		<Depo1 />
		<Depo2 />
	</div>
</div>

<div class="flex gap-20 px-20 flex-col py-20 xl:flex-row items-start justify-center mb-60">
	<div class=" text-black w-[650px]">
		<div
			class="flex h-[600px] p-8 flex-col bg-andre bg-cover border-yellow-900 border bg-[center_top_-10rem] rounded-xl mr-[180px] relative"
		>
			<div class="h-3/4"></div>
			<div class="h-1/4">
				<h3
					class="font-grifter text-2xl drop-shadow-md bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
				>
					André Castro
				</h3>
				<p class="text-white">Cofundador e CEO</p>
			</div>
			<div
				class="absolute flex items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[380px] border-move/10 -right-[130px] rounded-xl -bottom-[150px] backdrop-blur-xl w-[80%] bg-yellow-200/5"
			>
				<p
					class="text-justify text-sm text-white before:content-['\201C'] before:absolute before:top-28 before:left-2 before:font-serif before:text-[15rem] before:-z-10 z-20 before:text-move/30 after:content-['\201D'] after:-bottom-4 after:right-2 after:font-serif after:text-[15rem] after:absolute after:-z-10 after:text-move/30"
				>
					O fato de amarmos o que fazemos já é um primeiro e grande passo para entregar algo de
					valor, que realmente faça a diferença na vida das pessoas e das empresas. A isso, aliamos
					um propósito bem definido e uma cultura forte, pautada em princípios em que resplandece
					nossa identidade. De fora vocês veem uma empresa, nós vemos um sonho. Acredito que, ao
					unir a paixão pelo que fazemos com o desejo de impactar positivamente a vida das pessoas,
					podemos todos alcançar novos patamares de realização.
				</p>
			</div>
		</div>
	</div>
	<div class=" text-black w-[650px]">
		<div
			class="flex bg-valdi bg-cover bg-bottom border border-yellow-900 h-[600px] p-8 flex-col rounded-xl mr-[180px] relative"
		>
			<div class="h-3/4"></div>
			<div class="h-1/4">
				<h3
					class="font-grifter text-2xl drop-shadow-lg bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
				>
					Valdinei Silva
				</h3>
				<p class="text-white">Cofundador e COO</p>
			</div>
			<div
				class="absolute flex items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[380px] border-move/10 -right-[130px] rounded-xl -bottom-[150px] backdrop-blur-xl w-[80%] bg-yellow-200/5"
			>
				<p
					class="text-justify text-sm text-white before:content-['\201C'] before:absolute before:top-28 before:left-2 before:font-serif before:text-[15rem] before:-z-10 z-20 before:text-move/30 after:content-['\201D'] after:-bottom-4 after:right-2 after:font-serif after:text-[15rem] after:absolute after:-z-10 after:text-move/30"
				>
					Acredito no poder do propósito e do trabalho duro para melhorar as chances de sucesso de
					qualquer tipo de empreendimento. Isso está impresso também na identidade da Move Negócios,
					uma empresa que se envolve e se entrega pelo resultado de seus clientes como se fosse o
					seu, justamente por ter um norte bem definido. Sonho em legar um ecossistema inteligente
					que dê acesso para o pequeno empresário à todos os serviços que são essenciais em uma
					gestão profissional.
				</p>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center justify-center py-10 gap-4">
	<div>
		<h1
			class="text-4xl font-bold font-grifter bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Fale com o nosso time!
		</h1>
	</div>
	<div class="flex max-w-[1600px] justify-between items-center gap-8 lg:flex-row flex-col">
		<div class="bg-stone-700/50 w-[400px] p-8 rounded-xl shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
			<form action="" class="flex flex-col gap-2" id="contato">
				<label for="name">Seu nome:</label>
				<input
					type="text"
					name="name"
					required
					class="text-stone-700 p-1 rounded bg-stone-300"
					maxlength="150"
				/>
				<label for="email">Seu e-mail:</label>
				<input
					type="email"
					name="email"
					required
					class="text-stone-700 p-1 rounded bg-stone-300"
					maxlength="320"
				/>
				<label for="phone">Seu celular:</label>
				<input
					type="tel"
					name="phone"
					required
					class="text-stone-700 p-1 rounded bg-stone-300"
					maxlength="14"
				/>
				<label for="message">Mensagem: <span class="opacity-30">(opcional)</span></label>
				<textarea
					name="message"
					id=""
					rows={charsUsed.length > 150 ? 12 : 5}
					form="contato"
					class="resize-none text-stone-700 rounded bg-stone-300"
					maxlength={charsMax}
					bind:value={charsUsed}
				></textarea>
				<p
					class={charsLeft > 50
						? 'w-full text-right text-sm opacity-50 pb-1 -translate-y-2'
						: 'w-full text-right text-sm pb-1 text-red-500 -translate-y-2'}
				>
					{#if charsLeft === 1}
						{charsLeft} caractere restante
					{:else}
						{charsLeft} caracteres restantes
					{/if}
				</p>
				<input
					type="submit"
					name="submit"
					value="Consultar"
					class="p-4 rounded bg-move text-black cursor-pointer hover:bg-black hover:text-move transition-all"
				/>
			</form>
		</div>
		<div class="bg-stone-700/50 p-8 rounded-xl shadow-[0_5px_10px_rgba(0,0,0,0.2)]">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15716.878785504974!2d-49.279913382024695!3d-25.434576567173202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce532a8764435%3A0x2784bcd3ae721131!2sMove%20Neg%C3%B3cios!5e0!3m2!1sen!2sbr!4v1729100527608!5m2!1sen!2sbr"
				width="500"
				height="465"
				style="border:0;"
				loading="lazy"
				title="maps"
				referrerpolicy="no-referrer-when-downgrade"
				class="w-[350px] md:w-[500px]"
			></iframe>
		</div>
	</div>
</div>

<div class="h-0.5 w-full bg-white/10 px-10"></div>

<footer class="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center w-full py-10">
	<div class="flex items-center px-10 max-w-[500px] w-full">
		<a href="/">
			<img src={moveIcon} alt="Logo Move Negócios" class="hover:scale-110 transition-all" />
		</a>
	</div>
	<div class="hidden lg:flex"></div>
	<div class="flex flex-col gap-10 pr-10 pl-10 lg:pl-0 items-center lg:items-start">
		<div class="flex text-4xl items-center gap-6 text-move -translate-x-1">
			<div class="flex">
				<a
					aria-label="Link para o Instagram da Move Negócios"
					href="https://www.instagram.com/movenegocios/"
					class="hover:scale-110 transition-all"
				>
					<Instagram />
				</a>
			</div>
			<div class="flex">
				<a
					aria-label="Link para o LinkedIn da Move Negócios"
					href="https://www.linkedin.com/company/move-neg-cios/"
					class="hover:scale-110 transition-all"
				>
					<LinkedIn />
				</a>
			</div>

			<div class="flex">
				<a
					aria-label="Link para o Facebook da Move Negócios"
					href="https://www.facebook.com/movenegociosoficial/"
					class="hover:scale-110 transition-all"
				>
					<Facebook />
				</a>
			</div>
		</div>
		<div class="flex flex-col gap-2 w-full">
			<div class="flex gap-2 items-center">
				<Email class="scale-110 text-move" />
				<a
					aria-label="E-mail de contato da Move Negócios: contato@movenegocios.com.br"
					href="mailto:contato@movenegocios.com.br"
					class="after:underline after:h-0.5 after:w-0 after:hover:w-full after:bg-move after:absolute relative after:left-0 after:bottom-0 after:transition-all"
				>
					contato@movenegocios.com.br
				</a>
			</div>
			<div
				aria-label="Número do WhatsApp da Move Negócios: (41) 99816-3983"
				class="flex gap-2 items-center"
			>
				<WhatsApp class="scale-110 text-move" />
				<a href="tel:041998163983" class="lg:hidden">(41) 99816-3983</a>
				<div class="hidden lg:block">(41) 99816-3983</div>
			</div>
			<div
				aria-label="Número do telefone fixo da Move Negócios: (41) 3078-4210"
				class="flex gap-2 items-center"
			>
				<Phone class="text-move scale-110" />
				<a href="tel:04130784210" class="lg:hidden">(41) 3078-4210</a>
				<button
					onclick={() => copyToClipboard('4130784210')}
					class="hidden lg:block after:hover:content-['(copiar)'] after:opacity-50 after:ml-2"
					>(41) 3078-4210</button
				>
			</div>
		</div>
		<div class="">
			<a
				aria-label="Endereço da Move Negócios: Av. Visconde de Guarapuava, número 2764, sala 306, Centro, Curitiba, Paraná, CEP: 12345-678"
				href="https://maps.app.goo.gl/XgDwzC39xEEJwP1v9"
			>
				<p>Av. Visconde de Guarapuava, nº 2764, sala 306</p>
				<p>Centro, Curitiba &mdash; PR, 12345-678</p>
			</a>
		</div>
	</div>
</footer>

<style>
	.embla {
		overflow: hidden;
		width: 90%;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 50%;
		min-width: 0;
	}
	.button-before::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: -1rem;
		width: 100%;
		height: 1rem;
		background-color: yellow;
		filter: blur(20px); /* Adjust for desired blur */
		border-radius: 9999px;
		z-index: -1;
		opacity: 50%;
	}
</style>
