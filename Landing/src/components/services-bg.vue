<script>
export default {
  name: 'Services',
  data()
  {
    return{
      firstClicked: false,
      secondClicked: false,
      thirdClicked: false,
      fourthClicked: false,
      fifthClicked: false,
      sixthClicked: false,
      seventhClicked: false
    }
  }
}
</script>
<style scoped>
h4
{
  user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
}
h4:hover
{
  cursor: pointer;
}
</style>
<template>
  <div>
    <!--START SERVICES-->
    <section class="section bg-light" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1 class="section-title text-center">Нашите услуги</h1>
            <div class="section-title-border margin-t-20"></div>
            <p
              class="section-subtitle text-muted text-center padding-t-30 font-secondary"
            ></p>
          </div>
        </div>
        <div class="row margin-t-30">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-graph2 text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="firstClicked ? firstClicked = false : firstClicked = true">Счетоводни услуги</h4>
                  <p v-if="this.firstClicked === true" 
                    class="pt-2 text-muted"
                  >Абонаментно автоматизирано счетоводно обслужване в дигитална среда
                  <br><br>
                 Счетоводни консултации по избор на счетоводна политика и по приложението на Националните 
                 стандарти за финансови отчети на малки и средни предприятия (НСФОМСП),
                 Международните стандарти за финансови отчети (МСФО)
                   <br><br>
                   Изготвяне на индивидуален сметкоплан, съобразен информационните потребности и дейност
                   <br><br>
                   Консултиране по оперативни финансово-счетоводни казуси
                   <br><br>
                  Участие и съдействие при инвентаризации и други процедури по вътрешен контрол
                   <br><br>
                  Изготвяне на месечни декларации по ЗДДС, месечни Интрастат декларации, декларации и отчети за БНБ, справки и отчети за НСИ
                   <br><br>
                   Текущо изчисляване на дължими данъци
                   <br><br>
                   Текущо информиране за промени в счетоводното и данъчното законодателство
                   <br><br>
                   Извършване на текущ счетоводен преглед, включващ анализ на счетоводна информация, контрол за съответствие със законовите изисквания;
                   <br><br>
                   </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-display2 text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="secondClicked ? secondClicked = false : secondClicked = true">Данъчни консултации</h4>
                  <p v-if="this.secondClicked === true" 
                    class="pt-2 text-muted"
                  >

    Изготвяне и преглед на данъчни декларации по Закона за корпоративното подоходно облагане


                  <br><br>
               Изготвяне и преглед на данъчни декларациипо Закона за данък върху добавената стойност
                  <br><br>
Изготвяне и проверка на данъчни декларации по Закона за акцизите и данъчните складове
                  <br><br>
Изготвяне и проверка на данъчни декларации по Закона за данъците върху доходите на физическите лица
                  <br><br>
Изготвяне и проверка на данъчни декларации по Закона за местните данъци и такси
                  <br><br>
Данъчни и други регистрации
                  <br><br>
Данъчно представителство и съдействие при контакти с органите по приходите и с други административни органи, когато е необходимо да представите или подадете документи, заявления или формуляри, изисквани по закон
                  <br><br>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-piggy text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="thirdClicked ? thirdClicked = false : thirdClicked = true">Финансов одит</h4>
                  <p v-if="this.thirdClicked === true" 
                    class="pt-2 text-muted"
                  >

               Независим одит и други ангажименти за изразяване на сигурност по отношение на финансови отчети


                  <br><br>
          Ограничен преглед на финансови отчети
                  <br><br>
          Тематични проверки на обекти по преценка на ръководството и собствениците
                  <br><br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-science text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="fourthClicked ? fourthClicked = false : fourthClicked = true">Финансово-стопански анализи</h4>
                  <p v-if="this.fourthClicked === true" 
                    class="pt-2 text-muted"
                  >

    Анализ на производството и продажбите на продукцията


                  <br><br>
Анализ на осигуреността на предприятието с дълготрайни материални активи
                  <br><br>
Анализ на осигуреността на предприятието с работна сила
                  <br><br>
Анализ на разходите на предприятието
                  <br><br>
Анализ на приходите
                  <br><br>
Анализ на финансовия резултат и максимизиране на печалбата
                  <br><br>
Анализ на бизнес риска
                  <br><br>
Анализ на рентабилността
                  <br><br>
                  Анализ на финансовото състояние и финансовия риск</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-news-paper text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="fifthClicked ? fifthClicked = false : fifthClicked = true">Лицензирани бизнес оценки</h4>
                  <p v-if="this.fifthClicked === true" 
                    class="pt-2 text-muted"
                  >Търговски предприятия
                  <br><br>
Вземания
                  <br><br>
Машини и съоръжения
                  <br><br>
Недвижими имоти
                  <br><br>
Земеделски земи и трайни насаждения
                  <br><br>
Права на интелектуална и индустриална собственост и други фактически отношения
                  <br><br>
Актюерски оценки за задължения на работодатели по КТ и МСС 19</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-portfolio text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="sixthClicked ? sixthClicked = false : sixthClicked = true">Човешки ресурси</h4>
                  <p v-if="this.sixthClicked === true" 
                    class="pt-2 text-muted"
                  >

    Абонаментна автоматизирана обработка на заплати в дигитална среда


                  <br><br>
Събиране, проверка и потвърждаване на месечните входящи данни за персонала и на постоянните данни за служители и техните възнаграждения
                  <br><br>
Въвеждане и обработка на данните за заплатите на персонала
                  <br><br>
Изготвяне на месечните ведомости за заплатите и други справки с данни за брутните и нетни възнаграждения на служителите, социални и здравни осигуровки, данък върху дохода и обезщетения за болнични;
                  <br><br>
Изготвяне на банковите платежни документи за социалните и здравни осигуровки, данък върху дохода, болнични, заплатите на служителите;
<br><br>
Обработка на информацията за възнагражденията на управленския екип
<br><br>
Уведомяване на националната агенция за приходите във връзка със сключени, изменени или прекратени трудови договори
<br><br>
Обработка на болнични листове и подаването им в националния осигурителен институт (НОИ)
<br><br>
Попълване и заверяване на трудови и осигурителни книжки

</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-hammer text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="seventhClicked ? seventhClicked = false : seventhClicked = true">Правни и административни услуги</h4>
                  <p v-if="this.seventhClicked === true" 
                    class="pt-2 text-muted"
                  >Абонаментни правни услуги
                  <br><br>
Абонаментни правни услуги
                  <br><br>
Регистрация и пререгистрация на дружества
                  <br><br>
Защита на личните данни (GDPR)
                  <br><br>
Обработка и подаване на документи в НОИ
                  <br><br>
Подаване на декларации към Изпълнителна агенция „Главна инспекция по труда”
                  <br><br>
Изготвяне на отчети и справки, съгласно изискванията на клиента
                  <br><br>
Изготвяне на заповеди свързани с дейността на фирмата /заповед за командировка, разходна норма за гориво, отпуск и други/
<br><br>
Изготвяне на договори
<br><br>
Мерки срещу пране на пари
<br><br>
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--START SERVICES-->

    <!--START WEBSITE-DESCRIPTION-->
    <!--END WEBSITE-DESCRIPTION-->
  </div>
</template>