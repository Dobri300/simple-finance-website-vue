<script>
export default {
  name: 'Testimonial'
}
</script>
<style scoped>
.centerServices
{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
<template>
  <!--START TESTIMONIAL-->
  <section class="section" id="testi">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">Вярваме, че ще успеем, ако нашите клиенти успеят.</h1>
          <div class="section-title-border margin-t-20"></div>
          <p
            class="section-subtitle text-muted text-center font-secondary padding-t-30"
          ></p>
        </div>
      </div>
      <div class="row margin-t-50 centerServices">
        <div class="col-lg-4">
          <div class="testimonial-box margin-t-30">
            <div class="testimonial-decs p-4">
              <div class="testi-icon">
                <i class="mdi mdi-format-quote-open display-2"></i>
              </div>
              <img
                src="@/assets/images/simple-finance-images/settings-icon.svg"
                alt
                class="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4"
              />
              <div class="p-1">
                <h5 class="text-center text-uppercase mb-3">
                
                  <span class="text-muted text-capitalize"></span>
                </h5>
                <p
                  class="text-muted text-center mb-0"
                >Създаване на пътна карта за дигитална стратегия.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-box margin-t-30">
            <div class="testimonial-decs p-4">
              <div class="testi-icon">
                <i class="@/assets/images/simple-finance-images/chart-icon.svg"></i>
              </div>
              <img
                src="@/assets/images/simple-finance-images/friends-icon.svg"
                alt
                class="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4"
              />
              <div class="p-1">
                <h5 class="text-center text-uppercase mb-3">
               
                  <span class="text-muted text-capitalize"></span>
                </h5>
                <p
                  class="text-muted text-center mb-0"
                >Създаване на персонализирани преживявания и взаимоотношения с клиентите.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-box margin-t-30">
            <div class="testimonial-decs p-4">
              <div class="testi-icon">
                <i class="mdi mdi-format-quote-open display-2"></i>
              </div>
              <img
                src="@/assets/images/simple-finance-images/chart-icon.svg"
                alt
                class="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4"
              />
              <div class="p-1">
                <h5 class="text-center text-uppercase mb-3">
                  
                  <span class="text-muted text-capitalize"></span>
                </h5>
                <p
                  class="text-muted text-center mb-0"
                >Създаване на персонализирани преживявания и взаимоотношения с клиентите.</p>
              </div>
            </div>
          </div>
        </div>
         <div class="col-lg-4">
          <div class="testimonial-box margin-t-30">
            <div class="testimonial-decs p-4">
              <div class="testi-icon">
                <i class="mdi mdi-format-quote-open display-2"></i>
              </div>
              <img
                src="@/assets/images/simple-finance-images/heart-icon.svg"
                alt
                class="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4"
              />
              <div class="p-1">
                <h5 class="text-center text-uppercase mb-3">
                 
                  <span class="text-muted text-capitalize"></span>
                </h5>
                <p
                  class="text-muted text-center mb-0"
                >Мониторинг на доверието и съответствието.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END TESTIMONIAL-->
</template>