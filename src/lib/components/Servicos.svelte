<script>
	import Contabil from './Contabil.svelte';
	import Financeira from './Financeira.svelte';
	import Embla from './Embla.svelte';
	import { fade, fly } from 'svelte/transition';
	// @ts-ignore
	import BigX from 'virtual:icons/mdi/close';

	let financeira = $state([
		{ icon: BPOCard, desc: 'Contas a pagar' },
		{ icon: BPOCoin, desc: 'Contas a receber' },
		{ icon: BPOInbox, desc: 'Conciliação bancária e fechamento de caixa' },
		{ icon: BPOMoney, desc: 'Relatórios financeiros' },
		{ icon: BPOPaper, desc: 'Emissão de notas fiscais' },
		{ icon: BPOSign, desc: 'Controle de contrato' },
		{ icon: BPOPapertext, desc: 'Emissão e envio de boletos (plataforma exclusiva)' },
		{ icon: BPOCalendar, desc: 'Agendamento de pagamentos e cobranças' },
		{ icon: BPOPerson, desc: 'Consultoria' },
		{ icon: BPODeadline, desc: 'Avisos de vencimentos' },
		{ icon: BPOEye, desc: 'Acompanhamento de lançamentos (Modalidade Externa)' },
		{ icon: BPOList, desc: 'Revisão de lançamentos (Modalidade Externa)' }
	]);

	let contabeis = $state([
		{ icon: BPOCard, desc: 'Relatórios gerenciais e contábeis' },
		{ icon: BPOCoin, desc: 'Realização de registros contábeis' },
		{ icon: BPOInbox, desc: 'Escriturações fiscais e legais' },
		{ icon: BPOMoney, desc: 'Elaboração de balancetes demonstrativos anuais' },
		{ icon: BPOPaper, desc: 'Departamento pessoal' },
		{ icon: BPOSign, desc: 'Departamento fiscal' },
		{ icon: BPOPapertext, desc: 'Parte societária: abertura, alteração e encerramento' }
	]);
	// @ts-ignore
	import BPOCard from 'virtual:icons/mdi/credit-card-outline';
	// @ts-ignore
	import BPOCoin from 'virtual:icons/mdi/hand-coin-outline';
	// @ts-ignore
	import BPOInbox from 'virtual:icons/mdi/inbox';
	// @ts-ignore
	import BPOPaper from 'virtual:icons/mdi/paper-outline';
	// @ts-ignore
	import BPOPapertext from 'virtual:icons/mdi/paper-text-outline';
	// @ts-ignore
	import BPOSign from 'virtual:icons/mdi/contract-sign';
	// @ts-ignore
	import BPOMoney from 'virtual:icons/mdi/money';
	// @ts-ignore
	import BPOCalendar from 'virtual:icons/mdi/date-range';
	// @ts-ignore
	import BPOPerson from 'virtual:icons/mdi/account-tie-outline';
	// @ts-ignore
	import BPODeadline from 'virtual:icons/mdi/clipboard-text-date-outline';
	// @ts-ignore
	import BPOList from 'virtual:icons/mdi/playlist-check';
	// @ts-ignore
	import BPOEye from 'virtual:icons/mdi/file-eye-outline';

	let { gestaoOpen = $bindable(), contabilOpen = $bindable() } = $props();
</script>

<div id="servicos" class="flex px-10 lg:px-20 py-40 justify-center lg:items-start">
	<div class="flex lg:gap-10 gap-40 lg:flex-row flex-col">
		<div class="flex z-10 flex-col items-center justify-between gap-12 max-w-[500px]">
			<h2 class="grifter-title relative text-3xl md:text-4xl text-center">
				Soluções Contábeis
				<span
					class="absolute md:text-3xl text-2xl font-bold font-grifter text-move bottom-3 left-24 translate-x-2.5 -translate-y-0.5"
				>
					~
				</span>
			</h2>
			<Contabil />
			<button
				aria-label="Saiba mais sobre o serviço de Gestão Contábil"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] group border border-move/30 relative p-4 rounded-xl shadow-xl font-bold w-fit hover:bg-yellow-600/90 bg-yellow-600/70 text-move transition-all"
				onclick={() => {
					contabilOpen = !contabilOpen;
				}}
			>
				<span class="transition-all group-hover:drop-shadow-[0_0_0.5rem_rgba(255,255,0,0.7)]"
					>Serviços Contábeis</span
				>
			</button>
		</div>
		<div class="flex z-10 flex-col items-center justify-between gap-12 max-w-[500px]">
			<h2 class="grifter-title text-3xl md:text-4xl text-center">Gestão Financeira</h2>
			<Financeira />
			<button
				aria-label="Saiba mais sobre o serviço de Gestão Financeira"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] group border border-move/30 relative p-4 rounded-xl shadow-xl font-bold w-fit hover:bg-yellow-600/90 bg-yellow-600/70 text-move transition-all"
				onclick={() => {
					gestaoOpen = !gestaoOpen;
				}}
			>
				<span class="transition-all group-hover:drop-shadow-[0_0_0.5rem_rgba(255,255,0,0.7)]"
					>Serviços BPO</span
				>
			</button>
		</div>
	</div>
</div>

<div class="lg:-mb-60 mb-0">
	<span class="opacity-50 font-bold w-full flex justify-center mb-10">Nossos clientes</span>
	<Embla />
</div>
{#if gestaoOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		in:fly={{ duration: 200, y: 500, opacity: 0 }}
		out:fade={{ duration: 200 }}
		class="fixed flex flex-col inset-0 justify-center items-center bg-black/30 z-50"
		onclick={(event) => {
			if (event.target === event.currentTarget) {
				gestaoOpen = false;
			}
		}}
	>
		<div
			class="xl:p-16 p-4 xl:w-[75%] w-[85%] relative text-center xl:h-fit overflow-scroll max-h-[80vh] flex flex-wrap gap-10 justify-center items-center shadow-[0_15px_12px_rgba(0,0,0,0.4)] rounded-xl border border-move/10 bg-yellow-200/5 backdrop-blur-xl"
		>
			<button
				onclick={() => {
					gestaoOpen = false;
				}}
				class="absolute hover:bg-white/10 rounded-full text-lg top-0 right-0 p-2 m-2"
			>
				<BigX />
			</button>
			<h2 class="grifter-title mt-5">Gestão Financeira.</h2>
			<div class="flex flex-wrap *:h-full relative justify-center items-start xl:gap-10 gap-5">
				{#each financeira as item}
					<div class="xl:w-48 w-32 flex flex-col gap-2 items-center">
						<item.icon class="text-2xl" />
						<p class="text-sm">{item.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}

{#if contabilOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		in:fly={{ duration: 200, y: 500, opacity: 0 }}
		out:fade={{ duration: 200 }}
		class="fixed flex inset-0 justify-center items-center bg-black/30 z-50"
		onclick={(event) => {
			if (event.target === event.currentTarget) {
				contabilOpen = false;
			}
		}}
	>
		<div
			class="xl:p-16 p-4 xl:w-[70%] w-[85%] relative text-center xl:h-fit flex flex-wrap gap-10 justify-center items-center shadow-[0_15px_12px_rgba(0,0,0,0.4)] rounded-xl border border-move/10 bg-yellow-200/5 backdrop-blur-xl"
		>
			<button
				onclick={() => {
					contabilOpen = false;
				}}
				class="absolute hover:bg-white/10 rounded-full text-lg top-0 right-0 p-2 m-2"
			>
				<BigX />
			</button>
			<h2 class="grifter-title mt-5">Soluções Contábeis.</h2>
			<div class="flex flex-wrap *:h-full relative justify-center items-start gap-10">
				{#each contabeis as item}
					<div class="xl:w-48 w-32 flex flex-col gap-2 items-center">
						<item.icon class="text-2xl" />
						<p class="text-sm">{item.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}
