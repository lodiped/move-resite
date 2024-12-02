<script>
	import planeta from '$lib/assets/Planeta.png';

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
				class="button-before flex text-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-700/90 transition-all bg-yellow-700/70 border border-move/10 backdrop-blur"
				><WhatsApp class=" scale-125" />WhatsApp</button
			>
			<button
				class="button-before flex text-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-700/90 transition-all bg-yellow-700/70 border border-move/10 backdrop-blur"
				><Email class=" scale-125" />Email</button
			>
			<button
				class="button-before flex text-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-700/90 transition-all bg-yellow-700/70 border border-move/10 backdrop-blur"
				><Phone class=" scale-125" />Telefone</button
			>
		</div>
	</div>
</div>
