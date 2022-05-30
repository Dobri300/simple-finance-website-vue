<script>
import NavbarBG from "@/components/navbar-bg";
import Features from "@/components/features";
import ServicesBG from "@/components/services-bg";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import TestimonialBG from "@/components/testimonial-bg";
import GetStarted from "@/components/getstarted";
import BlogBG from "@/components/blog-bg";
import ContactBG from "@/components/contact-bg";
import FooterBG from "@/components/footer-bg";
import Switcher from "@/components/switcher";
import Partners from "@/components/partners";


/**
 * Index-3 component
 */
export default {
  components: {
    NavbarBG,
    Partners,
    BlogBG,
    ContactBG,
    FooterBG,
    Switcher
  }
};
</script>
<template>
  <div>
    <NavbarBG />

    <div v-scroll-spy>
      <!--START HOME-->
      <section
        class="section bg-home height-100vh"
        id="home"
        :style="{'background-image': 'url(' + require('@/assets/images/simple-finance-images/simple-marketing-bg.jpg') + ')', 'background-size': 'cover','background-position': 'center' }"
      >
      <div class="bg-overlay"></div>
        <div class>
          <div class>
            <div class="container slidero">
              <div class="row">
                <div class="col-lg-8 offset-lg-2 text-white text-center">
                  <h1 class="home-title">УПРАВЛЯВАЙТЕ БИЗНЕСА СИ</h1>
                  <h4 class="home-small-title">от най-ранно развитие.</h4>
                  <p
                    class="padding-t-15 home-desc mx-auto"
                  >Бъдете професионалисти в това което правите.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Particles -->
        <vue-particles class="position-relative" color="#FFF"></vue-particles>
        
      </section>

      <!--END HOME-->

 <section class="section" id="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Simple Marketing</h3>
            <p
              class="text-muted web-desc"
            ></p>
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
              <li class>Simple Marketing е агенция за цялостно дигитално обслужване, която се грижи за изграждането и популяризирането на бизнеса на нашите клиенти в дигиталното пространство,
             достигайки и ангажирайки потенциални и настоящи клиенти.</li>
              <li class>Нашият професионален подход се основава на предварителен маркетинг анализ на Вашето дигитално присъствие, включващо анализ на ниша, потребителско поведение и конкуренция.
                 Съобразявайки се с естеството на бизнес на всеки клиент, изграждаме успешна маркетинг стратегия, както за B2B така и за B2C.</li>
              <li class>Ние изграждам дигитални маркетинг стратегии, които Ви популяризират онлайн, достигайки дo правилната аудитория и целеви пазар,
                 чрез измерими резултати и възвращаемост на инвестициите.</li>
                 <li class> Simple Marketing дава възможност да се възползвате от предимствата на дигиталния маркетинг,
                    представяйки разнообразие от ефективни дигитални услуги като SEO, управление и реклама  на социалните мрежи и Google Ads, имейл маркетинг.</li>
                 
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

    <div class="container" style="margin-top: 50px;">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3 style="margin-bottom: 80px;">На какво се основава нашата работа </h3>
            
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
            <h4>Консултативен подход</h4>
              <li style="margin-bottom: 50px;" class>Чрез консултативен подход ние анализираме и представяме Вашето текущото онлайн присъствие
               със зададени бъдещи цели, водещи до желания резултат. Това осигурява 
              гъвкавост към постигане на целите, в зависимост от етапа, на който се намирате.</li>

            <h4>Прецизно планиране и индивидуална стратегия</h4>
              <li style="margin-bottom: 50px;" class>Изграждаме индивидуален план и стратегия, чрез маркетинг методи в дигитална среда, 
              за да достигнем до желаната целева аудитория и 
              цялостното преживяване, следвайки дългосрочни стратегически действия</li>
            <h4>Клиентска удовлетвореност</h4>
              <li style="margin-bottom: 50px;" class>Екипът ни от опитни професионалисти се грижи за ефективното управление на  ресурсите на маркетинговия бюджет.
               Нашите индивидуални маркетинг стратегии подобряват възвръщаемостта на Вашите инвестициите в дългосрочен план. </li>
            </ul>
          </div>
        </div>
        <!-- <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/growth-analytics.svg" alt="macbook image" class="img-fluid" />
          </div>
        </div> -->
      </div>
    </div>



    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Social Media Маркетинг</h3>
            <p
              class="text-muted web-desc"
            >
                Чрез социалните медии като ключов канал за директна комуникация с потенциалните клиенти ние изграждаме подходящи персонализирани стратегии. Увеличаваме обхвата на Вашата марка или бизнес чрез кампании и релевантна реклама в социалните медии, чрез платформите Facebook, Instagram, LinkedIn. Ние изграждаме съдържание за всеки онлайн канал,
                 съобразено с целевата аудитория, а нашите анализи отразяват ефективността от присъствието Ви в дигиталното пространство. Стратегиите в социалните медии са фокусирани към.
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/social-media.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
      </div>
        




         <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Facebook реклама</h3>
            <p
              class="text-muted web-desc"
            >
                Facebook като най-популярната социална медия ще изгради трайно присъствие на вашия бранд или бизнес, достигайки до правилните потребители. 
                Ние сме ангажирани да проектираме маркетингова стратегия за Вас. Ще изградим анализ на ключови думи и аудитория отнасяща се за вашия бранд или бизнес
                 с помощта на инсталирани маркетингови системи.
                 На база на получените анализи ще създадем рекламна кампания, с атрактивно съдържание с включен дизайн и мултимедия. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/facebook-image.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



             <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Instagram реклама</h3>
            <p
              class="text-muted web-desc"
            >
     Всяка марка или бизнес имат уникални цели и затова екипът ни се грижи да изгради персонализирана стратегия за представянето Ви в Instagram. 
     Експертите ни в социалните медии гарантират ефективното Ви присъствието.
      Изграждаме рекламни кампании, Insta stories, видеореклами и реклами с атрактивен дизайн гарантиращи силното присъствие на бизнеса в Instagram. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/instagram.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



 <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>LinkedIn реклама</h3>
            <p
              class="text-muted web-desc"
            >
                За представянето на бизнеса в LinkedIn нашият екип е отговорен за изграждането на стратегия отразяваща корпоративното Ви представяне в социалната платформа.
                <br><br>
                LinkedIn като най-голямата платформа за създаване на професионални мрежи в света, позволява рекламата да бъде таргетирана по професии, длъжност, позиции в компанията,
                 местоположение и други, следователно платформата е изключително подходяща за генериране на Вашите В2В клиенти. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/linkedin.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Google Ads реклама</h3>
            <p
              class="text-muted web-desc"
            >
                Чрез Google Ads за кратък период от време ще популяризираме сайтът Ви, 
                излизайки на челни позиции в основните търсачки. Чрез Google Ads ще изградим за реклама, която ще достигне до аудитории,
                 които се интересуват от продуктите и услугите, които предлагате. Анализирайки потребителските нужди и търсения ще изградим конкурентно предимство на Вашия сайт. 
                Google Ads Ви дава чудесна възможност да изградите добра репутация на Вашия бизнес. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/googleads.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>Email маркетинг</h3>
            <p
              class="text-muted web-desc"
            >
               Имейл маркетингът като инструмент на директния маркетинг, е ефективен и рентабилен канал за достигане до
                вашите потенциални и бъдещи клиенти, както и поддържайки лоялни взаимоотношения с настоящите. Едно от най-силните му преимущества 
                е създаването на надеждна форма на комуникация 
               между вашия бизнес или бранд и вашите клиенти, със силна форма на доверие и тенденция за растеж в дългосрочен план. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/email.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>



    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>SEO</h3>
            <p
              class="text-muted web-desc"
            >
             SEO или процесът на оптимизация на търсенията е един от основните методи в дигиталния маркетинг благодарение, 
             на който се подобрява видимостта и трафика на сайтa по органичен път с дълготрайни резултати. 
             Ние знаем, че колкото по-голяма е видимостта на Вашия сайт, 
             толкова по-голяма е възможността за привличане на потенциални и съществуващи потребители. 
          </p>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img src="@/assets/images/simple-finance-images/seo.png" alt="macbook image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

  </section>
      <BlogBG />
      <ContactBG />
      <Partners/>
      <FooterBG />
      <Switcher />
    </div>
  </div>
</template>

<style scoped>
::v-deep .modal-content {
  background-color: #000000;
  color: white;
  background: none;
  border: none;
}
::v-deep .modal-header {
  border: none;
}
::v-deep .modal-backdrop {
  opacity: 0.5;
}
</style>