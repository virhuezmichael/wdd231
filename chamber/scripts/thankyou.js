const params = new URLSearchParams(window.location.search);


  document.getElementById('firstName').textContent = params.get('firstname') || '';
  document.getElementById('lastName').textContent = params.get('lastname') || '';
  document.getElementById('email').textContent = params.get('email') || '';
  document.getElementById('phone').textContent = params.get('phone') || '';
  document.getElementById('organization').textContent = params.get('organization') || '';
  document.getElementById('organizationTitle').textContent = params.get('organizationTitle') || '';
  document.getElementById('membership').textContent = params.get('membership') || '';
  document.getElementById('description').textContent = params.get('description') || '—';
  document.getElementById('timestamp').textContent = params.get('timestamp') || new Date().toLocaleString();