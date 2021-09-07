<template>
  <div class="">
    <div v-for="post in posts" :key="post.post_id">
      <div class="container card">
        <div class="card-header">
          <p class="card-header-title is-3">
            <i class="fa fa-paper-plane mr-4 fa-lg"></i>
            {{ post.title }}
          </p>
          <i
            class="card-header-icon"
            aria-label="more options"
            @click="toggle()"
          >
            <span class="icon">
              <i
                class="fas fa-angle-down fa-lg"
                :class="{ 'fa-angle-up': isActive }"
                aria-hidden="true"
              ></i>
            </span>
          </i>
        </div>
        <div v-if="isActive" class="card-content is-light is-active">
          <div class="content">
            <div class="card-image">
              <div class="image is-2by1">
                <img
                  src="../assets/PostImg.png"
                  alt="Post image cannot be loaded"
                />
                <!-- note post image not included -->
              </div>
            </div>
            <br />
            <b> {{ post.cat }}</b>
            <br />
            {{ post.description }}

            <br />
            <br />

            <div class="block">
              <i class="fa fa-calendar" aria-hidden="true"></i> {{ post.date }}
              <br />
              <i class="fa fa-user-circle" aria-hidden="true"></i>
              {{ post.user }}
            </div>
          </div>
        </div>
        <div v-if="isActive" class="card-footer">
          <a class="card-footer-item mr-2">
            <i
              class="fa fa-trash carddeleteiconcolor"
              @click="deletePost(post.post_id)"
              aria-hidden="true"
            ></i>

            <a class="card-footer ml-4">
              <i class="fa fa-edit cardediticoncolor" aria-hidden="true"></i>
            </a>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "post",
  //@click="deleteProduct(item.product_id)"

  components: {},

  props: [
    //    :post_title="post.title"
    //         :post_img="post.img"
    //         :post_desc="post.description"
    //         :post_cat="post.cat"
    //         :post_date="post.date"
    //         :post_user="post.user"
  ],

  data: () => {
    return {
      isActive: true,
      posts: [
        {
          post_id: "1",
          title: "Hello world",
          description: "this is the post descr",
          img: "../assets/PostImg.png",
          cat: "Technology",
          date: "7/9/2021",
          user: "Amr Aboras",
        },
      ],
    }
  },

  created() {
    //     this.getPosts();
  },
  methods: {
    // // Get All posts
    // async getPosts() {
    //   try {
    //     const response = await axios.get("http://localhost:9000/posts");
    //     this.posts = response.data;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    async deletePost(id) {
      try {
        await axios.delete(`http://localhost:9000/posts/${id}`)
        this.getPosts()
      } catch (err) {
        console.log(err)
      }
    },

    toggle: function() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style>
@import "~bulma/css/bulma.css";

.container {
  margin-top: 40px;
  width: 400px;
}
.card {
  margin-bottom: -15px;
}
.carddeleteiconcolor {
  color: rgb(230, 51, 51);
}
.cardediticoncolor {
  color: rgb(27, 189, 62);
}
</style>
