<script>
  import { onMount } from "svelte";

  let ele;

  // 进入全屏
  function enterFullscreen() {
    const fullScreenElement = ele;
    if (fullScreenElement && fullScreenElement.requestFullscreen) {
      fullScreenElement
        .requestFullscreen()
        .then(() => {
          console.log("lock landscape");
          // 检查screen.orientation是否可用
          if ("orientation" in screen) {
            // 尝试锁定横屏方向
            screen.orientation
              .lock("landscape")
              .then(function () {
                console.log("Screen orientation locked successfully.");
              })
              .catch(function (error) {
                console.error("Screen orientation lock failed: " + error);
              });
          } else {
            console.log("Screen orientation API not supported.");
          }
        })
        .catch((err) => {
          alert(`无法启用全屏模式: ${err.message} (${err.name})`);
        });
    }
  }
</script>

<div class="max-w-sm space-y-3" bind:this={ele}>
  <input
    type="text"
    class="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    placeholder="This is placeholder"
  />
  <button
    on:click={enterFullscreen}
    type="button"
    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
  >
    进入全屏
  </button>
</div>
