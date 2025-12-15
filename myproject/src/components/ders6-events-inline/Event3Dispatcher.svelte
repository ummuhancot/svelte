<script>
    import Event3Button from "./Event3Buttton.svelte";
    let mode = 'light ';

    const changeMode = (event) => {
        if (event.detail.yeniMode) {
            mode = event.detail.yeniMode;
        } else {
            mode = 'light';
        }
    }

</script>

<div class={mode}>
    <Event3Button {mode} on:mode={changeMode} />
</div>

<style>

div {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: background-color 0.5s ease, color 0.5s ease;
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