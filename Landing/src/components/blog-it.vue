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

      <div class="row margin-t-30" style="justify-content: center;">
        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-1.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Implementation of enterprise resource planning (ERP) systems</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Streamline and automate processes.</a>
              </h4>
              <p
                class="text-muted"
              >Create a leaner, more accurate and efficient operation.
                <br>Provide complete visibility into core business processes.</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-2.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Business analysis</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Improve strategic and technical capabilities</a>
              </h4>
              <p
                class="text-muted"
              >Increase in ROI 
              <br>Decrease in cost</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-3.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Business Services</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Consulting and Financial Services</a>
              </h4>
              <p
                class="text-muted"
              >Software and Security service 
              <br>Consulting services</p>
            </div>
          </div>
        </div>

          <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-4.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Strategic IT management consulting</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Transform the performance of an organization</a>
              </h4>
              <p
                class="text-muted"
              >Help a decision-maker to get equipped with management tools
              <br>Raise the Level of Success</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
  <!-- END BLOG -->
</template>