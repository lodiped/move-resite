<script>
	import { inview } from 'svelte-inview';
	import { ctaInview } from '$lib/state.svelte';
	import moveIcon from '$lib/assets/move-icon.webp';
	// @ts-ignore
	import Facebook from 'virtual:icons/mdi/facebook';
	// @ts-ignore
	import Email from 'virtual:icons/mdi/email';
	// @ts-ignore
	import Instagram from 'virtual:icons/mdi/instagram';
	// @ts-ignore
	import LinkedIn from 'virtual:icons/mdi/linkedin';
	// @ts-ignore
	import WhatsApp from 'virtual:icons/mdi/whatsapp';
	// @ts-ignore
	import Phone from 'virtual:icons/mdi/phone';

	let reachedBottom = $state(false);
	const footerOpt = {};

	//Copiar para o clipboard
	let clipboardResult = $state('clique para copiar');
	/** @param {string} text */
	function copyToClipboard(text) {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('Texto copiado:', text);
				clipboardResult = 'copiado ✔️';
				setTimeout(() => {
					clipboardResult = 'clique para copiar';
				}, 2500);
			})
			.catch((err) => {
				console.error('Falha ao copiar texto:', err);
				clipboardResult = 'erro ao copiar (cheque o console)';
			});
	}
</script>

<div class="h-[1px] w-full bg-white/10 px-10"></div>

<footer
	use:inview={footerOpt}
	oninview_enter={() => {
		ctaInview.value = true;
	}}
	oninview_leave={() => {
		ctaInview.value = false;
	}}
	class="flex flex-col lg:flex-row gap-10 justify-center items-center w-full py-10"
>
	<div class="flex items-center px-10 max-w-[500px] w-full">
		<a href="/">
			<img
				loading="lazy"
				src={moveIcon}
				alt="Logo Move Negócios"
				class="hover:scale-110 transition-all"
			/>
		</a>
	</div>
	<div class="hidden lg:flex"></div>
	<div class="flex flex-col gap-10 pr-10 pl-10 lg:pl-0 items-center lg:items-start">
		<div class="flex text-4xl items-center gap-6 text-move -translate-x-1">
			<div class="flex">
				<a
					data-umami-event="Footer Instagram"
					class="hover:scale-110 transition-all"
					aria-label="Link para o Instagram da Move Negócios"
					href="https://www.instagram.com/movenegocios/"
				>
					<Instagram />
				</a>
			</div>

			<div class="flex">
				<a
					data-umami-event="Footer LinkedIn"
					aria-label="Link para o LinkedIn da Move Negócios"
					href="https://www.linkedin.com/company/move-neg-cios/"
					class="hover:scale-110 transition-all"
				>
					<LinkedIn />
				</a>
			</div>

			<div class="flex">
				<a
					data-umami-event="Footer Facebook"
					aria-label="Link para o Facebook da Move Negócios"
					href="https://www.facebook.com/movenegociosoficial/"
					class="hover:scale-110 transition-all"
				>
					<Facebook />
				</a>
			</div>
		</div>
		<div class="flex flex-col gap-2 w-full">
			<div class="flex gap-2 items-center">
				<Email class="scale-110 text-move" />
				<a
					data-umami-event="Footer E-mail"
					aria-label="E-mail de contato da Move Negócios: contato@movenegocios.com.br"
					href="mailto:contato@movenegocios.com.br"
					class="after:underline after:h-0.5 after:w-0 after:hover:w-full after:bg-move after:absolute relative after:left-0 after:bottom-0 after:transition-all"
				>
					contato@movenegocios.com.br
				</a>
			</div>
			<div
				aria-label="Número do WhatsApp da Move Negócios: (41) 99816-3983"
				class="flex gap-2 items-center"
			>
				<WhatsApp class="scale-110 text-move" />
				<a href="https://wa.me/5541998163983" data-umami-event="Footer Whatsapp" class="lg:hidden"
					>(41) 99816-3983</a
				>
				<div
					class="hidden lg:block before:underline before:h-0.5 before:w-0 before:hover:w-full before:bg-move before:absolute relative before:left-0 before:bottom-0 before:transition-all"
				>
					<a href="https://wa.me/5541998163983" data-umami-event="Footer Whatsapp"
						>(41) 99816-3983</a
					>
				</div>
			</div>
			<div
				aria-label="Número do telefone fixo da Move Negócios: (41) 3078-4210"
				class="flex gap-2 items-center"
			>
				<Phone class="text-move scale-110" />
				<a href="tel:04130784210" class="lg:hidden" data-umami-event="Footer Telefone"
					>(41) 3078-4210</a
				>
				<button
					data-umami-event="Footer Telefone"
					onclick={() => copyToClipboard('4130784210')}
					class="before:underline before:h-0.5 before:w-0 before:hover:w-full before:bg-move before:absolute relative before:left-0 before:bottom-0 before:transition-all hidden lg:block after:hover:content-[attr(data-content)] after:text-sm after:flex after:text-left after:opacity-50 after:ml-2 after:absolute after:bottom-0 after:w-[160px] after:left-[8.5rem]"
					data-content={clipboardResult}>(41) 3078-4210</button
				>
			</div>
		</div>
		<div class="">
			<a
				data-umami-event="Footer Maps"
				aria-label="Endereço da Move Negócios: Av. Visconde de Guarapuava, número 2764, sala 306, Centro, Curitiba, Paraná, CEP: 12345-678"
				href="https://maps.app.goo.gl/XgDwzC39xEEJwP1v9"
				class="before:content-[]"
				target="_blank"
			>
				<p>Av. Visconde de Guarapuava, nº 2764, sala 306</p>
				<p>Centro, Curitiba &mdash; PR, 80010-100</p>
			</a>
		</div>
	</div>
</footer>
