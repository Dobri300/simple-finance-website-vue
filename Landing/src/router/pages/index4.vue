<script>
import Navbar from "@/components/navbar";
import Features from "@/components/features";
import Services from "@/components/services";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";
import GetStarted from "@/components/getstarted";
import BlogMarketing from "@/components/blog-marketing";
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
    BlogMarketing,
    Contact,
    Footer,
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
        :style="{'background-image': 'url(' + require('@/assets/images/simple-finance-images/simple-marketing-bg.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
      <div class="bg-overlay"></div>
        <div class>
          <div class>
            <div class="container slidero">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 text-white text-center">
                  <h1 class="home-title">Creative solutions to improve your business</h1>
                  <h4 class="home-small-title">We are creating results</h4>
                  <p
                    class="padding-t-15 home-desc mx-auto"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Particles -->
        <vue-particles class="position-relative" color="#FFF"></vue-particles>
        
      </section>

      <!--END HOME-->

 <section class="section" id="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Simple Marketing</h3>
            <p
              class="text-muted web-desc"
            >Simple Marketing is a full-service digital agency that cares about building and promoting our clients’
             businesses in the digital space, reaching and engaging potential and current customers.</p>
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
              <li class>We build digital marketing strategies that promote you online, reaching the right audience and target market through measurable results and ROI.</li>
              <li class>Simple Marketing enables you to take advantage of the benefits of digital marketing, presenting a variety of effective digital services such as SEO,
                 social media management and advertising, Google Ads and email marketing.</li>
              <li class>Our professional approach is based on a preliminary marketing analysis of your digital presence,
                 including niche analysis, consumer behavior and competition.</li>
                 <li class> Taking into account the nature of each client’s business, we build a successful marketing strategy for both B2B and B2C.</li>
                 
            </ul>
            <a href="#services" class="btn btn-custom margin-t-30"
              v-scroll-to="{ el:'#services', offset: -85}"
              data-scroll-spy-id="services">
              Learn More
              <i class="mdi mdi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/growth-analytics.svg" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 50px;">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3 style="margin-bottom: 80px;">What is our work based on?</h3>
            
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
            <h4>Consultative approach</h4>
              <li style="margin-bottom: 50px;" class>Through a consultative approach, we analyze and present your current online presence with set future goals leading to the desired outcome. 
            This provides flexibility towards achieving goals, depending on the stage where you are.</li>

            <h4>Precise planning andindividual strategy</h4>
              <li style="margin-bottom: 50px;" class>We build an individual plan and strategy, using marketing methods in a digital environment to reach the desired target 
                audience and overall experience, following long-term strategic actions.</li>
            <h4>Customer satisfaction</h4>
              <li style="margin-bottom: 50px;" class>ur team of seasoned professionals ensures effective management of marketing budget resources. 
                Our customized marketing strategies improve your ROI over the long term. </li>
            </ul>
          </div>
        </div>
        <!-- <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/growth-analytics.svg" alt="macbook image" class="img-fluid" />
          </div>
        </div> -->
      </div>
    </div>


    <div id="services" class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Social Media Marketing</h3>
            <p
              class="text-muted web-desc"
            >
                Using social media as a key channel for direct communication with potential customers, we build relevant customized strategies.
                 We increase the reach of your brand or business through campaigns and relevant advertising on social media,
                via platforms such as Facebook, Instagram, LinkedIn. We build content for each online channel tailored to the target audience,
                 and our analytics reflect the effectiveness of your presence in the digital space. Social media strategies are focused on
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/social-media.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
      </div>
        

         <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Facebook advertising</h3>
            <p
              class="text-muted web-desc"
            >
                Facebook as the most popular social media will build a lasting presence for your brand or business by reaching the right consumers.
                We are committed to designing a marketing strategy for you.
                We will build keyword and audience analysis relevant to your brand or business using installed marketing systems.
                Based on the analysis we will create an advertising campaign with attractive content including design and multimedia.
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/facebook-image.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



             <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Instagram</h3>
            <p
              class="text-muted web-desc"
            >
                Every brand or business has unique goals, so our team makes sure to build a custom strategy for your Instagram presence. 
                Our social media experts ensure your presence is effective.
                We build ad campaigns, Insta stories, video ads, and ads with attractive designs ensuring a strong business presence on Instagram. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/instagram.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



 <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>LinkedIn</h3>
            <p
              class="text-muted web-desc"
            >
                For business representation on LinkedIn, our team is responsible for building a strategy reflecting your corporate presence on the social platform.
                <br><br>
                LinkedIn being the largest professional networking platform in the world, allows advertising to be targeted by profession,
                job title, company position, location and more, therefore the platform is highly suitable for generating your B2B leads.
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/linkedin.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Google Ads</h3>
            <p
              class="text-muted web-desc"
            >
                Through Google Ads, we will promote your website for a short period of time, coming out on top in the major search engines.
                 Through Google Ads, we will build advertising that will reach audiences who are interested in the products and services you offer.
                By analyzing user needs and searches we will build a competitive advantage for your website.
                 Google Ads gives you a great opportunity to build a good reputation for your business. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/googleads.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Email Marketing</h3>
            <p
              class="text-muted web-desc"
            >
               Email marketing, as a direct marketing tool, is an effective and cost-efficient channel for reaching your potential and prospective customers,
                as well as maintaining loyal relationships with current ones.
                One of its strongest advantages is creating a reliable form of communication between your business or brand and your customers,
                with a strong form of trust and a tendency to grow in the long run.
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/email.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>SEO</h3>
            <p
              class="text-muted web-desc"
            >
              SEO or search engine optimization process is one of the main methods in digital marketing thanks to which the visibility and traffic of the website is improved organically
               with long-lasting results. We know that the greater the visibility of your website, the greater the opportunity to attract potential and existing customers.
               Our main task is to provide greater visibility and higher rankings than the competition. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/seo.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

  </section>
      <BlogMarketing />
      <Contact />
      <Partners/>
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