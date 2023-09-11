<script setup lang="ts">
import * as xPaginate from 'x-paginate';
import { ref } from 'vue';

const ctx = xPaginate.SerializingContext.new(500, 50, 10);
const page = ref(ctx.next());
</script>

<template>
  <div class="sl-theme-dark demo-theme-dark">
    <lv-log-line v-for="line in page.lines">
      <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
      <lv-log-timestamp slot="timestamp" :value.attr="1689086655774"></lv-log-timestamp>
      <lv-log-text slot="text">
        <span v-for="word in line.words">
          <lv-log-word v-if="word.highlight" highlight="4">{{ word.text }}</lv-log-word>
          <span v-else>{{ word.text }}</span>
        </span>
      </lv-log-text>
    </lv-log-line>
  </div>
</template>

<style scoped>
.demo-theme-dark {
  color: white;
  background-color: #333333;
  width: 80vw;
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
