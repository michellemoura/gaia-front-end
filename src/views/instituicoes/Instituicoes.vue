<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Prefeitura de Aracati"
        img-src="https://picsum.photos/1000/400/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide caption="Samuka" img-src="https://picsum.photos/1000/400/?image=12"></b-carousel-slide>
      <b-carousel-slide caption="Frangolândia" img-src="https://picsum.photos/1000/400/?image=22"></b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/1000/400/?image=52"
        caption="Pinheiro Supermercado"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
}
</script>