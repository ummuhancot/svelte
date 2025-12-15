<script>
  import Inner from "./Inner.svelte";


</script>

<h1>Outer</h1>

<Inner on:mesaj/>

<style>
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 16px;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 5px 5px 25px rgba(124, 6, 213, 0.2);
      border: 2px solid #8e45c9;
      color: #8e45c9;
    }
</style>