<script>
/**
 * Contact component
 */
export default {
  name: 'Contact'
}
</script>
<style scoped>
.custom-select {
  position: relative;
  color: rgba(0, 0, 0, 0.548);
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <!-- CONTACT FORM START-->
  <section class="section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">Get In Touch</h1>
          <div class="section-title-border margin-t-20"></div>
          <p
            class="section-subtitle text-muted text-center font-secondary padding-t-30"
          >We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="mt-4 pt-4">
            <p class="mt-4">
              <span class="h5">Office Address:</span>
              <br />
              <span class="text-muted d-block mt-2">Sofia 1113″Nikolay Haitov” street № 3A, floor 2</span>
            </p>
            <p class="mt-4">
              <span class="h5">Email Address:</span>
              <br />
              <span class="text-muted d-block mt-2">
                office@simplefinance.net
              </span>
            </p>
            <p class="mt-4">
              <span class="h5">Phone number:</span>
              <br />
              <span class="text-muted d-block mt-2">+ 359 2 427 99 99</span>
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="custom-form mt-4 pt-4">
            <div id="message"></div>
            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mt-2">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Your name*"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mt-2">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Your email*"
                    />
                  </div>
                </div>
              </div>
              <!-- <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Your Subject.."
                    />
                  </div>
                </div>
              </div> -->
              <div style="width:200px;">
  <select class="custom-select">
    <option value="0">Select subject:</option>
    <option value="1">Simple Finance</option>
    <option value="2">Simple IT</option>
    <option value="3">Simple Law</option>
    <option value="4">Simple Marketing</option>
  </select>
</div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 text-right">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    class="submitBnt btn btn-custom"
                    value="Send Message"
                  />
                  <div id="simple-msg"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- CONTACT FORM END-->
</template>