<div class="movie-list">
  <div class="movie">
    <div class="poster"></div>
    <div class="title"></div>
  </div>  
  <div class="movie">
    <div class="poster"></div>
    <div class="title"></div>
  </div>  
  <div class="movie">
    <div class="poster"></div>
    <div class="title"></div>
  </div>  
  <div class="movie">
    <div class="poster"></div>
    <div class="title"></div>
  </div>  
  <div class="movie">
    <div class="poster"></div>
    <div class="title"></div>
  </div>  
  <div class="movie">
    <div class="poster"></div>
    <div class="title"></div>
  </div>  
  <div class="movie">
    <div class="poster"></div>
    <div class="title"></div>
  </div>  
  <div class="movie">
    <div class="poster"></div>
    <div class="title"></div>
  </div>  
</div>

<style>
  .movie-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2em;
  }

  .movie {
    display: flex;
    align-items: center;
    gap: 1em;
    flex-direction: column;
  }

  .poster {
    width: 220px;
    height: 330px;
    background-color: silver;
    border-radius: 1em;
  }
  
  .title {
    height: 1.5em;
    width: 220px;
    border-radius: 1em;
    background-color: silver;
  }
</style>
