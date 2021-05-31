<template>
  <!--
    -------------------
    - Component Usage -
    -------------------
    <hero
      title: "hero title" => required
      description: "hero description" => optional
      >
    </hero>
  -->
  <div class="hero">
    <h1 class="hero__title">{{ title }}</h1>
    <div
      v-if="description"
      class="hero__description"
      v-html="description"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: String
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    &__title {
      margin-bottom: 30px;
      font-size: calculate-rem(25);

      @include bp-medium {
        font-size: calculate-rem(50);
      }
    }

    &__description {
      font-size: calculate-rem(14);

      ::v-deep p {
        margin-bottom: 15px;
      }

      ::v-deep a {
        color: $glacier;

        &:hover {
          text-decoration: underline;
          color: $astronaut;
        }
      }
    }
  }
</style>
