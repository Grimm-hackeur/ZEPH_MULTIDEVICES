document.getElementById('upload-btn').addEventListener('click', () => {
  const file = document.getElementById('file-input').files[0];
  const url = document.getElementById('url-input').value;
  const output = document.getElementById('upload-result');

  if (!file && !url) { output.textContent = 'Choisis un fichier ou colle une URL.'; return; }
  if (file) {
    output.innerHTML = `<p>Simulé: upload de ${file.name}</p><a href="#">Lien direct (simulé)</a>`;
    return;
  }
  output.innerHTML = `<p>Simulé: URL fournie</p><a href="#">Lien direct (simulé)</a>`;
});