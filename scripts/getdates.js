// getdates.js - Dynamic date functionality for WDD 131 website
// Author: Michael Smith Saavedra Forero

// Populate current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Populate last modified date in footer
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;