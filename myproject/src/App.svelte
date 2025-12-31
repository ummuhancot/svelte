<script>
  import Footer from "./components/ders1/Footer.svelte";
import Header from "./components/ders1/Header.svelte";
  import Welcome from "./components/ders1/Welcome.svelte";
  import Class from "./components/ders10-class/Class.svelte";
  import Card from "./components/ders11-slot/Card.svelte";
  import Slot from "./components/ders11-slot/Slot.svelte";
  import DataFetch from "./components/ders12-life-cycle/DataFetch.svelte";
  import ArttrAzaltButonlar from "./components/ders2-propslar/ArttırAzaltButonları.svelte";
  import CardBilgi from "./components/ders3-spread-props/CardBilgi.svelte";
  import Excample from "./components/ders4-reactivity-kullanım/Excample.svelte";
  import Excample2 from "./components/ders4-reactivity-kullanım/Excample2.svelte";
  import EachBlog from "./components/ders5-if-else/EachBlog.svelte";
  import EachBlog2 from "./components/ders5-if-else/EachBlog2.svelte";
  import IfElse from "./components/ders5-if-else/IfElse.svelte";
  import Event2Modifiers from "./components/ders6-events-inline/Event2Modifiers.svelte";
  import Event3Buttton from "./components/ders6-events-inline/Event3Buttton.svelte";
  import Event3Dispatcher from "./components/ders6-events-inline/Event3Dispatcher.svelte";
  import EventsInline from "./components/ders6-events-inline/Events1Inline.svelte";
  import EventForwarding from "./components/ders7-event-forwarding/EventForwarding.svelte";
  import EventForwardOrnek2 from "./components/ders7-exception-event-forward-ornek-2/EventForwardOrnek-2.svelte";
  import Bind from "./components/ders8-bind-text-inputs/Bind.svelte";
  import BindCheckbox from "./components/ders8-bind-text-inputs/BindCheckbox.svelte";
  import BindGroup from "./components/ders8-bind-text-inputs/BindGroup.svelte";
  import BindSelect from "./components/ders8-bind-text-inputs/BindSelect.svelte";
  import BindTextarea from "./components/ders8-bind-text-inputs/BindTextarea.svelte";
  import Exception from "./components/ders9-exception-store-uygulama/Exception.svelte";
  import Storernegi from "./components/ders9-store-srnek/StoreÖrnegi.svelte";
  const changeMode = (event) => {
      event.detail.yeniMode;
  };
 



</script>


<Header/>
<Welcome/>
<ArttrAzaltButonlar/>
<Footer/>
<CardBilgi/>
<Excample/>
<Excample2/>
<IfElse/>
<EachBlog/>
<EventsInline/>
<Event2Modifiers/>
<Event3Dispatcher/>
<EventForwarding/>
<EventForwardOrnek2/>
<Bind/>
<BindCheckbox/>
<BindGroup/>
<BindTextarea/>
<BindSelect/>
<Storernegi/>
<Exception/>
<Class/>
<Slot/>
<DataFetch/>

<style>
</style>