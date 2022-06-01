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
            <h1 class="section-title text-center">Our Services</h1>
            <div class="section-title-border margin-t-20"></div>
            <p
              class="section-subtitle text-muted text-center padding-t-30 font-secondary"
            >We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
          </div>
        </div>
        <div class="row margin-t-30">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-graph2 text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="firstClicked ? firstClicked = false : firstClicked = true">Accounting services</h4>
                  <p v-if="this.firstClicked === true" 
                    class="pt-2 text-muted"
                  >Subscription automated accounting service in digital environment
                  <br><br>
                  Accounting advice on the choice of accounting policy and the application of 
                  the National Financial Reporting Standards
                   for Small and Medium-sized Entities (NFRS-SME), International Financial Reporting Standards (IFRS)
                   <br><br>
                   Preparation of an individual chart of accounts tailored to information needs and activity
                   <br><br>
                   Advising on operational financial and accounting cases
                   <br><br>
                   Participation and assistance in inventories and other internal control procedures
                   <br><br>
                   Preparation of monthly VAT returns, monthly Intrastat declarations, 
                   declarations and reports for BNB, statements and reports for NSI
                   <br><br>
                   Current calculation of taxes du
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
                  <h4 v-on:click="secondClicked ? secondClicked = false : secondClicked = true">Tax Advice</h4>
                  <p v-if="this.secondClicked === true" 
                    class="pt-2 text-muted"
                  >Preparation and review of tax returns under the Corporate Income Tax Act
                  <br><br>
                  Preparation and review of tax returns under the Corporate Income Tax Act
                  <br><br>
                  Preparation and review of tax returns under the Value Added Tax Act
                  <br><br>
                  Preparation and verification of tax declarations under the Excise and Warehouses Act
                  <br><br>
                  Preparation and verification of tax returns under the Personal Income Tax Act
                  <br><br>
                  Preparation and verification of tax returns under the Local Taxes and Fees Act
                  <br><br>
                  Tax and other registrations
                  <br><br>
                  Tax representation and assistance in contacts with tax authorities and other administrative bodies when you 
                  need to submit or file documents, applications or forms required by law</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-piggy text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="thirdClicked ? thirdClicked = false : thirdClicked = true">Financial Audit</h4>
                  <p v-if="this.thirdClicked === true" 
                    class="pt-2 text-muted"
                  >Independent audit and other engagements to express assurance on financial statements
                  <br><br>
                  Independent audit and other engagements to express assurance on financial statements
                  <br><br>
                  Limited review of financial statements
                  <br><br>
                  Thematic site inspections at the discretion of management and owners</p>
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
                  <h4 v-on:click="fourthClicked ? fourthClicked = false : fourthClicked = true">Financial and economic analyses</h4>
                  <p v-if="this.fourthClicked === true" 
                    class="pt-2 text-muted"
                  >Production and sales analysis
                  <br><br>
                  Analysis of the enterprise’s fixed tangible assets provision
                  <br><br>
                  Analysis of the enterprise’s labour supply
                  <br><br>
                  Cost analysis of the enterprise
                  <br><br>
                  Revenue analysis
                  <br><br>
                  Financial result analysis and profit maximisation
                  <br><br>
                  Business risk analysis
                  <br><br>
                  Profitability analysis
                  <br><br>
                  Analysis of financial position and financial risk</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-news-paper text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="fifthClicked ? fifthClicked = false : fifthClicked = true">Licensed business valuations</h4>
                  <p v-if="this.fifthClicked === true" 
                    class="pt-2 text-muted"
                  >Commercial enterprises
                  <br><br>
                  Claims
                  <br><br>
                  Machinery and equipment
                  <br><br>
                  Real Estate
                  <br><br>
                  Agricultural land and permanent crops
                  <br><br>
                  Intellectual and industrial property rights and other factual relations
                  <br><br>
                  Actuarial valuations of employers’ obligations under CT and IAS 19</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-portfolio text-custom"></i>
                <div class="media-body ml-4">
                  <h4 v-on:click="sixthClicked ? sixthClicked = false : sixthClicked = true">Human resources</h4>
                  <p v-if="this.sixthClicked === true" 
                    class="pt-2 text-muted"
                  >Subscription-based automated payroll processing in a digital environment
                  <br><br>
                  Collecting, verifying and validating monthly staff input data and permanent staff data and their salaries
                  <br><br>
                  Entry and processing of staff payroll data
                  <br><br>
                  Preparation of monthly payrolls and other reports with data on gross and net 
                  employee wages, social and health insurance, income tax and sick leave benefits;
                  <br><br>
                  Preparation of bank payment documents for social and health insurance,
                   income tax, sick leave, employee salaries;

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
                  <h4 v-on:click="seventhClicked ? seventhClicked = false : seventhClicked = true">Legal and administrative services</h4>
                  <p v-if="this.seventhClicked === true" 
                    class="pt-2 text-muted"
                  >Subscription legal services
                  <br><br>
                  Registration and re-registration of companies
                  <br><br>
                  Processing and submission of documents to the National Social Insurance Institute
                  <br><br>
                  Submission of declarations to the Executive Agency “General Labour Inspectorate”
                  <br><br>
                  Preparation of reports and statements according to client requirements
                  <br><br>
                  Preparation of orders related to the activities of the company /business trip order, 
                  fuel consumption rate, leave, etc./
                  <br><br>
                  Drafting of contracts
                  <br><br>
                  Measures against money laundering</p>
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