<script>
/**
 * Contact component
 */
export default {
  name: 'Contact'
}
</script>

<template>
  <!-- CONTACT FORM START-->
  <section class="section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">Свържете се с нас</h1>
          <div class="section-title-border margin-t-20"></div>
          <p
            class="section-subtitle text-muted text-center font-secondary padding-t-30"
          ></p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="mt-4 pt-4">
            <p class="mt-4">
              <span class="h5">Адрес:</span>
              <br />
              <span class="text-muted d-block mt-2">София 1113 улица “Николай Хайтов“ № 3А, ет.2</span>
            </p>
            <p class="mt-4">
              <span class="h5">Имейл адрес:</span>
              <br />
              <span class="text-muted d-block mt-2">
                office@simplefinance.net
              </span>
            </p>
            <p class="mt-4">
              <span class="h5">Телефонен номер:</span>
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
                      placeholder="Вашето име*"
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
                      placeholder="Вашият имейл*"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="Вашата тема"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="Вашето съобщение"
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
                    value="Изпрати съобщение"
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