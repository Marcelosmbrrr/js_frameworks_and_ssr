import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

// Authentication Global State
export const useAuthStore = defineStore('authentication', {
    state: () => ({
        status: false,
        username: '',
        email: '',
        password: ''
    }),
    getters: {
        getAuthenticatedUser: (state) => state,
    },
    actions: {
        authenticate(email, password) {
            this.status = true;
            this.username = '@' + email.split('@')[0];
            this.email = email;
            this.password = password;
        }
    }
});

// Registered users Global State
export const useUsersStore = defineStore('registration', {
    state: () => ({
        users: [
            { id: 1, name: 'John Locke', email: 'locke@gmail.com', role: 'liberal' },
            { id: 2, name: 'Karl Marx', email: 'marx@gmail.com', role: 'comunist' },
            { id: 3, name: 'Murray Rothbard', email: 'rothbard@gmail.com', role: 'libertarian' },
            { id: 4, name: 'Vladímir Ilitch Lênin', email: 'lenin@gmail.com', role: 'comunist' }
        ]
    }),
    getters: {
        getRegisteredUsers: (state) => state,
    },
    actions: {
        register(name, email, role) {
            this.users.push({
                id: this.users.length + 1,
                name: name,
                email: email,
                role: role
            });
        }
    }
});

// Registered users Global State
export const useDisplaySidebarStore = defineStore('sidebar', {
    state: () => ({
        display: true
    }),
    actions: {
        toggle() {
            this.display = !this.display;
        }
    }
});