<template>
  <div>
    <Header/>
    <div class="container">
    <SubHeader/>
    
    <SideBar/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SubHeader from "../components/SubHeader.vue";
import SideBar from "../components/SideBar.vue";

export default {
name :"Contact",
components:{
    Header,
        SideBar,
            SubHeader

}
}
</script>

<style>
@import "~bulma/css/bulma.css";

</style>