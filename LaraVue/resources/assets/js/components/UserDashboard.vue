<template>
    <div class="user-dashboard">
        This is user dashboard
        <div class="list-user-comp">
            <h4>List User</h4>
            <!-- @<tên biến chứa data gửi từ con>=<Hàm xử lý ở cha> -->
            <!-- Các biến được truyền thêm từ cha phải để đầu -->
            <!-- Đánh dấu kết thúc bằng ...arguments -->
            <list-user @user_selected="childrenSelectUser('text', ...arguments)"></list-user>
        </div>
        <div class="user-detail-comp">
            <h4>User Detail</h4>
            <user-detail :user_detail_info="user_selected_from_child"></user-detail>
        </div>
    </div>
</template>

<script>
    import ListUser from "./ListUser.vue";
    import UserDetail from "./UserDetail.vue"

    export default {
        name: "UserDashboard",
        components: {
            ListUser,
            UserDetail
        },

        data() {
            return {
                user_selected_from_child: {}
            }
        },

        methods: {

            // Thứ tự các param phải đúng với emit
            childrenSelectUser(text, user, number, string) {
                console.log(user);
                console.log(number);
                console.log(string);
                this.user_selected_from_child = user;
            }
        }
    }
</script>

<style scoped>

</style>