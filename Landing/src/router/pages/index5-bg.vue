<script>
import NavbarBG from "@/components/navbar-bg";
import Features from "@/components/features";
import Services from "@/components/services";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import GetStarted from "@/components/getstarted";
import Blog from "@/components/blog";
import ContactBG from "@/components/contact-bg";
import FooterBG from "@/components/footer-bg";
import Switcher from "@/components/switcher";
import Partners from "@/components/partners";


/**
 * Index-3 component
 */
export default {
  components: {
    NavbarBG,
    Partners,
    ContactBG,
    FooterBG,
    Switcher
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
        :style="{'background-image': 'url(' + require('@/assets/images/simple-finance-images/contacts-bg.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
      <div class="bg-overlay"></div>
        <div class>
          <div class>
            <div class="container slidero">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 text-white text-center">
                  <h1 class="home-title">Свържете се с нас</h1>
                  <h4 class="home-small-title"></h4>
                  <p
                    class="padding-t-15 home-desc mx-auto"
                  >Направете следващата стъпка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Particles -->
        <vue-particles class="position-relative" color="#FFF"></vue-particles>
        
      </section>

      <!--END HOME-->
      <ContactBG />
      <Partners />
      <FooterBG />
      <Switcher />
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