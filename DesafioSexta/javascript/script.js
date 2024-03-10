function getSchedule(){
$.ajax({
    type: 'GET',
      dataType:"json",
    url: 'https://api.tvmaze.com/show/',
    headers:{ },
    success: function (data, status, xhr) {
      console.log('data: ', data);
      let cards = document.getElementById('cards');
      
      data.forEach(movie => {
        let card = document.createElement('div');
        let cardText = document.createElement('div');
        let cardImage = document.createElement('div');

        let image = document.createTextNode(movie.image.original);
        let title = document.createTextNode(movie.name);
        let summary = document.createTextNode(movie.summary);
        
        let imgTag = document.createElement('img');
        let titleTag = document.createElement('h2');
        let summaryTag = document.createElement('p');

        imgTag.src = image.textContent;
        titleTag = title;
        summaryTag = summary;

        cardImage.className = 'card-image';
        cardText.className = 'card-text';
        card.className = 'card';

        cardImage.appendChild(imgTag);
        card.appendChild(cardImage);
        card.appendChild(titleTag);
        card.appendChild(cardText);
        cardText.appendChild(summaryTag);
        cards.appendChild(card);

        
      });
    }
  });
}