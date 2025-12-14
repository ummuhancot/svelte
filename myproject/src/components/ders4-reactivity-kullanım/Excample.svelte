<script>
    let isim = "ayşe";
    let soyisim = "yilmaz";
    $: tamisim = isim + " " + soyisim;
</script>

<input type="text" bind:value={isim}/>

<h3>isim : {isim}</h3>
<h3>soyisim : {soyisim}</h3>
<h3>tamisim : {tamisim}</h3>


<style>
    input {
        margin: 16px;
        padding: 8px;
        font-size: 1em;
        margin-bottom: 16px;
        border: 1px solid #e7c0ec;
        border-radius: 4px;
    }

    h3 {
        margin: 16px 16px 16px;
        font-family: Arial, sans-serif;
        color: #a66fc4;
        text-shadow: 1px 1px 2px #1926b5;
    }
</style>