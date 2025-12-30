<script>
    import {count} from "./store"
  import Arttr from "./Arttır.svelte";
  import Azalt from "./Azalt.svelte";
  import Reset from "./Reset.svelte";


</script>

<div>
    <p>Sayı : {$count}</p>
    <Arttr/>
    <Azalt/>
    <Reset/>


</div>

<style>
    p {
    width: 60px;
    height: 20px;
    margin-left: 80px;
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


  p:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(109, 40, 217, 0.45);
    background: linear-gradient(135deg, #7c3aed, #5b21b6);
  }

  p:focus-visible {
    outline: 3px solid rgba(139, 92, 246, 0.5);
    outline-offset: 2px;
  }
</style>