<script>
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
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';

	// InView stuff
	let gestaoOpen = $state(false), // Modal
		contabilOpen = $state(false); // Modal
	const inviewOpt = { unobserveOnEnter: true }; //parte do InView (não sei se é necessário)
	const complicadoOpt = { unobserveOnEnter: true, rootMargin: '-30%' }; //parte do InView (não sei se é necessário)
	const timelineOpt = { rootMargin: '-45%' }; //parte do InView (não sei se é necessário)
	let numbersInView = $state(false), //Checa se a section dos números está em vista (IntersectionObserver com InView)
		phraseInView = $state(false),
		timelineInView = $state(false);

	//Função que mede se a página está scrollada até o topo
	let atTop = $state(true);
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
		});

	// ESC para fechar o menu dropdown
	/** @type {any} */
	let menu;
	/** @param {{ key: string; }} event */
	function handleEsc(event) {
		if (event.key === 'Escape') {
			closeAllMenus();
		}
	}
	/** @param event {any} */
	function handleClickOutside(event) {
		if (menu && !menu.contains(event.target)) {
			closeAllMenus;
		}
	}
	function closeAllMenus() {
		mobileDrop = false;
		gestaoOpen = false;
		contabilOpen = false;
	}

	onMount(() => {
		handleScroll();
		pixelRatio = window.devicePixelRatio;
		console.log('Pixel Ratio: ' + window.devicePixelRatio);
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('keydown', handleEsc);
		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('keydown', handleEsc);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousedown', handleClickOutside);
		};
	});
</script>

<svelte:head>
	<title>Move Negócios</title>
	<link rel="icon" href="favicon.png" type="image/png" />
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

<Header {menu} {atTop} {mobileMenu} {scrollToSection} bind:mobileDrop />

<Hero {numbersInView} {inviewOpt} {pixelRatio} />

<Servicos bind:gestaoOpen bind:contabilOpen />

<Frase {phraseInView} {complicadoOpt} />

<Quemsomos {timelineOpt} {timelineInView} />

<Diferenciais />

<EmblaColaboradores />

<EmblaDepoimentos />

<Donos />

<Contato />

<Footer />
