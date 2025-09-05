<script>
	import caneca from '$lib/assets/caneca.png';

	// @ts-ignore
	import WhatsApp from 'virtual:icons/mdi/whatsapp';
</script>

<div class="w-full flex items-center justify-center">
	<div
		id="cafe"
		class="flex max-w-[110ch] flex-col-reverse px-10 xl:flex-row w-full items-center xl:gap-20 gap-10 justify-evenly pb-40"
	>
		<div class="flex flex-col gap-12">
			<div class="flex flex-col">
				<h1 class="font-grifter text-3xl lg:text-4xl">Ainda não te convencemos?</h1>
				<h1 class="font-grifter text-3xl lg:text-4xl">Sem problemas!</h1>
				<h1 class="grifter-title text-3xl lg:text-4xl">Que tal tomar um café com a gente?</h1>
			</div>
			<a
				target="_blank"
				href="https://wa.me/5541998163983?text=%C3%93timo%20dia!%20Voc%C3%AAs%20ainda%20n%C3%A3o%20me%20convenceram%2C%20eu%20adoraria%20tomar%20um%20caf%C3%A9%20e%20conhecer%20a%20MOVE%20de%20perto.%20Quando%20podemos%3F"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
				><span><WhatsApp class="scale-125" /></span>Quero conhecer a MOVE!</a
			>
		</div>
		<div class="max-w-[35rem] w-full xl:-translate-y-10">
			<img src={caneca} class="w-full drop-shadow-xl animate-float" alt="" />
		</div>
	</div>
</div>
