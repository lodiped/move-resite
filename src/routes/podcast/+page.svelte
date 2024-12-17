<script>
	import { onMount } from 'svelte';
	import podcastData from '$lib/data/podcasts.json';

	import p2logo from '$lib/assets/empresas/p2.png';
	import p2corlogo from '$lib/assets/nej/p2cor.webp';
	import movelogo from '$lib/assets/nej/move.webp';
	import movecorlogo from '$lib/assets/nej/movecor.webp';
	import ztxlogo from '$lib/assets/nej/ztx.webp';
	import heroNej from '$lib/assets/nej/hero.webp';
	import headerNej from '$lib/assets/nej/header.webp';
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
	const currentPage = $state({ value: 1 });

	/** @type any*/
	let currentSeason = $state([]);

	let selectedSeason = $state({ value: 2 });

	function selectSeason() {
		selectedSeason.value = Number(selectedSeason.value);
		currentSeason = podcastData.filter((data) => data.temp === selectedSeason.value);
	}

	let paginatedEpisodes = $derived(
		currentSeason.slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
	);

	const totalPages = $derived(Math.ceil(currentSeason.length / itemsPerPage));

	/** @param {any} page*/
	function changePage(page) {
		if (page >= 1 && page <= totalPages) {
			currentPage.value = page;
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
	let activeYTLink = $state('');
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
		selectSeason();
		pixelRatio = window.devicePixelRatio;
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('keydown', handleEsc);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', handleEsc);
		};
	});
</script>

<svelte:head>
	<title>Negócio Em Jogo Podcast&reg;</title>
	<link rel="shortcut icon" href="/lib/assets/nej/favicon.ico" type="image/x-icon" />
	<meta
		name="description"
		content="O Podcast feito pra você empresário e empresária que todo dia arrisca a pele por acreditar em um sonho, o sonho de ter um negócio de sucesso."
	/>
	<meta name="author" content="Move Negócios - Growth" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:title" content="Negócio Em Jogo Podcast&reg;" />
	<meta
		property="og:description"
		content="O Podcast feito pra você empresário e empresária que todo dia arrisca a pele por acreditar em um sonho, o sonho de ter um negócio de sucesso."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<header
	class={atTop
		? 'hidden fixed z-40 text-nejblack rounded-b-3xl bg-nej py-4 transition-all top-0 left-0 w-full xl:flex justify-center'
		: 'hidden fixed z-40 text-nejblack rounded-b-3xl py-4 bg-nej/50 transition-all backdrop-blur border-b border-black/5 drop-shadow top-0 left-0 w-full xl:flex justify-center'}
>
	<div
		class={pixelRatio > 1
			? 'w-[1000px] h-12 flex justify-between items-center'
			: 'w-[1200px] h-12 flex justify-between items-center'}
	>
		<a aria-label="início" href="/podcast"><img src={headerNej} alt="" class=" w-48" /></a>
		<div class="flex gap-14">
			<a aria-label="Sobre o podcast" href="/podcast" class="uppercase font-montserrat font-bold"
				>início</a
			>
			<a onclick={scrollToSection(-150)} href="#sobre" class="uppercase font-montserrat font-bold"
				>sobre</a
			>
			<a
				aria-label="Lista de episódios"
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
			? 'xl:w-[1000px] xl:px-0 px-4 w-full xl:gap-14 gap-4 xl:h-[550px] xl:mt-20 xl:mb-40 flex justify-center xl:flex-row flex-col-reverse xl:items-stretch items-center'
			: 'xl:w-[1200px] xl:px-0 px-4 w-full xl:gap-14 gap-4 text-lg xl:h-[550px] xl:my-40 flex justify-center xl:flex-row flex-col-reverse xl:items-stretch items-center'}
	>
		<div class="xl:w-1/2 w-full xl:mb-0 flex xl:gap-0 gap-10 flex-col justify-between">
			<div class="xl:block hidden"></div>
			<div>
				<p class="xl:text-7xl xl:text-start text-center text-6xl font-cofo">
					O podcast feito pra você <span class="text-nej">empresário</span> e
					<span class="text-nej">empresária</span>
				</p>
				<p class="xl:text-2xl xl:text-start text-center text-xl">
					que todo dia arrisca a pele por acreditar em um sonho, o sonho de ter um negócio de
					sucesso.
				</p>
			</div>
			<div class="flex xl:gap-2 gap-4 xl:justify-start justify-between *:w-full xl:*:w-auto">
				<button
					onclick={() => {
						activeYTLink = podcastData[0].youtube;
						playModal = true;
					}}
					class="transition-all hidden xl:flex hover:bg-nejblack hover:text-nejwhite text-center xl:rounded-2xl rounded-xl font-bold py-4 px-5 text-nejblack bg-nej xl:text-base text-sm justify-center items-center"
					>Assistir Agora</button
				>
				<a
					href={`https://youtube.com/watch?v=${podcastData[0].youtube}`}
					class="transition-all xl:hidden hover:bg-nejblack hover:text-nejwhite text-center xl:rounded-2xl rounded-xl font-bold py-4 px-5 text-nejblack bg-nej xl:text-base text-sm flex items-center justify-center"
					>Assistir Agora</a
				>
				<a
					aria-label="Lista de episódios"
					onclick={scrollToSection(-150)}
					href="#episodios"
					class="transition-all hover:bg-nejblack hover:text-nejwhite font-bold border border-nejblack xl:rounded-2xl rounded-xl py-4 px-5 text-center xl:text-base text-sm"
					>Lista de episódios</a
				>
			</div>
			<div class="flex flex-col gap-1">
				<p class="text-base">Disponível em:</p>
				<div class="flex gap-4 text-4xl xl:justify-start justify-between">
					<a
						aria-label="Canal no YouTube"
						class="transition-all hover:text-nej scale-110"
						href="https://www.youtube.com/@negocioemjogo"
					>
						<YouTube />
					</a>
					<a
						aria-label="Página no Spotify"
						class="transition-all hover:text-nej"
						href="https://open.spotify.com/show/5J6XHkBZYIKs65gA9oe7vR"
					>
						<Spotify />
					</a>
					<a
						aria-label="Canal no YouTube Music"
						class="transition-all hover:text-nej scale-90"
						href="https://music.youtube.com/channel/UCEt2BmiwU0GwUbNg5uRJNbw"
					>
						<YouTubeMusic />
					</a>
					<a
						aria-label="Página na Apple Music"
						class="-translate-y-1 scale-110 transition-all hover:text-nej"
						href="https://podcasts.apple.com/ao/podcast/neg%C3%B3cio-em-jogo/id1715471413"
						><Apple />
					</a>
					<a
						aria-label="Página no Deezer"
						class="transition-all hover:text-nej"
						href="https://www.deezer.com/br/show/1000413681"
					>
						<Deezer />
					</a>
					<a
						aria-label="Página na Amazon Music"
						class="scale-105 transition-all hover:text-nej"
						href="https://music.amazon.com.br/podcasts/7d706416-1537-4771-9580-12c08dfe5690/neg%C3%B3cio-em-jogo"
					>
						<Amazon />
					</a>
				</div>
			</div>
		</div>
		<div class="xl:w-1/2 w-full flex justify-center items-center">
			<img
				src={heroNej}
				alt="Uma núvem de imagens e frases com o Logo do Negócio Em Jogo Podcast no meio. Foto do host André Castro e da Carol Costa. Termos temáticos do podcast: Família, Saúde, Fé, Empreendedorismo, Liderança, Cultura organizacional, Gestão"
			/>
		</div>
	</div>

	<div class="flex flex-col gap-20 xl:mb-40 mt-20">
		<h2 class="font-cofo text-6xl text-center">Nossos Patrocinadores</h2>
		<div
			class={pixelRatio > 1
				? 'flex xl:w-[1000px] xl:flex-row flex-col justify-around items-center'
				: 'flex xl:w-[1200px] xl:flex-row flex-col justify-around items-center'}
		>
			<a
				aria-label="Move Negócios"
				href="https://movenegocios.com.br/"
				class={pixelRatio > 1
					? 'relative xl:w-[200px] w-2/3 h-[200px] xl:h-auto group flex items-center'
					: 'relative xl:w-[300px] w-2/3 h-[200px] xl:h-auto group flex items-center'}
				><img
					src={movelogo}
					alt=""
					class="xl:w-[300px] opacity-80 group-hover:opacity-0 transition-opacity absolute"
				/>
				<img
					src={movecorlogo}
					alt=""
					class="xl:w-[300px] absolute opacity-0 group-hover:opacity-100 group-hover:drop-shadow-[0_2px_0.2rem_rgba(0,0,0,0.3)] transition-opacity"
				/>
			</a>
			<a
				aria-label="Potencial Pleno - Escola de Resultados"
				href="https://potencialpleno.com.br/"
				class={pixelRatio > 1
					? 'relative xl:w-[200px] w-2/3 h-[200px] xl:h-auto group flex items-center'
					: 'relative xl:w-[300px] w-2/3 h-[200px] xl:h-auto group flex items-center'}
				><img
					src={p2logo}
					alt=""
					class="xl:w-[300px] opacity-80 group-hover:opacity-0 transition-opacity absolute"
				/>
				<img
					src={p2corlogo}
					alt=""
					class="xl:w-[300px] absolute opacity-0 group-hover:opacity-100 transition-opacity"
				/>
			</a>
			<a
				aria-label="ZTX Labs"
				href="https://ztxlabs.com.br/"
				class="flex justify-center items-center xl:h-auto h-[200px]"
				><img src={ztxlogo} alt="" class={pixelRatio > 1 ? 'w-[200px]' : 'xl:w-[300px] w-2/3'} /></a
			>
		</div>
	</div>

	<div
		id="sobre"
		class={pixelRatio > 1
			? 'xl:w-[1000px] my-20 flex flex-col gap-20 justify-center items-between xl:px-0 px-4'
			: 'xl:w-[1200px] my-20 flex flex-col gap-20 justify-center items-between xl:px-0 px-4'}
	>
		<h2 class="font-cofo text-6xl text-center">Conheça os Hosts</h2>
		<div class="flex gap-5 xl:flex-row flex-col">
			<img src={andre} alt="André Castro" class="drop-shadow rounded-full w-[300px] h-[300px]" />
			<div class="flex flex-col xl:w-[600px] gap-2">
				<h3 class="text-2xl font-bold">André Castro</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quas, consequuntur quia ea
					in aliquam delectus nam provident ut commodi esse! Repellat doloribus, quod cupiditate eos
					distinctio reprehenderit temporibus quam!
				</p>
			</div>
		</div>
		<div class="flex gap-5 items-end xl:items-start xl:justify-end xl:flex-row flex-col-reverse">
			<div class="flex flex-col xl:w-[600px] gap-2 text-right">
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
			? 'flex flex-col items-center gap-16 xl:w-[1000px] xl:px-0 px-4'
			: 'flex flex-col items-center gap-20 xl:w-[1200px] xl:px-0 px-4'}
	>
		<label for="temporada-select" class="font-cofo text-6xl">Episódios</label>
		<select
			bind:value={selectedSeason.value}
			onchange={() => {
				selectSeason();
				changePage(1);
			}}
			name="temporada"
			id="temporada-select"
			class="bg-[#dfdfdf] font-bold p-4 rounded-xl border-none pr-10 -my-10"
		>
			<option value={2}>Temporada 2</option>
			<option value={1}>Temporada 1</option>
		</select>

		{#each paginatedEpisodes as episode}
			<div class="flex xl:flex-row flex-col gap-4 justify-between w-full">
				<button
					aria-label="Assistir Episódio"
					onclick={() => {
						activeYTLink = episode.youtube;
						playModal = true;
					}}
					class="relative self-start group"
				>
					<img
						src={`/lib/assets/nej/thumbs/${episode.id}.webp`}
						alt="Capa do Episódio"
						class="xl:h-[200px] xl:w-[355px] transition-all group-hover:brightness-50 brightness-100 rounded-xl drop-shadow"
						loading="lazy"
					/>
					<div
						class="absolute w-full h-full text-white top-0 items-center text-6xl justify-center transition-opacity flex opacity-0 group-hover:opacity-100"
					>
						<Play />
					</div>
				</button>
				<div class="flex flex-col justify-start gap-5 xl:w-[810px] xl:h-[250px]">
					<h3 class="font-bold text-xl">{episode.title}</h3>
					<p>{episode.desc}</p>
					<div class="flex gap-3 *:border-nejblack">
						<a
							aria-label="Link para o YouTube"
							href={`https://youtube.com/watch?v=${episode.youtube}`}
							target="_blank"
							class="text-2xl scale-110 transition-colors hover:text-nej"><YouTube /></a
						>
						<a
							aria-label="Link para o Spotify"
							href={episode.spotify}
							target="_blank"
							class="text-2xl transition-colors hover:text-nej"><Spotify /></a
						>
						<a
							aria-label="Link para o YouTube Music"
							href={episode.ytmusic}
							target="_blank"
							class="text-2xl scale-90 transition-colors hover:text-nej"><YouTubeMusic /></a
						>
						<a
							aria-label="Link para o Apple Music"
							href={episode.apple}
							target="_blank"
							class="text-2xl -translate-y-0.5 scale-105 transition-colors hover:text-nej"
							><Apple /></a
						>
						<a
							aria-label="Link para o Deezer"
							href={episode.deezer}
							target="_blank"
							class="text-2xl transition-colors hover:text-nej"><Deezer /></a
						>
						<a
							aria-label="Link para o Amazon"
							href={episode.amazon}
							target="_blank"
							class="text-2xl transition-colors hover:text-nej"><Amazon /></a
						>
					</div>
				</div>
			</div>
		{/each}

		<nav class="flex gap-12">
			<button
				aria-label="Página Anterior"
				onclick={() => changePage(currentPage.value - 1)}
				disabled={currentPage.value === 1}
				class="disabled:opacity-30 relative after:absolute after:content-[''] after:w-0 after:hover:w-full after:h-0.5 after:transition-all after:bottom-0 after:left-0 after:bg-black"
				>Anterior</button
			>
			<span>Página <b>{currentPage.value}</b> de <b>{totalPages}</b></span>
			<button
				aria-label="Próxima Página"
				onclick={() => changePage(currentPage.value + 1)}
				disabled={currentPage.value === totalPages}
				class="disabled:opacity-30 relative after:absolute after:content-[''] after:w-0 after:hover:w-full after:h-0.5 after:transition-all after:bottom-0 after:left-0 after:bg-black"
				>Próxima</button
			>
		</nav>
	</div>

	<div class="my-10 flex flex-col gap-10 justify-center items-center">
		<h2 class="font-bold text-2xl text-center flex">Patrocinadores</h2>
		<div class="flex gap-4 *:border-nejblack/10 *:border *:font-bold">
			<a aria-label="Potencial Pleno" href="https://potencialpleno.com.br/" class="p-2 rounded-lg"
				>Potencial Pleno</a
			>
			<a aria-label="Move Negócios" href="https://movenegocios.com.br/" class="p-2 rounded-lg"
				>Move Negócios</a
			>
			<a aria-label="ZTX Labs" href="https://ztxlabs.com/" class="p-2 rounded-lg">ZTX Labs</a>
		</div>
	</div>
</div>

{#if playModal}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class=" text-nejblack z-50 fixed font-montserrat flex items-center justify-center w-full h-full top-0 left-0 bg-black/50"
		onclick={(event) => {
			if (event.target === event.currentTarget) {
				playModal = false;
			}
		}}
	>
		<div
			class="relative flex w-[1000px] h-[580px] bg-nejwhite rounded-xl justify-center items-center"
		>
			<iframe
				width="950"
				height="534"
				src={`https://youtube.com/embed/${activeYTLink}`}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<button
				aria-label="Fechar modal"
				onclick={() => {
					playModal = false;
				}}
				class="absolute right-0 -top-11 rounded-full bg-[#dfdfdf] p-2 w-8 h-8 flex items-center justify-center"
				>X</button
			>
		</div>
	</div>
{/if}
