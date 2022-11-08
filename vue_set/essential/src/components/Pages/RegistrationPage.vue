<template>
    <div class="content_page_container">
        <form class="formulary" v-on:submit="handleRegister">
            <div class="form-row main-row">
                <div class="form-row">
                    <label for="text">First Name</label>
                </div>
                <div class="form-row">
                    <input type="textl" id="text" v-model="formData.first_name" :class="{error: error.first_name}" />
                </div>
            </div>
            <div class="form-row main-row">
                <div class="form-row">
                    <label for="second_name">Second Name</label>
                </div>
                <div class="form-row">
                    <input type="text" id="second_name" v-model="formData.second_name"
                        :class="{error: error.second_name}" />
                </div>
            </div>
            <div class="form-row main-row">
                <div class="form-row">
                    <label for="second_name">Email</label>
                </div>
                <div class="form-row">
                    <input type="text" id="second_name" v-model="formData.email" :class="{error: error.email}" />
                </div>
            </div>
            <div class="form-row main-row">
                <div class="form-row">
                    <label for="second_name">Role</label>
                </div>
                <div class="form-row">
                    <select v-model="formData.role" :class="{error: error.role}">
                        <option value="0" disabled>Select</option>
                        <option v-for="(option, index) in options" :key="index" :value="option">{{option}}</option>
                    </select>
                </div>
            </div>
            <div class="form-row main-row" style="display: flex; justify-content: flex-end;">
                <button style="width: 100%;">SEND</button>
            </div>
            <div class="form-row alert" :hidden="alert">
                <p>User created! Check it in the table page!</p>
            </div>
        </form>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useUsersStore } from "../../store/index";

const initialInputs = {
    first_name: '',
    second_name: '',
    email: '',
    role: '0'
}

const initialErrors = {
    first_name: false,
    second_name: false,
    email: false,
    role: false
};

const initialOptions = ['Comunist', 'Liberal', 'Libertarian'];

export default {
    name: 'RegistrationPage',
    setup: function () {

        const formData = reactive(initialInputs);
        const alert = ref(true);
        const options = reactive(initialOptions);
        const error = reactive(initialErrors);
        const { register } = useUsersStore();

        function handleRegister(e) {
            e.preventDefault();
            if (validateForm()) {
                const fullname = formData.first_name + ' ' + formData.second_name;
                register(fullname, formData.email, formData.role);
                alert.value = false;
                resetForm();
            }
        }

        function validateForm() {
            error.first_name = formData.first_name.length < 3;
            error.second_name = formData.second_name.length < 3;
            error.email = formData.email.length < 3;
            error.role = formData.role === '0';
            return !(error.first_name || error.second_name || error.email || error.role);
        }

        function resetForm() {
            for (let i in formData) {
                formData[i] = '';
            }
            setTimeout(() => {
                alert.value = true;
            }, 3000)
        }

        return {
            formData,
            alert,
            options,
            error,
            handleRegister,
            validateForm
        }
    }
}
</script>

<style scoped>
.formulary {
    min-width: 450px;
    padding: 25px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid #42B883;
}

.form-row {
    width: 100%;
}

.main-row {
    margin-bottom: 10px;
}

.form-row label,
input,
span {
    width: 100%;
}

.form-row input {
    padding: 18px 18px 18px 5px;
    outline: none;
    border-radius: 5px;
}

.form-row select {
    padding: 15px 15px 15px 5px;
    font-size: 15px;
    outline: none;
    border-radius: 5px;
}

.form-row label {
    padding: 5px 5px 5px 0px;
    font-size: 20px;
    color: #42B883;
}

.error {
    border: 2px solid #DD5E5E;
}

.alert {
    color: green;
    text-align: center;
}
</style>