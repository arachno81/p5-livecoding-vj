export function drawTestEffect(s, { sec }) {
  s.push();
  s.noStroke();

  const n = 12;
  const w = s.width / n;

  for (let i = 0; i < n; i++) {
    const phase = sec * 1.2 + i * 0.35;
    const h = (Math.sin(phase) * 0.5 + 0.5) * s.height * 0.6;

    s.fill(255, 80);
    s.rect(i * w, s.height - h, w * 0.9, h);
  }

  s.pop();
}
