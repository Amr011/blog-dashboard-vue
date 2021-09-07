<template>
  <div>
    <div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <button
                class="button is-transparent is-rounded"
                @click="isactive = true"
              >
                <span class="icon">
                  <i class="fa fa-user"></i>
                </span>
                <span>login</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'is-active': isactive }">
      >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
          <button
            class="delete"
            aria-label="close"
            @click="isactive = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          
          <div class="field">
          <label class="label">Email</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              
            </p>
          </div>
          <div class="field">
          <label class="label">Password</label>
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
             Create a new account <a href="#">Signin</a>
          </div>
        </section>
        <footer class="modal-card-foot"></footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  data() {
    return {
      isactive: false,
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
