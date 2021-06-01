<template>
  <!--
    -------------------
    - Component Usage -
    -------------------
    <nav-item
      :item="item" => required
      level=1 => optional
      >
    </nav-item>
  -->
  <li
    class="nav__item"
    :class="[
      {'nav__item--open': expandSubItems},
      {'nav__item--deeper': this.level > 1}
    ]"
    >
    <span class="nav__link-wrapper">
      <nuxt-link
        class="nav__link"
        :class="{'nav__link--active': $route.path === item.path}"
        :to="{path: item.path}"
        >
        {{ item.name }}
      </nuxt-link>
      <button
        @click="toggleSubItems"
        v-if="item.children"
        class="nav__link-arrow-container"
        :class="{'nav__link-arrow-container--open': expandSubItems}"
        >
        <span
          class="nav__link-arrow arrow"
          :class="
            isMobile
            ? (this.level > 1
              ? (expandSubItems ? 'arrow--up' : 'arrow--down')
              : (expandSubItems ? 'arrow--left' : 'arrow--right'))
            : (expandSubItems ? 'arrow--up' : 'arrow--down')"
          >
        </span>
      </button>
    </span>
    <ul
      v-if="item.children"
      class="nav__sub-items"
      :class="[
        {'nav__sub-items--open': expandSubItems},
        {'nav__sub-items--deeper': this.level > 1}
      ]"
      >
      <li
        v-if="this.level == 1"
        class="nav__item nav__item--title"
        >
        <h2 class="nav__item-title">{{ item.name }}</h2>
        <button
          @click="toggleSubItems"
          class="nav__item-close close"
          >
        </button>
      </li>
      <nav-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :level="level + 1"
        >
      </nav-item>
    </ul>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "item",
  props: {
    item: {
      type: Object,
      required: true
    },
    level: Number
  },
  data() {
    return {
      expandSubItems: false,
      mobile: false
    }
  },
  computed: {
    ...mapGetters({
      routes: 'routes/routes',
    }),
    isMobile: {
      get() {
        return this.checkMobile()
      },
      set(isMobile) {
        this.mobile = isMobile
      }
    }
  },
  mounted () {
    if (process.client) {
      this.$router.beforeEach(this.beforeRouterEach)
      window.addEventListener('resize', this.onResize)
      this.setMobile()
    }
  },
  methods: {
    ...mapActions({
      toggleMenu: 'navigation/toggleMenu'
    }),
    beforeRouterEach(to, from, next) {
      if (this.isMobile) {
        this.toggleMenu(false)
      }

      next()
    },
    toggleSubItems() {
      this.expandSubItems = !this.expandSubItems;
    },
    checkMobile () {
      if (process.client) {
        return window.innerWidth < 768
      }
    },
    onResize () {
      this.setMobile()
    },
    setMobile () {
      this.isMobile = this.checkMobile()
    }
  }
}
</script>

<style lang="scss">
  .nav {
    &__item {
      @extend %flexbox;
      @include justify-content(space-between);
      @include align-items(center);

      min-height: 62px;
      font-size: calculate-rem(18);
      font-weight: $open-sans-bold;

      &:not(:last-child) {
        border-bottom: 1px solid $glacier;

        @include bp-medium {
          margin-right: 30px;
          border-bottom: none;
        }
      }

      @include bp-medium {
        position: relative;

        .nav__sub-items & {
          margin: 0 10px 10px;
        }
      }

      &--open {
        background-color: $white;
        color: $steel-blue;

        @include bp-medium {
          background-color: $transparent;
          color: $white;
        }
      }

      &--deeper {
        @include flex-direction(column);

        background-color: $steel-blue;
        color: $white;

        .nav__sub-items--deeper & {
          padding-left: 15px;
          border-bottom: 2px solid $polo-blue;
          background-color: $glacier;

          @include bp-medium {
            padding-left: 2px;
            border-bottom: none;
            font-size: calculate-rem(16);
          }
        }
      }

      &--title {
        background: $glacier;
        padding: 0 20px 0 15px;
        border-bottom: 1px solid $glacier;

        @include bp-medium {
          display: none;
        }
      }

      &-title {
        text-transform: uppercase;
        font-size: calculate-rem(18);
      }

      &-close {
        z-index: 3;
        cursor: pointer;
        background-color: $transparent;
      }
    }

    &__link {
      position: relative;
      display: inline-block;
      padding: 0 30px;
      text-transform: uppercase;

      &--active {
        color: $astronaut;
      }

      @include bp-medium {
        padding: 0;

        &::before {
          @include transform(scaleX(0));
          @include transition(all .3s ease-in-out 0s);

          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: $white;
          visibility: hidden;
        }

        &:hover,
        &--active {
          color: $white;

          &::before {
            @include transform(scaleX(1));

            visibility: visible;
          }
        }
      }

      &-wrapper {
        @extend %flexbox;
        @include justify-content(space-between);
        @include align-items(center);

        min-height: 62px;
        width: 100%;
        border-bottom: 1px solid $glacier;

        @include bp-medium {
          @include justify-content(flex-start);

          border-bottom: none;
        }
      }

      &-arrow {
        margin-left: 0;

        @include bp-medium {
          margin: 0 0 2px 10px;

          &-container {
            background-color: $transparent;
             cursor: pointer;
          }
        }

        @include bp-small {
          &-container {
            background-color: $glacier;
            padding: 15px 25px 20px;
            cursor: pointer;

            &--open {
              background-color: $white;

              .arrow {
                border-color: $steel-blue;
              }
            }

            .nav__item--deeper & {
              background-color: $steel-blue;

              &--open {
                background-color: $steel-blue;

                .arrow {
                  border-color: $white;
                }
              }
            }
          }
        }
      }

      .nav__sub-items & {
        text-transform: none;
      }
    }

    &__sub-items {
      @include flexbox;
      @include flex-direction(column);
      @include transform(translateX(100%));
      @include transition(transform .3s cubic-bezier(.5, 1, .5, 1));

      z-index: 2;
      position: absolute;
      top: 0;
      right: 0;
      overflow-y: auto;
      height: 100vh;
      width: 96%;
      border-left: solid 1px $white;
      background-color: $steel-blue;
      color: $white;

      @include bp-medium {
        @include transform(none);
        @include transition(max-height .3s ease-out);

        top: 55px;
        left: -10px;
        max-height: 0;
        height: auto;
        width: auto;
        border-left: none;
        overflow: hidden;
        overflow-y: unset;
      }

      &--open {
        @include transform(translateX(0));

        @include bp-medium {
          @include transform(none);

          width: 150px;
          max-height: none;
        }
      }

      &--deeper {
        @include transition(max-height .1s linear);

        position: initial;
        overflow: hidden;
        max-height: 0;
        width: 100%;

        @include bp-medium {
          z-index: 3;
          background-color: $glacier;
        }

        &.nav__sub-items--open {
          @include transition(max-height .3s ease-in);

          max-height: 300px;
          height: auto;
        }
      }
    }
  }
</style>
