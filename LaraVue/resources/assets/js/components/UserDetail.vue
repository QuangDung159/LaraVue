<template>
    <div class="user-detail">
        <div class="user-detail-container" v-if="Object.keys(user_detail_info).length !== 0">
            <div class="user-name">
                Name: {{ user_detail_info.name.last }} {{ user_detail_info.name.first }}
            </div>
            <div class="user-email">
                Email: {{ user_detail_info.email }}
            </div>
            <div class="user-dob">
                DOB: {{ user_detail_info.dob }}
            </div>
            <div class="user-gender">
                Gender: {{ user_detail_info.gender }}
            </div>
            <div class="user-address">
                Address: {{ user_detail_info.location.city }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",

        props: {
            user_detail_info: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>