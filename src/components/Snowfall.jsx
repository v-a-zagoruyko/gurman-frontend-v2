import { onMount, onCleanup } from "solid-js";

export function Snowfall() {
  let canvas;
  let ctx;
  let animationId;
  const flakes = [];

  const flakeCount = 150;

  function initFlakes(width, height) {
    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 4 + 1,
        d: Math.random() + 1,
      });
    }
  }

  function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
    animationId = requestAnimationFrame(drawFlakes);
  }

  function moveFlakes() {
    for (let i = 0; i < flakes.length; i++) {
      const f = flakes[i];
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(f.y * 0.01) * 1.5;

      if (f.y > canvas.height) {
        f.y = 0;
        f.x = Math.random() * canvas.width;
      }
    }
  }

  onMount(() => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    ctx = canvas.getContext("2d");
    initFlakes(canvas.width, canvas.height);
    drawFlakes();
  });

  onCleanup(() => cancelAnimationFrame(animationId));

  return (
    <canvas
      ref={canvas}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    ></canvas>
  );
}
