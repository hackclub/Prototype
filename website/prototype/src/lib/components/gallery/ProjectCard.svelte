<script lang="ts">
  import type {Project} from '$lib/components/gallery/data';
  export let project: Project;
</script>

<div class="card">
  <div class="card-media">
    {#if project.media.type === 'video'}
      <video preload="metadata" muted playsinline style="pointer-events: none;">
        <source src="{project.media.src}#t=0.1" type="video/mp4">
      </video>
      <div class="play-badge">▶</div>
    {:else}
      <img src={project.media.src} alt={project.name} loading="lazy">
    {/if}
  </div>
  <div class="card-body">
    <h3 class="card-title">{project.name}</h3>
    <p class="card-members">{project.members.join(', ')}</p>
    <p class="card-description">{project.description.slice(0, 110).trimEnd() + "..."}</p>
  </div>
  <div class="card-corner">↗</div> <!-- cosmetic -->
</div>

<style>
  .card {
    position: relative;
    flex: 0 0 20rem; /*make these numbers not arbitrary later*/
    width: 20rem; /*this is probably big enough for responsiveness to not matter*/
    background: white;
    color: var(--scroll-color);
    border: 3px solid var(--scroll-color);
    box-shadow: 6px 6px 0 var(--scroll-color);
    cursor: pointer;
    outline: none;
    user-select: none;
    transition: transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;  
  }

  .card:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 color-mix(in srgb, var(--scroll-color) 80%, white 20%);
  }

  .card:active {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 var(--scroll-color);
  }

  .card-media {
    position: relative;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    border-bottom: 3px solid var(--scroll-color);
  }

  .card video, .card img {
    transition: transform 0.25s ease;
  }

  .card:hover video, .card:hover img {
    transform: scale(1.04);
  }
  
  .play-badge {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: var(--scroll-color);
    background: white;
    border: 3px solid var(--scroll-color);
    box-shadow: 3px 3px var(--scroll-color);
  }

  .card-body {
    padding: 0.5rem;
  }

  .card-corner {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem; 
    font-size: 1.5rem;
    color: color-mix(in srgb, var(--scroll-color) 50%, white 50%);
  }
</style>