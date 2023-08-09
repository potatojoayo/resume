<script lang="ts">
    import "../app.css";
    import {fly} from "svelte/transition";
    import {nord} from "svelte-highlight/styles";

    let copied = false
</script>

<svelte:head>
    {@html nord}

</svelte:head>
<div class="sm:max-w-[640px] p-8 mx-auto relative">


    <a href="/">
        <h1 class="text-2xl">
            Hyobeom Han
        </h1>
        <p class="mt-1">February 12, 1994
        </p>
    </a>

    <button
            class="underline underline-offset-4 relative w-fit"
            on:click|stopPropagation={
            ()=>{
                copied = true
                setTimeout(()=>copied=false, 1000)
                navigator.clipboard.writeText('potatojoayo@gmail.com').then(()=>{
            })}
            }>potatojoayo@gmail.com

        {#if copied}
            <div class="absolute top-6 right-0 left-0 m-auto bg-black text-white px-3 py-2 w-fit rounded shadow-lg opacity-70"
                 transition:fly={{duration: 250,  y: 4, opacity: 0.1}}>
                copied!
            </div>
        {/if}
    </button>
    <div class="flex flex-col items-start">
        <slot/>
    </div>
</div>
