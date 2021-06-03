<template>
  <div class="row">
    <div class="container">
      <div v-for="(question, index) in questions" :key="index">
        <h1>
          {{ question.title }}
        </h1>
        <p>{{ question.content }}</p>
        <hr />
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" v-if="currentPage > 1"><a class="page-link" href="#" @click.prevent="currentPage=1 ">Previous</a></li>
          <li class="page-item" v-for="page in totalPage" :key="page" :class="{'active':currentPage==page}">
            <a  class="page-link"  href="#" @click.prevent="currentPage = page">
              {{ page }}
            </a>
          </li>
          <li class="page-item"  v-if="currentPage < totalPage"><a @click.prevent="currentPage=totalPage" class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import BaseRequest from "../core/BaseRequest.js";
export default {
  data() {
    return {
      questions: [],
      loading: "",
      currentPage: 1,
      totalPage: 0,
    };
  },
  mounted() {
    this.getQuestion();
  },
  watch: {
      currentPage: function(){
          this.getQuestion();
      }
  },
  methods: {
    getQuestion: function() {
      BaseRequest.get("question?page="+this.currentPage)
        .then((response) => {
          this.questions = response.data.data;
          this.totalPage = response.data.last_page;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
