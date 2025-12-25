<script>
  import Modal from "./Modal.svelte";

    let isModalOpen = false;

    const openModal = () =>{
      isModalOpen = true;
    }

    const closeModal =() =>{
      isModalOpen = false;
    }
</script>

<button on:click={openModal}>Open Modal</button>
<Modal {isModalOpen} on:close={closeModal}/>

<style>
    button {
      margin: 20px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #b989f0;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #4800ff;
    }

    button:focus {
        outline: none;
    }
    button:active {
        transform: scale(0.98);
    }
</style>