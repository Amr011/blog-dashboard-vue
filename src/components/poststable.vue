<template>
  <div>
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>img</th>
          <th>title</th>
          <th>description</th>
          <th>category</th>
          <th>date</th>
          <th>user</th>

          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.post_id">
          <td>{{ PostTitle }}</td>
          <td>{{ PostImg }}</td>
          <td>{{ PostDesc }}</td>
          <td>{{ PostCat }}</td>
          <td>{{ PostDate }}</td>
          <td>{{ PostUser }}</td>
          <td class="has-text-centered">
            <router-link class="button is-info is-small is-rounded"
              >Edit</router-link
            >

            <a class="button is-danger is-small is-rounded ml-1">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "poststable",
  data: () => {
    return {
      posts: [],
    };
  },
  props: [
    (PostUser = post.user),
    (PostDate = post.date),
    (PostCat = post.cat),
    (PostDesc = post.description),
    (PostImg = post.img),
    (PostTitle = post.title),
  ],
  methods: {
    created() {
      this.getPosts();
    },

    // Get All posts
    async getPosts() {
      try {
        const response = await axios.get("http://localhost:9000/posts");
        this.posts = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
