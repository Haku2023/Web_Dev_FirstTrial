// Particle Effect
function particleEffect(element: HTMLElement, text: string) {
  element.innerHTML = "";
  element.style.display = "block";

  const letters = text.split("");
  letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter;
    span.style.opacity = "0";
    span.style.animation = `glow-reveal 0.4s ease-out ${index * 0.08}s forwards`;
    element.appendChild(span);

    // Add particles
    if (letter !== " ") {
      setTimeout(
        () => {
          createParticles(element, span);
        },
        index * 80 + 200,
      );
    }
  });
}

function createParticles(container: HTMLElement, letterElement: HTMLElement) {
  const rect = letterElement.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const offsetX = rect.left - containerRect.left + rect.width / 2;
    const offsetY = rect.top - containerRect.top + rect.height / 2;

    particle.style.left = offsetX + (Math.random() - 0.5) * 20 + "px";
    particle.style.top = offsetY + (Math.random() - 0.5) * 20 + "px";
    particle.style.animationDelay = Math.random() * 0.5 + "s";

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 2500);
  }
}

export { particleEffect };
