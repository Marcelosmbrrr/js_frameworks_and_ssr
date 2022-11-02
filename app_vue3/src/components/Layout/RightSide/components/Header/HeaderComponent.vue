<template>
    <!-- Icons: https://heroicons.com/ -->
    <header class="header">
        <div class="toggle_sidebar" v-on:click="handleToggle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd"
                    d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <div class="main_menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                    clip-rule="evenodd" />
            </svg>
        </div>
    </header>
</template>

<script>
import { useDisplaySidebarStore } from "../../../../../store/index";

export default {
    name: 'HeaderComponent',
    setup: function () {
        const { toggle } = useDisplaySidebarStore();
        function handleToggle() {
            toggle();
        }
        return {
            handleToggle
        }
    }
}
</script>

<style scoped>
.header {
    flex-basis: 83px;
    padding: 10px 30px 10px 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    z-index: 1;
}

.toggle_sidebar {
    width: 20px;
    color: #42B883;
    cursor: pointer;
}

.main_menu {
    width: 30px;
    color: #42B883;
    cursor: pointer;
}
</style>