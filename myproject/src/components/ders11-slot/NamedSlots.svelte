

<div class="card">
    <h1>
        <slot name="isim">
            <span>İsim belirlememiş</span>
        </slot>
    </h1>
    
    <h3>
        <slot name="adres">
            <span>Adres belirlenmemiş</span>
        </slot>
    </h3>
</div>

<style>
    
    .card{
        width: 250px;
        border:2px solid olive;
        border-radius: 10px;
        padding: 5px;
    }

</style>