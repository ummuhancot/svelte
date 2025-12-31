<script>
    import {onMount} from "svelte";

    let datas = []

    onMount(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        res.json
        datas =await res.json()
    })

</script>

<div>

    {#each datas as data(data.id)}
        <span>{data.id}</span>
        <p>{data.title}</p>
    {/each}

</div>