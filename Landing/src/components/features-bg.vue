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
            <h3>Кои сме ние?</h3>
            <p
              class="text-muted web-desc"
            >Ние смe финансово-счетоводна консултантска компания, помагаща на бизнеса да реализира амбициозните си идеи за промяна и да дефинира бъдещето си. 
            Оперираме в Централна и Източна Европа съвместно с клиентите си като един екип, споделяйки обща визия за постигане на изключителни резултати и развитие на индустриите.</p>
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
              <li class>Ние осигуряваме комплексно консултиране и управление на финансите и счетоводството, човешките ресурси, правните въпроси чрез съвременна дигитална платформа.
                 Помагаме на клиентите си да преоткриват възможности и постигат резултати преди всички останали чрез автоматизирани дигитални процеси и дейности. </li>
              <li class>Ние допълваме специализираната си експертиза с дигитална екосистема, така че да предоставим по-добри, по-бързи и по-дълготрайни резултати.
                 Повече от 15 години инвестираме в обучение и повишаване на квалификацията, за да можем да посрещнем заедно предизвикателствата за икономическо развитие.</li>
              <li class>Дигиталната трансформация направи възможно вземането на информирани решения по всяко време посредством мобилното ни приложение.</li>
            </ul>
            <a href="#services" class="btn btn-custom margin-t-30"
              v-scroll-to="{ el:'#services', offset: -85}"
              data-scroll-spy-id="services">
              Научи повече
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