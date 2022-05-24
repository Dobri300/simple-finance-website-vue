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
              <h5 class="mt-4 text-muted">Accounting services</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Invoice processing</a>
              </h4>
              <p
                class="text-muted"
              >Monthly reports, Quarterly, annual reports
                <br>Bookkeeping</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-2.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Financial services</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Banking and capital markets</a>
              </h4>
              <p
                class="text-muted"
              >Investment management
              <br>Insurance</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-3.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Consulting</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Strategy and analytics</a>
              </h4>
              <p
                class="text-muted"
              >Core business operations
              <br>Human capital</p>
            </div>
          </div>
        </div>

          <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-3.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Business services</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Audit and assurance</a>
              </h4>
              <p
                class="text-muted"
              >Risk advisory
              <br>Business tax</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
  <!-- END BLOG -->
</template>