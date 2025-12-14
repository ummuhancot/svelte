<script>

    let konum = { x: 0, y: 0 };
    // function handlClick(event) {
    //     // alert(konum.x + " , " + konum.y);
    //     konum.x = event.clientX;
    //     konum.y = event.clientY;
    // }

    let konum2 = { a: 0, b: 0 };
    function handlClick2(event) {
        // alert(konum2.a + " , " + konum2.b);
        konum2.a = event.clientX;
        konum2.b = event.clientY;
    }
</script>

<h1>Farenin konumunu gösterir</h1>

<div on:click={(e) => konum= {x:e.clientX,y:e.clientY}}>
    <h2>x : {konum.x}</h2>
    <h2>y : {konum.y}</h2>
</div>

<div on:mousemove={handlClick2}>
    <h2>a : {konum2.a}</h2>
    <h2>b : {konum2.b}</h2>
</div>

<style>
    div {
        margin: 16px ;
        border: 1px solid #ac77c9;
        padding: 16px;
        border-radius: 8px;
        max-width: 400px;
        max-height: 400px;
        box-shadow: 2px 2px 12px rgba(152, 32, 32, 0.1);
        margin-bottom: 12px;
    }
    div:hover {
        box-shadow: 4px 4px 16px rgba(140, 56, 205, 0.2);
        border-color: #cb67e7;
    }
    div:active {
        box-shadow: inset 2px 2px 8px rgba(173, 7, 7, 0.2);
        border-color: #ff69ff;
    }
    h1 {
        margin: 16px 16px 16px;
        font-family: Arial, sans-serif;
        color: #6a1b9a;
        text-shadow: 1px 1px 2px #9461b9;
    }
    
</style>