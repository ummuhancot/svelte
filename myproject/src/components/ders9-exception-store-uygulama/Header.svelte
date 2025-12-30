
<script>
    import {sepet} from "./store"
</script>
<div>
    <h3>Header</h3>
    <h4>Sepet : {$sepet}</h4>
</div>

<style>
    div{
        margin: 10px;
        display: flex;
        align-items: center;
        background-color: palevioletred;
        width: auto;
        border-radius: 10px;
        padding: 10px;
    }

    h3{
        flex: 1;
        margin-left: 30px;

    }
    h4{
        margin-right: 40px;
    }
</style>