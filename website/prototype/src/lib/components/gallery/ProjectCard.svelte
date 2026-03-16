<script lang="ts">
  import type {Project} from '$lib/components/gallery/data';
  let { project, onOpen } = $props<{project: Project; onOpen: (project: Project) => void;}>(); 
</script>

<button class="card" onclick={() => onOpen(project)}>
  <div class="card-media">
    {#if project.media.type === 'video'}
      <video preload="metadata" muted playsinline style="pointer-events: none;">
        <source src="{project.media.src}#t=0.1" type="video/mp4">
      </video>
      <div class="play-badge">▶</div>
    {:else if project.media.type === 'iframe'}
      <div class="placeholder-grid">
        <div class="play-badge">▶</div>
      </div>
    {:else}
      <img src={project.media.src} alt={project.name} loading="lazy"/>
    {/if}
  </div>
  <div class="card-body">
    <h3 class="card-title">{project.name}</h3>
    <p class="card-members"><i>{project.members.join(', ')}</i></p>
    <p class="card-description">{project.description.slice(0, 110).trimEnd() + "..."}</p>
  </div>
  <div class="card-corner" title="Github">↗</div> <!-- cosmetic -->
</button>

<style>
  h3, p {
    margin: 0.25rem;
  }

  button {
    appearance: none;
    padding: 0;
    margin-bottom: 6px;
  }

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
    display: flex;
    flex-direction: column;
    transition: transform 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;  
  }

  .card:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 color-mix(in srgb, var(--scroll-color) 80%, white 20%);
  }

  .card:active {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 var(--scroll-color);
    margin: 0;
  }

  .card-media {
    position: relative;
    margin: 0;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    border-bottom: 3px solid var(--scroll-color);
  }

  .card video, .card img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.25s ease;
  }

  .card:hover video, .card:hover img {
    transform: scale(1.04);
  }
  
  .placeholder-grid {
    width: 100%;
    height: 100%;
    background-color: var(--scroll-color);
    background-image:
      linear-gradient(var(--grid-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: 1.5rem 1.5rem; 
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
    background: color-mix(in srgb, var(--scroll-color) 40%, white);
    border: 3px solid var(--scroll-color);
    box-shadow: 3px 3px var(--scroll-color);
  }

  .card-body {
    padding: 0.5rem;
  }

  .card-corner {
    position: absolute;
    bottom: 0;
    right: 0; 

    width: 1.5rem;
    height: 1.5rem;
    
    background: var(--scroll-color);
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    
    font-size: 1.3rem;
    text-align: right;
    color: color-mix(in srgb, var(--scroll-color) 40%, white);
    transition: color 0.1s ease;
  }

  .card-corner:hover {
    color: white;
  }
</style>