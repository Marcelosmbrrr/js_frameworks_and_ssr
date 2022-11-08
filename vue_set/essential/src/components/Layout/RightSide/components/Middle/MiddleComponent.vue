<template>
    <section class="middle">
        <!-- This is a named slot - a content inside a opened component tag -->
        <ContentContainerComponent>
            <template v-slot:pagename>
                <h3>{{ routeName }}</h3>
            </template>
        </ContentContainerComponent>
    </section>
</template>

<script>
import ContentContainerComponent from "./ContentContainerComponent.vue";

export default {
    name: 'MiddleComponent',
    components: {
        ContentContainerComponent
    },
    computed: {
        routeName() {
            return this.$route.name
        },
    },
}
</script>

<style scoped>
.middle {
    flex-grow: 1;
    width: 100%;
    display: flex;
    background-color: #fff;
}
</style>