<script>
    import { createEventDispatcher } from 'svelte';
    import {fade} from "svelte/transition";
    export let isModalOpen;
    const dispatch = createEventDispatcher();
</script>

{#if isModalOpen}
<div class="overlay" on:click={() => dispatch('close')}>
    <div class="box" transition:fade on:click|stopPropagation>
        <div class="modal">
            <span on:click={() => dispatch('close')}>x</span>
            <h1>Modal</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eos!</p>
        </div>
    </div>
</div>
{/if}
<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .box {
        background-color: rgb(117, 44, 170);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        position: relative;
    }

    .modal {
        position: relative;
        width: 300px;
        height: auto;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    span {
        position: absolute;
        top: -10px;
        right: -10px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        background: #000;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>