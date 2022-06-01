<script>
/**
 * Blog component
 */
export default {
  name: 'Blog'
}
</script>

<template>
  <!-- START BLOG -->
  <section class="section bg-light" id="blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">About our works</h1>
          <div class="section-title-border margin-t-20"></div>
          <p
            class="section-subtitle text-muted text-center font-secondary padding-t-30"
          >We Have Done The Works,<br> Recent Case Studies</p>
        </div>
      </div>

      <div class="row margin-t-30">
        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-1.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">SEOM</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Organic Traffic Increase</a>
              </h4>
              <p
                class="text-muted"
              >Enterprise Link Building
                <br>Content Distribution Strategy</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-2.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Facebook Ads</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Increase in sales and site visits</a>
              </h4>
              <p
                class="text-muted"
              >Ecommerce scaling with Facebook ads
              <br>Lead pages conversion</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-3.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Google Ads</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Optimized Google Ads For a Local Business</a>
              </h4>
              <p
                class="text-muted"
              >AdWords Costs optimization
              <br>AdWords Costs optimization</p>
            </div>
          </div>
        </div>

          <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-4.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Social media engagement</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Full service social media packages</a>
              </h4>
              <p
                class="text-muted"
              >Platform specific social media management
              <br>Personalized social media content strategy</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
  <!-- END BLOG -->
</template>