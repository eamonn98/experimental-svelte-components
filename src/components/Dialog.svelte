<script>
    import KerryButton from "./KerryButton.svelte";
    import { scale, fly } from 'svelte/transition';
    import { quintOut } from "svelte/easing";

    const flyDuration = 200;

    export let title = "Dialog Title";
    export let text = "This is a load of text for this modal dialog. Set the {text} prop to customise";
    export let dismissText = "Dismiss";

    export let show = true;
    export let startCoords;

    let flyValues = [ 
        {x:-200, y:-50}, 
        {x: 200, y: 45}, 
        {x: 45, y: 145}, 
        {x: 300, y: -45}
    ];
        
    let flyConfig = () => {
        if(startCoords) {
            let offsetCoords = {
                x: ((window.innerWidth / 2) - startCoords.x) * -1, 
                y: ((window.innerHeight / 2) - startCoords.y) * -1, 
                duration: flyDuration
            }
            console.log(offsetCoords);
            return offsetCoords;
        }

        let randValue = Math.floor(Math.random() * flyValues.length);
        return {
            x: flyValues[randValue].x,
            y: flyValues[randValue].y,
            duration: flyDuration
        }
    };

    let handleDismiss = (e) => {
        show = false;
    };
</script>

<!-- <div class="modal-capture" on:click={handleDismiss}>
    <div in:fly="{flyConfig()}" out:fly="{flyConfig()}" class="dialog-container">
        <header class="dialog-header">
            {title}
        </header>
        <section class="dialog-body">
            <p class="body-text">{text}</p>
        </section>
        <section class="buttons-row">
            <span class="dialog-buttons">
                <KerryButton value={dismissText} cssClass="success" on:click={handleDismiss}/>
            </span>
        </section>
    </div>
</div> -->

{#if show}
<div transition:fly="{flyConfig()}" class="modal-capture" on:click={handleDismiss}>
    <div class="dialog-container">
        
        <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
        </span>
            <div on:click|stopPropagation={e => {}} transition:scale="{{delay: 0, duration: 500, easing: quintOut}}" class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div transition:scale="{{delay: 150, duration: 300, easing: quintOut}}" class="">
                    <header class="dialog-header">
                        {title}
                    </header>
                    <section class="dialog-body">
                        <p class="body-text">{text}</p>
                    </section>
                    <section class="buttons-row">
                        <span class="dialog-buttons">
                            <KerryButton value={dismissText} cssClass="success" on:click={handleDismiss}/>
                        </span>
                    </section>
                </div>
        </div>
    </div>
</div>
{/if}

<style windi:preflights windi:safelist>
    .modal-capture {
        @apply fixed inset-0 z-10 overflow-y-auto;
    }
    .dialog-container { @apply
        min-h-screen px-4 text-center;
    }

    .dialog-header { @apply
        w-full
        text-3xl font-medium leading-6 text-gray-900;
    }

    .dialog-body { @apply
        my-4
        w-full;
    }

    .body-text { @apply
        text-size-md text-gray-500;
    }

    .buttons-row { @apply 
        w-full;
    }

    .dialog-buttons{ @apply
        float-right;
    }
</style>