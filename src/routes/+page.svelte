<script>
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';

	// ´Go to´ seção com padding especificos
	/** @param {number} offset */
	function scrollToSection(offset) {
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
	import Welcome from '$lib/components/Welcome.svelte';
	import Sintonia from '$lib/components/diferenciais/Sintonia.svelte';
	import Solucao from '$lib/components/diferenciais/Solucao.svelte';
	import Tecnologia from '$lib/components/diferenciais/Tecnologia.svelte';
	import Podcast from '$lib/components/diferenciais/Podcast.svelte';
	import AndreCastro from '$lib/components/AndreCastro.svelte';
	import ValdineiSilva from '$lib/components/ValdineiSilva.svelte';
	import Embla from '$lib/components/Embla.svelte';
	import Servicos from '$lib/components/Servicos.svelte';
	import EmblaDepoimentos from '$lib/components/EmblaDepoimentos.svelte';
	import EmblaColaboradores from '$lib/components/EmblaColaboradores.svelte';

	// Imagens
	import moveLogo from '$lib/assets/logo-move.webp';
	import moveIcon from '$lib/assets/move-icon.png';
	import bpo from '$lib/assets/bpo.png';
	import timelapse from '$lib/assets/timelapse.webm';
	import coin from '$lib/assets/coin.png';
	import peaks from '$lib/assets/peaks.png';
	import peaksSvg from '$lib/assets/peaks.svg';
	import lines from '$lib/assets/lines.svg';
	import waves from '$lib/assets/wave.svg';
	import foguetesmoke from '$lib/assets/Foguete Fumaça.png';
	import foguete from '$lib/assets/Foguete.png';
	import planeta from '$lib/assets/Planeta.png';
	import astronauta from '$lib/assets/Astronauta.png';
	import cafe from '$lib/assets/Café.png';

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
	// @ts-ignore
	import Handshake from 'virtual:icons/mdi/handshake';
	// @ts-ignore
	import HandHeart from 'virtual:icons/mdi/hand-heart';
	// @ts-ignore
	import Teaching from 'virtual:icons/mdi/teach';
	// @ts-ignore
	import RocketLaunch from 'virtual:icons/mdi/rocket-launch';

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
				class="p-4 border border-move/10 rounded-xl font-bold z-20 drop-shadow-lg hover:drop-shadow-[0_1rem_1rem_rgba(255,180,0,0.2)] backdrop-blur-lg w-fit bg-yellow-700/70 text-move transition-all hover:bg-yellow-700/90 hidden lg:inline"
				href="https://app.gestta.com.br/#/login/auth?isInitialPage=true%20"
			>
				<span class="transition-all drop-shadow-[0_0_0.5rem_rgba(255,255,0,0.7)]">
					Área do Cliente
				</span>
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
	<div class="w-full absolute items-center flex justify-center z-10 top-[85px]">
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
		<p class={pixelRatio > 1 ? 'w-2/3 lg:text-lg text-md' : 'w-2/3 text-md lg:text-xl'}>
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
			class="button-before group border border-move/10 relative p-4 rounded-xl text-xl shadow-xl font-bold w-fit hover:bg-yellow-600/90 backdrop-blur-xl bg-yellow-600/70 text-move transition-all"
		>
			<span class="transition-all drop-shadow-[0_0_0.3rem_rgba(0,0,0,0.5)] uppercase">
				Fazer um diagnóstico da sua empresa
			</span>
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

<div class="-mb-60">
	<span class="opacity-50 font-bold w-full flex justify-center mb-10">Nossos clientes</span>
	<Embla />
</div>

<img src={peaksSvg} alt="" class="w-full scale-y-50 translate-y-[calc(25%+2px)]" />

<div
	use:inview={complicadoOpt}
	oninview_enter={() => {
		phraseInView = true;
	}}
	class="bg-move flex-col transition-all duration-[2500ms] opacity-100 flex items-center justify-center text-black pb-32 uppercase"
>
	<p
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
	<div class="drop-shadow-lg text-4xl origin-center animate-float">
		<img src={foguete} alt="" class="drop-shadow-[0_10px_1rem_rgba(0,0,0,0.5)] w-60" />
	</div>
</div>

<div id="sobre" class="flex flex-col gap-10 px-10 lg:px-20 pb-32 bg-move text-black">
	<div class="flex justify-between relative">
		<div class="flex flex-col gap-12">
			<div class="flex flex-col">
				<h2 class="text-4xl font-bold font-grifter">Quem Somos</h2>
			</div>
			<div class="flex flex-col gap-5 w-1/2">
				<Welcome />
			</div>
		</div>
		<img
			loading="lazy"
			src={cafe}
			class="h-[600px] absolute -top-20 right-[10%] drop-shadow-[0_10px_1rem_rgba(0,0,0,0.4)]"
			alt=""
		/>
	</div>
	<div
		use:inview={timelineOpt}
		oninview_enter={() => {
			timelineInView = true;
		}}
		oninview_leave={() => {
			timelineInView = false;
		}}
		class={timelineInView
			? 'flex flex-col gap-10 pt-60 pb-40 group inview'
			: 'flex flex-col gap-10 pt-60 pb-40'}
	>
		<div class="relative flex items-center mx-40 text-sm">
			<div class="w-full rounded-full h-[200px] absolute blur-3xl"></div>
			<div class="w-full bg-black h-1 z-10"></div>
			<div class="rounded-full absolute bg-black left-0 z-20 border-4 border-move w-5 h-5"></div>
			<div
				class="absolute group-[.inview]:-bottom-12 -bottom-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(0%-30px)] text-center w-fit px-2 font-bold"
			>
				2018
			</div>
			<div
				class="absolute bottom-0 group-[.inview]:bottom-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(0%-115px)] w-[250px] text-center"
			>
				Começamos uma história com vontade de vencer
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc(100%/6)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-top-12 -top-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc((100%/6)-30px)] text-center w-fit px-2 font-bold"
			>
				2019
			</div>
			<div
				class="absolute top-0 group-[.inview]:top-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc((100%/6)-115px)] w-[250px] text-center"
			>
				Mudamos para uma nova sede, a família cresceu
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc((100%/6)*2)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-bottom-12 -bottom-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(((100%/6)*2)-30px)] text-center w-fit px-2 font-bold"
			>
				2020
			</div>
			<div
				class="absolute bottom-0 group-[.inview]:bottom-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(((100%/6)*2)-115px)] w-[250px] text-center"
			>
				Passamos a oferecer soluções de gestão financeira
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc((100%/6)*3)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-top-12 -top-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(((100%/6)*3)-30px)] w-fit px-2 text-center font-bold"
			>
				2021
			</div>
			<div
				class="absolute top-0 group-[.inview]:top-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(((100%/6)*3)-115px)] w-[250px] text-center"
			>
				Ampliação do nosso escritório, a casa ficou maior
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc((100%/6)*4)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-bottom-12 -bottom-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(((100%/6)*4)-30px)] w-fit px-2 text-center font-bold"
			>
				2022
			</div>
			<div
				class="absolute bottom-0 group-[.inview]:bottom-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(((100%/6)*4)-115px)] w-[250px] text-center"
			>
				Criação do nosso podcast &ldquo;Negócio em Jogo&rdquo;
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc((100%/6)*5)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-top-12 -top-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(((100%/6)*5)-30px)] w-fit px-2 text-center font-bold"
			>
				2023
			</div>
			<div
				class="absolute top-0 group-[.inview]:top-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(((100%/6)*5)-115px)] w-[250px] text-center"
			>
				Expansão do escritório
			</div>
			<div
				class="rounded-full absolute bg-black left-[100%] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-bottom-12 -bottom-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(100%-30px)] w-fit px-2 text-center font-bold"
			>
				2024
			</div>
			<div
				class="absolute bottom-0 group-[.inview]:bottom-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(100%-115px)] w-[250px] text-center"
			>
				Prêmio Conta Azul de melhor escritório de BPO Financeiro do Brasil
			</div>
		</div>
	</div>
</div>

<div class="-mb-60">
	<img src={peaksSvg} alt="" class="w-full rotate-180 scale-y-50 -translate-y-[calc(25%+2px)]" />
</div>

<div class="relative flex flex-col gap-12 lg:px-20 px-8 py-20 items-center">
	<div class="absolute w-full h-full flex justify-center items-center">
		<img src={foguetesmoke} alt="" class="opacity-30 w-full" />
	</div>
	<div class="absolute h-full flex flex-col items-center justify-center">
		<img
			loading="lazy"
			src={moveIcon}
			alt="Logo Move Negócios"
			class=" scale-[200%] translate-x-3 -translate-y-9 opacity-20 hidden"
		/>
	</div>
	<div class="drop-shadow-[0_0_1rem_rgba(255,255,0,0.35)]">
		<h2
			class="text-4xl font-bold font-grifter bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Diferenciais
		</h2>
	</div>
	<div class="flex lg:flex-row flex-col gap-12 justify-center">
		<div
			class="p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[290px] border-move/10 rounded-xl backdrop-blur-xl lg:w-1/2 max-w-[600px] bg-yellow-200/5"
		>
			<Handshake
				class="absolute opacity-20 drop-shadow-[0_0_1rem_rgba(255,255,255,1)] text-9xl text-white right-2 bottom-2"
			/>
			<Sintonia />
		</div>
		<div
			class="p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[290px] border-move/10 rounded-xl backdrop-blur-xl lg:w-1/2 max-w-[600px] bg-yellow-200/5"
		>
			<HandHeart
				class="absolute opacity-20 drop-shadow-[0_0_1rem_rgba(255,255,255,1)] text-9xl text-white right-2 bottom-2"
			/>
			<Solucao />
		</div>
	</div>
	<div class="flex lg:flex-row flex-col gap-12 justify-center">
		<div
			class="p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[290px] border-move/10 rounded-xl backdrop-blur-xl lg:w-1/2 max-w-[600px] bg-yellow-200/5"
		>
			<RocketLaunch
				class="absolute opacity-20 drop-shadow-[0_0_1rem_rgba(255,255,255,1)] text-white text-9xl right-2 bottom-2"
			/>
			<Tecnologia />
		</div>
		<div
			class="p-8 relative shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[290px] border-move/10 rounded-xl backdrop-blur-xl lg:w-1/2 max-w-[600px] bg-yellow-200/5"
		>
			<Teaching
				class="absolute opacity-20 drop-shadow-[0_0_1rem_rgba(255,255,255,1)] text-white text-9xl right-2 bottom-2"
			/>
			<Podcast />
		</div>
	</div>
</div>

<EmblaColaboradores />

<EmblaDepoimentos />

<div
	class="flex 2xl:gap-20 lg:gap-60 gap-80 lg:px-20 px-6 flex-col py-40 2xl:flex-row 2xl:items-start items-center lg:items-center justify-center mb-60"
>
	<div class="lg:w-[650px] w-[230px] mr-[90px] lg:mr-0">
		<div
			class="flex h-[300px] lg:h-[600px] p-6 flex-col bg-andre bg-cover border-yellow-900 border lg:bg-[center_top_-10rem] bg-[center_top_-5rem] rounded-xl mr-0 lg:mr-[180px] relative"
		>
			<div class="lg:h-3/4 h-1/2"></div>
			<div class="lg:h-1/4 h-1/2">
				<h3
					class="font-grifter text-2xl drop-shadow-md bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
				>
					André Castro
				</h3>
				<p class="text-white">Cofundador e CEO</p>
			</div>
			<div
				class="absolute flex items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[380px] border-move/10 lg:-right-[130px] -right-[90px] rounded-xl lg:-bottom-[150px] -bottom-[290px] backdrop-blur-xl lg:w-[80%] w-[260px] bg-yellow-200/5"
			>
				<AndreCastro />
			</div>
		</div>
	</div>
	<div class="lg:w-[650px] w-[230px] mr-[90px] lg:mr-0">
		<div
			class="flex h-[300px] lg:h-[600px] p-6 flex-col bg-valdi bg-cover border-yellow-900 border lg:bg-[center_top_-12rem] bg-[center_top_-7rem] rounded-xl mr-0 lg:mr-[180px] relative"
		>
			<div class="lg:h-3/4 h-1/2"></div>
			<div class="lg:h-1/4 h-1/2">
				<h3
					class="font-grifter text-2xl drop-shadow-lg bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
				>
					Valdinei Silva
				</h3>
				<p class="text-white">Cofundador e COO</p>
			</div>
			<div
				class="absolute flex items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[380px] border-move/10 lg:-right-[130px] -right-[90px] rounded-xl lg:-bottom-[150px] -bottom-[290px] backdrop-blur-xl lg:w-[80%] w-[260px] bg-yellow-200/5"
			>
				<ValdineiSilva />
			</div>
		</div>
	</div>
</div>

<div id="contato" class="flex w-full items-center justify-evenly pb-40">
	<div class="flex">
		<img src={planeta} alt="" />
	</div>
	<div class="flex flex-col w-1/3 gap-12">
		<div class=" flex flex-col justify-center gap-12">
			<h1
				class="drop-shadow-[0_0_1rem_rgba(255,255,0,0.35)] text-4xl font-bold font-grifter bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
			>
				Fale com o nosso time!
			</h1>
			<p class="text-justify">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, repellendus. Voluptatibus
				maxime eveniet veritatis tenetur, quidem rerum qui explicabo quae quo nesciunt totam iure
				facere voluptates sequi beatae minus ipsum eaque laudantium, velit ex soluta? Error rem sunt
				voluptates quidem tempore iusto at necessitatibus laborum ducimus? Fugit labore placeat ut.
			</p>
		</div>
		<div class="flex flex-col gap-8">
			<button
				class="button-before flex text-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-700/90 transition-all bg-yellow-700/70 border border-move/10 backdrop-blur"
				><WhatsApp class=" scale-125" />WhatsApp</button
			>
			<button
				class="button-before flex text-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-700/90 transition-all bg-yellow-700/70 border border-move/10 backdrop-blur"
				><Email class=" scale-125" />Email</button
			>
			<button
				class="button-before flex text-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-700/90 transition-all bg-yellow-700/70 border border-move/10 backdrop-blur"
				><Phone class=" scale-125" />Telefone</button
			>
		</div>
	</div>
</div>

<div class="h-0.5 w-full bg-white/10 px-10"></div>

<footer class="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center w-full py-10">
	<div class="flex items-center px-10 max-w-[500px] w-full">
		<a href="/">
			<img
				loading="lazy"
				src={moveIcon}
				alt="Logo Move Negócios"
				class="hover:scale-110 transition-all"
			/>
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
				<div
					class="hidden lg:block before:underline before:h-0.5 before:w-0 before:hover:w-full before:bg-move before:absolute relative before:left-0 before:bottom-0 before:transition-all"
				>
					<a href="wame">(41) 99816-3983</a>
				</div>
			</div>
			<div
				aria-label="Número do telefone fixo da Move Negócios: (41) 3078-4210"
				class="flex gap-2 items-center"
			>
				<Phone class="text-move scale-110" />
				<a href="tel:04130784210" class="lg:hidden">(41) 3078-4210</a>
				<button
					onclick={() => copyToClipboard('4130784210')}
					class="before:underline before:h-0.5 before:w-0 before:hover:w-full before:bg-move before:absolute relative before:left-0 before:bottom-0 before:transition-all hidden lg:block after:hover:content-[attr(data-content)] after:text-sm after:flex after:text-left after:opacity-50 after:ml-2 after:absolute after:bottom-0 after:w-[160px] after:left-[8.5rem]"
					data-content={clipboardResult}>(41) 3078-4210</button
				>
			</div>
		</div>
		<div class="">
			<a
				aria-label="Endereço da Move Negócios: Av. Visconde de Guarapuava, número 2764, sala 306, Centro, Curitiba, Paraná, CEP: 12345-678"
				href="https://maps.app.goo.gl/XgDwzC39xEEJwP1v9"
				class="before:content-[]"
			>
				<p>Av. Visconde de Guarapuava, nº 2764, sala 306</p>
				<p>Centro, Curitiba &mdash; PR, 12345-678</p>
			</a>
		</div>
	</div>
</footer>
