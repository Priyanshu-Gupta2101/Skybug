function calcCoords(p, π) {
  const θ = 2 * π * ((Math.floor(Math.random() * p) + 1) * (1 / p));
  let u =
    (Math.floor(Math.random() * p) + 1) * (1 / p) +
    (Math.floor(Math.random() * p) + 1) * (1 / p);
  let r = null;
  if (u > 1) r = 2 - u;
  else r = u;
  const x = r * Math.cos(θ);
  const y = r * Math.sin(θ);
  const c = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return [x, y, c];
}

document.addEventListener("DOMContentLoaded", function () {
  const particles = 200;
  const radius = "45vmin";
  const π = Math.PI;
  const particleContainer = document.getElementById("particleContainer");

  for (let i = 1; i <= particles; i++) {
    const coords = calcCoords(100, π);
    const x = coords[0] * parseFloat(radius);
    const y = coords[1] * parseFloat(radius);
    const c = coords[2];
    const d = Math.sin((c * Math.PI) / 2);

    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.background = `hsla(${60 + d * -160}, 100%, ${
      80 - 30 * d
    }%, 1)`;
    particle.style.transform = `translateX(${x.toFixed(
      5
    )}vmin) translateY(${y.toFixed(5)}vmin) scale(${1 - d})`;
    particle.style.animationDelay = `-${Math.random() * 2500}ms`;
    particle.style.transition = "opacity 0.3s ease-in-out";

    particleContainer.appendChild(particle);
  }
});
