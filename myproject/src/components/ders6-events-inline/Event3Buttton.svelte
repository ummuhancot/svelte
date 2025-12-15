<script>
  import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()

    export let mode = 'light';

    const handlClick = () => {
        dispatch("mode", { yeniMode: mode === 'light' ? 'dark' : 'light' });
    };

</script>
     
    <h1>Event Dispatcher</h1>
    <button on:click={handlClick}>Change mode</button>

<style>
            
    button {
        margin: 8px;
        padding: 8px 16px;
        font-size: 1em;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: #6200ea;
        color: white;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease;

    }
    button:hover {
        background-color: #3700b3;
    }
    button:active {
        background-color: #bb86fc;
    }
    h1 {
        color: #b378ef;
    }
</style>