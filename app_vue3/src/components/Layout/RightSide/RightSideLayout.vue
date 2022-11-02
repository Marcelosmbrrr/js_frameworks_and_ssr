<template>
    <div class="layout_right_side">
        <HeaderComponent />
        <MiddleComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import MiddleComponent from "./components/Middle/MiddleComponent.vue";
import FooterComponent from "./components/Footer/FooterComponent.vue";

export default {
    name: 'RightSideLayout',
    components: {
        HeaderComponent,
        MiddleComponent,
        FooterComponent
    }
}
</script>

<style scoped>
.layout_right_side {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>