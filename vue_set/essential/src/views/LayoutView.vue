<template>
  <div class="layout">
    <LeftSideLayout />
    <RightSideLayout />
  </div>
</template>

<script>
import LeftSideLayout from "../components/Layout/LeftSide/LeftSideLayout.vue";
import RightSideLayout from "../components/Layout/RightSide/RightSideLayout.vue";

export default {
  name: 'LayoutView',
  components: {
    LeftSideLayout,
    RightSideLayout
  }
}
</script>

<style>
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
</style>
