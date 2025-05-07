<script>
	import embed from '$lib/assets/embed.jpg';
	import moveLogo from '$lib/assets/logo-move.webp';
	import foguete from '$lib/assets/foguete-fumaca-3d.webp';
	import hero from '$lib/assets/hero.webp';
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
	<meta property="og:image" content={embed} />
	<meta property="og:image:type" content="image/jpg" />
	<meta property="og:image:width" content="600" />
	<meta property="og:image:height" content="600" />
</svelte:head>

<main
	class="w-full h-screen overflow-clip relative flex flex-col items-center bg-lpbg bg-cover bg-right-bottom xl:justify-center justify-start pt-20 gap-16"
>
	<img src={foguete} alt="" class="absolute w-[calc(100vh*0.8)] bottom-0 left-0 drop-shadow-xl" />
	<img
		src={hero}
		alt=""
		class="absolute xl:block hidden w-[30rem] drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] bottom-10 right-10"
	/>
	<div class="xl:w-[30rem] w-[22rem] h-8 relative">
		<div class="w-full h-full scale-110 bg-black blur-xl absolute"></div>
		<div class="w-full h-full scale-110 bg-black/50 blur-xl absolute"></div>
		<div class="w-full h-full scale-y-150 scale-125 bg-black blur-2xl absolute"></div>
		<div class="w-full h-full scale-y-150 scale-125 bg-black blur-2xl absolute"></div>
		<img src={moveLogo} alt="Move Negócios (logo)" class="z-10 absolute" />
	</div>
	<div
		class="flex z-50 flex-col gap-5 *:bg-black *:text-center *:text-move *:rounded-2xl xl:*:text-xl *:py-5 xl:*:py-6 xl:*:px-16 *:px-9 *:drop-shadow-xl *:text-sm"
	>
		<a
			data-umami-event="Links WhatsApp"
			href="https://wa.me/5541998163983"
			class="hover:bg-move hover:text-black transition-all hover:scale-105">Fale conosco! 🚀</a
		>
		<a
			data-umami-event="Links Instagram"
			href="https://youtube.com/@negocioemjogo"
			target="_blank"
			class="hover:bg-move hover:text-black transition-all hover:scale-105"
			>Assista nosso PODCAST no YouTube! 🎙️</a
		>
		<a
			data-umami-event="Links Move Negócios"
			href="https://movenegocios.com.br/"
			target="_blank"
			class="hover:bg-move hover:text-black transition-all hover:scale-105"
			>Visite o nosso site! 🌐</a
		>
		<a
			data-umami-event="Links Recrutamento"
			href="https://forms.gle/xYBtMxCFXCjQqwPN9"
			target="_blank"
			class="hover:bg-move hover:text-black transition-all hover:scale-105"
			>Vem fazer parte do nosso time! 🤟</a
		>
	</div>
</main>
