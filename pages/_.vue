<template>
  <div class="page-content">
    <div>
      <hero
        title="Page Not Found"
        description="<p>Page you're looking for doesn't exist anymore.</p><a href='/'>Go back to the homepage.</a>"
        >
      </hero>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Nav Challenge | 404',
      meta: [
        {
          name: 'description',
          content: '404 page of the Nav Challenge project'
        }
      ]
    }
  }
}
</script>
