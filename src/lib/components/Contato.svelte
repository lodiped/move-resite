<script>
	import planeta from '$lib/assets/planeta.webp';

	// @ts-ignore
	import Email from 'virtual:icons/mdi/email';
	// @ts-ignore
	import WhatsApp from 'virtual:icons/mdi/whatsapp';
	// @ts-ignore
	import Phone from 'virtual:icons/mdi/phone';
</script>

<div
	id="contato"
	class="flex flex-col xl:flex-row w-full items-center xl:gap-0 gap-10 justify-evenly pb-40 2xl:px-40"
>
	<div class="flex">
		<img src={planeta} alt="" />
	</div>
	<div class="flex flex-col xl:w-1/3 gap-12">
		<div class=" flex flex-col justify-center gap-12">
			<h1 class="grifter-title text-3xl lg:text-4xl">Fale com o nosso time!</h1>
		</div>
		<div class="flex flex-col gap-8">
			<button
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
				><WhatsApp class=" scale-125" />WhatsApp</button
			>
			<button
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
				><Email class=" scale-125" />Email</button
			>
			<button
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
				><Phone class=" scale-125" />Telefone</button
			>
		</div>
	</div>
</div>
