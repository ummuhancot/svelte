<script>
    const handleClick = () => {
        alert("butona tıklandın biliyorum!");
    }
    let soz = "";
</script>

<button on:click|once={handleClick}>
    Tıkla Beni
</button>

<form on:submit|preventDefault>
    <input type="text" placeholder="hayat felsefeniz nedir? bizimle paylaşır mısın?" bind:value={soz}/>
    <p>{soz}</p>
    <button type="submit">Gönder</button>
</form>

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
        background-color: #62165b;
    }

    button:active {
        background-color: #d57df0;
    }

    input {
        width: 350px;
        margin: 16px;
        padding: 8px;
        font-size: 1em;
        border: 1px solid #b97ce8;
        border-radius: 4px;
        margin-bottom: 16px;
    }

    p {
        font-size: 1rem;
        color: #4a148c;
        margin: 16px;
        background-color: #9d79c7;
        padding: 10px;
        border-radius: 8px;
        min-width: 50px;
        min-height: 50px;

        white-space: normal;
        word-break: break-word;
        overflow-wrap: break-word;
    }


</style>