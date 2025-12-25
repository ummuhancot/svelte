<script>
    let isCompleted = true;

</script>

<label>
    <div>
        <input type="checkbox" bind:checked={isCompleted}/>
        <span class={isCompleted ? "done": "not-done"}>Markete git</span>
        <span> (checkbox ile işaretle)</span>
        <span> Status: {isCompleted ? "Tamamlandı" : "Beklemede"}</span>
        <span> listele </span>
    </div>
</label>

<style>
    div {
        margin: 20px;
        padding: 20px;
        background-color: #b17878;
        color: white;
        border-radius: 8px;
        width: 300px;
        border: #42009f solid 2px;
        display: flex;
        flex-direction: column;
        font-size: 20px;
    }

    input {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        cursor: pointer;
    }
   .done{
    text-decoration: line-through;
    color: rgb(0, 0, 0);
   }
   .not-done{
    text-decoration: none;
    color: rgb(255, 255, 255);
   }
</style>