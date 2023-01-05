const projects = [
  {
    id: 1,
    img: "banner1.png",
    subTitle: "AYDIN",
    title: "PEYSERDI",
    descrp: "AMCIGDI AYDIN",
    subdescrp: "CINDIRDI AYDIN.",
    imgList: [
      //3 штуки должно быть максимум
      "https://d3cl79h6n1fe0x.cloudfront.net/wp-content/uploads/2018/03/12131948/AdobeStock_88620839.jpeg",
      "img/demos/construction/generic/generic-3-medium.jpg",
      "img/demos/construction/generic/generic-10-medium.jpg",
    ],
    smallImgList: [
      //3 штуки должно быть максимум
      "img/demos/construction/generic/generic-2-small.jpg",
      "img/demos/construction/generic/generic-3-small.jpg",
      "img/demos/construction/generic/generic-10-small.jpg",
    ],
  },
  {
    id: 2,
    img: "banner1.png",
    subTitle: "MURAD",
    title: "KRASAVCIKDI",
    descrp: "ZORDU MURAD",
    subdescrp: "AYDINI SIKIR MURAD.",
    imgList: [
      //3 штуки должно быть максимум
      "img/demos/construction/generic/generic-1-medium.jpg",
      "img/demos/construction/generic/generic-3-medium.jpg",
      "img/demos/construction/generic/generic-10-medium.jpg",
    ],
    smallImgList: [
      //3 штуки должно быть максимум
      "img/demos/construction/generic/generic-2-small.jpg",
      "img/demos/construction/generic/generic-3-small.jpg",
      "img/demos/construction/generic/generic-10-small.jpg",
    ],
  },
  {
    id: 3,
    img: "banner1.png",
    subTitle: "MURAD",
    title: "KRASAVCIKDI",
    descrp: "ZORDU MURAD",
    subdescrp: "AYDINI SIKIR MURAD.",
    imgList: [
      //3 штуки должно быть максимум
      "img/demos/construction/generic/generic-1-medium.jpg",
      "img/demos/construction/generic/generic-3-medium.jpg",
      "img/demos/construction/generic/generic-10-medium.jpg",
    ],
    smallImgList: [
      //3 штуки должно быть максимум
      "img/demos/construction/generic/generic-2-small.jpg",
      "img/demos/construction/generic/generic-3-small.jpg",
      "img/demos/construction/generic/generic-10-small.jpg",
    ],
  },
  {
    id: 4,
    img: "banner1.png",
    subTitle: "MURAD",
    title: "KRASAVCIKDI",
    descrp: "ZORDU MURAD",
    subdescrp: "AYDINI SIKIR MURAD.",
    imgList: [
      //3 штуки должно быть максимум
      "img/demos/construction/generic/generic-1-medium.jpg",
      "img/demos/construction/generic/generic-3-medium.jpg",
      "img/demos/construction/generic/generic-10-medium.jpg",
    ],
    smallImgList: [
      //3 штуки должно быть максимум
      "img/demos/construction/generic/generic-2-small.jpg",
      "img/demos/construction/generic/generic-3-small.jpg",
      "img/demos/construction/generic/generic-10-small.jpg",
    ],
  },
];

function getProjects() {
  return projects;
}

function findItem(itemId) {
  return projects.filter((elm) => elm.id == itemId)[0];
}
projects.forEach((elm) => {
  const ides = "card" + elm.id;

  $("#projects").append(
    '<div class="col-sm-6 col-md-4 isotope-item pre-construction" id="' +
      ides +
      '"></div>'
  );
  $("#" + ides).append(
    '<div class="portfolio-item "  id="card" data-appear-animation="fadeInUpShorterPlus" data-appear-animation-delay="1200"></div>'
  );

  $("#" + ides + " div")
    .hide()
    .fadeIn(1000);

  $("#" + ides + " div").append(
    '<div class="thumb-info thumb-info-no-borders thumb-info-no-borders-rounded thumb-info-centered-icons mb-3-5"></div>'
  );

  $("#" + ides).append(
    '<span class="d-block text-color-grey positive-ls-3 font-weight-medium text-2">' +
      elm.subTitle +
      '</span> <h2 class="font-weight-bold text-5-5 line-height-3"><a href="projects-detail.html" class="text-color-dark text-color-hover-primary text-decoration-none" >' +
      elm.title +
      "</a></h2>"
  );

  $("#" + ides + " div div").append('<div class="thumb-info-wrapper"></div>');
  $("#" + ides + " div div div").append(
    '<img src="' +
      elm.imgList[0] +
      '" class="img-fluid" alt="Pre Construction Image Sample"/>'
  );
  $("#" + ides + " div div div").append(
    '<div class="thumb-info-action"></div>'
  );
  $("#" + ides + " div div div div").append(
    '<a href="projects-detail.html" id="' +
      elm.id +
      '"><div class="thumb-info-action-icon thumb-info-action-icon-light"> <i class="fas fa-plus text-dark"></i></div></a>'
  );
  $("#" + elm.id).click(function () {
    localStorage.setItem("currentProject", elm.id);
  });
});

export default findItem;
