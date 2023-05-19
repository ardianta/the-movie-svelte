<script>
  import Movie from "./Movie.svelte";
  export let movies;
</script>

<div class="movie-list">
  {#each movies as movie}
    <Movie {movie} />
  {:else}
    <p>No data</p>
  {/each}
</div>

<style>
  .movie-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;
  }
</style>
