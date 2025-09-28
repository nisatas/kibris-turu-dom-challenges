// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.

const images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('mouseenter', (event) => {
    event.target.classList.add('grayscale');
  });

  image.addEventListener('mouseleave', (event) => {
    event.target.classList.remove('grayscale');
  });
});

/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
- "Not:" keyboard eventlerini document'e değil window'a ekleyin. 
*/

const body = document.querySelector('body');
window.addEventListener('keydown', function (event) {
  if (event.key === '1') {
    body.className = 'theme1';
  } else if (event.key === '2') {
    body.className = 'theme2';
  } else if (event.key === '3') {
    body.className = 'theme3';
  } else if (event.key === 'Escape') {
    body.className = '';
  }
});

/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/

const field = document.querySelector('footer input');
const button = document.querySelector('footer button');

field.addEventListener('input', function (event) {
  const value = event.target.value.toUpperCase();
  event.target.value = value;

  if (event.target.value.length > 5) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('submitResult').textContent =
    field.value + ' başarı ile kaydedildi...';
  field.value = '';
  button.disabled = true;
});
