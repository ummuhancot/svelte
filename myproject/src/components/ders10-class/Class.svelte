<script>

    let tab ="mListesi"

    let mListesi =[ "elma","portakal","kiraz"]
    let sListesi =[ "lahana","ıspanak","patates"]


    let isim;

    const isimHandle =()=>{
        isim = !isim;
    }

</script>

<button class:isim={isim} on:click={isimHandle}>Class konusu</button>

<div>
    <!-- <span class={tab === "mListesi" ? "selected" : ""} on:click={()=> tab="mListesi"}>Meyve Listesi</span>
    <span class={tab === "sListesi" ? "selected" : ""} on:click={()=> tab="sListesi"}>Sebze Listesi</span> -->

    <span class:selected={tab === "mListesi"} on:click={()=> tab="mListesi"}>Meyve Listesi</span>
    <span class:selected={tab === "sListesi"} on:click={()=> tab="sListesi"}>Sebze Listesi</span>
</div>

<div class="li">
    {#if tab === "mListesi" }
        {#each mListesi as item}
            <li>{item}</li>
        {/each}
        {:else}
          {#each sListesi as item}
            <li>{item}</li>
        {/each}
    {/if}
</div>

<style>
    .isim{
        background-color: palevioletred;
    }

    button {
    margin: 20px;
    padding: 12px 24px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
    div{
        display: flex;
        padding: 40px;
        justify-content: space-between;
    }
    span{
        background-color: wheat;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    .selected{
        background-color: wheat;
        padding: 10px;
        border-radius: 10px;
        border-bottom: 5px solid purple;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background-color: peru;
        width: 200px;
        border-radius: 20px;
        border-bottom: 3px solid purple;


    }

    .li{
        margin: 20px;
        background-color: peachpuff;
        padding: 30px;
        border-radius: 20px;
    }
</style>