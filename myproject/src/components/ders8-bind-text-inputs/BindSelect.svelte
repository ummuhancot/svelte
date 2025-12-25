<script>

    let sor = [
        {id:1, text: "sevdiğiniz kitap?"}
        ,{id:2, text: "en sevdiğiniz film?"}
        ,{id:3, text: "en sevdiğiniz yemek?"}
        ,{id:4, text: "en sevdiğiniz şehir?"}
        ,{id:5, text: "en sevdiğiniz müzik türü?"}
        ,{id:6, text: "en sevdiğiniz spor?"}
        ,{id:7, text: "en sevdiğiniz tatil yeri?"}
        ,{id:8, text: "en sevdiğiniz renk?"}
        ,{id:9, text: "en sevdiğiniz hayvan?"}
        ,{id:10, text: "en sevdiğiniz mevsim?"}
        ,{id:11, text: "en sevdiğiniz aktivite?"}
        ,{id:12, text: "tuttuğunuz takım?"}
    ]

    let secilenSoru;
    let cevap = "";
    let tablo = []
    const handleSubmit = () => {
        tablo =[{tabloSoru:secilenSoru,tabloCevap:cevap},...tablo]
        cevap="";

    }


    let sorular =[{
        id:1,
        soru:'Hangi programlama dili en popülerdir?',
        cevaplar:[
            'JavaScript',
            'Python',
            'Java',
            'C#'
        ],
        cevap:'JavaScript'
    },
    {
        id:2,
        soru:'En sevdiğiniz mevsim hangisidir?',
        cevaplar:[
            'İlkbahar',
            'Yaz',
            'Sonbahar',
            'Kış'
        ],
        cevap:'Yaz'
    },
    {
        id:3,
        soru:'Hangi gezegen en büyüktür?',
        cevaplar:[
            'Dünya',
            'Mars',
            'Jüpiter',
            'Satürn'
        ],
        cevap:'Jüpiter'
    },
    {
        id:4,
        soru:'En popüler web framework hangisidir?',
        cevaplar:[
            'React',
            'Angular',
            'Vue',
            'Svelte'
        ],
        cevap:'React'
    },
    {
        id:5,
        soru:'Hangi mobil işletim sistemi en yaygındır?',
        cevaplar:[
            'iOS',
            'Android',
            'Windows Phone',
            'BlackBerry OS'
        ],
        cevap:'Android'
    }
    ];
</script>

<form on:submit|preventDefault={handleSubmit}>

<select bind:value={secilenSoru}>
    {#each sor as sorr (sorr)}

    <option value={sorr.text}>{sorr.text}</option>
        
    {/each}
</select>

<input type="text" bind:value={cevap}>
<button>Submit</button>

<table>
    <tr>
        <th>Soru</th>
        <th>Cevap</th>
    </tr>
    
    {#each tablo as item(item) }
    <tr>
        <td>{item.tabloSoru}</td>
        <td>{item.tabloCevap}</td>
    </tr>
    {/each}
  
</table>

</form>

{#each sorular as soru}
    <div class="soru-block">
        <label for="select-{soru.id}">{soru.soru}</label>
        <select id="select-{soru.id}" bind:value={soru.cevap}>
            {#each soru.cevaplar as cevap}
                <option value={cevap}>{cevap}</option>
            {/each}
        </select>
        <p>Seçilen Cevap: {soru.cevap}</p>
    </div>
{/each}
<style>
    form{
       
        border: 2px solid #894492;
        border-radius: 4px;

    }

 
    select{
    margin: 20px;


    }


    input{
    margin: 20px;
    border: 2px solid #5500ff;
        border-radius: 4px;

    }

    table,th,td{
        border: 1px solid;
    }

    .soru-block {
        margin: 20px;
        padding: 15px;
        border: 2px solid #9e4db3;
        border-radius: 8px;
        width: 670px;
        background-color: #e9c5f3;
    }

    label {
        font-family: Arial, sans-serif;
        font-size: 1.1em;
        margin-bottom: 10px;
        display: block;
    }

    select {
        margin-top: 10px;
        padding: 8px;
        font-size: 1em;
        border: 2px solid #5500ff;
        border-radius: 4px;
        width: 100%;
    }

    p {
        margin-top: 15px;
        font-family: Arial, sans-serif;
        font-size: 1em;
        color: #442c50;
    }
</style>