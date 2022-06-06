<script>
import Navbar from "@/components/navbar";
import Features from "@/components/features";
import ServicesLaw from "@/components/services-law";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import GetStarted from "@/components/getstarted";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Partners from "@/components/partners";

/**
 * Index-3 component
 */
export default {
  components: {
    Navbar,
    Partners,
    ServicesLaw,
    Blog,
    Contact,
    Footer,
  }
};
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  #aboutText
{
  flex-direction: column;
}
}

</style>
<template>
  <div>
    <Navbar />

    <div v-scroll-spy>
      <!--START HOME-->
      <section
        class="section bg-home height-100vh"
        id="home"
        :style="{'background-image': 'url(' + require('@/assets/images/simple-finance-images/simple-law-bg.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
      <div class="bg-overlay"></div>
        <div class>
          <div class>
            <div class="container slidero">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 text-white text-center">
                  <h1 class="home-title">Manage your business</h1>
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
      <div style="display: flex; justify-content: center; margin-top: 20px;">
  <div id="aboutText" style="display: flex; justify-content: center; text-align: left; width: 110vh;">
    <p style="margin: 50px;">At Simple Law, we don’t just provide legal services, we bring an entrepreneurial mindset and creativity that allows us to 
      offer you solutions with the highest efficiency. 
      We approach each client with the attention and professionalism necessary to achieve optimal results together.</p>
      <p style="margin: 50px;">We strive to anticipate all the important implications of the solutions we offer so that you can be sure of the future of your business 
        We can boast an impeccable reputation and extensive expertise 
        of our consultants in the field of commercial, labour and civil law. Our legal consultants will be your partners. </p>
  </div>
  </div>
      

      <ServicesLaw />
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