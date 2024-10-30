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

	// Imagens
	import moveLogo from '$lib/assets/logo-move.webp';
	import bpo from '$lib/assets/bpo.png';
	import timelapse from '$lib/assets/timelapse.webm';

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
	let numbersInView = false; //Checa se a section dos números está em vista (IntersectionObserver com InView)
	const inviewOpt = {}; //parte do InView (não sei se é necessário)

	// textarea Mensagem do Form de Contato
	let charsUsed = ''; //Variável que insere todos os caracteres na textarea do form de contato
	let charsMax = 2000;
	$: charsLeft = charsMax - charsUsed.length; //Calcula os caracteres restantes na textarea

	//Função que mede se a página está scrollada até o topo
	let atTop = true;
	function handleScroll() {
		if (window.scrollY === 0) {
			atTop = true;
		} else {
			atTop = false;
		}
	}

	//Mobile menu dropdown
	let mobileDrop = false;
	$: mobileMenu = () => {
		mobileDrop = !mobileDrop;
	};

	// Efeito de aumento dos números
	let clientes = 0;
	let anos = 0;
	let solucoes = 0;
	$: raiseNumbers = () => {
		let raiseClientes = () => {
			if (clientes < 340) {
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
		raiseClientes();
		raiseAnos();
		raiseSolucoes();
		numbersInView = true;
	};

	// ESC para fechar o menu dropdown
	/** @param {{ key: string; }} event */
	function handleEsc(event) {
		if (event.key === 'Escape') {
			mobileDrop = false;
		}
	}

	onMount(() => {
		handleScroll();
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
		? 'flex fixed flex-col lg:flex-row w-full justify-between px-10 lg:px-20 py-8 transition-all duration-700 z-20'
		: 'flex fixed flex-col lg:flex-row w-full justify-between px-10 lg:px-20 py-8 drop-shadow-lg bg-black/10 z-20 transition-all duration-700 backdrop-blur-md'}
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
				class="p-4 rounded-xl font-bold z-20 drop-shadow-lg w-fit bg-yellow-400 text-black hover:text-yellow-300 transition-all hover:bg-black hidden lg:inline"
				href="https://app.gestta.com.br/#/login/auth?isInitialPage=true%20"
			>
				Área do Cliente
			</a>
			<button
				on:click={mobileMenu}
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

<div class="flex flex-col gap-20 pt-64 relative">
	<div class="w-full absolute items-center flex justify-center z-10 top-[85px]">
		<a
			href="https://www.youtube.com/watch?v=atn1FXDDswY"
			target="blank_"
			class="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] hover:scale-105 opacity-70 hover:opacity-100 drop-shadow-lg transition-all tracking-widest rounded-full w-fit"
		>
			<img src={bpo} class="h-[9rem]" alt="Prêmio Conta Azul BPO Financeiro UAU 2024" />
		</a>
	</div>
	<div class="flex flex-col h-2/3 justify-center items-center gap-12 z-10">
		<p
			class="text-4xl lg:text-7xl font-bold font-grifter drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] w-fit uppercase text-center leading-snug bg-gradient-to-r from-yellow-300 to-yellow-600 text-transparent bg-clip-text"
		>
			Saia do<br />amadorismo
		</p>
		<p class="text-xl text-white font-bold w-full text-center">
			Números não precisam ser complicados.
		</p>
	</div>
	<div class="flex flex-col h-fit justify-center items-center z-10">
		<a
			aria-label="Clique para falar com o nosso time"
			href="/sobre"
			class="p-4 rounded-xl text-xl shadow-xl font-bold uppercase w-fit bg-yellow-400 text-black hover:bg-black hover:text-yellow-300 transition-all"
		>
			Eu quero levar o meu negócio para o próximo nível!
		</a>
	</div>
	<div class="flex flex-col gap-5 items-center w-full z-10">
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
		class="hidden absolute text-5xl lg:text-9xl z-10 drop-shadow-[0_40px_15px_rgba(0,0,0,0.9)] top-1/3 left-2/3 -translate-x-10 -translate-y-24 hover:-translate-y-28 cursor-default transition-all h-fit"
	>
		🚀
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
	<div class="flex flex-col items-center gap-12 max-w-[500px]">
		<h2
			class="text-4xl font-bold relative font-grifter bg-gradient-to-r from-yellow-300 to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Soluções Contábeis.
			<span
				class="absolute text-3xl font-bold font-grifter text-yellow-400 bottom-3 left-24 translate-x-2.5 -translate-y-0.5"
			>
				~
			</span>
		</h2>
		<Contabil />
		<a
			aria-label="Saiba mais sobre o serviço de Gestão Contábil"
			class="p-4 rounded-xl font-bold drop-shadow-lg w-fit bg-yellow-400 text-black hover:bg-black hover:text-white"
			href="/"
		>
			Saiba Mais
		</a>
	</div>
	<div class="flex flex-col items-center gap-12 max-w-[500px]">
		<h2
			class="text-4xl font-bold font-grifter bg-gradient-to-r from-yellow-300 to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Gestão Financeira.
		</h2>
		<Financeira />
		<a
			aria-label="Saiba mais sobre o serviço de Gestão Financeira"
			class="p-4 rounded-xl font-bold drop-shadow-lg w-fit bg-yellow-400 text-black hover:bg-black hover:text-white"
			href="/"
		>
			Saiba Mais
		</a>
	</div>
</div>

<div class="flex flex-col gap-10 px-10 lg:px-20 py-10 bg-yellow-400 text-black">
	<div class="flex flex-col">
		<p class="uppercase">Bem-vindo à MOVE Negócios</p>
		<h2 class="text-4xl font-bold font-grifter">Quem Somos</h2>
	</div>
	<div class="flex flex-col gap-5 w-2/3">
		<Welcome />
	</div>
</div>

<div class="flex flex-col gap-8 lg:px-20 px-8 py-10 items-center">
	<div>
		<h2
			class="text-4xl font-bold font-grifter pb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 w-fit text-transparent bg-clip-text"
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

<div
	class="flex gap-10 bg-yellow-400 text-black h-[500px] w-full"
	use:inview={inviewOpt}
	on:inview_enter={raiseNumbers}
>
	<div class="w-1/2 bg-team bg-cover bg-center"></div>
	<div class="flex flex-col gap-10 py-10 pr-20 h-fit justify-center w-1/2">
		<div
			class={numbersInView
				? 'transition-all duration-[2500ms]'
				: 'transition-all duration-[2500ms] translate-y-10 opacity-0'}
		>
			<p class="uppercase">Por que nos escolher?</p>
			<h2 class="text-4xl font-bold font-grifter">Por isso, somos sua melhor escolha!</h2>
		</div>
		<div
			class={numbersInView
				? 'flex gap-10 lg:gap-20 transition-all duration-[2500ms] flex-col lg:flex-row'
				: 'transition-all opacity-0 flex gap-20 duration-[2500ms] translate-y-10 flex-col lg:flex-row'}
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
		</div>
	</div>
</div>

<div class="flex flex-col gap-10 px-10 lg:px-20 py-10">
	<div>
		<h1
			class="text-4xl font-bold font-grifter bg-gradient-to-r from-yellow-300 to-yellow-500 w-fit text-transparent bg-clip-text"
		>
			Depoimentos
		</h1>
	</div>
	<div class="flex flex-col lg:flex-row">
		<Depo1 />
		<Depo2 />
	</div>
</div>

<div class="flex flex-col items-center justify-center py-10 gap-4">
	<div>
		<h1
			class="text-4xl font-bold font-grifter bg-gradient-to-r from-yellow-300 to-yellow-500 w-fit text-transparent bg-clip-text"
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
				/>
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
					class="p-4 rounded bg-yellow-400 text-black cursor-pointer hover:bg-black hover:text-yellow-400 transition-all"
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
			<img src={moveLogo} alt="Logo Move Negócios" class="" />
		</a>
	</div>
	<div class="hidden lg:flex"></div>
	<div class="flex flex-col gap-10 pr-10 pl-10 lg:pl-0 items-center lg:items-start">
		<div class="flex text-4xl items-center gap-6 text-yellow-300 -translate-x-1">
			<div class="flex">
				<a
					aria-label="Link para o Instagram da Move Negócios"
					href="https://www.instagram.com/movenegocios/"
				>
					<Instagram />
				</a>
			</div>
			<div class="flex">
				<a
					aria-label="Link para o LinkedIn da Move Negócios"
					href="https://www.linkedin.com/company/move-neg-cios/"
				>
					<LinkedIn />
				</a>
			</div>

			<div class="flex">
				<a
					aria-label="Link para o Facebook da Move Negócios"
					href="https://www.facebook.com/movenegociosoficial/"
				>
					<Facebook />
				</a>
			</div>
		</div>
		<div class="flex flex-col gap-2 w-full">
			<div class="flex gap-2 items-center">
				<Email class="scale-110 text-yellow-300" />
				<a
					aria-label="E-mail de contato da Move Negócios: contato@movenegocios.com.br"
					href="mailto:contato@movenegocios.com.br"
				>
					contato@movenegocios.com.br
				</a>
			</div>
			<div
				aria-label="Número do WhatsApp da Move Negócios: (41) 99816-3983"
				class="flex gap-2 items-center"
			>
				<WhatsApp class="scale-110 text-yellow-300" />(41) 99816-3983
			</div>
			<div
				aria-label="Número do telefone fixo da Move Negócios: (41) 3078-4210"
				class="flex gap-2 items-center"
			>
				<Phone class="text-yellow-300 scale-110" />(41) 3078-4210
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
</style>
