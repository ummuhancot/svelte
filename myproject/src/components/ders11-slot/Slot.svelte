<script>
  import Card from "./Card.svelte";
  import NamedSlots from "./NamedSlots.svelte";


</script>

<div>
    <Card>
        <input type="text" placeholder="your text...">
    </Card>
    <Card>
        <button>Tıkla</button>
    </Card>
    <Card>

    </Card>

    <h1>Named Slot</h1>

    <NamedSlots>
        <span slot="isim">
            İsa Acarer
        </span>
        <span slot="adres">
            Ankara
        </span>
    </NamedSlots>
</div>