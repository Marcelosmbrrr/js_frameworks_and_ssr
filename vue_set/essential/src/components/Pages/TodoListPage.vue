<template>
    <div class="content_page_container">
        <div class="todolist_container">
            <div class="input_row">
                <input placeholder="Type new task and press Enter" class="input_item" :class="{error: inputError}"
                    v-on:keypress="handleKeyPress" v-model="task" />
            </div>
            <div class="list_row">
                <TransitionGroup name="list" tag="ul">
                    <div class="item" v-for="(item, index) in items" v-bind:key="index">
                        <div class="item_name">
                            {{ item }}
                        </div>
                        <div class="item_action" v-on:click="handleDeleteItem(index)">
                            <font-awesome-icon icon="fa-solid fa-trash" color="#EB3E35" />
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoListPage',
    data: function () {
        return {
            task: '',
            inputError: false,
            items: []
        }
    },
    methods: {
        handleKeyPress(e) {
            if (e.key === 'Enter' && this.task.length >= 3) {
                this.items.push(this.task);
                this.task = '';
                this.inputError = false;
            } else if (e.key === 'Enter' && this.task.length < 3) {
                this.inputError = true;
            }
        },
        handleDeleteItem(index) {
            this.items.splice(index, 1);
        }
    }
}
</script>

<style scoped>
.todolist_container {
    min-width: 400px;
    max-width: 400px;
    padding: 25px;
    border-radius: 10px;
    border: 1px solid #42B883;
}

.input_item {
    width: 100%;
    padding: 18px 18px 18px 5px;
    outline: none;
    border: none;
    border-radius: 5px;
}

.input_row {
    margin-bottom: 30px;
}

.error {
    border: 2px solid #EB3E35;
}

.item {
    background-color: #42B883;
    border-radius: 2px;
    padding: 5px;
    display: flex;
    margin-bottom: 3px;
}

.item_name {
    flex-grow: 1;
}

.item_action {
    flex-basis: 20px;
    cursor: pointer;
}
</style>