<template>
  <div id="history-div" class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-3">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Middle box</p>
                <p class="subtitle">With an image</p>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">Wide column</p>
              <p class="subtitle">Aligned with the right column</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="content">
              <p class="title">Tall column</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
              </div>
            </div>
          </article>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
    name: 'History'
}
</script>

<style lang="scss">

</style>