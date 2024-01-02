function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

function toggleHighlight(elementId) {
  document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
  document.getElementById(elementId).classList.add('highlighted');
  localStorage.setItem('highlightedElement', elementId);
}

window.onload = function() {
  const initialHighlightedElement = localStorage.getItem('highlightedElement');
  if (initialHighlightedElement) {
      document.getElementById(initialHighlightedElement).classList.add('highlighted');
  }
}

