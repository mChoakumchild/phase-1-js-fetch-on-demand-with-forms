const init = () => {
  const inputForm = document.querySelector('form')

  inputForm.addEventListener('submit',function(e){
    e.preventDefault();
      let usrInput = e.target.children[1].value
      let movieSum = document.querySelector('section#movieDetails p')
      let movieTitle = document.querySelector('section#movieDetails h4')

      fetch(`http://localhost:3000/movies/${usrInput}`)
      .then(response => response.json())
      .then(data => { 
          movieTitle.innerText = data.title
          movieSum.innterText = data.summary
        });
    });
}
document.addEventListener('DOMContentLoaded', init);