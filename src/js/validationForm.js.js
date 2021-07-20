class ValidationForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.events();
  }

  events(e) {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkFild = this.checkFild();
    if (checkFild) {
      alert('Formuario enviado');
      this.form.submit();
    }
  }

  checkFild() {
    let valid = true;
    for (let field of this.form.querySelectorAll('.valid')) {
      const beforeLabel = field.previousElementSibling.innerHTML;
      if (!field.value) {
        alert(`Campo ${beforeLabel} é obrigatório`);
        valid = false;
      }
    }
    return valid;
  }
}

const form = new ValidationForm();
