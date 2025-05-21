<script>
	import { onMount } from 'svelte';

	let isLoaded = false;

	onMount(() => {
		isLoaded = true;
	});
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
	<div
		class="w-full max-w-md transform rounded-lg bg-white p-8 shadow-xl transition-all duration-500 {isLoaded
			? 'translate-y-0 opacity-100'
			: 'translate-y-4 opacity-0'}"
	>
		<div class="mb-6 flex items-center justify-center">
			<svg
				class="h-12 w-12 text-orange-500"
				viewBox="0 0 98.1 118"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"
					fill="currentColor"
				/>
				<path
					d="M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"
					fill="#fff"
				/>
			</svg>
		</div>

		<h1 class="mb-2 text-center text-2xl font-bold text-gray-800">SvelteKit Template</h1>
		<h2 class="mb-6 text-center text-lg text-gray-600">Express + Prisma Starter</h2>

		<div class="mb-6 rounded bg-gray-100 p-4">
			<p class="text-sm text-gray-700">This template includes a pre-configured setup with:</p>
			<ul class="mt-2 space-y-1">
				<li class="flex items-center">
					<span class="mr-2 text-green-500">✓</span>
					<span class="text-sm">SvelteKit frontend</span>
				</li>
				<li class="flex items-center">
					<span class="mr-2 text-green-500">✓</span>
					<span class="text-sm">Express backend</span>
				</li>
				<li class="flex items-center">
					<span class="mr-2 text-green-500">✓</span>
					<span class="text-sm">Prisma ORM</span>
				</li>
				<li class="flex items-center">
					<span class="mr-2 text-green-500">✓</span>
					<span class="text-sm">TailwindCSS styling</span>
				</li>
			</ul>
		</div>
	</div>

	<p class="mt-8 text-sm text-gray-500">Ready to start building your Svelte mini project!</p>
</div>
