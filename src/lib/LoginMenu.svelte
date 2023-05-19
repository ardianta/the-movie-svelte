<script>
  import { onMount } from "svelte";
  import { themoviedbService } from "../api/themoviedb.js";
  import { isLogin } from "./stores.js";

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasRequestToken = urlParams.has("request_token");
    const hasApproved = urlParams.has("approved");

    if (hasRequestToken && hasApproved) {
      const { session_id, success } = await themoviedbService.createSession(
        urlParams.get("request_token")
      );
      if (success) {
        localStorage.setItem("session_id", session_id);
        $isLogin = true;
        location.replace("/");
      }
    }
  });

  async function handleLogin() {
    const { request_token } = await themoviedbService.requestToken();
    window.open(
      "https://www.themoviedb.org/authenticate/" +
        request_token +
        "?redirect_to=http://localhost:5173/"
    );
  }
</script>

<button on:click={handleLogin}>Login</button>