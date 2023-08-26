document.addEventListener('DOMContentLoaded', function () {

  const filterItems = document.querySelectorAll('#portfolio-flters li');


  const portfolioItems = document.querySelectorAll('.portfolio-item');


  filterItems.forEach(item => {
    item.addEventListener('click', function() {
   
      filterItems.forEach(item => {
        item.classList.remove('filter-active');
      });


      this.classList.add('filter-active');

      const filterValue = this.getAttribute('data-filter');


      portfolioItems.forEach(portfolioItem => {
        portfolioItem.style.display = 'none';
      });


      if (filterValue === '*') {
        portfolioItems.forEach(portfolioItem => {
          portfolioItem.style.display = 'block';
        });
      } else if (filterValue === '.filter-app') {
        const appItems = document.querySelectorAll('.filter-app');
        appItems.forEach(appItem => {
          appItem.style.display = 'block';
        });
      } else if (filterValue === '.filter-card') {
        const cardItems = document.querySelectorAll('.filter-card');
        cardItems.forEach(cardItem => {
          cardItem.style.display = 'block';
        });
      } else if (filterValue === '.filter-web') {
        const webItems = document.querySelectorAll('.filter-web');
        webItems.forEach(webItem => {
          webItem.style.display = 'block';
        });
      }
    });
  });
});



