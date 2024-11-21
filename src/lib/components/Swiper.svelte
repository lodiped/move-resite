<script>
	import { onMount } from 'svelte';
	import Depo1 from './depoimentos/Depo1.svelte';
	import Depo2 from './depoimentos/Depo2.svelte';
	import Depo3 from './depoimentos/Depo3.svelte';
	import Depo4 from './depoimentos/Depo4.svelte';

	let isFirefox = $state(false);

	onMount(() => {
		isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
		console.log(navigator.userAgent);
	});
</script>

<div class="bg-move p-20">
	<div class="flex justify-center mb-10">
		<h1 class="text-4xl font-bold font-grifter text-black">Depoimentos</h1>
	</div>
	<swiper-container class="flex justify-center text-black items-center w-[330px] lg:w-[500px]">
		<swiper-slide
			class={isFirefox
				? 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl bg-[#f9d010]'
				: 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl backdrop-blur-md bg-move/40'}
			><Depo1 /></swiper-slide
		>
		<swiper-slide
			class={isFirefox
				? 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl bg-[#f9d010]'
				: 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl backdrop-blur-md bg-move/40'}
			><Depo2 /></swiper-slide
		>
		<swiper-slide
			class={isFirefox
				? 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl bg-[#f9d010]'
				: 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl backdrop-blur-md bg-move/40'}
			><Depo3 /></swiper-slide
		>
		<swiper-slide
			class={isFirefox
				? 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl bg-[#f9d010]'
				: 'flex justify-center items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-fit border-move/10 rounded-xl backdrop-blur-md bg-move/40'}
			><Depo4 /></swiper-slide
		>
	</swiper-container>
</div>
