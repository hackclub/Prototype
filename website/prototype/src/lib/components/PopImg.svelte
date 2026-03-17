<script lang="ts">
    let {images = [] } = $props();
    let index = $state(0);
    function nextImage() {
        if (images.length === 0) return; // should never happen
        index = (index + 1) % images.length;
    }
</script>

{#if images.length > 0} <!-- also overkill -->
    <button onclick={nextImage} aria-label="change image" title="tap to change image!">
        <img src={images[index].src} alt={images[index].alt}/>
    </button>
{/if}

<style>
    button {
        all: unset;
    }

    img {
        transition: transform 0.1s ease-out;
        border-radius: 1rem / 0.5rem;
        max-width: min(16.7rem, 30vw);
    }

    
    @media (max-width: 852px) {
        button {
            display: flex;
            margin: 0 auto;
            width: 100%;
        }
        img {
            max-width: 90%;
            margin: 0 auto;
        }
    }
    img:hover {
        transform: scale(1.1) rotate(-2deg);
        cursor: pointer;
    }

    img:active {
        transform: scale(0.95) rotate(5deg);
    }
</style>