<template>  <div>
    <Nav />
    <div class="page-content"
      @click="toggleMenu(false)"
      >
    <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      toggleMenu: 'navigation/toggleMenu'
    })
  }
}
</script>
