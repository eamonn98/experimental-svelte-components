<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let value = "";
    export let cssClass = "primary"

    function handleClick(e) {
		dispatch('click', {
			wrappedEvent: e
		});
	}
</script>

<button class={cssClass} on:click={handleClick}>
    {value}
</button>


<style windi:preflights:global windi:safelist:global>
    .primary {
        @apply     
            px-6 
            py-2
            text-md 
            text-white
            font-sans
            font-semibold 
            rounded-md
            bg-white
            bg-opacity-30
            shadow-sm
            dark:border-blue-gray-800 
            hover:text-white 
            hover:bg-opacity-20
            active:bg-opacity-40
            active:outline-none
            active:border-none
            focus:outline-none 
            focus:border-none 
            focus:ring-2
            focus:ring-opacity-50
            focus:ring-gray-200;
    }

    .danger {
        @apply     
            px-6 
            py-2
            text-sm 
            text-white
            font-sans
            font-semibold 
            rounded-md
            bg-red-600
            bg-opacity-30
            shadow-sm
            dark:border-blue-gray-800 
            hover:text-white 
            hover:bg-opacity-20
            active:bg-opacity-40
            active:outline-none
            active:border-none
            focus:outline-none 
            focus:border-none 
            focus:ring-2
            focus:ring-opacity-50
            focus:ring-red-400;
    }

    .success {
        @apply     
            px-6 
            py-3
            text-md
            text-white
            font-sans
            rounded-md
            bg-green-600
            bg-opacity-30
            shadow-sm
            dark:border-blue-gray-800 
            hover:text-white 
            hover:bg-opacity-20
            active:bg-opacity-40
            active:outline-none
            active:border-none
            focus:outline-none 
            focus:border-none 
            focus:ring-2
            focus:ring-opacity-50
            focus:ring-green-400;
    }
</style>