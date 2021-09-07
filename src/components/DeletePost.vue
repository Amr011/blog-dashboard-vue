<template>
  <div>
  <div>
  <a  class="card-footer-item " @click="isactive = true">

          <i class="fa fa-trash carddeleteiconcolor" aria-hidden="true"></i>
          </a>
  </div>
    <div class="modal" :class="{ 'is-active': isactive }">
      
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Delete Post</p>
          <button
            class="delete"
            aria-label="close"
            @click="isactive = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
             
          <div class="field">
            <p class="control">
              <button class="button is-danger">
                Delete
              </button>
            </p>
          </div>
        </section>
        <footer class="modal-card-foot"></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeletePost",
  data() {
    return {
      isactive: false,
    };
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
