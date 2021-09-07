<template>
  <div>
    <div class="">
      <button class="button is-primary is-fullwidth" @click="isactive = true">
        Create Post
      </button>
    </div>

    <div class="modal" :class="{ 'is-active': isactive }">
      >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create New Post</p>
          <button
            class="delete"
            aria-label="close"
            @click="isactive = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Card Content -->
          <div class="field">
            <label class="label">Post title</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter Post title ..."
                v-model="posttitle"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Post Category</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter Post Category ..."
                v-model="postcat"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Post ID</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Enter Post Category ..."
                v-model="postID"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Post Description</label>
            <div class="control">
              <textarea
                class="textarea"
                placeholder="Type the Post Description ..."
                v-model="postdesc"
              ></textarea>
            </div>
          </div>

          <div class="field">
            <label class="label">Post Image</label>
            <div class="file has-name is-fullwidth">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> Choose a file… </span>
                </span>
                <span class="file-name"> logofile.png </span>
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
              <a class="button is-info"> Add New Paragraph </a>
            </p>
            <p class="control is-expanded">
              <input
                class="input"
                type="text"
                placeholder="Add Paragraph Name ..."
              />
            </p>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
          <!-- Card Content -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="savePost">
            Save changes
          </button>
          <button class="button" @click="isactive = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: [],

  name: "AddPost",
  data() {
    return {
      isactive: false,
      postID: "",
      posttitle: "",
      postdesc: "",
      postcat: "",
    }
  },

  methods: {
    // Create New product
    async savePost() {
      try {
        await axios.post("http://localhost:9000/posts", {
          title: this.posttitle,
          description: this.postdesc,
          cat: this.postcat,
          post_id: this.postID,
        })
        this.posttitle = ""
        this.postdesc = ""
        this.postcat = ""
        this.postID = ""
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style>
.modal-card-head {
  background-color: white;
}
.modal-card-foot {
  background-color: white;
}
</style>
