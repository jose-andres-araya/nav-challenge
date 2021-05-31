<template>
  <!--
    -------------------
    - Component Usage -
    -------------------
    <Nav />
  -->
  <nav class="nav">
    <div class="nav__container">
      <nuxt-link
        class="nav__logo"
        to="/"
        >
        <img
          class="nav__logo-image"
          src="@/assets/white-logo.png" />
      </nuxt-link>
      <ul class="nav__items">
        <nav-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :level=1
          >
        </nav-item>
      </ul>
      <button
        @click="toggleMenu"
        class="nav__menu hamburger-menu"
        :class="{'hamburger-menu--open': this.openMenu}"
        >
        <span class="hamburger-menu__lines"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import NavItem from './NavItem.vue'

export default {
  components: {
    NavItem
  },
  /*mounted() {
    console.log(this.$router.getRoutes())
  }*/
  computed: {
    ...mapGetters({
      routes: 'routes/routes'
    })
  },
  data() {
    return {
      openMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
    }
  }
}
</script>

<style lang="scss">
  .nav {
    background-color: $astronaut;
    color: $white;

    &__container {
      @extend %flexbox;
      @include justify-content(space-between);
      @include align-items(center);
      @include box-sizing(border-box);

      max-width: $page-max-width;
      padding: 10px 30px;
      margin: 0 auto;
    }

    &__logo {
      display: block;

      &:hover {
        @include opacity(.5);
      }

      &-image {
        width: 50px;

        @include bp-medium {
          width: 75px;
        }
      }
    }

    &__items {
      display: none;

      @include bp-medium {
        @include flexbox;
      }
    }

    &__menu {
      @include bp-medium {
        display: none;
      }
    }
  }
</style>
