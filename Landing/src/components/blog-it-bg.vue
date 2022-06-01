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
              <h5 class="mt-4 text-muted">Внедряване на системи за управление на бизнеса</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Оптимизиране на бизнес процеси</a>
              </h4>
              <p
                class="text-muted"
              >Снижаване на разходи и ръст на продажби
                <br></p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-2.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Бизнес Анализ</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Изграждане на ефективност</a>
              </h4>
              <p
                class="text-muted"
              >Информирано взимаме на решения
              <br>Измерване на постиженията спрямо общите цели</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-3.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Бизнес услуги</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Финансови консултации</a>
              </h4>
              <p
                class="text-muted"
              >Организационно планиране и развитие 
              <br>ИТ развитие и сигурност </p>
            </div>
          </div>
        </div>

          <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-4.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Дигитална трансформация</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Стратегическо планиране</a>
              </h4>
              <p
                class="text-muted"
              >Пътна карта за развитие
              <br>Управление на риска и изпълнението</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
  <!-- END BLOG -->
</template>