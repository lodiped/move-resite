<script>
	import { onMount } from 'svelte';
	let atTop = true;

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
	});
</script>

<header
	class={atTop
		? 'flex fixed w-full justify-between px-20 py-8'
		: 'flex fixed w-full justify-between px-20 py-8 bg-black'}
>
	<div><a href="/">MOVE NEGÓCIOS LOGO</a></div>
	<div class="flex gap-10 font-bold justify-between">
		<a href="/sobre">Sobre</a><a href="/servicos">Serviços</a><a href="/podcast">Podcast</a><a
			href="/contato">Contato</a
		>
	</div>
	<div>
		<a
			class="p-4 rounded-xl font-bold drop-shadow-lg w-fit bg-yellow-400 text-black"
			href="https://app.gestta.com.br/#/login/auth?isInitialPage=true%20">Área do Cliente</a
		>
	</div>
</header>

<div class="flex flex-col gap-10 px-20 py-10">
	<div class="flex flex-col h-2/3 justify-center gap-10 pt-20">
		<p class="text-7xl font-bold xl:w-1/2 uppercase">
			O sucesso do seu negócio depende de suas escolhas.
		</p>
		<p class="text-xl font-bold w-1/2">
			Escrevemos uma frase de efeito secundária para encher um monte de linguiça.
		</p>
	</div>
	<div class="flex flex-col h-fit justify-center -z-10">
		<a
			href="/sobre"
			class="p-4 rounded-xl text-xl drop-shadow-lg font-bold w-fit bg-yellow-400 text-black"
			>Saiba mais.</a
		>
	</div>
</div>

<div class="flex flex-col gap-10 px-20 py-10 bg-yellow-400 text-black">
	<div class="flex flex-col">
		<p class="uppercase">Bem-vindo à MOVE Negócios</p>
		<h2 class="text-4xl font-bold font-grifter">Quem Somos</h2>
	</div>
	<div class="flex flex-col gap-5">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a ab beatae alias, fuga culpa
			repudiandae doloribus ipsa qui officiis praesentium atque in. Quae rem cupiditate ea laborum
			totam sapiente?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla pariatur placeat iure
			commodi id culpa amet. Quod, consequuntur laboriosam. Aperiam unde non excepturi nesciunt
			eaque exercitationem quisquam laudantium fugiat.
		</p>
	</div>
</div>

<div class="flex flex-col gap-10 px-20 py-10">
	<div>
		<h2 class="text-4xl font-bold font-grifter">Diferenciais</h2>
	</div>
	<div>
		<h3 class="text-2xl font-bold">Sintonia com o cliente</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur error, explicabo at porro
			aperiam neque voluptas possimus sed nam doloremque maxime eaque in voluptate repellat quis
			soluta? Facere, corrupti perspiciatis?
		</p>
	</div>
	<div>
		<h3 class="text-2xl font-bold">Solução contábil e gestão financeira</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur error, explicabo at porro
			aperiam neque voluptas possimus sed nam doloremque maxime eaque in voluptate repellat quis
			soluta? Facere, corrupti perspiciatis?
		</p>
	</div>
	<div>
		<h3 class="text-2xl font-bold">Tecnologia aliada a agilidade</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur error, explicabo at porro
			aperiam neque voluptas possimus sed nam doloremque maxime eaque in voluptate repellat quis
			soluta? Facere, corrupti perspiciatis?
		</p>
	</div>
	<div>
		<h3 class="text-2xl font-bold">Podcast</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur error, explicabo at porro
			aperiam neque voluptas possimus sed nam doloremque maxime eaque in voluptate repellat quis
			soluta? Facere, corrupti perspiciatis?
		</p>
	</div>
</div>

<div class="flex flex-col gap-10 px-20 py-10 bg-yellow-400 text-black">
	<div>
		<p class="uppercase">Por que nos escolher?</p>
		<h2 class="text-4xl font-bold font-grifter">Por isso, somos sua melhor escolha!</h2>
	</div>
	<div class="flex gap-20">
		<div class="w-20">
			<p class="text-3xl font-bold">+340</p>
			<p>Clientes ativos</p>
		</div>
		<div class="w-20">
			<p class="text-3xl font-bold">+13</p>
			<p>Anos de experiência</p>
		</div>
		<div class="w-20">
			<p class="text-3xl font-bold">+20</p>
			<p>Soluções para seu negócio</p>
		</div>
	</div>
</div>

<div class="flex flex-col gap-10 px-20 py-10">
	<div>
		<h2 class="text-3xl font-bold font-grifter">Soluções Contábeis</h2>
		<p class="mb-8">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia maxime et quos quam,
			corrupti qui. Eveniet velit iste consectetur ut esse, quo obcaecati aperiam minus sit sequi
			doloribus similique?
		</p>
		<a
			class="p-4 rounded-xl font-bold drop-shadow-lg w-fit bg-yellow-400 text-black"
			href="/">Saiba Mais</a
		>
	</div>
	<div>
		<h2 class="text-3xl font-bold font-grifter">Gestão Financeira</h2>
		<p class="mb-8">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia maxime et quos quam,
			corrupti qui. Eveniet velit iste consectetur ut esse, quo obcaecati aperiam minus sit sequi
			doloribus similique?
		</p>
		<a
			class="p-4 rounded-xl font-bold drop-shadow-lg w-fit bg-yellow-400 text-black"
			href="/">Saiba Mais</a
		>
	</div>
</div>

<div class="flex flex-col gap-10 px-20 py-10">
	<div>
		<h1 class="text-4xl font-bold font-grifter">Depoimentos</h1>
	</div>
</div>

<style>
</style>
