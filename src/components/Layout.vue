<template>
    <div>
    <carousel :navigationEnabled="true" :perPageCustom="[[768,3],[1024,4]]">
      <slide class="slides done image"><img class="is-rounded" src="../assets/mat.png" alt="project"><br> First useful project, could still use some fin putsning </slide>
      <slide class="slides image"><img src="../assets/dummy-project.png" alt="project"><br> sit amet consectetur adipisicing elit. </slide>
      <slide class="slides image"><img src="../assets/dummy-project.png" alt="project"><br> sit amet consectetur adipisicing elit. </slide>
      <slide class="slides image"><img src="../assets/dummy-project.png" alt="project"><br> sit amet consectetur adipisicing elit. </slide>
      <slide class="slides image"><img src="../assets/dummy-project.png" alt="project"><br> sit amet consectetur adipisicing elit. </slide>
   
    </carousel>
    </div>
</template>


<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    name: 'Layout',
    components: {
        Carousel,
        Slide,
    }, 
}


</script>

<style scoped>
.slides{
    color: darkolivegreen;
    padding: 0.5%;
    background-color: rgb(71, 233, 255);
    border: 5px solid black;
    box-sizing: border-box;
    text-shadow: 1px;
    box-shadow: 2em;
    border-radius: 10px;
}

.done {
    background-color: greenyellow;
}
</style>

