<script>
import Navbar from "@/components/navbar";
import Features from "@/components/features";
import Services from "@/components/services";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import GetStarted from "@/components/getstarted";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Partners from "@/components/partners";

/**
 * Index-1 component
 */
export default {
  components: {
    Navbar,
    Partners,
    Features,
    Services,
    // About,
    // Pricing,
    // Testimonial,
    // GetStarted,
    Blog,
    Contact,
    Footer,
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    }
  }
};
</script>
<template>
  <div>
    <Navbar />

    <div v-scroll-spy>
      <!--START HOME-->
      <section
        class="section bg-home height-100vh"
        id="home"
        :style="{'background-image': 'url(' + require('@/assets/images/simple-finance-images/home-banner.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
<div class="bg-overlay"></div>
        <div class>
          <div class>
            <div class="container slidero">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 text-white text-center">
                  <h1 class="home-title">MANAGE YOUR BUSINESS</h1>
                  <h4 class="home-small-title">from the earliest development.</h4>
                  <p
                    class="padding-t-15 home-desc mx-auto"
                  >Be a professional in what you do.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Particles -->
        <vue-particles class="position-relative" color="#FFF"></vue-particles>

      </section>


     

      <Features />
      <Services />
      <About />
      <Pricing />
      <Testimonial />
      <GetStarted />
      <Blog />
      <Contact />
      <Partners />
      <Footer />
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