const canvas = document.getElementById('trash3d');
if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  ctx.font = '16px Inter';
  ctx.fillStyle = '#444';
  ctx.fillText('Здесь будет 3D-модель ведра ✨', 30, 60);
}
