<script lang="ts">
  import { onMount } from "svelte";

  let container: HTMLElement;
  let contentElement: HTMLElement;
  let trackHeight: number = 0;
  let progress: number = 0;

  function updateHeight(): void {
    if (!contentElement) return;
    trackHeight = contentElement.scrollHeight + window.innerHeight;
  }
  
  function handleScroll(): void {
    if (!container) return;
    const totalScroll = container.offsetHeight - window.innerHeight;
    if (totalScroll <= 0) {
      progress = 1;
      return;
    }
    const rect = container.getBoundingClientRect();
    progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
  }

  onMount(() => {
    updateHeight();

    const observer = new ResizeObserver(() => {updateHeight(); handleScroll();});
    observer.observe(contentElement)
    
    window.addEventListener('scroll', handleScroll)
    handleScroll();
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll)
    }
  })
</script>

<div class="scroll-underside" style:opacity={Math.max(1-progress*2, 0)}>
  <span>scroll to unroll...</span>
</div>
<div class="scroll-tracker" bind:this={container} style:height={`${trackHeight}px`}>
  <div class="scroll-viewport">
    <div class="unrolled-content" style:clip-path={`inset(0 0 ${100 - progress * 100}% 0)`}>
      <div class="content-wrapper" bind:this={contentElement}>
        <slot name="content"/>
      </div>
    </div>
    <div class="scroll-handle" style:top={`calc(${progress*100}%)`} style:transform="translateY(-100%)">
    </div>
  </div>
</div>


<style>
  @keyframes float {
    0%, 100% {transform: translate(-50%, calc(-50% + 0.75rem));}
    50% {transform:translate(-50%, calc(-50% - 0.75rem));}
  }

  .scroll-underside {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    animation: float 5s ease-in-out infinite;
    font-family: 'R&C Basic Full Bold', sans-serif;
  }

  .scroll-tracker {
    position: relative;
    width: 100%;
  }
  
  .scroll-viewport {
    position: sticky;
    top: 5vw;
    margin: 0 5vw;
    height: 100vh;
    overflow: hidden;
  }

  .unrolled-content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--scroll-color);
    background-image:
      linear-gradient(var(--grid-color) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: 2rem 2rem; 
    border-radius: 1rem / 0.5rem;
    box-shadow: 
      inset 0 0 0 1rem var(--scroll-color),
      inset 0 0 0 calc(1rem + 2px) var(--grid-color);
  }

  .content-wrapper {
    width: 100%;
  }

  .scroll-handle {
    position: absolute;
    top: 1rem;
    height: 3rem;
    background: linear-gradient(
      to bottom,
      color-mix(in srgb, black 20%, var(--scroll-color)) 00%,
      color-mix(in srgb, #2596be 20%, var(--scroll-color)) 50%,
      color-mix(in srgb, black 20%, var(--scroll-color)) 100%
    );
    width: 100%;
    z-index: 10;
    border-radius: 1rem / 0.5rem;
  }
</style>
