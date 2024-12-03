<script>
	import moveLogo from '$lib/assets/logo-move.webp';
	// @ts-ignore
	import Hamburger from 'virtual:icons/mdi/menu';
	// @ts-ignore
	import BigX from 'virtual:icons/mdi/close';

	let { mobileMenu, atTop, mobileDrop = $bindable(), scrollToSection, menu } = $props();
</script>

<header
	class={atTop && !mobileDrop
		? 'flex fixed flex-col lg:flex-row w-full justify-between px-10 lg:px-20 py-8 transition-all duration-700 z-50 border-move/5'
		: 'flex fixed flex-col lg:flex-row w-full justify-between px-10 lg:px-20 py-8 drop-shadow-lg shadow-[0px_3px_5px_rgba(0,0,0,0.1)] bg-black/20 z-50 transition-all duration-700 backdrop-blur-md border-b border-move/10'}
>
	<div class="flex justify-between w-full" bind:this={menu}>
		<div>
			<a aria-label="Logo Move Negócios" href="/">
				<img loading="lazy" src={moveLogo} class="w-64 drop-shadow-md" alt="Logo Move Negócios" />
			</a>
		</div>
		<div class="gap-10 font-bold justify-between hidden lg:flex">
			<a
				aria-label="Serviços"
				onclick={scrollToSection(-5)}
				href="#servicos"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Serviços
			</a>
			<a
				aria-label="Sobre"
				onclick={scrollToSection(-180)}
				href="#sobre"
				class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
			>
				Sobre
			</a>
			<a
				aria-label="Podcast"
				href="/"
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
					aria-label="Serviços"
					onclick={scrollToSection(-10)}
					href="#servicos"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Serviços
				</a>
				<a
					aria-label="Sobre"
					onclick={scrollToSection(-190)}
					href="#sobre"
					class="drop-shadow transition-all hover:drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] w-fit"
				>
					Sobre
				</a>
				<a
					aria-label="Podcast"
					href="/"
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
