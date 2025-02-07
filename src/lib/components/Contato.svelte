<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let { trabalheBtn = $bindable() } = $props();

	import planeta from '$lib/assets/planeta.webp';

	// @ts-ignore
	import Email from 'virtual:icons/mdi/email';
	// @ts-ignore
	import WhatsApp from 'virtual:icons/mdi/whatsapp';
	// @ts-ignore
	import Phone from 'virtual:icons/mdi/phone';
	// @ts-ignore
	import Close from 'virtual:icons/mdi/close';
	// @ts-ignore
	import Clip from 'virtual:icons/mdi/paperclip';

	let candidate = $state({ name: '', email: '', message: '', phone: '' });

	let submitButton = $state('Enviar');

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

	/** @param {{ key: string; }} event */
	function handleEsc(event) {
		if (event.key === 'Escape') {
			closeAllMenus();
		}
	}

	function closeAllMenus() {
		trabalheBtn = false;
	}

	onMount(() => {
		window.addEventListener('keydown', handleEsc);
		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	});
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
				data-umami-event="Contato Whatsapp"
				href="https://wa.me/5541998163983"
				target="_blank"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
			>
				<WhatsApp class=" scale-125" />WhatsApp</a
			>
			<a
				data-umami-event="Contato E-mail"
				href="mailto:contato@movenegocios.com.br"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
			>
				<Email class=" scale-125" />Email</a
			>
			<a
				data-umami-event="Contato Telefone"
				href="tel:4130784210"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex xl:hidden text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
			>
				<Phone class=" scale-125" />Telefone</a
			>
			<button
				data-umami-event="Contato Telefone"
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
					<span class="flex gap-2 items-center">
						<Phone class="scale-125" />41 3078-4210
					</span>
				{:else}
					<span class="flex gap-2 items-center">
						<Phone class="scale-125" />Telefone
					</span>
				{/if}
				<div
					class="absolute -bottom-7 text-base text-white/50 {copyNotice
						? 'block'
						: 'hidden group-hover:block'}"
				>
					{#if copyNotice}
						Número copiado ✔
					{:else}
						Clique para copiar
					{/if}
				</div>
			</button>
			<button
				onclick={() => (trabalheBtn = true)}
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
			>
				Trabalhe Conosco
			</button>
		</div>
	</div>
</div>

{#if trabalheBtn}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		in:fly={{ duration: 200, y: 500, opacity: 0 }}
		out:fade={{ duration: 200 }}
		class="fixed flex flex-col inset-0 justify-center items-center bg-black/30 z-50"
		onclick={(event) => {
			if (event.target === event.currentTarget) {
				trabalheBtn = false;
			}
		}}
	>
		<div
			class="xl:p-12 p-4 xl:w-[35rem] w-[25rem] relative text-center overflow-scroll xl:overflow-auto flex flex-wrap gap-10 justify-center items-center shadow-[0_15px_12px_rgba(0,0,0,0.4)] rounded-xl border border-move/10 bg-yellow-200/5 backdrop-blur-xl"
		>
			<button
				onclick={() => {
					trabalheBtn = false;
				}}
				class="absolute hover:bg-white/10 rounded-full flex justify-center items-center text-lg top-0 right-0 p-2 m-2"
			>
				<Close class="text-xl" />
			</button>
			<div class="flex flex-col mt-8 xl:mt-0 gap-10 w-full items-center justify-center">
				<h2 class="grifter-title">Trabalhe Conosco</h2>
				<form
					class="flex flex-col gap-5 w-full"
					method="POST"
					action="https://formsubmit.co/recrutamento.movenegocios@gmail.com"
					enctype="multipart/form-data"
					onsubmit={() => {
						submitButton = 'Enviando...';
					}}
				>
					<input type="hidden" name="_next" id="next" value="https://novo.movenegocios.com.br/" />
					<input type="hidden" name="_subject" id="subject" value={`CV ${candidate.name}`} />
					<input
						type="text"
						name="name"
						id="name"
						maxlength="256"
						required
						class="rounded-xl text-black"
						placeholder="Nome e Sobrenome"
						bind:value={candidate.name}
					/>
					<input
						type="email"
						name="email"
						id="email"
						maxlength="256"
						required
						class="rounded-xl text-black"
						placeholder="E-mail"
						bind:value={candidate.email}
					/>
					<input
						type="tel"
						name="tel"
						id="tel"
						required
						class="rounded-xl text-black"
						placeholder="WhatsApp"
						bind:value={candidate.phone}
					/>
					<div class="w-full">
						<textarea
							name="message"
							id="message"
							rows="5"
							required
							placeholder="Mensagem de apresentação"
							class="resize-none w-full rounded-xl text-black"
							maxlength="280"
							bind:value={candidate.message}
						></textarea>
						<p
							class="text-right text-sm {candidate.message.length > 250
								? 'text-red-500 drop-shadow-[0_0_3px_rgba(255,0,0,1)]'
								: 'opacity-50'}"
						>
							{280 - candidate.message.length}
							{#if candidate.message.length === 279}caractere restante{:else}caracteres restantes{/if}
						</p>
					</div>
					<div class="flex flex-col items-start overflow-hidden">
						<p class="flex gap-1 items-center"><Clip />Anexe seu currículo:</p>
						<p class="text-sm mb-1.5">
							<span class="opacity-50">tamanho máximo:</span>
							<span class="text-move drop-shadow-[0_0_4px_rgba(255,255,0,1)]">5MB</span>
						</p>
						<input
							type="file"
							name="attachment"
							id="attachment"
							accept=".doc,.docx,.pdf"
							required
							class="rounded-none"
							placeholder="Currículo DOCX ou PDF"
						/>
					</div>
					<input
						type="submit"
						value={submitButton}
						class="cursor-pointer drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
					/>
				</form>
			</div>
		</div>
	</div>
{/if}
