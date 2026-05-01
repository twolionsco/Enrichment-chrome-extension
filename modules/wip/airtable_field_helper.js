// Airtable field helper
// Draft module (2026-05-01). Not loaded by the manifest yet.
(function () {
  function render(container, data) {
    if (!container) return;
    container.innerHTML = `<div class='wip'>${JSON.stringify(data || {})}</div>`;
  }

  window.__drafts = window.__drafts || {};
  window.__drafts['airtable_field_helper'] = { render };
})();
