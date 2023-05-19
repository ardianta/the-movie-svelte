<script>
  export let movie;
</script>

<div class="movie-card">
  <img class="poster" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="Movie Poster">
  <h3 class="title">{movie.title}</h3>
</div>

<style>
  .movie-card {
    padding: 0.5em;
    box-sizing: border-box;
  }

  .poster {
    border-radius: 0.8em;
  }
</style>