<template>
  <div class="row">
    <div class="container">
      <div class="col-md-6 mx-auto mt-5 bordered">
        <h2>Login</h2>
        <form @submit.prevent="Login()">
          <div class="mb-3 form-group">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              v-model="user.email"
              :class="{ 'is-invalid': errors.email }"
              type="email"
              class="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

            <div
              v-if="errors.email"
              id="exampleInputEmail1"
              class="invalid-feedback"
            >
              <div v-for="(errorEmail, index) in errors.email" :key="index">
                (*) {{ errorEmail }}
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              v-model="user.password"
              :class="{ 'is-invalid': errors.password }"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
            <div
              v-if="errors.password"
              id="exampleInputPassword1"
              class="invalid-feedback"
            >
              <div
                v-for="(errorPassword, index) in errors.password"
                :key="index"
              >
                (*) {{ errorPassword }}
              </div>
            </div>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <button type="submit" class="btn btn-primary">
            <span class="spinner-border" v-if="loadding"></span> submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import BaseRequest from '../core/BaseRequest.js'

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errors: {},
      loadding: false,
    };
  },
  methods: {
    Login: function() {
      BaseRequest.post("login", this.user)
        //arrow function => Thís có thể sử dụng trong này
        .then((response) => {
          //localstore app api => set token tren browers
          this.loadding = true;
          window.localStorage.setItem("Token", response.data.token);
          //chuyển trang 
          this.$router.push({name:'account'});
        })
        .catch((error) => {
          //check looix
          this.loadding = false;
          //nếu k pass validate
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          } else {
            this.errors = {
              email: "",
              password: "",
            };
          }
          console.log(this.errors);
        });
    },
  },
};
</script>
<style></style>
