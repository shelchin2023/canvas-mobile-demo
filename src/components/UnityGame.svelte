<script>
  import { onMount } from "svelte";

  let container;
  let canvas;
  let loadingBar;
  let progressBarFull;
  let fullscreenButton;
  let warningBanner;

  onMount(() => {
    const buildUrl = "Build";
    const loaderUrl = buildUrl + "/5336a4b2c43054286fd70b1faa467eee.loader.js";
    const config = {
      dataUrl: buildUrl + "/a28354c0d56dc50cdf0e1b4674aa0c28.data.unityweb",
      frameworkUrl:
        buildUrl + "/d290680de403f76a70a5d655e7766310.framework.js.unityweb",
      codeUrl: buildUrl + "/f65c4a19c4bb018598c06c220f4fe4a5.wasm.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "Fusionist",
      productName: "ACE Arenas",
      productVersion: "1.12",
    };

    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
      })
        .then((unityInstance) => {
          loadingBar.style.display = "none";
          fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
          };
        })
        .catch((message) => {
          alert(message);
        });
    };
    document.body.appendChild(script);

    function unityShowBanner(msg, type) {
      const div = document.createElement("div");
      div.innerHTML = msg;
      warningBanner.appendChild(div);
      if (type == "error") div.style = "background: red; padding: 10px;";
      else if (type == "warning") {
        div.style = "background: yellow; padding: 10px;";
        setTimeout(() => {
          warningBanner.removeChild(div);
        }, 5000);
      }
    }
  });
</script>

<div bind:this={container} id="unity-container" class="unity-desktop">
  <canvas
    bind:this={canvas}
    id="unity-canvas"
    width="1366"
    height="768"
    tabindex="-1"
  ></canvas>
  <div bind:this={loadingBar} id="unity-loading-bar">
    <div id="unity-logo"></div>
    <div id="unity-progress-bar-empty">
      <div bind:this={progressBarFull} id="unity-progress-bar-full"></div>
    </div>
  </div>
  <div bind:this={warningBanner} id="unity-warning"></div>
  <div id="unity-footer">
    <div id="unity-webgl-logo"></div>
    <div bind:this={fullscreenButton} id="unity-fullscreen-button"></div>
    <div id="unity-build-title">ACE Arenas</div>
  </div>
</div>

<style>
  #unity-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
