<template>
    <div class="content_page_container">
        <div class="counter_container">
            <div class="screen">
                <h2>{{ number }}</h2>
            </div>
            <div class="buttons_row">
                <button style="margin-right: 5px;"><input class="custom_add_input" v-model="add" /></button>
                <button v-on:click="handleConfirm" style="margin-right: 15px; cursor: pointer;">CONFIRM</button>
                <div style="cursor: pointer;" v-on:click="handleReset">
                    <font-awesome-icon icon="fa-solid fa-trash" color="#EB3E35" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CounterPage',
    data: function () {
        return {
            number: 0,
            add: 0
        }
    },
    methods: {
        handleConfirm() {
            this.number += Number(this.add);
        },
        handleReset() {
            this.number = 0;
            this.add = 0;
        }
    }
}
</script>

<style scoped>
.counter_container {
    min-width: 400px;
    padding: 25px;
    border-radius: 10px;
    border: 1px solid #42B883;
}

.screen {
    width: 100%;
    height: 80px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42B883;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.buttons_row {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom_add_input {
    width: 100%;
    outline: none;
    border: none;
    border-radius: 2px;
}
</style>