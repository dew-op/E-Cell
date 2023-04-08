var response = fetch('https://api.ecelliitr.org/edc/community?format=json')

  .then(res => {
    return res.json();
  })

  .then(data => {
    data.forEach(element => { 
      $('.appender').append(`<div class="col-lg-4 col--6">\n\t<div class="card text-white">\n\t\t<img class="card-img" src="${element.image}" />\n\t\t<div class="card-img-overlay">\n\t\t\t<h2 class="card-title">${element.name}</h2>\n\t\t\t${element.description}\n\t\t\t<p class="contact-info">+91 ${element.contact}</p>\n\t\t\t<a class="fa-solid fa-envelope fa-2x" href="${element.email}"></a>\n\t\t\t<a class="fa-brands fa-linkedin  fa-2x" href="${element.linkedin}"></a>\n\t\t</div>\n\t</div>\n</div>`);
    });
  })

  .catch(error => {
    console.log(error)
  });


  
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > ($nav.height()*3));
    });
});






