$("#subTitle").text(findItem(localStorage.getItem("currentProject")).subTitle);
$("#title").text(findItem(localStorage.getItem("currentProject")).title);
$("#descrp").text(findItem(localStorage.getItem("currentProject")).descrp);
$("#subdescrp").text(findItem(localStorage.getItem("currentProject")).subdescrp);

$("#img1").attr(
  "src",
  findItem(localStorage.getItem("currentProject")).imgList[0]
);
$("#img2").attr(
  "src",
  findItem(localStorage.getItem("currentProject")).imgList[1]
);
$("#img3").attr(
  "src",
  findItem(localStorage.getItem("currentProject")).imgList[2]
);
$("#simg1").attr(
  "src",
  findItem(localStorage.getItem("currentProject")).smallImgList[0]
);
$("#simg2").attr(
  "src",
  findItem(localStorage.getItem("currentProject")).smallImgList[1]
);
$("#simg3").attr(
  "src",
  findItem(localStorage.getItem("currentProject")).smallImgList[2]
);
import findItem from "./projects.js";