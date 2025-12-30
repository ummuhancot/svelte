import { writable } from "svelte/store";


export const products = writable([
  { id: 1, title: "bisiklet", adet: 10 },
  { id: 2, title: "notebook", adet: 20 },
  { id: 3, title: "televizyon", adet: 20 },
  { id: 4, title: "telefon", adet: 10 },
  { id: 5, title: "bilgisayar", adet: 30 },
  { id: 6, title: "kulaklık", adet: 60 },
]);

export const sepet = writable(0)