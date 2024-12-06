<script>
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
	import { onMount } from 'svelte';
	import heroNej from '$lib/assets/nej/hero.png';
	import headerNej from '$lib/assets/nej/header.png';
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
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class={atTop
		? 'fixed text-nejblack bg-nej py-4 transition-all top-0 left-0 w-full flex justify-center'
		: 'fixed text-nejblack py-4 bg-nej/50 transition-all backdrop-blur border-b border-black/5 drop-shadow top-0 left-0 w-full flex justify-center'}
>
	<div class="w-[1200px] h-12 flex justify-between items-center">
		<a href="/podcast"><img src={headerNej} alt="" class=" w-48" /></a>
		<div class="flex gap-10">
			<a href="/podcast" class="uppercase font-montserrat font-bold">início</a>
			<a href="#sobre" class="uppercase font-montserrat font-bold">sobre</a>
			<a href="#episodios" class="uppercase font-montserrat font-bold">episódios</a>
		</div>
	</div>
</header>
<div
	class="bg-nejwhite pt-10 font-montserrat text-nejblack flex flex-col justify-center items-center w-full pb-20"
>
	<div class="w-[1200px] gap-14 text-lg h-[550px] my-40 flex justify-center">
		<div class="w-1/2 flex flex-col justify-between">
			<div></div>
			<div>
				<p class="text-8xl font-cofo">
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
					class="transition-all hover:bg-nejblack hover:text-nejwhite text-center rounded-lg font-bold py-4 px-5 text-nejblack bg-nej"
					>Assistir Agora</a
				>
				<a
					href="#episodios"
					class="transition-all hover:bg-nejblack hover:text-nejwhite font-bold border border-nejblack rounded-lg py-4 px-5 text-center"
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
	<div id="sobre" class="w-[1200px] my-20 flex flex-col gap-4 justify-center items-center">
		<h2 class="font-grifter text-2xl">Sobre</h2>
		<p class="text-center">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio beatae amet iusto sed
			perspiciatis ut excepturi sunt, nam tenetur, ullam aliquid consequatur. Id, accusamus est
			numquam nemo, sequi accusantium nulla suscipit quod hic qui iure inventore ut veniam ducimus
			cupiditate quasi veritatis consequatur eveniet consectetur! Eligendi tenetur veritatis minima
			totam.
		</p>
	</div>
	<div id="episodios" class="flex flex-col items-center gap-10 w-[1200px]">
		<h2 class="font-grifter text-2xl">Episódios</h2>
		<div class="flex gap-4">
			<div class="h-[180px] w-[320px] rounded-lg bg-stone-400"></div>
			<div class="flex flex-col justify-between">
				<h3 class="font-grifter text-xl">#01 Titulo do Episódio</h3>
				<p>
					Descrição do episódio Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Voluptatibus, impedit.
				</p>
				<div class="flex gap-2 *:border-nejblack">
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
				</div>
			</div>
		</div>
		<div class="flex gap-4">
			<div class="h-[180px] w-[320px] rounded-lg bg-stone-400"></div>
			<div class="flex flex-col justify-between">
				<h3 class="font-grifter text-xl">#01 Titulo do Episódio</h3>
				<p>
					Descrição do episódio Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Voluptatibus, impedit.
				</p>
				<div class="flex gap-2 *:border-nejblack">
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
				</div>
			</div>
		</div>
		<div class="flex gap-4">
			<div class="h-[180px] w-[320px] rounded-lg bg-stone-400"></div>
			<div class="flex flex-col justify-between">
				<h3 class="font-grifter text-xl">#01 Titulo do Episódio</h3>
				<p>
					Descrição do episódio Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Voluptatibus, impedit.
				</p>
				<div class="flex gap-2 *:border-nejblack">
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
				</div>
			</div>
		</div>
		<div class="flex gap-4">
			<div class="h-[180px] w-[320px] rounded-lg bg-stone-400"></div>
			<div class="flex flex-col justify-between">
				<h3 class="font-grifter text-xl">#01 Titulo do Episódio</h3>
				<p>
					Descrição do episódio Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Voluptatibus, impedit.
				</p>
				<div class="flex gap-2 *:border-nejblack">
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
					<div class="w-8 h-8 rounded-lg border"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="my-10">
		<h2 class="font-grifter text-2xl">Patrocinadores</h2>
		<div class="flex gap-4 *:border-nejblack">
			<a href="https://potencialpleno.com.br/" class="border p-2 rounded-lg">Potencial Pleno</a>
			<a href="https://movenegocios.com.br/" class="border p-2 rounded-lg">Move Negócios</a>
			<a href="https://ztxlabs.com/" class="border p-2 rounded-lg">ZTX Labs</a>
		</div>
	</div>
</div>
