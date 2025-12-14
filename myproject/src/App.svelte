<script>
  import Footer from "./components/ders1/Footer.svelte";
import Header from "./components/ders1/Header.svelte";
  import Welcome from "./components/ders1/Welcome.svelte";
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

<style>
</style>