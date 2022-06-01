<script>
/**
 * Footer component
 */
export default {
  name: 'Footer'
}
</script>

<template>
  <div>
    <!--START FOOTER-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 margin-t-20">
            <h4>SIMPLE FINANCE</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
               <p>We are a financial and accounting consultancy helping businesses realise their ambitious ideas for change and define their future.</p>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Services</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="#">Simple Finance</a>
                </li>
                <li>
                  <a href="#">Simple IT</a>
                </li>
                <li>
                  <a href="#">Simple Law</a>
                </li>
                <li>
                  <a href="#">Simple Marketing</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Get in Touch</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href>Office Adress: Sofia 1113 “Nikolay Haitov”  street № 3A, floor 2</a>
                </li>
                <li>
                  <a href>Phone Number: +359 2 427 99 99</a>
                </li>
                <li>
                  <a href>Email Adress: office@simplefinance.net</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--END FOOTER-->

    <!--START FOOTER ALTER-->
    <div class="footer-alt">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="float-left pull-none">
              <p
                class="copy-rights text-muted mb-3 mb-sm-0"
              >{{ new Date().getFullYear()}} © Simple Finance</p>
            </div>
            <div class="float-right pull-none">
              <ul class="list-inline social m-0">
                <li class="list-inline-item">
                  <a href="https://www.facebook.com/Simple-Finance-107840468064853/" class="social-icon">
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <!-- <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li> -->
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/company/simple-finance-ltd/" class="social-icon">
                    <i class="mdi mdi-linkedin"></i>
                  </a>
                </li>
                <!-- <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-google-plus"></i>
                  </a>
                </li> -->
                <!-- <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-dribbble"></i>
                  </a>
                </li> -->
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--START FOOTER ALTER-->
  </div>
</template>