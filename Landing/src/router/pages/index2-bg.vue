<script>
import NavbarBG from "@/components/navbar-bg";
import Features from "@/components/features";
import ServicesItBg from "@/components/services-it-bg";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import TestimonialBG from "@/components/testimonial-bg";
import GetStarted from "@/components/getstarted";
import BlogItBG from "@/components/blog-it-bg";
import Contact from "@/components/contact";
import FooterBG from "@/components/footer-bg";
import Partners from "@/components/partners";
/**
 * Index-2 component
 */
export default {
  components: {
    NavbarBG,
    Partners,
    ServicesItBg,
    TestimonialBG,
    FooterBG,
    BlogItBG,
  }
};
</script>
<template>
  <div>
    <NavbarBG />

    <div v-scroll-spy>
      <!--START HOME-->
      <section
        class="section bg-home height-100vh"
        id="home"
        :style="{'background-image': 'url(' + require('@/assets/images/simple-finance-images/simple-it-bg.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
        <div class="bg-overlay"></div>
        <div class>
          <div class>
            <div class="container slidero">
              <div class="row">
            <div class="col-lg-8 offset-lg-2 text-white text-center">
            <h1 class="home-title">Активирайте успешно дигиталната си трансформация</h1>
              <h4 class="home-small-title"></h4>
              <p
                class="padding-t-15 home-desc mx-auto"
              >Ние помагаме на съвременните организации да управляват ефективно бизнеса си чрез дигитална трансформация.</p>
            </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Particles -->
        <vue-particles class="position-relative" color="#FFF"></vue-particles>

      </section>
      <!--END HOME-->
      
      <TestimonialBG />
      <ServicesItBg />
      <BlogItBG/>
      <Partners />
      <FooterBG />
    </div>
  </div>
</template>

<style scoped>
::v-deep .modal-content {
  background-color: #000000;
  color: white;
  background: none;
  border: none;
}
::v-deep .modal-header {
  border: none;
}
::v-deep .modal-backdrop {
  opacity: 0.5;
}
</style>