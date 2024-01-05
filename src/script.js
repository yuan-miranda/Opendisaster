function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
  
  // Store the state of the sidebar in localStorage
  if (sidebar.classList.contains('active')) {
    localStorage.setItem('sidebarState', 'active');
  } else {
    localStorage.removeItem('sidebarState');
  }
}

function toggleHighlight(elementId) {
  document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
  document.getElementById(elementId).classList.add('highlighted');
  localStorage.setItem('highlightedElement', elementId);
}

window.onload = function() {
  // Restore the state of the highlighted element from localStorage
  const initialHighlightedElement = localStorage.getItem('highlightedElement');
  if (initialHighlightedElement) {
    document.getElementById(initialHighlightedElement).classList.add('highlighted');
  }

  // Restore the state of the sidebar from localStorage
  const sidebarState = localStorage.getItem('sidebarState');
  if (sidebarState) {
    document.querySelector('.sidebar').classList.add(sidebarState);
  }
}



window.addEventListener('resize', () => {
  const sidebar = document.querySelector('.sidebar');
  if (window.devicePixelRatio >= 1.75) {
    sidebar.classList.add('active');
  } else {
    sidebar.classList.remove('active');
  }
});
