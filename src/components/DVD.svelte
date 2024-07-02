<script>
  import { Canvas } from "svelte-canvas";
  import Background from "./Background.svelte";
  import Logo from "./Logo.svelte";

  let canvas;

  let isFullscreen = false;
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  $:console.log({isMobile})

  // 进入全屏
  function enterFullscreen() {
    const fullScreenElement = canvas?.getCanvas();
    if (fullScreenElement && fullScreenElement.requestFullscreen) {
      fullScreenElement.requestFullscreen().catch((err) => {
        alert(`无法启用全屏模式: ${err.message} (${err.name})`);
      });
    }
  }

  // 退出全屏
  function exitFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        alert(`无法退出全屏模式: ${err.message} (${err.name})`);
      });
    }
  }

  $: {
    isFullscreen = !document.fullscreenElement != null;
  }
</script>

<!-- <div class="w-screen h-screen relative"> -->
<div class="w-[1366px] h-[768px] relative">
  <Canvas autoplay width="1366" height="768" bind:this={canvas}>
    <!-- <Canvas autoplay width="1366" height="768" bind:this={canvas}> -->
    <Logo />
    <Background />
  </Canvas>

  <div
    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-green-200"
  >
    <button
      on:click={enterFullscreen}
      type="button"
      class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    >
      进入全屏
    </button>
  </div>

  {#if isFullscreen}
    <div
      class="absolute top-0 left-[50%] translate-x-[-50%] bg-white h-1 w-32 rounded-full my-2"
    ></div>
  {/if}
</div>
