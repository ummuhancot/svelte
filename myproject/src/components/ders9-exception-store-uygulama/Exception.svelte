<script>
  import Header from "./Header.svelte";

  import {products,sepet} from "./store";

  const sepeteEkle = (id) => {products.update(currentProducts => {
    let kopyaProdutc = [...currentProducts]
    let updatedProduct = kopyaProdutc.find((products)=>products.id==id)

    if(updatedProduct.adet>0){
        updatedProduct.adet --;
        sepet.update(value =>value + 1);
    }
    return kopyaProdutc;
  })}

</script>

<Header/>
 <div class="dizayn">
{#each $products as product (product.id)}
   
        <div class="card">
            <h3>{product.title}</h3>
            <span>Stok : {product.adet} </span>
            <button disabled={!product.adet} on:click={()=>sepeteEkle(product.id)}>Sepete Ekle</button>
            
        </div>
    
{/each}
</div>
<style>

    h3{
        
    }

.dizayn {
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* margin yerine daha temiz */
}

.card {
  display: flex;
  flex-direction: column;
  background-color: #dba6f6;
  color: black;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
}
 button {
    margin-top: 20px;
    position: relative;
    padding: 12px 28px;
    font-size: 16px;
    font-weight: 600;

    color: white;
    background: linear-gradient(135deg, #8b5cf6, #6d28d9);
    border: none;
    border-radius: 8px;

    cursor: pointer;
    transition: 
      transform 0.15s ease,
      box-shadow 0.15s ease,
      background 0.2s ease;

    box-shadow: 0 6px 16px rgba(109, 40, 217, 0.35);
  }

  /* Hover */
  button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(109, 40, 217, 0.45);
    background: linear-gradient(135deg, #7c3aed, #5b21b6);
  }

  /* Active (click) */
  button:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(109, 40, 217, 0.35);
  }

  /* Disabled */
  button:disabled {
    background: #c4b5fd;
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.7;
  }

  /* Focus (accessibility) */
  .btn:focus-visible {
    outline: 3px solid rgba(139, 92, 246, 0.5);
    outline-offset: 2px;
  }
</style>