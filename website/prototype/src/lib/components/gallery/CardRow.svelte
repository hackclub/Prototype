<script lang="ts">
  import { projects, type Project } from '$lib/components/gallery/data';
  import ProjectCard from './ProjectCard.svelte';
  let { onOpen, direction = 'left' } = $props<{onOpen: (project: Project) => void; direction?: 'left' | 'right'}>(); 
</script>

<div class='row-wrapper'>
  <h2>
    {#if direction === 'right'}
      <div class="row-divider"></div>
      <span>text here</span>
    {:else}
      <span>text here</span>
      <div class="row-divider"></div>
    {/if}
  </h2>
  <div 
    class='row-tracker'
    class:right={direction === 'right'}
  >
    {#each [0, 1] as setIndex} 
      <div class='set' aria-hidden={setIndex === 1 ? 'true' : undefined}> <!-- set aria-hidden on clones to true so screen readers don't infinitely reread -->
        {#each projects.slice(
          direction === 'right' ? 0 : Math.ceil(projects.length/2),
          direction === 'right' ? Math.ceil(projects.length/2) : projects.length
        ) as project}
          <ProjectCard {project} {onOpen} />
        {/each}
      </div>
    {/each}
  </div>
</div>


<style>
  .row-wrapper {
    --gap-width: 1.5rem;
    color: var(--scroll-color);
    overflow: hidden;
    position: relative;
  }

  h2 {
    text-align: left;
    margin: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }


  span {
    white-space: nowrap;
    flex-shrink: 0;
  }

  .row-divider {
    flex-grow: 1;
    height: 6px;
    transform: translateY(3px);
    background: var(--scroll-color)
  }

  .row-tracker {
    display: flex;
    gap: var(--gap-width);
    width: max-content;
    will-change: transform;
    animation: scroll-left 60s linear infinite;
    /* time is amt taken to scroll through projects array */
  }

  .row-tracker.right {
    animation-name: scroll-right;
  }

  .row-tracker:hover {
    animation-play-state: paused;
  }

  .set {
    display: flex;
    gap: var(--gap-width);
  }

  @keyframes scroll-left {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes scroll-right {
    from { transform: translateX(-50%); }
    to { transform: translateX(0); }
  }

</style>