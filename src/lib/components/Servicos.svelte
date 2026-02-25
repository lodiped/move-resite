<script lang="ts">
	import Contabil from './Contabil.svelte';
	import Financeira from './Financeira.svelte';
	import Embla from './Embla.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	// @ts-ignore
	import BigX from 'virtual:icons/mdi/close';
	// @ts-ignore
	import ChevronDown from 'virtual:icons/mdi/chevron-down';
	// @ts-ignore
	import ArrowBottom from 'virtual:icons/mdi/arrow-right-bottom-bold';

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
	import { pushState } from '$app/navigation';
	import { page } from '$app/state';

	let { gestaoOpen = $bindable(), contabilOpen = $bindable() } = $props();

	function showContabil() {
		pushState('contabil', { contabilOpen: !contabilOpen });
	}
	function showGestao() {
		pushState('financeiro', { gestaoOpen: !gestaoOpen });
	}

	let contabilTab = $state(false);

	const prices = [
		{ type: 'item', service: 'Alteração de Contrato', price: 1000 },
		{ type: 'item', service: 'Abertura de associação (registro em cartório)', price: 2300 },
		{ type: 'item', service: 'Alteração de estatuto (cartório)', price: 2000 },
		{ type: 'item', service: 'Alteração de CNPJ (RFB)', price: 300 },
		{ type: 'item', service: 'Abertura de Empresa/Filial', price: 1200 },
		{ type: 'item', service: 'Baixa de Empresa/Filial', price: 1500 },
		{
			type: 'description',
			service:
				'Levantamento de débitos incluído no preço + serviços adicionais conforme necessidade de cada empresa'
		},
		{ type: 'item', service: 'Levantamento de Débitos Federais', price: 500 },
		{ type: 'item', service: 'Parcelamentos', note: '--' },
		{
			type: 'description',
			service:
				'0,5% sobre o valor total do débito, valor mínimo de R$ 200 + (quantidade de guias x R$ 15)'
		},
		{ type: 'item', service: 'Envio de guia de parcelamento', price: 0 },
		{ type: 'item', service: 'Recáculo de guia tributária', price: 20 },
		{ type: 'item', service: 'Emissão de nota fiscal de serviço', price: 25 },
		{ type: 'item', service: 'Emissão de nota de produto', price: 20 },
		{
			type: 'description',
			service: 'R$ 20 + R$ 5 por produto constante na NF'
		},

		{ type: 'item', service: 'IBGE PAC', price: 600 },
		{ type: 'item', service: 'IBGE PAS', price: 800 },
		{ type: 'item', service: 'IBGE PAIC', price: 1000 },
		{ type: 'item', service: 'IBGE PIA', price: 1200 },

		{ type: 'category', service: 'Registro em Conselho/Órgão de Classe' },

		{ type: 'item', service: 'CRM', price: 600 },
		{ type: 'item', service: 'CRA', price: 200 },
		{ type: 'item', service: 'CREFITO', price: 300 },
		{ type: 'item', service: 'CREF', price: 300 },
		{ type: 'item', service: 'OAB', price: 800 },
		{
			type: 'description',
			service: 'Exceto Paraná'
		},
		{ type: 'item', service: 'CRO', price: 500 },
		{ type: 'item', service: 'CREA', price: 250 },

		{
			type: 'item',
			service: 'Declaração de Ajuste Anual do Imposto de Renda Pessoa Física',
			label: 'Sob consulta'
		}
	];
	const brl = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});
	function formatPrice(row: any) {
		if (row.type === 'category') return '';
		if (row.label) return row.label;
		if (row.price === undefined)
			return `<span style="color: ${row.color}" class="text-${row.color}-500 font-bold">${row.note}</span>`;

		let value = brl.format(row.price);
		return row.note
			? `${value}<span style="color: ${row.color}" class="font-bold">${row.note}</span>`
			: value;
	}
</script>

<div id="servicos" class="flex px-10 lg:px-20 pb-40 pt-20 justify-center lg:items-start">
	<div class="flex lg:gap-10 gap-40 lg:flex-row flex-col">
		<div class="flex z-10 flex-col items-center justify-between gap-12 max-w-[500px]">
			<h2 class="grifter-title text-3xl md:text-4xl text-center">Soluções Contábeis</h2>
			<Contabil />
			<button
				data-umami-event="Servicos Contabeis"
				aria-label="Saiba mais sobre o serviço de Gestão Contábil"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] group border border-move/30 relative p-4 rounded-xl shadow-xl font-bold w-fit hover:bg-yellow-600/90 bg-yellow-600/70 text-move transition-all"
				onclick={() => {
					showContabil();
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
				data-umami-event="Servicos BPO"
				aria-label="Saiba mais sobre o serviço de Gestão Financeira"
				class="drop-shadow-[0_1.2rem_1rem_rgba(240,175,0,0.5)] group border border-move/30 relative p-4 rounded-xl shadow-xl font-bold w-fit hover:bg-yellow-600/90 bg-yellow-600/70 text-move transition-all"
				onclick={() => {
					showGestao();
				}}
			>
				<span class="transition-all group-hover:drop-shadow-[0_0_0.5rem_rgba(255,255,0,0.7)]"
					>Serviços Financeiros</span
				>
			</button>
		</div>
	</div>
</div>

<div class="lg:-mb-60 mb-0">
	<span class="opacity-50 font-bold w-full flex justify-center mb-10">Nossos clientes</span>
	<Embla />
</div>
{#if page.state.gestaoOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		in:fly={{ duration: 200, y: 500, opacity: 0 }}
		out:fade={{ duration: 200 }}
		class="fixed flex flex-col inset-0 justify-center items-center bg-black/30 z-50"
		onclick={(event) => {
			if (event.target === event.currentTarget) {
				history.back();
			}
		}}
	>
		<div
			class="xl:p-16 p-4 xl:w-[75%] w-[85%] relative text-center xl:h-fit overflow-scroll xl:overflow-auto max-h-[80vh] flex flex-wrap gap-10 justify-center items-center shadow-[0_15px_12px_rgba(0,0,0,0.4)] rounded-xl border border-move/10 bg-yellow-200/5 backdrop-blur-xl"
		>
			<button
				onclick={() => {
					history.back();
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

{#if page.state.contabilOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		in:fly={{ duration: 200, y: 500, opacity: 0 }}
		out:fade={{ duration: 200 }}
		class="fixed flex flex-col inset-0 justify-center items-center bg-black/30 z-50"
		onclick={(event) => {
			if (event.target === event.currentTarget) {
				history.back();
			}
		}}
	>
		<div
			class="xl:p-16 p-4 py-6 flex-col xl:w-[75%] w-[85%] relative text-center xl:h-fit xl:overflow-auto max-h-[80vh] flex gap-10 justify-center items-center shadow-[0_15px_12px_rgba(0,0,0,0.4)] rounded-xl border border-move/10 bg-yellow-200/5 backdrop-blur-xl"
		>
			<button
				onclick={() => {
					history.back();
				}}
				class="absolute hover:bg-white/10 rounded-full text-lg top-0 right-0 p-2 m-2"
			>
				<BigX />
			</button>

			<div class="w-full flex justify-center items-center gap-4 flex-col">
				<h2 class="grifter-title">Soluções Contábeis.</h2>
				<div class="xl:flex hidden">
					<div class="flex flex-wrap *:max-h-28 justify-center items-start xl:gap-10 gap-4">
						{#each contabeis as item}
							<div class="xl:w-48 w-32 flex flex-col gap-2 items-center">
								<item.icon class="text-2xl min-h-8" />
								<p class="text-sm">{item.desc}</p>
							</div>
						{/each}
					</div>
				</div>
				<div class="xl:hidden flex">
					{#if contabilTab === false}
						<div
							transition:slide
							class="flex flex-wrap *:max-h-28 justify-center items-start xl:gap-10 gap-4"
						>
							{#each contabeis as item}
								<div class="xl:w-48 w-32 flex flex-col gap-2 items-center">
									<item.icon class="text-2xl min-h-8" />
									<p class="text-sm">{item.desc}</p>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
			<div class="w-full flex justify-start items-start flex-col">
				<button
					onclick={() => {
						contabilTab = !contabilTab;
					}}
					class="p-4 px-6 w-full rounded-xl flex items-center justify-between gap-4 font-bold z-20 drop-shadow-lg hover:drop-shadow-[0_1rem_1rem_rgba(255,180,0,0.2)] bg-move text-black transition-all hover:bg-yellow-400/90"
					><span>Tabela de Preços</span>
					<div>
						<ChevronDown class="text-xl transition-transform {contabilTab ? 'rotate-180' : ''}" />
					</div></button
				>
				{#if contabilTab === true}
					<div
						transition:slide
						class="w-[95%] overflow-auto max-h-[45ch] xl:max-h-[30ch] items-start justify-start p-4 rounded-xl border-t-0 rounded-t-none flex"
					>
						<table class="text-left w-full">
							<caption class="caption-bottom pt-6 gap-2 text-sm">
								<div class="flex flex-col gap-2">
									<p class="opacity-50">
										Para qualquer serviço a cliente que não esteja na base, forma de pagamento:
										Cartão de crédito ou PIX
									</p>
								</div>
							</caption>
							<thead class="bg-move text-black">
								<tr>
									<th>Serviço</th>
									<th>Preço</th>
								</tr>
							</thead>
							<tbody>
								{#each prices as row}
									{#if row.type === 'category'}
										<tr class="font-semibold bg-move text-black">
											<td colspan="2">{row.service}:</td>
										</tr>
									{:else}
										<tr class="odd:bg-move/10">
											{#if row.type === 'description'}
												<td class="text-neutral-400 text-xs pl-4 py-1" colspan="2"
													>↳ {row.service}</td
												>
											{:else}
												<td>{row.service}</td>
												<td class="text-left">{@html formatPrice(row)}</td>
											{/if}
										</tr>
									{/if}
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
