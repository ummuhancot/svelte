<script>
    let sayi = 0;
    $: click = sayi;
    const handleClick = () => {
        sayi += 1;
    };
</script>

<button on:click={handleClick}>
    {sayi} kez tıklandı
</button>
<p>{click}</p>

<style>
    button {
        margin: 16px;
        font-size: 1rem;
        padding: 10px 10px;
        background-color: #9d79c7;
        color: rgb(0, 0, 0);
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: #8a1ee9;
    }

    button:active {
        background-color: #d57df0;
    }
    p {
        font-size: 1rem;
        color: #4a148c;
        margin: 16px;
        background-color: #9d79c7;
        padding: 10px;
        border-radius: 8px;
        display: inline-block;
    }
</style>