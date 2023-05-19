<script>
  import { onMount } from "svelte";
  import { themoviedbService } from "../api/themoviedb";
  import MovieList from "../lib/MovieList.svelte";
  import MovieListLoading from "../lib/MovieListLoading.svelte";

  let movies = [];
  let currentPage = 1;
  let totalPage = 0;
  let loading = true;

  onMount(async () => {
    const req = await themoviedbService.getUpcomingMovies();
    movies = req.results;
    totalPage = req.total_pages;
    loading = false;
  });

  async function browserMore() {
    currentPage++;
    const req = await themoviedbService.getUpcomingMovies(currentPage);
    movies = [...movies, ...req.results];
    loading = false;
  }
</script>

<h1>Upcoming Movies</h1>

{#if loading}
  <MovieListLoading />
{:else}
  <MovieList {movies} />
{/if}

<button on:click={browserMore}>
  Next: Page {currentPage + 1} of {totalPage}
</button>
