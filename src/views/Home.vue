<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="container is-fullwidth">
      <!-- <SubHeader /> -->
      <AddPost />
      <AddCat />
      <div class="has-text-centered">
        <H3 class="title is-centered mt-3">Posts</H3>
      </div>
    </div>
    <div>
      <div class="container">
        <post />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// Call Child Components
import Header from "../components/Header";
import AddPost from "../components/AddPost";
import AddCat from "../components/AddCat";
import post from "../components/post";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    post,
    AddCat,
    AddPost,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style>
.container {
  width: 800px;
}
</style>
