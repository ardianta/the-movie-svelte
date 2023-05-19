<script>
  import { onMount } from "svelte";
  import { themoviedbService } from "../api/themoviedb";
    import { isLogin } from "./stores";

  let username = 'Username';

  onMount(async () => {
    const req = await themoviedbService.getCurrentUser();
    username = req.username;
    console.log(req);
  });

  async function handleLogout(){
    const { success } = await themoviedbService.deleteSession();
    if(success){
      $isLogin = false;
      localStorage.removeItem('session_id');
    }
  }
</script>

<div> 
  <button>{ username }</button>
  <button on:click={handleLogout}>Logout</button>
</div>