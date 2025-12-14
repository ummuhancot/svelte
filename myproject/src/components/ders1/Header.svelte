<script>
  import Button from "./Button.svelte";

</script>
<div class="header">
    <h1>Header</h1>

    <Button/>

    <ul>
        <li>abolut</li>
        <li>tuto</li>
        <li>rial</li>
    </ul>
</div>

<style>
    .header {
        background-color: #9d9090;
        padding: 1rem;
        display: flex;
    }

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        margin-left: auto;

    }

    li {
        margin: 0.5rem 0;
        display:  flex;
        margin-right: 20px;
    }
</style>