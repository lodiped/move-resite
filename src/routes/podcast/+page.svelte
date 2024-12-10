<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import podcastData from '$lib/data/podcasts.json';

	import p2logo from '$lib/assets/empresas/p2.png';
	import p2corlogo from '$lib/assets/nej/p2cor.png';
	import movelogo from '$lib/assets/nej/move.png';
	import movecorlogo from '$lib/assets/nej/movecor.png';
	import ztxlogo from '$lib/assets/nej/ztx.png';
	import angelo from '$lib/assets/nej/thumbs/43.png';
	import naganos from '$lib/assets/nej/thumbs/42.png';
	import heroNej from '$lib/assets/nej/hero.png';
	import headerNej from '$lib/assets/nej/header.png';
	import andre from '$lib/assets/nej/andre.jpg';

	// @ts-ignore
	import Amazon from 'virtual:icons/cbi/amazon-logo';
	// @ts-ignore
	import Deezer from 'virtual:icons/cbi/deezer-logo';
	// @ts-ignore
	import Apple from 'virtual:icons/mdi/apple';
	// @ts-ignore
	import YouTube from 'virtual:icons/mdi/youtube';
	// @ts-ignore
	import YouTubeMusic from 'virtual:icons/cbi/youtube-music';
	// @ts-ignore
	import Spotify from 'virtual:icons/mdi/spotify';
	// @ts-ignore
	import Play from 'virtual:icons/mdi/play';

	// PAGINATION
	const itemsPerPage = 5;
	const currentPage = writable(1);

	let paginatedEpisodes = $derived(
		podcastData.slice(($currentPage - 1) * itemsPerPage, $currentPage * itemsPerPage)
	);

	const totalPages = Math.ceil(podcastData.length / itemsPerPage);

	/** @param {any} page*/
	function changePage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage.set(page);
		}
	}

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

	let pixelRatio = $state(1);
	let playModal = $state(false);

	/** @param {{ key: string; }} event */
	function handleEsc(event) {
		if (event.key === 'Escape') {
			playModal = false;
		}
	}

	//Função que mede se a página está scrollada até o topo
	let atTop = $state(true);
	function handleScroll() {
		if (window.scrollY === 0) {
			atTop = true;
		} else {
			atTop = false;
		}
	}

	onMount(() => {
		handleScroll();
		pixelRatio = window.devicePixelRatio;
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('keydown', handleEsc);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleEsc);
		};
	});
</script>

<header
	class={atTop
		? 'fixed z-40 text-nejblack rounded-b-3xl bg-nej py-4 transition-all top-0 left-0 w-full flex justify-center'
		: 'fixed z-40 text-nejblack rounded-b-3xl py-4 bg-nej/50 transition-all backdrop-blur border-b border-black/5 drop-shadow top-0 left-0 w-full flex justify-center'}
>
	<div
		class={pixelRatio > 1
			? 'w-[1000px] h-12 flex justify-between items-center'
			: 'w-[1200px] h-12 flex justify-between items-center'}
	>
		<a href="/podcast"><img src={headerNej} alt="" class=" w-48" /></a>
		<div class="flex gap-14">
			<a href="/podcast" class="uppercase font-montserrat font-bold">início</a>
			<a onclick={scrollToSection(-150)} href="#sobre" class="uppercase font-montserrat font-bold"
				>sobre</a
			>
			<a
				onclick={scrollToSection(-150)}
				href="#episodios"
				class="uppercase font-montserrat font-bold">episódios</a
			>
		</div>
	</div>
</header>

<div
	class={pixelRatio > 1
		? 'bg-nejwhite pt-8 font-montserrat text-nejblack flex flex-col justify-center items-center w-full pb-20'
		: 'bg-nejwhite pt-10 font-montserrat text-nejblack flex flex-col justify-center items-center w-full pb-20'}
>
	<div
		class={pixelRatio > 1
			? 'w-[1000px] gap-14 h-[550px] mt-20 mb-40 flex justify-center'
			: 'w-[1200px] gap-14 text-lg h-[550px] my-40 flex justify-center'}
	>
		<div class="w-1/2 flex flex-col justify-between">
			<div></div>
			<div>
				<p class="text-7xl font-cofo">
					O podcast feito pra você <span class="text-nej">empresário</span> e
					<span class="text-nej">empresária</span>
				</p>
				<p class="text-2xl">
					que todo dia arrisca a pele por acreditar em um sonho, o sonho de ter um negócio de
					sucesso.
				</p>
			</div>
			<div class="flex gap-2">
				<a
					href="https://youtube.com/"
					class="transition-all hover:bg-nejblack hover:text-nejwhite text-center rounded-2xl font-bold py-4 px-5 text-nejblack bg-nej"
					>Assistir Agora</a
				>
				<a
					href="#episodios"
					class="transition-all hover:bg-nejblack hover:text-nejwhite font-bold border border-nejblack rounded-2xl py-4 px-5 text-center"
					>Lista de episódios</a
				>
			</div>
			<div class="flex flex-col gap-1">
				<p class="text-base">Disponível em:</p>
				<div class="flex gap-4 text-4xl">
					<a
						class="transition-all hover:text-nej scale-110"
						href="https://www.youtube.com/@negocioemjogo"
					>
						<YouTube />
					</a>
					<a
						class="transition-all hover:text-nej"
						href="https://open.spotify.com/show/5J6XHkBZYIKs65gA9oe7vR"
					>
						<Spotify />
					</a>
					<a
						class="transition-all hover:text-nej scale-90"
						href="https://music.youtube.com/channel/UCEt2BmiwU0GwUbNg5uRJNbw"
					>
						<YouTubeMusic />
					</a>
					<a
						class="-translate-y-1 scale-110 transition-all hover:text-nej"
						href="https://podcasts.apple.com/ao/podcast/neg%C3%B3cio-em-jogo/id1715471413"
						><Apple />
					</a>
					<a class="transition-all hover:text-nej" href="https://www.deezer.com/br/show/1000413681">
						<Deezer />
					</a>
					<a
						class="scale-105 transition-all hover:text-nej"
						href="https://music.amazon.com.br/podcasts/7d706416-1537-4771-9580-12c08dfe5690/neg%C3%B3cio-em-jogo"
					>
						<Amazon />
					</a>
				</div>
			</div>
		</div>
		<div class="w-1/2 rounded-lg flex justify-center items-center">
			<img src={heroNej} alt="" />
		</div>
	</div>

	<div class="flex flex-col gap-20 mb-40 mt-20">
		<h2 class="font-cofo text-6xl text-center">Nossos Patrocinadores</h2>
		<div
			class={pixelRatio > 1
				? 'flex w-[1000px] justify-around items-center'
				: 'flex w-[1200px] justify-around items-center'}
		>
			<a
				href="https://movenegocios.com.br/"
				class={pixelRatio > 1
					? 'relative w-[200px] group flex items-center'
					: 'relative w-[300px] group flex items-center'}
				><img
					src={movelogo}
					alt=""
					class="w-[300px] opacity-80 group-hover:opacity-0 transition-opacity absolute"
				/>
				<img
					src={movecorlogo}
					alt=""
					class="w-[300px] absolute opacity-0 group-hover:opacity-100 group-hover:drop-shadow-[0_2px_0.2rem_rgba(0,0,0,0.3)] transition-opacity"
				/>
			</a>
			<a
				href="https://potencialpleno.com.br/"
				class={pixelRatio > 1
					? 'relative w-[200px] group flex items-center'
					: 'relative w-[300px] group flex items-center'}
				><img
					src={p2logo}
					alt=""
					class="w-[300px] opacity-80 group-hover:opacity-0 transition-opacity absolute"
				/>
				<img
					src={p2corlogo}
					alt=""
					class="w-[300px] absolute opacity-0 group-hover:opacity-100 transition-opacity"
				/>
			</a>
			<a href="https://ztxlabs.com.br/"
				><img src={ztxlogo} alt="" class={pixelRatio > 1 ? 'w-[200px]' : 'w-[300px]'} /></a
			>
		</div>
	</div>

	<div
		id="sobre"
		class={pixelRatio > 1
			? 'w-[1000px] my-20 flex flex-col gap-20 justify-center items-between'
			: 'w-[1200px] my-20 flex flex-col gap-20 justify-center items-between'}
	>
		<h2 class="font-cofo text-6xl text-center">Conheça os Hosts</h2>
		<div class="flex gap-5">
			<img src={andre} alt="" class="drop-shadow rounded-2xl w-[300px] h-[300px]" />
			<div class="flex flex-col w-[600px] gap-2">
				<h3 class="text-2xl font-bold">André Castro</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quas, consequuntur quia ea
					in aliquam delectus nam provident ut commodi esse! Repellat doloribus, quod cupiditate eos
					distinctio reprehenderit temporibus quam!
				</p>
			</div>
		</div>
		<div class="flex gap-5 justify-end">
			<div class="flex flex-col w-[600px] gap-2 text-right">
				<h3 class="font-bold text-2xl">Carol Costa</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit consequatur, earum
					asperiores, laboriosam adipisci est nulla incidunt accusantium ullam quam reiciendis
					debitis ad quos quis assumenda id optio tempora!
				</p>
			</div>
			<div class="border-nejblack border rounded-2xl w-[300px] h-[300px]">IMAGE CAROL</div>
		</div>
	</div>

	<div
		id="episodios"
		class={pixelRatio > 1
			? 'flex flex-col items-center gap-20 w-[1000px]'
			: 'flex flex-col items-center gap-20 w-[1200px]'}
	>
		<h2 class="font-cofo text-6xl">Episódios</h2>
		{#each paginatedEpisodes as episode}
			<div class="flex gap-4 justify-between w-full">
				<button onclick={() => (playModal = true)} class="relative self-start group">
					<img
						src={`/lib/assets/nej/thumbs/${episode.id}.png`}
						alt=""
						class="h-[200px] w-[355px] transition-all group-hover:brightness-50 brightness-100 rounded-xl drop-shadow"
					/>
					<div
						class="absolute w-full h-full text-white top-0 items-center text-6xl justify-center transition-opacity flex opacity-0 group-hover:opacity-100"
					>
						<Play />
					</div>
				</button>
				<div class="flex flex-col justify-start gap-5 w-[810px] h-[250px]">
					<h3 class="font-bold text-xl">{episode.title}</h3>
					<p>{episode.desc}</p>
					<div class="flex gap-2 *:border-nejblack">
						<a href={episode.youtube} class="text-2xl scale-110"><YouTube /></a>
						<a href={episode.spotify} class="text-2xl"><Spotify /></a>
						<a href={episode.ytmusic} class="text-2xl scale-90"><YouTubeMusic /></a>
						<a href={episode.apple} class="text-2xl -translate-y-0.5 scale-105"><Apple /></a>
					</div>
				</div>
			</div>
		{/each}

		<nav class="flex gap-10">
			<button
				onclick={() => changePage($currentPage - 1)}
				disabled={$currentPage === 1}
				class="disabled:opacity-30">Anterior</button
			>
			<span>Página {$currentPage} de {totalPages}</span>
			<button
				onclick={() => changePage($currentPage + 1)}
				disabled={$currentPage === totalPages}
				class="disabled:opacity-30">Próxima</button
			>
		</nav>
	</div>

	<div class="my-10">
		<h2 class="font-bold text-2xl">Patrocinadores</h2>
		<div class="flex gap-4 *:border-nejblack">
			<a href="https://potencialpleno.com.br/" class="border p-2 rounded-lg">Potencial Pleno</a>
			<a href="https://movenegocios.com.br/" class="border p-2 rounded-lg">Move Negócios</a>
			<a href="https://ztxlabs.com/" class="border p-2 rounded-lg">ZTX Labs</a>
		</div>
	</div>
</div>

{#if playModal}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="text-nejblack z-50 fixed flex items-center justify-center w-full h-full top-0 left-0 bg-black/50"
		onclick={(event) => {
			if (event.target === event.currentTarget) {
				playModal = false;
			}
		}}
	>
		<div class="flex w-[1000px] h-[700px] bg-white rounded-xl">YouTube Embed</div>
	</div>
{/if}
