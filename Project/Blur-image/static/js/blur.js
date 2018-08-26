const inputs = document.querySelectorAll('.controls input'); //it will create a nodelist and

function Update() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Attach mousemove event handler to the document
inputs.forEach(input => input.addEventListener('mousemove', Update));
