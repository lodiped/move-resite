<script>
	import { inview } from 'svelte-inview';
	import cafe from '$lib/assets/Café.png';
	import peaksSvg from '$lib/assets/peaks.svg';
	import Welcome from './Welcome.svelte';
	let { timelineInView, timelineOpt } = $props();
</script>

<div id="sobre" class="flex flex-col gap-10 px-10 lg:px-20 pb-24 bg-move text-black">
	<div class="flex justify-between relative">
		<div class="flex flex-col gap-12">
			<div class="flex flex-col">
				<h2 class="text-4xl font-bold font-grifter">Quem Somos</h2>
			</div>
			<div class="flex flex-col gap-5 w-1/2">
				<Welcome />
			</div>
		</div>
		<img
			loading="lazy"
			src={cafe}
			class="h-[600px] absolute -top-20 right-[10%] drop-shadow-[0_10px_1rem_rgba(0,0,0,0.4)]"
			alt=""
		/>
	</div>
	<div
		use:inview={timelineOpt}
		oninview_enter={() => {
			timelineInView = true;
		}}
		oninview_leave={() => {
			timelineInView = false;
		}}
		class={timelineInView
			? 'flex flex-col gap-10 pt-60 pb-40 group inview'
			: 'flex flex-col gap-10 pt-60 pb-40'}
	>
		<div class="relative flex items-center mx-40 text-sm">
			<div class="w-full rounded-full h-[200px] absolute blur-3xl"></div>
			<div class="w-full bg-black h-1 z-10"></div>
			<div class="rounded-full absolute bg-black left-0 z-20 border-4 border-move w-5 h-5"></div>
			<div
				class="absolute group-[.inview]:-bottom-12 -bottom-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(0%-30px)] text-center w-fit px-2 font-bold"
			>
				2018
			</div>
			<div
				class="absolute bottom-0 group-[.inview]:bottom-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(0%-115px)] w-[250px] text-center"
			>
				Começamos uma história com vontade de vencer
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc(100%/6)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-top-12 -top-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc((100%/6)-30px)] text-center w-fit px-2 font-bold"
			>
				2019
			</div>
			<div
				class="absolute top-0 group-[.inview]:top-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc((100%/6)-115px)] w-[250px] text-center"
			>
				Mudamos para uma nova sede, a família cresceu
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc((100%/6)*2)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-bottom-12 -bottom-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(((100%/6)*2)-30px)] text-center w-fit px-2 font-bold"
			>
				2020
			</div>
			<div
				class="absolute bottom-0 group-[.inview]:bottom-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(((100%/6)*2)-115px)] w-[250px] text-center"
			>
				Passamos a oferecer soluções de gestão financeira
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc((100%/6)*3)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-top-12 -top-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(((100%/6)*3)-30px)] w-fit px-2 text-center font-bold"
			>
				2021
			</div>
			<div
				class="absolute top-0 group-[.inview]:top-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(((100%/6)*3)-115px)] w-[250px] text-center"
			>
				Ampliação do nosso escritório, a casa ficou maior
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc((100%/6)*4)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-bottom-12 -bottom-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(((100%/6)*4)-30px)] w-fit px-2 text-center font-bold"
			>
				2022
			</div>
			<div
				class="absolute bottom-0 group-[.inview]:bottom-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(((100%/6)*4)-115px)] w-[250px] text-center"
			>
				Criação do nosso podcast &ldquo;Negócio em Jogo&rdquo;
			</div>
			<div
				class="rounded-full absolute bg-black left-[calc((100%/6)*5)] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-top-12 -top-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(((100%/6)*5)-30px)] w-fit px-2 text-center font-bold"
			>
				2023
			</div>
			<div
				class="absolute top-0 group-[.inview]:top-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(((100%/6)*5)-115px)] w-[250px] text-center"
			>
				Expansão do escritório, agora ocupamos um total de 420m²
			</div>
			<div
				class="rounded-full absolute bg-black left-[100%] z-20 border-4 border-move w-5 h-5"
			></div>
			<div
				class="absolute group-[.inview]:-bottom-12 -bottom-3 bg-move z-30 transition-all duration-500 text-2xl left-[calc(100%-30px)] w-fit px-2 text-center font-bold"
			>
				2024
			</div>
			<div
				class="absolute bottom-0 group-[.inview]:bottom-5 transition-all opacity-0 duration-500 group-[.inview]:opacity-100 left-[calc(100%-115px)] w-[250px] text-center"
			>
				Prêmio Conta Azul de melhor BPO Financeiro do Brasil
			</div>
		</div>
	</div>
</div>

<div class="-mb-60">
	<img src={peaksSvg} alt="" class="w-full rotate-180 scale-y-50 -translate-y-[calc(25%+2px)]" />
</div>
