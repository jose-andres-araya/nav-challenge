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
      <ul
        class="nav__items"
        :class="{'nav__items--open': isMenuOpened}"
        >
        <nav-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :level=1
          >
        </nav-item>
      </ul>
      <button
        @click="toggleMenu(!isMenuOpened)"
        class="nav__menu hamburger-menu"
        :class="{'hamburger-menu--open': isMenuOpened}"
        >
        <span class="hamburger-menu__lines"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NavItem from './NavItem.vue'

export default {
  components: {
    NavItem
  },
  computed: {
    ...mapGetters({
      routes: 'routes/routes',
      isMenuOpened: 'navigation/isMenuOpened'
    })
  },
  methods: {
    ...mapActions({
      toggleMenu: 'navigation/toggleMenu'
    })
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

      position: relative;
      max-width: $page-max-width;
      padding: 10px 15px 10px 30px;
      margin: 0 auto;

      @include bp-medium {
        position: initial;
        padding: 10px 30px;
      }
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
      @include flexbox;
      @include flex-direction(column);
      @include transform(translateX(-100%));
      @include transition(transform .3s cubic-bezier(.5, 1, .5, 1));
      @include box-sizing(border-box);

      position: absolute;
      top: 0;
      left: 0;
      overflow-y: auto;
      height: calc(100vh - 75px);
      width: 100%;
      margin-top: 75px;
      background-color: $steel-blue;

      @include bp-medium {
        @include flex-direction(row);
        @include transform(none);

        position: initial;
        overflow-y: unset;
        height: auto;
        width: auto;
        margin-top: 0;
        background-color: $transparent;
      }

      &--open {
        @include transform(translateX(0));

        @include bp-medium {
          @include transform(none);
        }
      }
    }

    &__menu {
      @include bp-medium {
        display: none;
      }
    }
  }
</style>
