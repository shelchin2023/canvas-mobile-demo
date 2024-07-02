<script>
  import { Canvas } from "svelte-canvas";
  import Background from "./Background.svelte";
  import Logo from "./Logo.svelte";
</script>

<Canvas autoplay width="1366" height="768">
  <Logo />
  <Background />
</Canvas>
