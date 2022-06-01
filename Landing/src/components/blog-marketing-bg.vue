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
              <h5 class="mt-4 text-muted">Оптимизация за търсачки</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Органично увеличаване на трафика</a>
              </h4>
              <p
                class="text-muted"
              >Изграждане на корпоративни връзки
                <br>Стратегия за разпространение на съдържание</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-2.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Facebook реклами</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Увеличаване на продажбите и посещенията на корпоративните страници</a>
              </h4>
              <p
                class="text-muted"
              >Развитие на продажби с реклами във Facebook
              <br>Преобразуване на водещи рекламни страници</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-3.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Google реклами</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Оптимизиран Google Ads за местен бизнес</a>
              </h4>
              <p
                class="text-muted"
              >Оптимизиране на разходите в AdWords
              <br>Оптимизиране на рекламни бюджети</p>
            </div>
          </div>
        </div>

          <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-4.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Корпоративно представяне в социалните медии</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Пълно рекламно обслужване на корпоративни пакети в социалните медии</a>
              </h4>
              <p
                class="text-muted"
              >Управление на специфични социалните медии
              <br>Персонализирана стратегия за съдържание в социалните медии</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
  <!-- END BLOG -->
</template>