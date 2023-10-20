<script>
	const walletAction = [
		{ label: 'Withdraw Bitcoin', action: 'Withdraw', favicon: 'fa-brands fa-bitcoin' },
		{ label: 'Pay a lightning invoice', action: 'Pay', favicon: 'fa-solid fa-file-invoice-dollar' },
		{
			label: 'Convert Bitcoin and Lightning balance to Local Currency',
			action: 'Convert',
			favicon: 'fa-solid fa-money-bill-transfer'
		}
	];
	const transaction = [
		{
			time: '2023-10-19 14:30:00',
			amount: '0.002345',
			customerID: '7f8a2',
			status: 'Waiting',
			chain: 'BTC'
		},
		{
			time: '2023-12-15 18:45:20',
			amount: '0.0015',
			customerID: '3b9c1',
			status: 'Waiting',
			chain: 'BTC'
		},
		{
			time: '2023-10-27 07:30:15',
			amount: '0.00194',
			customerID: '5e2d8',
			status: 'Paid',
			chain: 'LN'
		},
		{
			time: '2023-11-10 14:20:45',
			amount: '0.0121',
			customerID: '1a6f9',
			status: 'Paid',
			chain: 'LN'
		},
		{
			time: '2023-12-01 22:10:05',
			amount: '0.0072',
			customerID: '9d4b7',
			status: 'Paid',
			chain: 'LN'
		}
	];
</script>

<div class="py-4 sm:ml-48 sm:mr-5">
	<div class="py-4 mr-5 mt-14 text-right sm:text-left">
		<h2 class="text-4xl font-bold text-[#2f3437] dark:text-white">Balances</h2>
		<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
		<section class="md:flex flex-row md:justify-around">
			<div
				class="block mx-auto sm:mx-0 max-w-md p-6 bg-[#dedede] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<h5
					class="mb-2 text-2xl font-bold tracking-tightdark:text-white text-[#223d5b] dark:text-gray-400"
				>
					Lighting
				</h5>
				{#each ['0.00', 'Sats'] as item}
					<span
						class="font-bold text-[3.5rem] p-2 font-['Helvetica'] text-gray-500 dark:text-gray-400"
						>{item}</span
					>
				{/each}
			</div>
			<div
				class="block mx-auto sm:mx-0 max-w-md p-6 bg-[#dedede] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
			>
				<h5
					class="mb-2 text-2xl font-bold tracking-tightdark:text-white text-[#223d5b] dark:text-gray-400"
				>
					BTC
				</h5>
				{#each ['0.00', 'BTC'] as item}
					<span
						class="font-bold text-[3.5rem] p-2 font-['Helvetica'] text-gray-500 dark:text-gray-400"
						>{item}</span
					>
				{/each}
			</div>
		</section>
		<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
	</div>

	<!-- Wallet Action -->
	<section class="">
		{#each walletAction as item}
			<div
				class="flex flex-row mx-auto sm:mx-0 justify-between mt-12 max-w-lg sm:max-w-full p-6 bg-[#dedede] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<p class="mb-3 mr-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
					{item.label}
				</p>
				<button
					type="button"
					class="text-white bg-[#223d5b] hover:bg-[#3b6ca3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md rounded-lg px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-[#223d5b] dark:hover:bg-[#3b6ca3] dark:focus:ring-blue-800"
				>
					<span class="pr-2 text-[1rem]">
						<i class={item.favicon} />
					</span>
					{item.action}
				</button>
			</div>
		{/each}
	</section>
	<!--Transaction History  -->
	<div class="mt-[5vh]" />

	<h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		Transaction History
	</h3>

	<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					{#each ['Time', 'Amount', 'Customer ID', 'Status', 'Chain'] as item}
						<th scope="col" class="px-6 py-3">{item}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each transaction as trans}
					<tr
						class="bg-[#dedede] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
					>
						<td class="px-6 py-4">{trans.time}</td>
						<td class="px-6 py-4">{trans.amount}</td>
						<td class="px-6 py-4">{trans.customerID}</td>
						<td class="px-6 py-4">{trans.status}</td>
						<td class="px-6 py-4">{trans.chain}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<!--End of Transaction History  -->
</div>

<!--  -->
<!--  -->
<footer class="bg-[#dedede] rounded-lg shadow md:shadow-none m-4 dark:bg-gray-800">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
			>© 2023 <a href="/" class="hover:underline">PayLN</a>. All Rights Reserved.
		</span>
		<ul
			class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			{#each ['About', 'Privacy', 'Policy', 'Licensing', 'Contact'] as item}
				<li>
					<a href="#" class="mr-4 hover:underline md:mr-6">{item}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
