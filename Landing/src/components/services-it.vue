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
            >We help business formalize their digital strategy to deliver the best results on time, at cost and at specification.</p>
          </div>
        </div>
        <div class="row margin-t-30" style="display: flex;flex-direction: column; align-items: center;">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-diamond text-custom"></i>
                <div >
                  <h4 v-on:click="firstClicked ? firstClicked = false : firstClicked = true" class="media-body ml-4">We help companies creating a digital strategy roadmap.</h4>
                  <p v-if="this.firstClicked === true" 
                    class="pt-2 text-muted"
                  >

    We build together your digital vision. How is digital changing your industry or domain? What new offerings, operating models, and business models can it enable?

    We perform a competitive advantage assessment. How is digital affecting competitive advantage? Where are the companies well positioned? Where are they disadvantaged?
    <br>
    <br>
    We create together prioritized list of digital bets. Which digital opportunities are consistent with your business strategy based on value potential? In what order should we pursue them?
    <br> <br>
    We perform a gap analysis. Based on our client’s bets, what gaps in capabilities, organization, and systems need to be filled to win?
    <br> <br>
    We create with our client’s transformation roadmaps. What are the timelines, targets, and accountabilities for each of their programs?
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
                  <h4 v-on:click="secondClicked ? secondClicked = false : secondClicked = true">We help business creating personalized customer experiences and relationships.</h4>
                  <p v-if="this.secondClicked === true" 
                    class="pt-2 text-muted"
                  >Digital marketing strategies - New digital channels have precipitated dramatic changes in consumer 
                  behaviors and expectations. Businesses must respond by digitally transforming their marketing functions 
                  to better anticipate consumer needs. Consumers are increasingly willing to share information, expecting personalized
                   experiences in return, and online competitors are on the verge of taking over customer relationships.
                   <br><br>
                   Customer journey transformations
                   <br><br>
                   Data driven sales
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
                  <h4 v-on:click="thirdClicked ? thirdClicked = false : thirdClicked = true">We help companies managing operational excellence and innovative offerings, services, and business models.</h4>
                  <p v-if="this.thirdClicked === true"
                    class="pt-2 text-muted"
                  >Operational excellence - re-align companies cost structures and generate efficiencies through all business processes
                  <br><br>
                  Data and Analytics - Unlocking Value with Data and Analytics
                  <br><br>
                  Updating Legacy Technology and Infrastructure
                  <br><br>
                  New Digital Technology Adoption
                  <br><br>
                  Change management and Agile delivery
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
                  <h4 v-on:click="fourthClicked ? fourthClicked = false : fourthClicked = true">Trust and Compliance.</h4>
                  <p v-if="this.fourthClicked === true"
                    class="pt-2 text-muted"
                  >We help companies to secure their assets and transactions and to prevent fraud.
                  <br><br>
                  We lead businesses ISO Certification Process - Certification can be a useful tool to add credibility, by demonstrating that your product or service meets the expectations
                   of your customers. For some industries, certification is a legal or contractual requirement.
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