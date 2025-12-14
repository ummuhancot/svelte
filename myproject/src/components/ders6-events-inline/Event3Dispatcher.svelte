<script>
    import Event3Button from "./Event3Buttton.svelte";
    let mode = 'light ';

    const changeMode = (event) => {
        mode = event.detail.yeniMode;
    }

</script>

<div class={mode === 'light' ? 'dark' : 'light'}>
    <Event3Button on:mode={changeMode} />
</div>

<style>

div {
    width: 100%;
    height: 100vh;
}
.light {
    background-color: #f5f5f5;
    color: #333;
}
.dark {
    background-color: #333;
    color: #f5f5f5;
}
</style>