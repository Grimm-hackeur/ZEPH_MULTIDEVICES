document.getElementById('tiktok-download').addEventListener('click', async () => {
  const url = document.getElementById('tiktok-url').value;
  const format = document.getElementById('tiktok-format').value;
  const noWatermark = document.getElementById('no-watermark').checked;
  const output = document.getElementById('tiktok-result');

  if (!url) { output.textContent = 'Colle un lien TikTok.'; return; }
  output.innerHTML = '<p>Chargement...</p>';

  try {
    const apiUrl = `https://delirius-apiofc.vercel.app/download/tiktok?url=${encodeURIComponent(url)}`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data && data.result) {
      output.innerHTML = `<p>Téléchargement prêt (${format}) | Sans filigrane: ${noWatermark}</p>
        <a href="${data.result}" target="_blank" class="dl-link">Télécharger</a>`;
    } else { output.textContent = 'Erreur: impossible de récupérer la vidéo.'; }
  } catch (err) {
    output.textContent = 'Erreur API: ' + err.message;
  }
});