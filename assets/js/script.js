// Function to load external HTML content into an element
function loadHTML(file, elementId) {
  fetch(file)
    .then(response => {
      // Jika file ditemukan (status 200 OK)
      if (response.ok) {
        return response.text();
      }
      throw new Error('File not found');
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading HTML:', error);
    });
}