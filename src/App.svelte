<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
    import Upcoming from "./routes/Upcoming.svelte";
    import ProfileMenu from "./lib/ProfileMenu.svelte";
    import LoginMenu from "./lib/LoginMenu.svelte";
    import { isLogin } from "./lib/stores";

  export let url = location.pathname;
</script>

<Router {url}>
  <nav>
    <div class="container nav">
      <div class="nav-menu">
        <Link to="/">Now Showing</Link>
        <Link to="/upcoming">Upcoming</Link>
        <Link to="/about">About</Link>
      </div>
      {#if $isLogin }
      <ProfileMenu />
      {:else }
      <LoginMenu />
      {/if}
    </div>
  </nav>
  <div class="container">
    <Route path="/about" component={About} />
    <Route path="/"><Home /></Route>
    <Route path="/upcoming"><Upcoming /></Route>
  </div>
</Router>


<style>
  .nav {
    display: flex;
    justify-content: space-between;
  }
  .nav-menu {
    display: flex;
    gap: 1em;
  }
</style>