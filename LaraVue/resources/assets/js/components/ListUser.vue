<template>
    <div class="container">
        <table class="tbl-list-user">
            <thead>
            <th>
                Name
            </th>
            <th>
                Location
            </th>
            <th>
                DOB
            </th>
            </thead>
            <tbody>
            <tr v-for="user of user_data">
                <td>
                    <a @click="selectUser(user)">{{user.name.title}} - {{user.name.first}} {{user.name.last}}</a>
                </td>
                <td>{{user.location.city}}</td>
                <td>{{user.dob}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import data from "./data.json";

    export default {
        name: "ListUser",
        data() {
            return {
                number: 1410,
                string: 'MTD',
                user_data: data
            }
        },

        methods: {
            selectUser(user) {
                // Gửi data cho component cha
                this.$emit("user_selected", user, this.number, this.string)
            }
        }
    }
</script>

<style scoped>
    .tbl-list-user {
        width: 100%;
    }
</style>