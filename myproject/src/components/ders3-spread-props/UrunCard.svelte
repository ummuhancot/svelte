<script>

    export let urun;
    export let fiyat;
    export let aciklama;

</script>
<div>

    <h3>Ürün ismi : {urun} </h3>
    <h4>Fiyat : {fiyat}</h4>
    <p>Açıklama : {aciklama}</p>
</div>


<style>
    div {
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
        max-width: 300px;
        box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
    }
    
    div:hover {
        box-shadow: 4px 4px 16px rgba(226, 153, 237, 0.2);
        border-color: #cb67e7;
    }
    
    div:active {
        box-shadow: inset 2px 2px 8px rgba(0,0,0,0.2);
        border-color: #a040a0;
    }

    h3 {
        margin: 0;
        font-size: 1.5em;
        color: #333;
    }

    h4 {
        margin: 8px 0;
        font-size: 1.2em;
        color: #666;
    }

    p {
        font-size: 1em;
        color: #555;
    }
</style>
