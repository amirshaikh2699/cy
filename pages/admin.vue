<template>
  <div class="sec">
    <h1>Set Global Param</h1>
    <input id="interest" v-model="interest" placeholder="Company's Interest rate" type="text" />
    <button id="submitBtn" @click="update">Update</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            interest: localStorage.getItem('interest') ? localStorage.getItem('interest') : '0' ,
        }
    },
    methods: {
        update() {
            localStorage.setItem('interest', this.interest);
            alert('Updated successfully')
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