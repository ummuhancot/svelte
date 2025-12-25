<script>
  let name = "isa";
</script>

<div class="wrapper">
  <input type="text" bind:value={name} />

  <div class="output">
    {name}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px;
  }

  input {
    padding: 8px;
    font-size: 20px;
    border: 2px solid #894492;
    border-radius: 4px;
    width: 250px;
    height: 50px;
  }

  input:focus {
    outline: none;
    border-color: #8553b0;
    box-shadow: 0 0 5px rgba(91, 44, 131, 0.5);
  }

  .output {
    background-color: #979191;
    font-size: 20px;
    color: purple;

    padding: 10px;
    height: 80px;          
    border: 2px solid #894492;
    border-radius: 4px;

    overflow-y: auto;     
    word-break: break-word;
  }
</style>
