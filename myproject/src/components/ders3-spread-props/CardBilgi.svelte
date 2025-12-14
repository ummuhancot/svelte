<script>
  import UrunCard from "./UrunCard.svelte";

    const bilgi = {
        urun: "kulaklık",
        fiyat: "289 TL",
        aciklama: "uygun fiyatlı kulaklık"
    };

</script>

<UrunCard {...bilgi} />

<!-- <Card urun={bilgi.urun} fiyat={bilgi.fiyat} aciklama={bilgi.aciklama} /> -->
