<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()

    const selamGonder = () => {
        dispatch("mesaj", { text: "Merhaba from Inner Component" });
    };
</script>



<div>
    <h1>Inner</h1>
    
    <button on:click={selamGonder}>
        Selam Gönder
    </button>
</div>

<style>

    div {
        margin: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid #8e45c9;
        border-radius: 10px;
        box-shadow: 5px 5px 25px rgba(142, 69, 201, 0.2);
    }


    button {
        margin: 8px;
        padding: 8px 16px;
        font-size: 1em;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: #5f03f4;
        color: white;
        box-shadow: 2px 2px 8px rgba(98, 8, 8, 0.2);
        transition: background-color 0.3s ease;

    }
    button:hover {
        background-color: #7622aa;
    }
    button:active {
        background-color: #a974e8;
    }
    h1 {
        color: #8e45c9;
    }

</style>