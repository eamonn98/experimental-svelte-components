<script>
	import KerryButton from "./components/KerryButton.svelte";
	import Dialog from "./components/Dialog.svelte";
	export let name;

	let dialogText = '';
	let dialogTitle = '';
	let showDialog = false;
	let dialogCoords;

	let handleShowDialog = (e) => {
		let wrappedEvent = e['detail']['wrappedEvent'];
		console.log(wrappedEvent);
		dialogCoords = {x: wrappedEvent.x, y: wrappedEvent.y};
		showDialog = !showDialog;
	}
</script>


<div class="body-wrapper min-h-screen">
	<main class="grid grid-cols-8 grid-rows-2 border-dashed border-2 rounded p-4">
		<header class="col-span-full panel">
			<h1 class="font-sans text-6xl" on:click={(e) => {
				dialogTitle = 'This is an announcement';
				dialogText = 'There has been a mouse event detected coming from the page Heading field. If this was you, then OK, if not, then whatever.';
				handleShowDialog({
					detail: {
						wrappedEvent: e
					}
				});
			}}>Heading</h1>
		</header>
		<aside class="col-start-1 col-end-3 col-span-2 panel">
		</aside>
		<article class="col-start-3 col-end-7 col-span-4 main-panel">
			<h1>Hello {name}!</h1>
			<KerryButton value="Hello There"/>
			<KerryButton on:click={(e) => {
				dialogTitle = 'Dialog test';
				dialogText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
				handleShowDialog(e);
			}} value="Toggle Dialog"></KerryButton>
			{showDialog}
		</article>
		<aside class="col-start-7 col-span-2 panel"></aside>
	</main>
</div>

<Dialog bind:startCoords={dialogCoords} bind:title={dialogTitle} bind:text={dialogText} bind:show={showDialog} />

<style windi:preflights:global windi:safelist:global>
	.panel {
		@apply m-2 border-solid rounded-2xl border-1 p-2 text-white;
	}

	.main-panel {
		@apply  m-2 border-solid rounded-2xl border-0 p-4 text-white ring-2 ring-gray-500 ring-opacity-50 bg-gradient-to-tr from-green-500 to-blue-500;
	}
	.body-wrapper {
		@apply bg-gradient-to-tr from-gray-700 to-black;
	}
</style>
