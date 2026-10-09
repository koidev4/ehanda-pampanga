const entries = document.querySelectorAll('.checklist-columns input, .plan-rows input');

function saveChecklist() {
  const values = [];

  for (let i = 0; i < entries.length; i++) {
    if (entries[i].type === 'checkbox') {
      values.push(entries[i].checked);
    } else {
      values.push(entries[i].value);
    }
  }



  localStorage.setItem('ehanda-checklist', JSON.stringify(values));
}

function refreshChecklist() {
  const savedText = localStorage.getItem('ehanda-checklist');
  if (savedText === null){
    return;
  }

  const values = JSON.parse(savedText);

  for (let i = 0; i < entries.length; i++) {
    if (entries[i].type === 'checkbox') {
      entries[i].checked = values[i];
    } else {
      entries[i].value = values[i];
    }
  }
}

if (entries.length > 0) {
  refreshChecklist();

  for (let i = 0; i < entries.length; i++){
    entries[i].addEventListener('input', saveChecklist);
} 
}