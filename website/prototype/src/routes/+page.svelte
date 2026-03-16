<script lang="ts">
  import Scroll from '$lib/components/Scroll.svelte';
  import CardRow from '$lib/components/gallery/CardRow.svelte';
  import Tape from '$lib/components/Tape.svelte';
  import PopImg from '$lib/components/PopImg.svelte';
  import prototype_logo from '$lib/assets/prototype_logo.webp'
  import ProjectModal from '$lib/components/gallery/ProjectModal.svelte';
  import type { Project } from '$lib/components/gallery/data';
  let selectedProject: Project | null = null;
</script>

<main>
  <Scroll>
    <div slot="content">
      <div class="hero-wrapper">
        <img src={prototype_logo} alt="prototype logo" class="hero-logo"/>
        <h2 class="hero-tagline">This is a short tagline representing the event.</h2>
        <h2>December 19-21, 2025</h2>
        <h2>@ San Jose</h2>
      </div>
    </div>
  </Scroll>
  <div class="info-section">
    <div class="info-item">
      <div class="info-text">
        <p>Once upon a time there was a lovely princess.</p>
        <p>But she had an enchantment upon her of a fearful sort which could only be broken by love's first kiss. She was locked away in a castle guarded by a terrible fire-breathing dragon. Many brave knights had attempted to free her from this dreadful prison, but none prevailed. She waited in the dragon's keep in the highest room of the tallest tower for her true love and true love's first kiss.</p>
        <p>Like that's ever gonna happen. What a load of—</p>
        <p>Somebody once told me the world is gonna roll me, I ain't the sharpest tool in the shed. She was lookin' kind of dumb with her finger and her thumb in the shape of an "L" on her forehead. The years start comin' and they don't stop comin'. Fed to the rules and I hit the ground runnin'. Didn't make sense not to live for fun. Your brain gets smart but your head gets dumb. So much to do, so much to see, so what's wrong with takin' the backstreets? You'll never know if you don't go. You'll never shine if you don't glow.</p>
        <p>Hey, now, you're an all-star, get your game on, go play. Hey, now, you're a rock star, get the show on, get paid. And all that glitters is gold; only shootin' stars break the mold.</p>
        <p>It's a cool place and they say it gets colder. You're bundled up now, but wait till you get older. But the meteor men beg to differ, judging by the hole in the satellite picture. The ice we skate is gettin' pretty thin. The water's getting warm so you might as well swim. My world's on fire, how 'bout yours? That's the way I like it and I'll never get bored.</p>
        <p>Hey, now, you're an all-star, get your game on, go play. Hey, now, you're a rock star, get the show on, get paid. And all that glitters is gold; only shootin' stars break the mold. Go! Go! Go. Go. Go.</p>      
      </div>
      <PopImg images={[
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cat%27s_silly_face.jpg/500px-Cat%27s_silly_face.jpg", alt: "alt text"},
        {src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Planko_Looking_Goofy.png", alt: "alt text"},
        {src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg", alt: "alt text"}
      ]}/>    
    </div>
    <div class="info-item">
      <PopImg images={[
        {src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Planko_Looking_Goofy.png", alt: "alt text"},
        {src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/CatSkiing.jpg", alt: "alt text"}, 
        {src: "https://m.media-amazon.com/images/I/61rE1xp-8jL._AC_UF894,1000_QL80_.jpg", alt: "seal plush easter egg"},
        {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cat%27s_silly_face.jpg/500px-Cat%27s_silly_face.jpg", alt: "alt text"}
      ]}/>
      <div class="info-text">
        	<p>According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don&#39;t care what humans think is impossible.</p>
          <p>Yellow, black. Yellow, black.<br />
          Yellow, black. Yellow, black.</p>
          <p>Ooh, black and yellow!
          Let&#39;s shake it up a little.</p>
          <p>Barry! Breakfast is ready!</p>
          <p>Ooming!</p>
          <p>Hang on a second.</p>
          <p>Hello?</p>
          <p>- Barry?
          <br />- Adam?</p>
      </div>
    </div>
  </div>
  <Tape/>
  <CardRow onOpen={(project) => selectedProject = project} direction='left'/>
  <CardRow onOpen={(project) => selectedProject = project} direction='right'/>
  {#if selectedProject}
    <ProjectModal project={selectedProject} onClose={() => selectedProject = null}/>
  {/if}
  <footer>
    <h2>Made with ❤︎ by <a href="https://byjoysu.com" target="_blank">Joy Su</a></h2>
  </footer>
</main>

<style>
  :root {
    --scroll-color: #002952;
    --grid-color: #ffffff80;
    background: white;
  }

  @font-face {
    font-family: 'R&C Basic Full Bold';
    src: url('/fonts/r-c-basic-full.ttf');
  }


  @font-face {
    font-family: 'Phantom Sans Regular';
    src: url('/fonts/PhantomSans-Regular.ttf');
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(h2, h3) {
    font-family: 'R&C Basic Full Bold', sans-serif; 
  }

  :global(p) {
    font-family: 'Phantom Sans Regular', 'DM Mono', monospace;
    font-size: 1.15rem;
  }

  .hero-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .hero-logo {
    max-width: 80% !important;
  }

  .hero-wrapper .hero-tagline {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 1.0;
  }

  .hero-wrapper h2 {
    font-size: 1.67rem;
    line-height: 0.7;
    margin: 0;
    opacity: 0.9;
    max-width: 85% !important;
    text-align: center;
  }

  .info-section {
    display: flex;
    flex-direction: column;
    margin: 2rem 5vw;
    gap: 2rem;
  }

  .info-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }

  footer {
    min-height: 6.7rem;
    display: flex;
    justify-content: center;
    background-color: var(--scroll-color);
    color: white;
    margin-top: 1rem;
  }

  footer h2 a {
    text-decoration-line: underline;
    text-decoration-style: wavy;
    color: white;
  }

</style>
