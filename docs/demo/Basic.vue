<script setup lang="ts">
import Splitter from "@pingtou/vue-splitter"
</script>

<template>
  <Splitter :style="{ height: '200px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }">
    <Splitter.Panel defaultSize="40%" min="20%" max="70%" class="flex items-center justify-center">
      <span>First</span>
    </Splitter.Panel>
    <Splitter.Panel class="flex items-center justify-center">
      <span>Second</span>
    </Splitter.Panel>
  </Splitter>
</template>
