<script>
/**
 * Navbar component
 */
export default {
  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        navbar.style.backgroundColor = "#272a33";
        navbar.style.padding = "10px";
      } else {
        navbar.style.backgroundColor = "";
        navbar.style.padding = "20px";
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
    bgFlagClicked()
    {
      console.log("flag clicked");
      switch (this.$route.name) {
        case 'Index-1':
          this.$router.push("home-bg");
          break;
        case 'Index-2':
          this.$router.push("simple-it-bg");
          break;
        case 'Index-3':
          this.$router.push("simple-law-bg");
          break;
        case 'Index-4':
          this.$router.push("simple-marketing-bg");
          break;
        case 'Index-5':
          this.$router.push("contacts-bg");
          break;
          
        default:
}
    },
    usFlagClicked()
    {
      console.log("flag clicked");
      switch (this.$route.name) {
        case 'Index-1-bg':
          this.$router.push("/");
          break;
        case 'Index-2-bg':
          this.$router.push("simple-it");
          break;
        case 'Index-3-bg':
          this.$router.push("simple-law");
          break;
        case 'Index-4-bg':
          this.$router.push("simple-marketing");
          break;
        case 'Index-5-bg':
          this.$router.push("contacts");
          break;
          
        default:
}
  }
  }
};
</script>
<style scoped>
#flag:hover{
  cursor: pointer;
}
</style>
<template>
  <!-- STRAT NAVBAR -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar" style="margin-top: -0.6vh;">
    <div class="container" style="max-width: 1600px !important;">
      <!-- LOGO -->
      <a class="navbar-brand logo text-uppercase" href="/">
        <!-- <i class=""></i>Simple Finance -->
      </a>
         <img src="@/assets/images/simple-finance-images/simple-finance-logo.png" style="width: 22vh;" alt="">

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu()"
      >
        <i class="mdi mdi-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav navbar-center" id="mySidenav" v-scroll-spy-active="{class: 'a'}">
           <li class="nav-item">
             <router-link class="nav-link" to="/home-bg"><a
                class="nav-link"
                href="/"
              >Simple Finance</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/simple-it-bg"><a     
                class="nav-link"
                href="/simple-it"
              >Simple IT</a></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/simple-law-bg"><a
                class="nav-link"
              >Simple Law</a></router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/simple-marketing-bg"><a
                class="nav-link"
              >Simple Marketing</a></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts-bg"><a
                class="nav-link"
              >Контакти</a></router-link>
            </li>
            <li class="nav-item">
              <a style="margin-top: 15px;" href="https://login.microsoftonline.com"
                class="nav-link"
              >Вход</a>
            </li>
            <li class="nav-item">
              <a @click="usFlagClicked()"
                class="nav-link"
              ><img id="flag" src="@/assets/images/simple-finance-images/us-flag.jpg" alt="" style="width: 2vh; margin-top: 23px;"></a>
            </li>
            <li class="nav-item">
              <a @click="bgFlagClicked()"
                class="nav-link"
              ><img id="flag" src="@/assets/images/simple-finance-images/bg-flag.jpg" alt="" style="width: 2vh; margin-top: 23px;"></a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END NAVBAR -->
</template>
