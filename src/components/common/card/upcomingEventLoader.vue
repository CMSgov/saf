<template>
  <v-card
    flat
    :class="$vuetify.theme.dark == true?'darkModeCard':'lightModeCard'"
    class="ma-1 pa-1 my-0"
  >
    <v-card-title class="mb-0">
      <div>
        <p class=" mb-2 animate-shimmer" style="color:#424242;width:120px;height:10px;"></p>
        <p
          class=" mt-1 mb-0 animate-shimmer"
          style="color:#424242;width:140px;height:20px;"
        ></p>
        <p
          class=" mt-1 mb-0 animate-shimmer"
          style="color:#424242;width:100px;height:20px;"
        ></p>
        <p
          class=" mt-1 mb-0 animate-shimmer"
          style="color:#424242;width:100px;height:20px;"
        ></p>
      </div>
    </v-card-title>

    <v-card-actions class="mt-0">
      <span class="animate-shimmer ml-2" style="color:#424242;width:60px;height:25px;"></span>
    </v-card-actions>
  </v-card>
</template>

<style>
.animate-shimmer {
  background: linear-gradient(286deg, #ffffff, #ddd);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 5s ease infinite;
  -moz-animation: AnimationName 5s ease infinite;
  animation: AnimationName 5s ease infinite;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 52%;
  }
  50% {
    background-position: 100% 49%;
  }
  100% {
    background-position: 0% 52%;
  }
}
</style>