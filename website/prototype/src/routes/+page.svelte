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
        <p>Prototype was a 4-day hardware hackathon for teenagers makers held December 19 - 21, 2025 in San Jose. Hosted by <a href="https://hackclub.com">Hack Club</a> and <a href="https://amd.com">AMD</a>, young builders from across the United States spend a weekend turning ambitious ideas into AI-powered hardware projects.</p>
        <p>In order to qualify for Prototype, teens first had to build and ship a project through <a href="https://blueprint.hackclub.com">Blueprint</a>. With AI PCs powered by AMD <b>Ryzen AI processors</b>, <b>Hugging Face Le Robot arms</b>, and over <b>1,000 pounds of hardware</b>, participants spent three days building AI tools capable of playing poker, operating medical procedures, and bartending drinks.</p>
        <p>Hackers took home incredible prizes, including AI PCs powered by AMD Ryzen AI Processors, Hugging Face Le Robot arms, 3D printers, and scholarships. You can view some of the completed projects below.</p>
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
        	<p>Prototype is a part of AMD's commitment to the <a href="https://www.whitehouse.gov/edai/">AI Education Pledge to America's Youth</a>, helping empower the next generation of builders to learn and create with AI.</p>
          <p>You can view Prototype winners being recognized as part of AMD’s CES 2026 keynote livestream below:</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/28cWcxYd6Tk?si=y_czZa5z0EcU9NUr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  </div>
  <CardRow onOpen={(project) => selectedProject = project} direction="left"/>
  <CardRow onOpen={(project) => selectedProject = project} direction="right"/>
  {#if selectedProject}
    <ProjectModal project={selectedProject} onClose={() => selectedProject = null}/>
  {/if}
  <Tape/>
  <footer>
    <h3>Site made with ❤︎ by <a href="https://byjoysu.com" target="_blank">Joy Su</a></h3>
    <p><a href="https://hackclub.com">Hack Club</a> | <a href="https://amd.com">AMD</a></p>
  </footer>
</main>

<style>
  :root {
    --scroll-color: #002952;
    --grid-color: #ffffff80;
    background: white;
    color: var(--scroll-color);
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

  .info-text {
    font-size: 1.25rem;
  }

  .info-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }

  iframe {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    max-width: 560px;
  }

  footer {
    min-height: 6.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--scroll-color);
    color: white;
    line-height: 1rem;
    padding: 1rem;
  }

  footer h3 {
    text-decoration: none;
    margin: 0.5rem;
  }

  footer p {
    margin: 0;
  }

  a {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-decoration-style: wavy;
    color: inherit;
  }

</style>
