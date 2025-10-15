document.getElementById('pin-download').addEventListener('click', async () => {
  const url = document.getElementById('pin-url').value;
  const output = document.getElementById('pin-result');

  if (!url) { output.textContent = 'Colle un lien Pinterest.'; return; }
  output.innerHTML = '<p>Chargement...</p>';

  try {
    const apiUrl = `https://delirius-apiofc.vercel.app/download/pinterestdl?url=${encodeURIComponent(url)}`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    if (data && data.result) {
      output.innerHTML = `<p>Téléchargement Pinterest prêt</p>
        <a href="${data.result}" target="_blank" class="dl-link">Télécharger</a>`;
    } else { output.textContent = 'Erreur: impossible de récupérer la vidéo/image.'; }
  } catch (err) {
    output.textContent = 'Erreur API: ' + err.message;
  }
});