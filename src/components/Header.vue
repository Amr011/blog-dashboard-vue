<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="../assets/logo.png"
            alt="Logo"
            width="112"
            height="28"
          />
        </a>
        <div
          class="navbar-burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu ml-5">
        <div class="navbar-start">
          <router-link class="navbar-item " to="/">
            Home
          </router-link>
          <div class="navbar-start">
            <router-link class="navbar-item" to="/about">
              About
            </router-link>
            <div class="navbar-start">
              <router-link class="navbar-item" to="/contact">
                Contact
              </router-link>
              <div class="navbar-item has-dropdown is-hoverable">
                <router-link class="navbar-link" to="/categories">
                  Categories
                </router-link>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="#">
                    Overview
                  </a>
                  <a class="navbar-item" href="#">
                    Modifiers
                  </a>
                  <a class="navbar-item" href="#">
                    Columns
                  </a>
                  <a class="navbar-item" href="#">
                    Layout
                  </a>
                  <a class="navbar-item" href="#">
                    Form
                  </a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item" href="#">
                    Elements
                  </a>
                  <a class="navbar-item is-active" href="#">
                    Components
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LoginModal/>

      </div>
      </nav>
  </div>
</template>

<script>
import LoginModal from "../components/LoginModal";
export default {
  name: "Header",
  components:{
      LoginModal

  },
  data() {
    return {
      isactive: false,
    };
  },
};
</script>

<style>
@import "~bulma/css/bulma.css";
</style>
