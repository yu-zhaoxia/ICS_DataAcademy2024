Reveal.on('slidechanged', function(event) {
  var currentSlide = event.currentSlide;
  var sectionTitle = currentSlide.dataset.title;
  var sectionTitleElement = document.querySelector('.section-title');
  if (!sectionTitleElement) {
    sectionTitleElement = document.createElement('div');
    sectionTitleElement.className = 'section-title';
    document.querySelector('.reveal').appendChild(sectionTitleElement);
  }
  sectionTitleElement.textContent = sectionTitle || '';
});

Reveal.on('ready', function(event) {
  var currentSlide = event.currentSlide;
  var sectionTitle = currentSlide.dataset.title;
  var sectionTitleElement = document.querySelector('.section-title');
  if (!sectionTitleElement) {
    sectionTitleElement = document.createElement('div');
    sectionTitleElement.className = 'section-title';
    document.querySelector('.reveal').appendChild(sectionTitleElement);
  }
  sectionTitleElement.textContent = sectionTitle || '';
});
