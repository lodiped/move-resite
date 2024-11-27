<script>
	import AndreCastro from './AndreCastro.svelte';
	import ValdineiSilva from './ValdineiSilva.svelte';
</script>

<div
	class="flex 2xl:gap-20 lg:gap-60 gap-80 lg:px-20 px-6 flex-col py-40 2xl:flex-row 2xl:items-start items-center lg:items-center justify-center mb-60"
>
	<div class="lg:w-[650px] w-[230px] mr-[90px] lg:mr-0">
		<div
			class="flex h-[300px] lg:h-[600px] shadow-[0_5px_12px_rgba(0,0,0,0.75)] p-6 flex-col bg-andre bg-cover border-yellow-900 border lg:bg-[center_top_-10rem] bg-[center_top_-5rem] rounded-xl mr-0 lg:mr-[180px] relative"
		>
			<div class="lg:h-3/4 h-1/2"></div>
			<div class="lg:h-1/4 h-1/2">
				<h3
					class="font-grifter text-2xl drop-shadow-md bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
				>
					André Castro
				</h3>
				<p class="text-white">Cofundador e CEO</p>
			</div>
			<div
				class="absolute flex items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[380px] border-move/10 lg:-right-[130px] -right-[90px] rounded-xl lg:-bottom-[150px] -bottom-[290px] backdrop-blur-xl lg:w-[80%] w-[260px] bg-yellow-200/5"
			>
				<AndreCastro />
			</div>
		</div>
	</div>
	<div class="lg:w-[650px] w-[230px] mr-[90px] lg:mr-0">
		<div
			class="flex h-[300px] lg:h-[600px] shadow-[0_5px_12px_rgba(0,0,0,0.75)] p-6 flex-col bg-valdi bg-cover border-yellow-900 border lg:bg-[center_top_-12rem] bg-[center_top_-7rem] rounded-xl mr-0 lg:mr-[180px] relative"
		>
			<div class="lg:h-3/4 h-1/2"></div>
			<div class="lg:h-1/4 h-1/2">
				<h3
					class="font-grifter text-2xl drop-shadow-lg bg-gradient-to-r from-move to-yellow-500 w-fit text-transparent bg-clip-text"
				>
					Valdinei Silva
				</h3>
				<p class="text-white">Cofundador e COO</p>
			</div>
			<div
				class="absolute flex items-center p-8 shadow-[0_5px_12px_rgba(0,0,0,0.75)] border h-[380px] border-move/10 lg:-right-[130px] -right-[90px] rounded-xl lg:-bottom-[150px] -bottom-[290px] backdrop-blur-xl lg:w-[80%] w-[260px] bg-yellow-200/5"
			>
				<ValdineiSilva />
			</div>
		</div>
	</div>
</div>
