let submitMeme = document.querySelector('#meme_generator');
let uploadImage = document.querySelector('#upload_img');

submitMeme.addEventListener('submit', function(e) {

  // prevent page refresh
  e.preventDefault();

  // create the instance of a meme within the function
  let meme = document.createElement('div');
  let upperText = document.createElement('div');
  let lowerText = document.createElement('div');
  let image = document.createElement('img');
  let btn = document.createElement('button');
  btn.setAttribute('type','button');


  // assign the image URL to a variable
  image.src = URL.createObjectURL(uploadImage.files[0]);

  // assign values to form inputs
  upperText.classList.add('upperText');
  upperText.innerHTML = document.getElementById('upper_text').value;
  lowerText.classList.add('lowerText');
  lowerText.innerHTML = document.getElementById('lower_text').value;
  btn.innerHTML = 'REMOVE MEME';

  // append text and button to image
  meme.classList.add('meme');
  meme.append(upperText);
  meme.append(lowerText);
  meme.append(image);
  meme.append(btn);

  // draw image on canvas (without using canvas method)
  let memeCanvas = document.getElementById('Canvas');
  memeCanvas.append(meme);

  /* create delete button overlay *** not working yet *** */
  btn.addEventListener('click', function(e) {
    // console.log(e.target)
    meme.remove();
  });

  // reset the form after a submit
  submitMeme.reset();

});


