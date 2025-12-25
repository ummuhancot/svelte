<script>
    let text = ''
</script>

<textarea bind:value={text}></textarea>

<p>{text}</p>

<style>
    textarea {
        margin: 20px;
        margin-bottom: 1em;
        border: 2px solid #894492;
        border-radius: 4px;
        width: 700px;
        height: 50px;

    }
    p {
        margin: 20px;
        background-color: black;
        color: white;
        font-family: Arial, sans-serif;
        font-size: 1.2em;
        padding: 10px;
        border-radius: 5px;
        width: 700px;
        height: 50px;
        border: 2px solid #894492;
        border-radius: 4px;
        overflow-y: auto;     
        word-break: break-word;
    }
</style>