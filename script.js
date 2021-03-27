// Fungsi 3 inputan
function inputValue() {
  document.querySelector('#name').value = '';
  document.querySelector('#date').value = '';
  document.querySelector('#amount').value = '';
}

// Tombol Reset
const reset = document.querySelector('button[type="reset"]');
reset.onclick = () => inputValue(); 

// Buat tombol close dan pasang di setiap elemen
const trBody = document.querySelectorAll('tbody tr');
trBody.forEach(e => {
  let td = document.createElement('td');
  let text = document.createTextNode('\u00D7');
  td.appendChild(text)
  td.classList.add('close');

  e.appendChild(td)
});


// Fungsi tombol close / delete elemen
const close = document.querySelectorAll('.close');
close.forEach(e => {e.addEventListener('click', (e) => {
  e.target.parentNode.style.display = 'none';
})});


// Fungsi tombol Submit
const submit = document.querySelector('button[type="submit"]');
submit.addEventListener('click', (e) => {
  let inputName =document.querySelector('#name').value;
  let inputDate =document.querySelector('#date').value;
  let inputAmount =document.querySelector('#amount').value;

  let tr = document.createElement('tr');

  // Nama
  let tdName = document.createElement('td');
  let textName = document.createTextNode(inputName);
  tdName.appendChild(textName);
  
  // Tanggal
  let tdDate = document.createElement('td');
  let textDate = document.createTextNode(inputDate);
  tdDate.appendChild(textDate);

  // Jumlah
  let tdAmount = document.createElement('td');
  let textAmount = document.createTextNode(`Rp. ${inputAmount}`);
  tdAmount.appendChild(textAmount);

  // Gabungkan semua ke tr
  tr.appendChild(tdName);
  tr.appendChild(tdDate);
  tr.appendChild(tdAmount);

  if(inputName === '' || inputDate === '' || inputAmount === '') {
    return false;
  } else {
    document.querySelector('tbody').appendChild(tr);
  }

  document.querySelector('#name').value = '';
  document.querySelector('#date').value = '';
  document.querySelector('#amount').value = '';

  // Buat tombol close lagi
  let tdClose = document.createElement('td');
  let textClose = document.createTextNode('\u00D7');
  tdClose.appendChild(textClose);
  tdClose.classList.add('close');
  // tambahkan ke tr baru agar punya tombol close
  tr.appendChild(tdClose);
  
  // Buat agar tombol close berfungsi di elemen baru
  document.querySelectorAll('.close').forEach(e => {e.addEventListener('click', e => {
    e.target.parentNode.style.display = 'none';
  })});

});