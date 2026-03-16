<script lang="ts">
    import { onMount, onDestroy, tick } from "svelte";
    import { scale } from "svelte/transition";
    import { type Project } from "./data";
    
    export let onClose: () => void;
    export let project: Project;

    let closing = false;
    let visible = false;
    let overlayEl: HTMLElement;
    let dialogEl: HTMLElement;

    onMount(async () => {
        await tick();
        visible = true;
    })

    onDestroy(() => {
        document.body.style.overflow = '';
    })

    function close() {
        if (closing) return;
        closing = true;
        if (dialogEl) {
            dialogEl.style.transition = "transform 0.4s ease, opacity 0.3s ease";
            dialogEl.style.transform = "scale(0.1)";
            dialogEl.style.opacity = "0";
        }
        setTimeout(() => onClose?.(), 480);
    }
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && close()}/>
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<div class="overlay" class:closing class:visible bind:this={overlayEl} on:click={(e) => e.target === overlayEl && close()}>
    <div class="dialog" class:closing class:visible bind:this={dialogEl} role="dialog" aria-modal="true" in:scale={{ duration: 400, start: 0.1 }}>
        <button class="close-button" on:click={close} aria-label="close">X</button>
        <div class="dialog-media">
            {#if project.media.type === 'video'}
                <video src={project.media.src} controls playsinline preload="metadata"><track kind="captions"/></video>
            {:else}
                <img src={project.media.src} alt={project.name}/>
            {/if}
        </div>
        <div class="dialog-info">
            <h2 class="dialog-title">{project.name}</h2>
            <div class="dialog-members">
                {#each project.members as member}
                    <span class="member">{member}</span>
                {/each}
            </div>
            <p class="dialog-description">{project.description}</p>
            <a class="code-link" href={project.github} target="_blank">&lt;/&gt; View source code ↗</a>
        </div>
    </div>
</div>

<style>
    .overlay {
        position: fixed;
        inset: 0;
        background: white;
        z-index: 670;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        transition: background 0.25s ease;
    }

    .overlay.closing {
        background: transparent;
        pointer-events: none;
    }
    
    .overlay.visible {
        background: color-mix(in srgb, dimgray 60%, transparent);
    }

    .close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: color-mix(in srgb, var(--scroll-color) 80%, white 20%);
        border: var(--scroll-color);
        color: var(--scroll-color);
        border: 3px solid var(--scroll-color);
        cursor: pointer;
        box-shadow: 3px 3px 0 var(--scroll-color);
        transition: transform 0.1s ease box-shadow 0.1s ease;
    }

    .close-button:hover {
        transform: translate(-1px, -1px);
        box-shadow: 4px 4px 0 color-mix(in srgb, var(--scroll-color) 80%, white 20%);
    }

    .close-button:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 var(--scroll-color);
    }

    .dialog {
        position: relative;
        display: flex;
        align-items: stretch;
        width: 90vw;
        max-height: 80vh;
        background-color: var(--scroll-color);
        border: 3px solid var(--scroll-color);
        box-shadow: 3px 3px 0 var(--scroll-color);
        /* transition: transform 0.4s ease, opacity 0.3s ease; */
        transform-origin: center center;
        gap: 3px;
        /* transform: scale(0.1); */
        /* opacity: 0; */
    }

    .dialog.visible {
        /* transform: scale(1); */
        /* opacity: 1; */
    }

    .dialog.closing {
        /* transform: scale(0.1);
        opacity: 0; */
    }

    .dialog-media, .dialog-info {
        max-width: 50%;
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .dialog-media {
        background-color: color-mix(in srgb, var(--scroll-color) 80%, white 20%);
        flex: 1 1 50%;
        min-width: 200px;
        min-height: 200px;
        aspect-ratio: 1;
    }

    .dialog-media img, .dialog-media video {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    .dialog-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .dialog-info {
        padding: 5%;
        background-color: white;
        overflow: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* border-left: 3px solid var(--scroll-color); */
    }

    .dialog-title {
        font-size: 2rem;
        margin-bottom: 0.25rem;
    }


    .member {
        display: inline-block;
        padding: 0.2rem 0.5rem;
        background-color: color-mix(in srgb, var(--scroll-color) 80%, white 20%);
        font-family: 'R&C Basic Full Bold', sans-serif;
        color: white;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .code-link {
        background-color: var(--scroll-color);
        border: var(--scroll-color);
        color: white;
        /* border: 3px solid var(--scroll-color); */
        font-family: 'R&C Basic Full Bold', sans-serif;
        box-shadow: 3px 3px 0 color-mix(in srgb, var(--scroll-color) 80%, white 20%);
        padding: 0.5rem 1rem;
        transition: transform 0.1s ease box-shadow 0.1s ease;
        margin-right: auto;
    }

    .code-link:hover {
        transform: translate(-1px, -1px);
        box-shadow: 4px 4px 0 color-mix(in srgb, var(--scroll-color) 80%, white 20%);
    }

    .code-link:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 color-mix(in srgb, var(--scroll-color) 80%, white 20%);
    }

</style>