<template>
  <div class="sec">
    <h1>Rate of interest {{ R }}</h1>
    <input id="P" v-model="P" placeholder="Principal Amount" type="text" />
    <input id="t" v-model="t" placeholder="Number of years" type="text" />
    <button id="submitBtn" @click="calculate">Calculate</button>

    <h2 id="A" v-if="A">Total accrued amount {{ A }}</h2>
    <h2 id="interest" v-if="interest">Interest:- {{ interest }}</h2>
  </div>
</template>

<script>
export default {
    data () {
        return {
            R: localStorage.getItem('interest'),
            P: '',
            t: '',
            A: '',
            interest: '',
        }
    },
    methods: {
        calculate() {
            this.A = parseInt(this.P * (1 + (this.R*this.t)));
            this.interest = parseInt(this.A) - parseInt(this.P);
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