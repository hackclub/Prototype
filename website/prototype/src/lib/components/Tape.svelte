<script lang="ts"></script>

<div class="tape-wrapper">
  <div class="tape" style="transform: rotate(-6.7deg)">
    <div class="text-wrapper">
      <span>| 68 TEENS | 72 HOURS | 1,000+ LBS OF HARDWARE | ∞ MEMORIES MADE&nbsp;</span>
      <span>| 68 TEENS | 72 HOURS | 1,000+ LBS OF HARDWARE | ∞ MEMORIES MADE&nbsp;</span>
      <span>| 68 TEENS | 72 HOURS | 1,000+ LBS OF HARDWARE | ∞ MEMORIES MADE&nbsp;</span>
    </div>
  </div>
  <div class="tape" style="transform: rotate(6.7deg)">
    <div class="text-wrapper">
      <span>| 68 TEENS | 72 HOURS | 1,000+ LBS OF HARDWARE | ∞ MEMORIES MADE&nbsp;</span>
      <span>| 68 TEENS | 72 HOURS | 1,000+ LBS OF HARDWARE | ∞ MEMORIES MADE&nbsp;</span>
      <span>| 68 TEENS | 72 HOURS | 1,000+ LBS OF HARDWARE | ∞ MEMORIES MADE&nbsp;</span>
  </div>
</div>
</div>

<style>
  span {
    font-family: 'R&C Basic Full Bold', 'DM Mono', sans-serif;
    font-size: 1.5rem;
    color: white;
  }

  .tape-wrapper {
    width: 100%;
    height: 40vw;
    max-height: 40vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: clip;
  }
  
  @keyframes scroll-text {
    from {transform:translateX(16.67%);}
    to {transform:translateX(-16.67%);} 
  }

  .tape {
    position: absolute;
    background: var(--scroll-color);
    width: 110%;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
  }

  .text-wrapper {
    display: inline-block;
    display: flex;
    animation: scroll-text 10s linear infinite;
  }

  .tape:last-child {
    background-color: color-mix(in srgb, var(--scroll-color) 80%, white 20%);
  }

  .tape:last-child .text-wrapper {
    animation-direction: reverse;
  }
</style>