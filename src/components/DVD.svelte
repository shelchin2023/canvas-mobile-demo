<script>
  import { Canvas } from "svelte-canvas";
  import Background from "./Background.svelte";
  import Logo from "./Logo.svelte";

  let canvas;

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
    const fullScreenElement = canvas?.getCanvas();
    if (fullScreenElement) {
      document.exitFullscreen().catch((err) => {
        alert(`无法退出全屏模式: ${err.message} (${err.name})`);
      });
    }
  }
</script>

<div class="w-[1366px] h-[768px] relative">
  <Canvas autoplay width="1366" height="768" bind:this={canvas}>
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
</div>
