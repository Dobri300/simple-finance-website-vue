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
                  <h4 v-on:click="firstClicked ? firstClicked = false : firstClicked = true">Търговски дружества</h4>
                  <p v-if="this.firstClicked === true" 
                    class="pt-2 text-muted"
                  >

    Учредяване и структуриране на капиталови и персонални търговки дружества (АД, ЕАД, ООД, ЕООД, КД, СД), учредяване на клонове и търговски представителства;
    <br><br>
    Изготвяне на учредителни протоколи, дружествени договори, устави, договори за управление и всякакви други документи в съответствие с икономическите интереси на съдружниците;
    <br>
    <br>
    Провеждане на всички изисквани от закона регистрации и вписвания в Търговския регистър, данъчни и социални служби и други институции;
    <br> <br>
    Съдействие за придобиване на всички изискани по закон разрешителни и лицензи съобразно особеностите на съответната икономическа дейност;
    <br> <br>
    Консултации относно всички права и задължения на членовете на различните дружествени органи;
    <br> <br>
    Изготвяне на документи за преобразуване на търговски дружества чрез сливане, вливане, разделяне или отделяне и подаването им в Търговския регистър;
    <br> <br>
    Продажба и залог на дружествени дялове и акции, сделки с търговско предприятие;
    <br> <br>
    Реорганизация, промени в състава на управителни и контролни органи;
    <br> <br>
    Съдействие при организиране на общи събрания или други фирмени събития;
    <br> <br>
    Изготвяне на фирмени политики и общи условия;
    <br> <br>
    Консултации по въпросите на мерките срещу изпирането на пари;
    <br> <br>
    Съдействие за извънсъдебно разрешаване на спорове между съдружници или с контрагенти;
    <br> <br>
    Консултации и правно съдействие при прекратяване на търговска дейност в случаите на ликвидация или несъстоятелност;
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
                  <h4 v-on:click="secondClicked ? secondClicked = false : secondClicked = true">Търговски сделки</h4>
                  <p v-if="this.secondClicked === true" 
                    class="pt-2 text-muted"
                  >Изготвяне на нови, съответно правен анализ на сключени търговки договори от всякакъв вид (в т.ч. продажба 
                  на стоки, ценни книжа, недвижими имоти и вещни права, комисионен и спедиционен договор, застрахователни сделки, лизинг, наем, банкови и валутни сделки, сделки с 
                  услуги – хотелиерски, складови, рекламни услуги, стоков контрол, превозни договори, сделки с интелектуална собственост);
                   <br><br>
                   Изготвяне на всякакви документи, свързани с дейността на търговеца;
                   <br><br>
                   Водене на преговори, сътрудничество при сключване на споразумения и консултации относно изпълнението на договорни задължения;
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
                  <h4 v-on:click="thirdClicked ? thirdClicked = false : thirdClicked = true">Отношения с банки и финансови институции</h4>
                  <p v-if="this.thirdClicked === true" 
                    class="pt-2 text-muted"
                  >Преглед и правно съдействие във връзка с договори за кредит и учредяване/поддържане на обезпечения по тях;
                  <br><br>
                  Съдействие при откриване на банкови сметки и сключване на договори за банкови продукти (наем на сейф, договор за депозит, спестовна сметка и др.);
                  <br><br>
                  Съдействие при изпълнение на KYC („Опознай своя клиент“) процедури;
                  <br><br>
                  Консултации по договори за управление на активи, проектно финансиране;
                  <br><br>
                  Правни становища и консултации във връзка с просрочени кредити;
                  <br><br>
                  Изготвяне на жалби, писма, отговори до банки и финансови институции;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-users text-custom"></i>
                <div class="media-body ml-4">
                  <h4  v-on:click="fourthClicked ? fourthClicked = false : fourthClicked = true">Обществени поръчки</h4>
                  <p v-if="this.fourthClicked === true" 
                    class="pt-2 text-muted"
                  >Консултация и изготвяне/съдействие за издаване на документите за участие;
                  <br><br>
                  Консултации във връзка с правната оценка на офертите на търга;
                  <br><br>
                  Изясняване на въпроси на участниците в търга;
                  <br><br>
                  Консултиране на участниците при нарушения на процедурата по възлагане на обществена поръчка;
                  <br><br></p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-news-paper text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="fifthClicked ? fifthClicked = false : fifthClicked = true">Трудови отношения</h4>
                  <p v-if="this.fifthClicked === true" 
                    class="pt-2 text-muted"
                  >Изготвяне на индивидуални трудови договори, анекси, длъжностни характеристики, споразумения, заповеди на работодателя, протоколи, решения и други;
                  <br><br>
                  Консултации относно изпълнението на задълженията на страните по трудовото правоотношение;
                  <br><br>
                  Изготвяне на документи за прекратяване на трудови правоотношения, предизвестия, заповеди, протоколи за извършване на подбор, изплащане на обезщетения;
                  <br><br>
                  Консултации във връзка с налагане на дисциплинарни наказания, уволнения, реализиране на имуществена и дисциплинарна отговорност;
                  <br><br>
                  Правни становища по всякакви въпроси от областта на трудовото право и анализ на съдебната практика;
                  <br><br>
                  Консултации относно социалното осигуряване на работниците и служителите за различни социални рискове, вкл. задължително, допълнително и доброволно обществено осигуряване;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-portfolio text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="sixthClicked ? sixthClicked = false : sixthClicked = true">Гражданско право</h4>
                  <p v-if="this.sixthClicked === true" 
                    class="pt-2 text-muted"
                  >Правни консултации по гражданско-правни въпроси;
                  <br><br>
                 Правни консултации по гражданско-правни въпроси в рамките на законодателството на европейския съюз.
                  <br><br>
                  Изготвяне на нотариални актове, пълномощни, удостоверения, покани за доброволно изпълнение и оказване на съдействие пред нотариус;
                  <br><br>
                  Изготвяне на всякакви договори или извършване на правен анализ на сключени договори;
                  <br><br>
                  Регистрация, преобразуване и прекратяване на жилищно-строителни кооперации, граждански дружества и юридически лица с нестопанска цел (фондации и сдружения);
                  <br><br>
                  Установяване на задължения, консултиране и съдействие за събирането им по съдебен и извън съдебен ред.</p>
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