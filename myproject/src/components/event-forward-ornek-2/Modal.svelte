<script>
    
</script>

<div class="box">
    <div class="modal">X</div>
    <h1>Modal</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eos!</p>
</div>

<style>
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(117, 44, 170);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 24px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
     
      
        text-align: center;
    }

    .modal {
        position: relative;
        width: 30%;
        height: 30%;
        background: #fff;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        top: 8px;
        right: 8px;
        cursor: pointer;
        font-weight: bold;
    }
    span {
        position: absolute;
        top: -20px;
        right: -20px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
    }
</style>