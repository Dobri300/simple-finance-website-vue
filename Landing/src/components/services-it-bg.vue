<script>
export default {
  name: 'Services',
  data()
  {
    return{
      firstClicked: false,
      secondClicked: false,
      thirdClicked: false,
      fourthClicked: false
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
            <h1 class="section-title text-center">Our Services</h1>
            <div class="section-title-border margin-t-20"></div>
            <p
              class="section-subtitle text-muted text-center padding-t-30 font-secondary"
            >Ние помагаме на бизнеса да формализира своята дигитална стратегия, 
            за да постигне най-добрите резултати навреме, на цена и по спецификация.
</p>
          </div>
        </div>
        <div class="row margin-t-30" style="display: flex;flex-direction: column; align-items: center;">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-diamond text-custom"></i>
                <div >
                  <h4 v-on:click="firstClicked ? firstClicked = false : firstClicked = true" class="media-body ml-4">Помагаме на компаниите да създадат пътна карта за дигитална стратегия.</h4>
                  <p v-if="this.firstClicked === true" 
                    class="pt-2 text-muted"
                  >

    Изграждаме заедно вашата дигитална визия. Как цифровите технологии променят вашата индустрия или област? Какви нови предложения, оперативни модели и бизнес модели може да даде възможност?

    Извършваме оценка на конкурентните предимства. Как цифровите технологии влияят на конкурентното предимство? Къде компаниите са добре позиционирани? Къде са в неизгодно положение?
    <br>
    <br>
    Заедно създаваме приоритизиран списък с дигитални залози. Кои цифрови възможности съответстват на бизнес стратегията ви въз основа на потенциала за създаване на стойност? В какъв ред трябва да ги преследваме?
    <br> <br>
    Извършваме анализ на пропуските. Въз основа на залозите на нашия клиент, какви пропуски в способностите, организацията и системите трябва да бъдат запълнени, за да спечелим?
    <br> <br>
    Ние създаваме пътни карти за трансформация на нашите клиенти. Какви са сроковете, целите и отговорностите за всяка от техните програми?
    <!-- Advice on all the rights and obligations of the members of the various corporate bodies;
    <br> <br>
    Preparation of documents for the transformation of companies by merger, amalgamation, division or separation and their submission to the Commercial Register;
    <br> <br>
    Sale and pledge of company shares and stocks, transactions with commercial enterprise;
    <br> <br>
    Reorganization, changes in the composition of the management and supervisory bodies;
    <br> <br>
    Assistance in organizing general meetings or other company events;
    <br> <br>
    Drafting company policies and terms and conditions;
    <br> <br>
    Advice on anti-money laundering measures;
    <br> <br>
    Assistance in out-of-court dispute resolution between partners or with counterparties;
    <br> <br>
    Advice and legal assistance in the termination of commercial activity in cases of liquidation or insolvency;
    <br> <br>
    Subscription legal services for commercial companies. -->

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
                  <h4 v-on:click="secondClicked ? secondClicked = false : secondClicked = true">Помагаме на бизнеса да създава персонализирани преживявания и взаимоотношения с клиентите.</h4>
                  <p v-if="this.secondClicked === true" 
                    class="pt-2 text-muted"
                  >Стратегии за дигитален маркетинг - Новите дигитални канали доведоха до драматични промени в 
                  поведението и очакванията на потребителите. Предприятията трябва да реагират, като трансформират маркетинговите 
                  си функции в цифрови, за да могат по-добре да предвиждат нуждите на потребителите. Потребителите са все по-склонни да 
                  споделят информация,
                   като в замяна очакват персонализирани преживявания, а онлайн конкурентите са на път да завладеят отношенията с клиентите.
                   <br><br>
                   Трансформации на пътуването на клиентите
                   <br><br>
                   Продажби, базирани на данни
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
                  <h4 v-on:click="thirdClicked ? thirdClicked = false : thirdClicked = true">Помагаме на компаниите да управляват оперативно съвършенство и иновативни предложения.</h4>
                  <p v-if="this.thirdClicked === true"
                    class="pt-2 text-muted"
                  >Оперативно съвършенство - пренастройване на структурите на разходите на компаниите и генериране на ефективност чрез всички бизнес процеси
                  <br><br>
                  Данни и анализи - Отключване на стойността с данни и анализи
                  <br><br>
                  Актуализиране на наследени технологии и инфраструктура
                  <br><br>
                  Приемане на нови цифрови технологии
                  <br><br>
                  Управление на промените и Agile доставки
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="display: flex;flex-direction: column; align-items: center;">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-science text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="fourthClicked ? fourthClicked = false : fourthClicked = true">Доверие и съответствие.</h4>
                  <p v-if="this.fourthClicked === true"
                    class="pt-2 text-muted"
                  >Помагаме на компаниите да защитят своите активи и транзакции и да предотвратят измами.
                  <br><br>
                 Ние ръководим бизнеса Процесът на сертифициране по ISO - Сертифицирането може да бъде полезен инструмент за повишаване 
                 на доверието, като демонстрира, че вашият продукт или услуга отговаря на очакванията на вашите клиенти. 
                 В някои отрасли сертификацията е законово или договорно изискване.
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