const allInput = document.querySelectorAll('form input[type="text"], form input[type="email"], form input[type="password"], form input[type="number"], form select[name="jenis-kelamin"], form input[type="url"]');
const formData = {};
const submitButton = document.querySelector('form button[type="submit"]');
submitButton.setAttribute('disabled', 'true');

// Fungsi untuk memeriksa apakah semua input telah diisi atau diklik
function checkInputs() {
  let allInputsFilled = true;
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  allInput.forEach((input) => {
    if (!input.value.trim()) { // Memeriksa apakah input kosong atau hanya berisi spasi
      allInputsFilled = false;
    }

    if(input.type === 'url' && !urlRegex.test(input.value)){
      allInputsFilled = false;
    }
  });
  return allInputsFilled;
}

allInput.forEach((input) => {
  input.addEventListener('change', () => {
    const errorMessage = showError(input);

    if (!errorMessage) {
      formData[input.name] = input.value;
    } else {
      delete formData[input.name];
    }

    // Memeriksa apakah semua input telah diisi atau diklik
    if (checkInputs()) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', 'true');
    }
  });

  input.addEventListener('focus', () => {
    const errorMessage = showError(input);
    if (errorMessage === 'error') {
      delete formData[input.name];
    }

    // Memeriksa apakah semua input telah diisi atau diklik
    if (checkInputs()) {
      submitButton.removeAttribute('disabled');
    } else {
      submitButton.setAttribute('disabled', 'true');
    }
  });
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(formData);
  alert("Data berhasil ditambahkan");
});

function showError(input){
  const errorElement = input.nextElementSibling; 
  const customErrorMessage = input.dataset.errormsg;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  const telpRegex = /^08\d{10}$/;

  if(input.value === '' ){
    errorElement.innerHTML = customErrorMessage || "Harap isi kolom ini";
    return 'error';
  } 

  if(input.type === 'email' && !emailRegex.test(input.value)){
    errorElement.innerHTML = "Format email tidak valid";
    return 'error';
  }

  if(input.type === 'password' && input.value.length < 6){
    errorElement.innerHTML = "Minimal 6 karakter";
    return 'error';
  }
  
  if(input.type === 'number' && !telpRegex.test(input.value)){
    if(input.value.length !== 12){
      errorElement.innerHTML = "Wajib 12 karakter";
      return 'error';
    }
    errorElement.innerHTML = "Nomor telepon tidak valid";
    return 'error';
  }

  if(input.type === 'url' && !urlRegex.test(input.value)){
    errorElement.innerHTML = "URL tidak valid";
    return 'error';
  }


  errorElement.innerHTML = "";
  return ""; // Jika tidak ada kesalahan, kembalikan string kosong
}
