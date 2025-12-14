<script>
    let user = false;
    const toggleUser = () => {
        user = !user;
    };
</script>

{#if !user}
    <button on:click={toggleUser}>login</button>
{:else}
    <button on:click={toggleUser}>Logout</button>
{/if}

<style>
    button {
        margin: 16px;
        font-size: 1rem;
        padding: 10px 10px;
        background-color: #9d79c7;
        color: rgb(0, 0, 0);
        border-radius: 10px;
        cursor: pointer;
        border: none;
        display: flex;
    }

    button:hover {
        background-color: #8a1ee9;
    }

    button:active {
        background-color: #d57df0;
    }

</style>