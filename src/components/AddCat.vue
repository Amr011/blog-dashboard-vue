<template>
  <div>
<div class=" mt-2">
<button class=" button is-info  is-fullwidth" @click="isactive =true;">Create Category</button>
</div>

 <div class="modal" :class="{ 'is-active': isactive }">>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Create New Category</p>
      <button class="delete" aria-label="close"  @click="isactive =false"></button>
    </header>
    <section class="modal-card-body">
    <!-- Card Content -->
<div class="field">
  <label class="label">Category title</label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter Post Name ...">
  </div>
</div>   

<div class="field">
  <label class="label">Category Description</label>
  <div class="control">
    <textarea class="textarea" placeholder="Type the Category Description ..."></textarea>
  </div>
</div>

<div class="field">
<label class="label">Category Image</label>
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
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>
<!-- Card Content -->
 </section>
    <footer class="modal-card-foot">
      <button class="button is-primary">Save changes</button>
      <button class="button" @click="isactive =false">Cancel</button>
    </footer>
  </div>
</div>
  </div>
</template>

<script>

export default {
    props:[
    "cat_title" ,
    "cat_img" ,
    "cat_desc" ,

    ],
  name: "AddCat",
  data() {
    return {
        isactive:false,
    };
  },
 };
</script>

<style>
.modal-card-head{
    background-color: white;
}
.modal-card-foot{
    background-color: white;
}


</style>
