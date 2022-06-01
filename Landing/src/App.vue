<template>
  <div id="app">
    <transition @before-enter="scrollTop" mode="out-in" appear>
    <router-view />
    </transition>
    <a id="phoneLink" href="tel: +35924279999">
    <img id="phoneIconImage" src="@/assets/images/simple-finance-images/phone-icon.png" alt="">
    </a>
  </div>
</template>
<script>
export default {
  methods: {
  scrollTop(){
   document.getElementById('app').scrollIntoView();
  },
}
}
</script>
<style scoped>
@media (min-width: 500px) {
    #phoneIconImage
    {
      visibility: hidden;
    }
}
#phoneLink:hover
{
  cursor: pointer;
}
#phoneIconImage
{
  opacity: 1;
  position: fixed;
  right: 4%;
  bottom: 4%;
  width: 16%;
}
</style>
