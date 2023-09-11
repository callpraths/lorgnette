<script setup lang="ts">
import * as xPaginate from 'x-paginate';
import { ref } from 'vue';

const ctx = xPaginate.SerializingContext.new(300, 500);
const page = ref(ctx.next());
</script>

<template>
  <div class="sl-theme-dark demo-theme-dark">
    <lv-log-line v-for="line in page.lines">
      <lv-log-file slot="file" path="src/public/SearchBox.ts"></lv-log-file>
      <lv-log-timestamp slot="timestamp" :value.attr="1689086655774"></lv-log-timestamp>
      <lv-log-text slot="text">
        <lv-log-word v-for="word in line.words">{{ word }}</lv-log-word>
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
}
</style>
