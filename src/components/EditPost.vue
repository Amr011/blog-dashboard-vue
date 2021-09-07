<template>
  <div>
<div>
  <a  class="card-footer-item mr-4" @click="isactive = true">

          <i class="fa fa-edit cardediticoncolor" aria-hidden="true"></i>
          </a>
  </div>
 <div class="modal" :class="{ 'is-active': isactive }">>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit Existing Post</p>
      <button class="delete" aria-label="close"  @click="isactive =false"></button>
    </header>
    <section class="modal-card-body">
    <!-- Card Content -->
<div class="field">
  <label class="label">Post title</label>
  <div class="control">
    <input class="input" type="text" :value="post_title" placeholder="Enter Post title ...">
  </div>
</div>   
<div class="field">
  <label class="label">Post Category</label>
<div class="control">
  <div class="select">
    <select>
      <option>{{post_cat}}</option>
      <option>With options</option>
    </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Post Description</label>
  <div class="control">
    <textarea class="textarea" placeholder="Type the Post Description ..." :value="post_description"></textarea>
  </div>
</div>

<div class="field">
<label class="label">Post Image</label>
<div class="file has-name is-fullwidth">
  <label class="file-label">
    <input class="file-input" type="file" name="resume">
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file…
      </span>
    </span>
    <span class="file-name">
      logofile.png
    </span>
  </label>
</div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      You have not add any paragraphes yet
    </label>
  </div>
</div>

<div class="field is-grouped">
 <p class="control">
    <a class="button is-info">
      Add New Paragraph
    </a>
  </p>
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Add Paragraph Name ...">
  </p>
 
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>
<!-- Card Content -->
 </section>
    <footer class="modal-card-foot">
      <button class="button is-primary" @click="updatePost">Save changes</button>
      <button class="button" @click="isactive =false">Cancel</button>
    </footer>
  </div>
</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditPost",

  props:[
      "post_title",
      "post_cat",
      "post_description",

  ],
  data() {
    return {
        isactive:false,
         productName: "",
         productPrice: "",
    };
  },
created: function () {
    this.getPostById();
  },
   methods: {
    // Get Product By Id
    async getPostById() {
      try {
        const response = await axios.get(
          `http://localhost:9000/posts/${this.$route.params.id}`
        );
        this.productName = response.data.product_name;
        this.productPrice = response.data.product_price;
      } catch (err) {
        console.log(err);
      }
    },
    // Update product
    async updatePost() {
      try {
        await axios.put(
          `http://localhost:9000/posts/${this.$route.params.id}`,
          {
            product_name: this.productName,
            product_price: this.productPrice,
          }
        );
        this.productName = "";
        this.productPrice = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
   },



 };
</script>

<style>
@import "~bulma/css/bulma.css";
.modal-card-head{
    background-color: white;
}
.modal-card-foot{
        background-color: white;

}

</style>
