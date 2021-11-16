<template>
    <div class="sec">
        <h1>Login</h1>
        <input id="username" v-model="username" placeholder="username" type="text" name="">
        <input id="password" v-model="password" placeholder="password" type="text" name="">
        <button id="submitBtn" @click="login">Login</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            if (this.username === 'amir' && this.password === 'Pass@123') {
                this.$router.push('admin')
            } else {
                alert('Invalid Credentials')
            }
        }
    }
}
</script>

<style lang="css">
    .sec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
    .sec input {
        margin-bottom: 30px;
    }
</style>