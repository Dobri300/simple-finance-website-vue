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
          <h1 class="section-title text-center">Успешни проекти</h1>
          <div class="section-title-border margin-t-20"></div>
          <p
            class="section-subtitle text-muted text-center font-secondary padding-t-30"
          ><br> </p>
        </div>
      </div>

      <div class="row margin-t-30" style="justify-content: center;">
        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-1.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Счетоводни услуги</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Обработка на фактури</a>
              </h4>
              <p
                class="text-muted"
              >Месечни отчети, Тримесечни, годишни отчети
                <br>Счетоводство</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-2.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Финансови услуги</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Банково дело и капиталови пазари</a>
              </h4>
              <p
                class="text-muted"
              >Управление на инвестициите
              <br>Застраховане</p>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-3.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Консултантски услуги</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Стратегия и финансови анализи</a>
              </h4>
              <p
                class="text-muted"
              >Оптимизация на основни бизнес операции
              <br>Управление на човешкия капитал</p>
            </div>
          </div>
        </div>

          <div class="col-lg-4">
          <div class="blog-box margin-t-30">
            <img src="@/assets/images/simple-finance-images/news-4.jpg" class="img-fluid rounded" alt />
            <div>
              <h5 class="mt-4 text-muted">Бизнес услуги</h5>
              <h4 class="mt-3">
                <a href class="blog-title">Одит и оценки</a>
              </h4>
              <p
                class="text-muted"
              >Управление на риск
              <br>Данъчни консултации</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
  <!-- END BLOG -->
</template>