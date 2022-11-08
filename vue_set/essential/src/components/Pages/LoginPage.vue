<template>
    <div class="content_page_container">
        <form class="formulary" v-on:submit="handleLogin">
            <div class="form-row main-row">
                <div class="form-row">
                    <label for="email">Email</label>
                </div>
                <div class="form-row">
                    <input type="email" id="email" placeholder="Type your email" v-model="email" />
                </div>
                <div class="form-row">
                    <span>{{ error.email }}</span>
                </div>
            </div>
            <div class="form-row main-row">
                <div class="form-row">
                    <label for="password">Password</label>
                </div>
                <div class="form-row">
                    <input type="password" id="password" placeholder="Type your password" v-model="password" />
                </div>
                <div class="form-row">
                    <span>{{ error.password }}</span>
                </div>
            </div>
            <div class="form-row main-row" style="display: flex; justify-content: flex-end;">
                <button>Login</button>
            </div>
        </form>
    </div>
</template>

<!--
COMPOSITION API WITH SETUP() AS A FUNCTION

- The composition api is the new feature that comes with Vue 3 and as a plugin for Vue 2
- In this case, the common <script> is used, but the component definition uses setup() function
- The another case (in SidebarComponent.vue) is when instead of <script> is <script setup> and the object definition is unnecessary

Source: https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api
Source: https://blog.cod3r.com.br/o-que-mudou-do-vue-2-para-o-vue-3/
-->
<script>
import { watch, ref, reactive } from 'vue';
import { useAuthStore, useUsersStore } from "../../store/index";

export default {
    name: 'LoginPage',
    setup() {

        // Ref() is used for variables
        // Reactive() if for objects
        let email = ref('');
        let password = ref('');
        let error = reactive({ email: '', password: '' });
        const { authenticate } = useAuthStore();
        const { register } = useUsersStore();

        const handleLogin = (e) => {
            e.preventDefault();
            authenticate(email.value, password.value);
            register('You', email.value, 'undefined');
        }

        watch(email, (newValue) => {
            if (newValue.length > 0) {
                const pattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
                error.email = newValue.match(pattern) ? '' : 'Invalid email!';
            }
        });

        watch(password, (newValue) => {
            if (newValue.length > 0) {
                error.password = newValue.length < 8 ? 'Invalid password! Should have min 8 characters.' : '';
            }
        });

        return {
            email,
            password,
            error,
            handleLogin
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
    border: none;
    border-radius: 5px;
}

.form-row label {
    padding: 5px 5px 5px 0px;
    font-size: 20px;
    color: #42B883;
}

.form-row span {
    font-size: 12px;
    color: #DD5E5E;
}
</style>