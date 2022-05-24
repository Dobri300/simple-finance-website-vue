<script>
/**
 * Features component
 */
export default {
  name: 'Features'
};
</script>

<template>
  <!--START FEATURES-->
  <section class="section" id="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Who are we?</h3>
            <p
              class="text-muted web-desc"
            >We are a financial and accounting consultancy helping businesses realise their ambitious ideas for change and define their future.
             We operate in Central and Eastern Europe with our clients as one team, sharing a common vision to deliver exceptional results and grow industries. </p>
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
              <li class>We provide comprehensive consulting and management of finance and accounting, human resources,
               and legal issues through a modern digital platform.
               We help clients rediscover opportunities and achieve results before anyone else through automated digital processes and activities.</li>
              <li class>We complement our specialist expertise with a digital ecosystem so that we deliver better, faster and long lasting results.
               For more than 15 years,
               we’ve invested in training and upskilling so we can meet economic development challenges together.</li>
              <li class>Digital transformation has made it possible to make informed decisions anytime through our mobile app.</li>
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
  </section>
  <!--END FEATURES-->
</template>