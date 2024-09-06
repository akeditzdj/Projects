const data = [
  {
    id: 1,
    name: "Thomas",
    job: "Graphic Designer",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "I am extremely satisfied with the software services provided by this company. Their team is highly skilled, professional, and efficient. They delivered a top-notch solution that exceeded my expectations. I highly recommend their services to anyone looking for reliable and innovative software development",
  },
  {
    id: 2,
    name: "Jacob",
    job: "Web Designer",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "I have been using the software developed by this company for a few months now, and I must say that it has been a game-changer for my business. Its user-friendly, robust and highly customizable, making it an ideal solution for my needs. The team has been responsive and supportive throughout the development process, and Im glad I chose them for this project",
  },
  {
    id: 3,
    name: "Annie",
    job: "Manager",
    img: "https://randomuser.me/api/portraits/women/66.jpg",
    text: "The software services offered by this company are exceptional. They have a deep understanding of the latest technologies and trends, and their solutions are designed to meet the specific needs of their clients. Their team is highly professional, responsive and collaborative, making it easy to work with them. I highly recommend their services to anyone looking for high-quality software solutions.",
  },
  {
    id: 4,
    name: "Daisy",
    job: "CEO",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "Working with this company has been a great experience. Their software development process is well-organized, and they are always open to feedback and suggestions. They have a talented team of developers, designers and project managers who work together to deliver exceptional solutions. I would definitely recommend their services to anyone looking for reliable and innovative software development",
  },
];

const img = document.querySelector("#pic");
const btnNext = document.querySelector("#btn-right");
const btnPrevious = document.querySelector("#btn-left");
const name = document.querySelector("#name");
const role = document.querySelector("#role");
const text = document.querySelector("#text");
let index = 0;

//Function on window load
window.addEventListener("DOMContentLoaded", function () {
  const testimonial = data[0];
  loadTestimonial(testimonial);
});

function loadTestimonial(data) {
  img.src = data.img;
  name.textContent = data.name;
  role.textContent = data.job;
  text.innerHTML = ` <i class="fa fa-quote-left"></i> ${data.text}
  <i class="fa fa-quote-right"></i>`;
}

btnNext.addEventListener("click", function () {
  index++;
  if (index > data.length - 1) {
    index = 0;
  }
  loadTestimonial(data[index]);
});
btnPrevious.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = data.length - 1;
  }
  loadTestimonial(data[index]);
});

function autoLoad() {
  index++;
  if (index > data.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = data.length - 1;
  }
  loadTestimonial(data[index]);
}

setInterval(autoLoad, 3000);
