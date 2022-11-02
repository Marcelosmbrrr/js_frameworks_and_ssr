<template>
    <div class="content_page_container">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, row) in users" :key="row">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td style="display: flex;">
                        <div style="margin-right: 15px;" class="action">
                            <font-awesome-icon icon="fa-solid fa-trash" color="#EB3E35" />
                        </div>
                        <div class="action">
                            <font-awesome-icon icon="fa-solid fa-pen" color="#42B883" />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { useUsersStore } from "../../store/index";

export default {
    name: 'TablePage',
    setup: function () {

        const { users } = useUsersStore();

        return {
            users
        }

    }
}
</script>

<style scoped>
.content_page_container {
    align-items: flex-start;
    padding-top: 50px;
}

.table {
    padding: 3px;
    border-radius: 5px;
}

th,
td {
    color: #fff;
    padding: 8px 15px 8px 15px;
    font-size: 20px;
    text-align: center;
}

td {
    background-color: #222222;
    border-top: 1px solid #42B883;
}

th {
    text-align: center;
    border-radius: 3px;
    color: #42B883;
}

.action {
    cursor: pointer;
}

@media (max-width: 700px) {
    th:nth-child(n+4) {
        display: none;
    }

    td:nth-child(n+4) {
        display: none;
    }
}

@media (max-width: 600px) {
    th:nth-child(2) {
        display: none;
    }

    td:nth-child(2) {
        display: none;
    }
}
</style>