<script>
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';

	// ´Go to´ seção com padding especificos
	/** @param {number} offset */
	function scrollToSection(offset) {
		// @ts-ignore
		return (event) => {
			console.log(event);
			event.preventDefault();
			const targetId = event.currentTarget.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				const yOffset = offset;
				const yPosition = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

				window.scrollTo({
					top: yPosition,
					behavior: 'smooth'
				});
			}
		};
	}

	// Components
	import Servicos from '$lib/components/Servicos.svelte';
	import EmblaDepoimentos from '$lib/components/EmblaDepoimentos.svelte';
	import EmblaColaboradores from '$lib/components/EmblaColaboradores.svelte';
	import Donos from '$lib/components/Donos.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contato from '$lib/components/Contato.svelte';
	import Frase from '$lib/components/Frase.svelte';
	import Diferenciais from '$lib/components/Diferenciais.svelte';
	import Quemsomos from '$lib/components/Quemsomos.svelte';

	// Imagens
	import moveLogo from '$lib/assets/logo-move.webp';
	import bpo from '$lib/assets/bpo.png';
	import timelapse from '$lib/assets/timelapse.webm';

	// @ts-ignore
	import Hamburger from 'virtual:icons/mdi/menu';
	// @ts-ignore
	import BigX from 'virtual:icons/mdi/close';

	// InView stuff
	let gestaoOpen = $state(false), // Modal
		contabilOpen = $state(false); // Modal
	const inviewOpt = { unobserveOnEnter: true }; //parte do InView (não sei se é necessário)
	const complicadoOpt = { unobserveOnEnter: true, rootMargin: '-50%' }; //parte do InView (não sei se é necessário)
	const timelineOpt = { rootMargin: '-45%' }; //parte do InView (não sei se é necessário)
	let numbersInView = $state(false), //Checa se a section dos números está em vista (IntersectionObserver com InView)
		phraseInView = $state(false),
		timelineInView = $state(false),
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
			gestaoOpen = false;
			contabilOpen = false;
		}
	}

	//Copiar para o clipboard
	let clipboardResult = $state('clique para copiar');
	/** @param {string} text */
	function copyToClipboard(text) {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('Texto copiado:', text);
				clipboardResult = 'copiado ✔️';
				setTimeout(() => {
					clipboardResult = 'clique para copiar';
				}, 2500);
			})
			.catch((err) => {
				console.error('Falha ao copiar texto:', err);
				clipboardResult = 'erro ao copiar (cheque o console)';
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

<svelte:head>
	<title>Move Negócios</title>
	<meta
		name="description"
		content="Solução contábil e gestão financeira para descomplicar a sua rotina, auxiliando no desenvolvimento estratégico da sua empresa."
	/>
	<meta name="author" content="Move Negócios - Growth" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:title" content="Move Negócios" />
	<meta
		property="og:description"
		content="Solução contábil e gestão financeira para descomplicar a sua rotina, auxiliando no desenvolvimento estratégico da sua empresa."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<header
	class={atTop && !mobileDrop
		? 'flex fixed flex-col lg:flex-row w-full justify-between px-10 lg:px-20 py-8 transition-all duration-700 z-50 border-move/5'
		: 'flex fixed flex-col lg:flex-row w-full justify-between px-10 lg:px-20 py-8 drop-shadow-lg shadow-[0px_3px_5px_rgba(0,0,0,0.1)] bg-black/20 z-50 transition-all duration-700 backdrop-blur-md border-b border-move/10'}
>
	<div class="flex justify-between w-full">
		<div>
			<a aria-label="Logo Move Negócios" href="/">
				<img loading="lazy" src={moveLogo} class="w-64 drop-shadow-md" alt="Logo Move Negócios" />
			</a>
		</div>
		<div class="gap-10 font-bold justify-between hidden lg:flex">
			<a
				aria-label="Sobre"
				onclick={scrollToSection(-180)}
				href="#sobre"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Sobre
			</a>
			<a
				aria-label="Serviços"
				onclick={scrollToSection(-40)}
				href="#servicos"
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
				onclick={scrollToSection(-200)}
				href="#contato"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Contato
			</a>
		</div>
		<div>
			<a
				aria-label="Área do Cliente"
				class="p-4 rounded-xl font-bold z-20 drop-shadow-lg hover:drop-shadow-[0_1rem_1rem_rgba(255,180,0,0.2)] w-fit bg-move text-black transition-all hover:bg-yellow-400/90 hidden lg:inline"
				href="https://app.gestta.com.br/#/login/auth?isInitialPage=true%20"
			>
				<span> Área do Cliente </span>
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
					onclick={scrollToSection(-190)}
					href="#sobre"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Sobre
				</a>
				<a
					aria-label="Serviços"
					onclick={scrollToSection(-10)}
					href="#servicos"
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
					onclick={scrollToSection(-10)}
					href="#contato"
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
		<div class="lg:w-32 w-24">
			<p class="lg:text-3xl text-xl font-bold">+{clientes}</p>
			<p>Clientes ativos</p>
		</div>
		<div class="lg:w-32 w-24">
			<p class="lg:text-3xl text-xl font-bold">+{anos}</p>
			<p>Anos de experiência</p>
		</div>
		<div class="lg:w-32 w-24">
			<p class="lg:text-3xl text-xl font-bold">+{solucoes}</p>
			<p>Soluções para seu negócio</p>
		</div>
		<div class="lg:w-32 w-24">
			<p class="lg:text-3xl text-xl font-bold">+R${dinheiros}M</p>
			<p>Em valores administrados</p>
		</div>
	</div>
	<div class="flex flex-col h-fit justify-center items-center z-10">
		<a
			aria-label="Clique para falar com o nosso time"
			href="/sobre"
			class="button-before group relative p-4 rounded-xl text-xl shadow-xl font-bold w-fit hover:bg-yellow-400/90 bg-move text-black transition-all"
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

<Servicos bind:gestaoOpen bind:contabilOpen />

<Frase {phraseInView} {complicadoOpt} />

<Quemsomos {timelineOpt} {timelineInView} />

<Diferenciais />

<EmblaColaboradores />

<EmblaDepoimentos />

<Donos />

<Contato />

<Footer />

<style>
	@keyframes move {
		from {
			offset-distance: 0%;
		}
		to {
			offset-distance: 100%;
		}
	}
</style>
