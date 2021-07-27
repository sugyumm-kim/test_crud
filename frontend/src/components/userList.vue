<template>
    <div>
        <div class="k_class_1">
            <input id="back_button_login_page" type="button" value="login page" @click="back()">
        </div>
        <div v-for="(user, index) in users" :key="index" class="user-wrap">
            <h2>No. {{index + 1}}</h2>
            <dl>
                <dt>아이디</dt>
                <dd>{{user.userid}}</dd>
                <dt>이름</dt>
                <dd>{{user.name}}</dd>
            </dl>
        </div>
    </div>
</template>

<style>
    #back_button_login_page {
        float: left;
        padding: 3px;
        font-weight: bold;
    }
    .k_class_1 {
        width: 100%;
        padding-bottom: 20px;
    }
</style>

<script>
export default {
    data () {
        return {
            users: [

            ]
        }
    },
    created () {
        this.$http.get('/users')
            .then((response) => {
            this.users = response.data
        })
    },
    methods: {
        back() {
            this.$router.push({name: 'login'})
        }
    }
}
</script>
