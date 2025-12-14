<script>
  import EachBlog2 from "./EachBlog2.svelte";

    let kitaplar = [
        {id:1, isim:"Svelte Kitap 1", yazar:"Yazar 1"},
        {id:2, isim:"Svelte Kitap 2", yazar:"Yazar 2"},
        {id:3, isim:"Svelte Kitap 3", yazar:"Yazar 3"},
    ];  

    const handleClick =
    () => {
        kitaplar = kitaplar.slice(1);
    };

    const handleClick2 = () => {
        const yenikitap = {id: kitaplar.length + 1, isim: `Svelte Kitap ${kitaplar.length + 1}`, yazar: `Yazar ${kitaplar.length + 1}`};
        kitaplar = [...kitaplar, yenikitap];
    };
</script>
<div class="card">
    
    {#each kitaplar as kitap (kitap.id)}
        <EachBlog2 isim= {kitap.isim} yazar= {kitap.yazar} />
        <!-- <EachBlog2 {...kitap} /> -->
         {:else}
         <h3>kitap kalmadı</h3>
    {/each}
</div>

<!-- {#each kitaplar as {isim,yazar,id} (id)}

    <EachBlog2 {isim} {yazar} />
{/each} -->

<button on:click={handleClick2}>
    Kitap Ekle
</button>

<button on:click={handleClick}>
    Kitap Sil
</button>

<style>

 h3 {
    color: #fff8f8;
    background-color: #631616;
    padding: 8px;
    border-radius: 8px;
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 0;
 }   
.card {
  display: flex;
  flex-direction: column;   /* alt alta */
  gap: 16px;

  max-height: 300px;        
  overflow-y: auto;         
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.card::-webkit-scrollbar {
  width: 8px;
}

.card::-webkit-scrollbar-thumb {
  background: #a082ca;
  border-radius: 4px;
}

.card::-webkit-scrollbar-track {
  background: #eee;
}

button {
  margin: 16px;
  font-size: 1.2rem;
  padding: 10px;
  background-color: #a082ca;
  color: rgb(241, 241, 241);
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #3700b3;
}


</style>