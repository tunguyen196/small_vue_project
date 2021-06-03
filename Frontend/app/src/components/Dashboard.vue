<template>
  <div class="row">
    <div class="container">
      <h2>Dashboard</h2>
      <form @submit.prevent="createQuestion()">
        <div class="mb-3 form-group">
          <label for="title" class="form-label">Title</label>

          <input
            v-model="question.title"
            :class="{ 'is-invalid': errors.title }"
            type="text"
            class="form-control "
            id="title"
            aria-describedby="title"
          />

          <div v-if="errors.title" class="invalid-feedback">
            (*) {{ errors.title[0] }}
          </div>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content</label>
          <textarea
            v-model="question.content"
            class="form-control"
            :class="{ 'is-invalid': errors.content }"
            name="content"
            id="content"
            cols="10"
            rows="10"
          ></textarea>

          <div v-if="errors.content" class="invalid-feedback">
            (*) {{ errors.content[0] }}
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          <span class="spinner-border" v-if="loadding"></span> submit
        </button>
      </form>
    </div>
  </div>
  
</template>

<script>
import BaseRequest from '../core/BaseRequest.js'

export default {
  data() {
    return {
      question: {
        title: "",
        content: "",
      },
      errors: {},
      loadding: false,
    };
  },
  mounted() {
    this.checkLogged();
  },
  methods: {
    checkLogged: function() {
        BaseRequest.get('user')
        .then(function(response) {
          console.log(response);
        })
        .catch(() => {
          this.$router.push({ name: "login" });
        })
        .then(function() {});
    },
    createQuestion: function() {
    
       BaseRequest.post('question',this.question)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "home"});
        })
        .catch((error) => {
          //check looix
          this.loadding = false;
          //nếu k pass validate
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          } else {
            this.errors = {
              title: "",
              content: "",
            };
          }
        });
    },
  },
};
</script>
<style></style>
