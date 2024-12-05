<script>
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
	class="bg-[#ebebeb] pt-10 font-montserrat text-nejblack flex flex-col justify-center items-center w-full pb-20"
>
	<div class="w-[1200px] gap-20 text-lg h-[650px] my-40 flex justify-center">
		<div class="w-1/2 flex flex-col justify-between">
			<div>
				<p class="text-8xl font-cofo">
					Um podcast feito pra você <span class="text-nej">empresário</span> e
					<span class="text-nej">empresária</span>
				</p>
				<p class="text-2xl">
					que todo dia arrisca a sua pele por acreditar em um sonho, o sonho de ter um negócio de
					sucesso.
				</p>
			</div>
			<div class="flex gap-2">
				<a
					href="https://youtube.com/"
					class="text-center rounded-lg font-bold py-4 px-5 text-nejblack bg-nej">Assistir Agora</a
				>
				<a
					href="#episodios"
					class="font-bold border border-nejblack rounded-lg py-4 px-5 text-center"
					>Lista de episódios</a
				>
			</div>
			<div class=" leading-10">
				<span class="text-nowrap bg-nej/40 text-green-600 p-2 rounded-lg text-sm font-bold"
					>+1M acessos nas redes</span
				>
				<span class="text-nowrap bg-nej/40 text-green-600 p-2 rounded-lg text-sm font-bold"
					>+170K views no Reels</span
				>
				<span class="text-nowrap bg-nej/40 text-green-600 p-2 rounded-lg text-sm font-bold"
					>+34.4K curtidas no TikTok</span
				>
				<span class="text-nowrap bg-nej/40 text-green-600 p-2 rounded-lg text-sm font-bold"
					>+3.8K impressões no Spotify</span
				>
				<span class="text-nowrap bg-nej/40 text-green-600 p-2 rounded-lg text-sm font-bold"
					>+17K impressões no YouTube</span
				>
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
