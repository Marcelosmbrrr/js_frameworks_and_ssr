<template>
    <Transition name="slide-fade">
        <div class="layout_left_side" v-if="display">
            <SideBarComponent :login="false" />
        </div>
    </Transition>
</template>

<script>
import SideBarComponent from "./components/SidebarComponent.vue";
import { useDisplaySidebarStore } from "../../../store/index.js";
import { storeToRefs } from "pinia";


export default {
    name: 'LeftSideLayout',
    components: {
        SideBarComponent
    },
    setup: function () {

        const sideBarStore = useDisplaySidebarStore();
        const { display } = storeToRefs(sideBarStore);

        return {
            display
        }

    }
}
</script>

<style scoped>
.layout_left_side {
    flex-basis: 100px;
    height: 100%;
}

@media (max-width: 550px) {
    .layout_left_side {
        display: none;
    }
}
</style>