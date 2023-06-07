const input = document.getElementById('validation-input');
    const expectedLength = parseInt(input.getAttribute('data-length'), 10);

    input.addEventListener('blur', function() {
      const enteredValue = input.value;
      const isValid = enteredValue.length === expectedLength;

      if (isValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
    });