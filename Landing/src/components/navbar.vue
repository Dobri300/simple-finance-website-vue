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
    }
  }
};
</script>
<template>
  <!-- STRAT NAVBAR -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark" id="navbar" style="margin-top: -0.6vh;">
    <div class="container">
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
             <router-link class="nav-link" to="/"><a
                class="nav-link"
                href="/"
              >Home</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/simple-it"><a     
                class="nav-link"
                href="/simple-it"
              >Simple IT</a></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/simple-law"><a
                class="nav-link"
              >Simple Law</a></router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/simple-marketing"><a
                class="nav-link"
              >Simple Marketing</a></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contacts"><a
                class="nav-link"
              >Contacts</a></router-link>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END NAVBAR -->
</template>
