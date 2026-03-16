<script lang="ts">
    let {images = [] } = $props();
    let index = $state(0);
    function nextImage() {
        if (images.length === 0) return; // should never happen
        index = (index + 1) % images.length;
    }
</script>

{#if images.length > 0} <!-- also overkill -->
    <button onclick={nextImage} aria-label="Change image">
        <img src={images[index].src} alt={images[index].alt}/>
    </button>
{/if}

<style>
    button {
        all: unset;
    }

    img {
        transition: transform 0.1s ease-out;
        max-width: min(16.7rem, 30vw);
    }

    img:hover {
        transform: scale(1.1) rotate(-2deg);
        cursor: pointer;
    }

    img:active {
        transform: scale(0.95) rotate(5deg);
    }
</style>