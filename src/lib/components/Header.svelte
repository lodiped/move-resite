<script>
	import { ctaInview } from '$lib/state.svelte';

	let { mobileMenu, atTop, mobileDrop = $bindable(), scrollToSection, menu, avgFPS } = $props();

	import moveLogo from '$lib/assets/logo-move.webp';
	// @ts-ignore
	import Hamburger from 'virtual:icons/mdi/menu';
	// @ts-ignore
	import BigX from 'virtual:icons/mdi/close';
	// @ts-ignore
	import WhatsApp from 'virtual:icons/mdi/whatsapp';
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLElement}
	 */
	let targetHeader;
	/**
	 * @type {HTMLButtonElement}
	 */
	let dropdownButton;

	/**
	 * @param {any} event
	 */
	function handleOutside(event) {
		if (dropdownButton.contains(event.target)) {
			mobileMenu();
		} else if (!targetHeader.contains(event.target)) {
			mobileDrop = false;
		}
	}

	onMount(() => {
		window.addEventListener('click', handleOutside);
		return () => {
			window.removeEventListener('click', handleOutside);
		};
	});
</script>

<header
	bind:this={targetHeader}
	class="flex fixed flex-col lg:flex-row lg:justify-center w-full justify-between px-2 lg:px-20 py-8 transition-all duration-700 {atTop &&
	!mobileDrop
		? 'duration-700 z-50 border-move/5'
		: avgFPS < 24
			? 'shadow-[0px_3px_5px_rgba(0,0,0,0.1)] bg-black/70 z-50 border-b border-move/10'
			: 'drop-shadow-lg shadow-[0px_3px_5px_rgba(0,0,0,0.1)] bg-black/20 z-50 backdrop-blur-md border-b border-move/10'}"
>
	<div class="flex justify-between w-full max-w-[1500px] px-5" bind:this={menu}>
		<div>
			<a aria-label="Logo Move Negócios" href="/">
				<img loading="lazy" src={moveLogo} class="w-64 drop-shadow-md" alt="Logo Move Negócios" />
			</a>
		</div>
		<div class="gap-10 font-bold justify-between hidden lg:flex">
			<a
				data-umami-event="Header Servicos Desktop"
				aria-label="Serviços"
				onclick={scrollToSection(-80)}
				href="#servicos"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Serviços
			</a>
			<a
				data-umami-event="Header Sobre Desktop"
				aria-label="Sobre"
				onclick={scrollToSection(-180)}
				href="#sobre"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Sobre
			</a>
			<a
				data-umami-event="Header Contato Desktop"
				aria-label="Contato"
				onclick={scrollToSection(-200)}
				href="#contato"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Contato
			</a>
			<a
				data-umami-event="Header Podcast Desktop"
				aria-label="Podcast"
				href="https://negocioemjogo.movenegocios.com.br/"
				target="_blank"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Podcast
			</a>
		</div>
		<div>
			<a
				data-umami-event="Header Gestta Desktop"
				aria-label="Área do Cliente"
				class="p-4 rounded-xl font-bold z-20 drop-shadow-lg hover:drop-shadow-[0_1rem_1rem_rgba(255,180,0,0.2)] w-fit bg-move text-black transition-all hover:bg-yellow-400/90 hidden lg:inline"
				href="https://app.gestta.com.br/#/login/auth?isInitialPage=true%20"
			>
				<span> Área do Cliente </span>
			</a>
			<button
				bind:this={dropdownButton}
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
					data-umami-event="Header Servicos Mobile"
					aria-label="Serviços"
					onclick={scrollToSection(-10)}
					href="#servicos"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Serviços
				</a>
				<a
					data-umami-event="Header Sobre Mobile"
					aria-label="Sobre"
					onclick={scrollToSection(-190)}
					href="#sobre"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Sobre
				</a>
				<a
					data-umami-event="Header Contato Mobile"
					aria-label="Contato"
					onclick={scrollToSection(-10)}
					href="#contato"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Contato
				</a>
				<a
					data-umami-event="Header Podcast Mobile"
					aria-label="Podcast"
					href="https://negocioemjogo.movenegocios.com.br"
					target="_blank"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Podcast
				</a>
				<a
					data-umami-event="Área do Cliente Gestta Mobile"
					aria-label="Área do Cliente"
					class="p-4 rounded-xl font-bold z-20 drop-shadow-lg hover:drop-shadow-[0_1rem_1rem_rgba(255,180,0,0.2)] w-full text-center bg-move text-black transition-all hover:bg-yellow-400/90"
					href="https://app.gestta.com.br/#/login/auth?isInitialPage=true%20"
				>
					<span> Área do Cliente </span>
				</a>
			</div>
		</div>
	{/if}
</header>

<footer
	class="fixed w-full h-screen z-50 pointer-events-none flex items-end justify-center xl:items-end xl:justify-end"
>
	<a
		href="https://wa.me/5541998163983"
		class="hidden absolute xl:flex gap-2 items-center drop-shadow-xl font-bold z-50 pointer-events-auto p-4 px-5 bg-move text-black uppercase rounded-xl m-4 transition-all {ctaInview.value
			? 'xl:-translate-y-60 xl:-translate-x-60 xl:opacity-0 xl:pointer-events-none'
			: 'opacity-100'}"><WhatsApp class="text-xl" /> Economize tempo e dinheiro agora!</a
	>
</footer>
