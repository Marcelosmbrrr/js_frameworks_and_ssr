<template>
    <main class="content_side">
        <div class="subheader">
            <slot name = "pagename"></slot>
        </div>
        <section class="content_container">
            <RouterView />
        </section>
    </main>
</template>

<script>
export default {
    name: 'ContentContainerComponent',
    data: () => {
        return {
            pagename: 'PAGE NAME STATE'
        }
    }
}
</script>

<style scoped>
.content_side {
    flex-grow: 1;
    height: 100%;
    padding: 0px 0px 15px 0px;
    background-color: #222;
    display: flex;
    flex-direction: column;
}

.subheader {
    flex-basis: 50px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    color: #42B883;
    border-bottom: 2px solid #42B883;
}

.content_container {
    flex-grow: 1;
    width: 100%;
}
</style>