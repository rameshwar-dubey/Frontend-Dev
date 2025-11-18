class FormBuilder {
  constructor(fields){ this.fields = fields; }
  renderForm(container){
    let html = "";
    this.fields.forEach(f=>{
      html += `<label>${f.label}</label><input type="${f.type}" id="${f.label}"><br>`;
    });
    html += `<button onclick="getFormData()">Submit</button>`;
    container.innerHTML = html;
  }
}
function getFormData(){
  const inputs = document.querySelectorAll("input");
  const obj = {};
  inputs.forEach(i=> obj[i.id] = i.value);
  console.log(obj);
  return obj;
}
