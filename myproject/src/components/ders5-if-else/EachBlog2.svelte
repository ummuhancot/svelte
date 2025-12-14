 <script>
    export let isim,yazar;
 </script>
 
 <div>
        <h>{isim}</h>
        <h3>{yazar}</h3>
    </div>

    <style>
         div {
        margin: 16px ;
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
        max-width: 300px;
        box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
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

    h {
        margin: 0;
        font-size: 1.5em;
        color: #494949;
    }

    h3 {
        margin: 8px 0;
        font-size: 1.2em;
        color: #727171;
    }
    </style>