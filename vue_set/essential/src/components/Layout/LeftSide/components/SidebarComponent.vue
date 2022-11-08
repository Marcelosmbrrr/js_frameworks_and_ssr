<template>
    <nav class="sidebar">
        <div class="item_logo">
            <i class="devicon-vuejs-plain-wordmark"></i>
        </div>
        <ul class="list_sidebar">
            <!-- List dynamic generation - conditional v-for is made with a computed method -->
            <li v-for="item in availableItems" v-bind:key="item.key" v-bind:class="item.class">
                <RouterLink :to="item.to" class="sidebar_item">
                    {{ item.id }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<!--
COMPOSITION API WITH SCRIPT AS SETUP

- The composition api is the new feature that comes with Vue 3 and as a plugin for Vue 2
- Instead of <script> is <script setup>
- Theres not an object with properties to define the component - everything is defined inside the script itself
- The setup can work like a function in the old way too with <script> - look this case in LoginPage.vue file

Source: https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api
Source: https://blog.cod3r.com.br/o-que-mudou-do-vue-2-para-o-vue-3/
-->
<script setup lang="ts">
import { reactive, computed, watch } from 'vue';
import { storeToRefs } from "pinia";
import { useAuthStore } from "../../../../store/index";

// Status attribute from global state 'authentication'
let { status } = storeToRefs(useAuthStore());

// Component object 
let items = reactive([
    { key: 1, id: "Login", active: false, class: { sidebar_item: true }, acessible: true, to: "/login" },
    { key: 2, id: "Counter", active: false, class: { sidebar_item: true }, acessible: status.value, to: "/counter" },
    { key: 3, id: "Todo List", active: false, class: { sidebar_item: true }, acessible: status.value, to: "/todolist" },
    { key: 4, id: "Registration", active: false, class: { sidebar_item: true }, acessible: status.value, to: "/registration" },
    { key: 5, id: "Table", active: false, class: { sidebar_item: true }, acessible: status.value, to: "/table" }
]);

// When status context changes...
// VueJs cant change object attributes even if has changed states
// So it must be 'manually' maded // Source: https://v2.vuejs.org/v2/guide/reactivity.html#For-Objects
watch(status, () => {
    for (let i in items) {
        items[i].acessible = status.value;
    }
})

// V-for just for accessible = true
let availableItems = computed(() => {
    return items.filter(item => item.acessible);
});
</script>

<style scoped>
.sidebar {
    width: 100%;
    height: 100%;
    background-color: #24292E;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
}

.list_sidebar {
    width: 100%;
}

.sidebar_item a {
    padding: 20px 15px 20px 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
}

.item_logo {
    padding: 25px 8px 8px 8px;
    font-size: 70px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    color: #42B883;
}

.sidebar_item a:hover {
    background-color: #42B883;
    color: #fff;
}
</style>