<script>
	import planeta from '$lib/assets/planeta.webp';

	// @ts-ignore
	import Email from 'virtual:icons/mdi/email';
	// @ts-ignore
	import WhatsApp from 'virtual:icons/mdi/whatsapp';
	// @ts-ignore
	import Phone from 'virtual:icons/mdi/phone';

	let telefoneClicked = $state();
	let copyNotice = $state();
	/** @param {string} text*/
	function copyToClipboard(text) {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('Texto copiado:', text);
			})
			.catch((err) => {
				console.error('Falha ao copiar texto:', err);
			});
	}
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
			<a
				href="https://wa.me/5541998163983"
				target="_blank"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
				><WhatsApp class=" scale-125" />WhatsApp</a
			>
			<a
				href="mailto:contato@movenegocios.com.br"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
				><Email class=" scale-125" />Email</a
			>
			<a
				href="tel:4130784210"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex xl:hidden text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
				><Phone class=" scale-125" />Telefone</a
			>
			<button
				class="relative group hidden drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] xl:flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
				onclick={() => {
					telefoneClicked = true;
					copyNotice = true;
					setTimeout(() => {
						copyNotice = false;
					}, 3000);
					copyToClipboard('4130784210');
				}}
			>
				{#if telefoneClicked}
					41 3078-4210
				{:else}
					<Phone class="scale-125" />Telefone
				{/if}
				<div class="absolute group-hover:block hidden -bottom-10 text-base text-white/50">
					{#if copyNotice}
						Número copiado ✔
					{:else}
						Clique para copiar
					{/if}
				</div>
			</button>
		</div>
	</div>
</div>
