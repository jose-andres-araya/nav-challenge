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
    >
    <nuxt-link
      class="nav__link"
      :class="{'nav__link--active': $route.path === item.path}"
      :to="{path: item.path}"
      >
      {{ item.name }}
    </nuxt-link>
    <span
      @click="toggleSubItems"
      v-if="item.children"
      class="nav__link-arrow arrow"
      :class="expandSubItems ? 'arrow--up' : 'arrow--down'"
      >
    </span>
    <ul
      v-if="item.children"
      class="nav__sub-items"
      :class="[
        {'nav__sub-items--open': expandSubItems},
        {'nav__sub-items--deeper': this.level > 1}
      ]"
      >
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
import { mapGetters } from 'vuex'

export default {
  name: "item",
  props: {
    item: {
      type: Object,
      required: true
    },
    level: Number
  },
  computed: {
    ...mapGetters({
      routes: 'routes/routes'
    })
  },
  data() {
    return {
      expandSubItems: false
    }
  },
  methods: {
    toggleSubItems() {
      this.expandSubItems = !this.expandSubItems;
    }
  }
}
</script>

<style lang="scss">
  .nav {
    &__item {
      @extend %flexbox;
      @include align-items(center);

      position: relative;
      font-size: calculate-rem(18);
      font-weight: $open-sans-bold;

      &:not(:last-child) {
        margin-right: 20px;
      }

      .nav__sub-items & {
        margin: 0 0 10px;
      }
    }

    &__link {
      position: relative;
      display: inline-block;

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
        &::before {
          @include transform(scaleX(1));

          visibility: visible;
        }
      }

      &-arrow {
        margin-left: 5px;
        cursor: pointer;
      }
    }

    &__sub-items {
      @include transition(max-height .3s ease-out);

      position: absolute;
      top: 35px;
      max-height: 0;
      overflow: hidden;
      background-color: $steel-blue;

      &--deeper {
        z-index: 1;
        background-color: $glacier;
      }

      &--open {
        width: 120px;
        max-height: none;
      }
    }
  }
</style>
