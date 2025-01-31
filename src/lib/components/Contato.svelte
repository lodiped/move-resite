<script>
	import planeta from '$lib/assets/planeta.webp';

	// @ts-ignore
	import Email from 'virtual:icons/mdi/email';
	// @ts-ignore
	import WhatsApp from 'virtual:icons/mdi/whatsapp';
	// @ts-ignore
	import Phone from 'virtual:icons/mdi/phone';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let { trabalheBtn = $bindable() } = $props();

	let candidate = $state({ name: '', email: '', message: '', phone: '' });

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
			class="xl:p-16 p-4 xl:w-fit w-[85%] relative text-center h-fit overflow-scroll xl:overflow-auto flex flex-wrap gap-10 justify-center items-center shadow-[0_15px_12px_rgba(0,0,0,0.4)] rounded-xl border border-move/10 bg-yellow-200/5 backdrop-blur-xl"
		>
			<button
				onclick={() => {
					trabalheBtn = false;
				}}
				class="absolute hover:bg-white/10 rounded-full text-lg top-0 right-0 p-2 m-2"
			>
				X
			</button>
			<div class="flex flex-col gap-10 w-full items-center justify-center">
				<h2 class="grifter-title mt-5">Trabalhe Conosco</h2>
				<form
					class="flex flex-col gap-4 w-full"
					method="POST"
					action="https://formsubmit.co/recrutamento@movenegocios.com.br"
					enctype="multipart/form-data"
				>
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
						type="phone"
						name="tel"
						id="phone"
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
					<div class="flex flex-col items-start">
						<p>Anexe seu currículo:</p>
						<input
							type="file"
							name="attachment"
							id="attachment"
							accept=".doc,.docx,.pdf"
							required
							class="rounded-none"
							placeholder="Currículo DOCX ou PDF"
						/>
						<p>tamanho máximo: 5MB</p>
					</div>
					<input
						type="submit"
						value="Enviar"
						class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] flex text-xl shadow-xl justify-center items-center gap-3 rounded-xl p-4 text-move font-bold hover:bg-yellow-600/90 transition-all bg-yellow-600/70 border border-move/30"
					/>
				</form>
			</div>
			<div
				class="flex flex-wrap *:h-full relative justify-center items-start xl:gap-10 gap-5"
			></div>
		</div>
	</div>
{/if}
