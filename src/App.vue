<template>
  <div id="home">
  
    <h1>Portfolio</h1>

    <button type="submit">Add Project</button>
    <br>
    <br>
    <carousel :perPageCustom="[[768,3],[1024,4]]" :autoplayHoverPause=true :navigate-to="someLocalProperty" mouse-drag="false">
      <slide data-index="0" data-name="Slide1"> sit amet consectetur adipisicing elit. Perferendis iste minus ratione vitae molestiae praesentium accusantium commodi adipisci consequatur, tenetur dolores ex odio similique rerum! Nam molestias fuga sunt aliquid.</slide>
      <slide data-index="1" data-name="Slide2"> sit amet consectetur adipisicing elit. Consequatur, eos. Iure, laborum. Suscipit maiores quos molestias possimus, quibusdam esse minus iste sapiente explicabo repudiandae perspiciatis magni earum, quas unde fuga.</slide>
      <slide data-index="3" data-name="Slide3"> sit amet consectetur adipisicing elit. Consequatur, eos. Iure, laborum. Suscipit maiores quos molestias possimus, quibusdam esse minus iste sapiente explicabo repudiandae perspiciatis magni earum, quas unde fuga.</slide>
      <slide data-index="4" data-name="Slide4"> sit amet consectetur adipisicing elit. Consequatur, eos. Iure, laborum. Suscipit maiores quos molestias possimus, quibusdam esse minus iste sapiente explicabo repudiandae perspiciatis magni earum, quas unde fuga.</slide>
      <slide data-index="5" data-name="Slide5"> sit amet consectetur adipisicing elit. Consequatur, eos. Iure, laborum. Suscipit maiores quos molestias possimus, quibusdam esse minus iste sapiente explicabo repudiandae perspiciatis magni earum, quas unde fuga.</slide>
      <slide data-index="6" data-name="Slide6"> sit amet consectetur adipisicing elit. Consequatur, eos. Iure, laborum. Suscipit maiores quos molestias possimus, quibusdam esse minus iste sapiente explicabo repudiandae perspiciatis magni earum, quas unde fuga.</slide>

    </carousel>

  </div>
</template>

<script>

import { Carousel, Slide } from "vue-carousel";

export default {
  name: 'App',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>

</style>


