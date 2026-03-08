<script lang="ts">
  import Scroll from '$lib/components/Scroll.svelte';
  import prototype_logo from '$lib/assets/prototype_logo.webp'
</script>



<main>
  <Scroll>
    <div slot="content">
      <div class="hero-wrapper">
        <img src={prototype_logo} alt="prototype logo" class="hero-logo"/>
        <h2>December 19-21, 2025</h2>
        <h2>@ San Jose</h2>
        <h2>tagline/description goes here</h2>
      </div>
    </div>
  </Scroll>
  <p>Once upon a time there was a lovely princess.</p>
  <p>But she had an enchantment upon her of a fearful sort which could only be broken by love's first kiss. She was locked away in a castle guarded by a terrible fire-breathing dragon. Many brave knights had attempted to free her from this dreadful prison, but none prevailed. She waited in the dragon's keep in the highest room of the tallest tower for her true love and true love's first kiss.</p>
  <p>Like that's ever gonna happen. What a load of—</p>
  <p>Somebody once told me the world is gonna roll me, I ain't the sharpest tool in the shed. She was lookin' kind of dumb with her finger and her thumb in the shape of an "L" on her forehead. The years start comin' and they don't stop comin'. Fed to the rules and I hit the ground runnin'. Didn't make sense not to live for fun. Your brain gets smart but your head gets dumb. So much to do, so much to see, so what's wrong with takin' the backstreets? You'll never know if you don't go. You'll never shine if you don't glow.</p>
  <p>Hey, now, you're an all-star, get your game on, go play. Hey, now, you're a rock star, get the show on, get paid. And all that glitters is gold; only shootin' stars break the mold.</p>
  <p>It's a cool place and they say it gets colder. You're bundled up now, but wait till you get older. But the meteor men beg to differ, judging by the hole in the satellite picture. The ice we skate is gettin' pretty thin. The water's getting warm so you might as well swim. My world's on fire, how 'bout yours? That's the way I like it and I'll never get bored.</p>
  <p>Hey, now, you're an all-star, get your game on, go play. Hey, now, you're a rock star, get the show on, get paid. And all that glitters is gold; only shootin' stars break the mold. Go! Go! Go. Go. Go.</p>
  <p>Hey, now, you're an all-star, get your game on, go play. Hey, now, you're a rock star, get the show on, get paid. And all that glitters is gold; only shootin' stars break the mold.</p>
  <p>-Think it's in there? -All right. Let's get it! -Whoa. Hold on. Do you know what that thing can do to you? -Yeah, it'll grind your bones for its bread. -Yes, well, actually, that would be a giant. Now, ogres—they're much worse. They'll make a suit from your freshly peeled skin. -No! -They'll shave your liver. Squeeze the jelly from your eyes! Actually, it's quite good on toast.</p>
  <p>-Back! Back, beast! Back! I warn ya! -Right. This is the part where you run away. And stay out! "Wanted. Fairy tale creatures." All right. This one's full. -Take it away!</p>
</main>

<style>
  @font-face {
    font-family: 'R&C Basic Full Bold';
    src: url('/fonts/r-c-basic-full.ttf');
  }

  .hero-wrapper h2 {
    font-family: 'R&C Basic Full Bold', sans-serif;
    line-height: 1;
    margin: 0;
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
</style>
