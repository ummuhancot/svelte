<script>
    let yemek = ["Pizza", "Burger", "Pasta", "Salata"];
    let tatlılar = ["Dondurma", "Kek", "baklava"];

    let içecekler = ["Çay", "Şalgam", "Ayran", "Su"];

    let siparisler = [];
</script>
<div>
    
    <h1>Menu</h1>
    <h2>Yemekler</h2>
    
    {#each yemek as item (item)}
        <label class="menu-item">
            <input type="checkbox"
            name="item"
            value={item}
            bind:group={siparisler}>
        </label>
        {item}
    {/each}
    
    <h2>Tatlılar</h2>
    
    {#each tatlılar as item (item)}
        <label class="menu-item">
            <input type="checkbox"
            name="item"
            value={item}
            bind:group={siparisler}>
        </label>
        {item}
    {/each}
    
    
    <h2>İçecekler</h2>
    
    {#each içecekler as item (item)}
        <label class="menu-item">
            <input type="checkbox"
            name="item"
            value={item}
            bind:group={siparisler}>
        </label>
        {item}
    {/each}
    
    <h1>Siparişler</h1>
    
    {#each siparisler as sparis (sparis)}
    <li>{sparis}</li>
    {:else}
    <h4>Sipariş Yok</h4>
    {/each}
</div>

<style>

    div {
        background-color: #794193;
        margin: 20px;
        padding: 20px;
        border-radius: 8px;
        color: white;
        border: #000000 2px solid;
    }
    h1 {
        margin:20px 0 10px 0;
        color: #000000;
        text-align: center;
        margin-top: 20px;
    }

    h2 {
        margin:20px 0 10px 0;
        margin-top: 15px;
        color: #000000;
    }

    .menu-item {
    display: inline-flex;   
    align-items: center;
    gap: 8px;
    width: fit-content;   
    margin: 9px;
    }

    li {
        list-style-type: square;
        margin-left: 20px;
    }

</style>