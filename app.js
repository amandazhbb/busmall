var allArray = [];
var newrender = [];
var oldrender = [];
var piconweb = document.getElementById('imgrool');
var totalClicks = 0;

// product constructer
function Product(name, path) {
  this.path = path;
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  allArray.push(this);
};
//function for random picture..
function randomPic() {
  newrender = [];
  while (newrender.length < 3) {
    var randomNum = Math.floor(Math.random() * allArray.length);
    if (!newrender.includes(allArray[randomNum]) && !oldrender.includes(allArray[randomNum])) {
      newrender.push(allArray[randomNum]);
    }
  }
  oldrender = newrender;
}
//calculate conversion rate
function calcConversion() {
  for (var i = 0; i < allArray.length; i++) {
    if (allArray[i].views === 0) {
      allArray[i].conversion = 'NA';
    } else {
      allArray[i].conversion = allArray[i].clicks / allArray[i].views;
    }
  }
}

function wipe() {
  while (imgrool.firstChild) {
    imgrool.removeChild(imgrool.firstChild);
  }
}

function render() {
  randomPic();
  for (var i = 0; i < newrender.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = newrender[i].path;
    imgEl.id = newrender[i].name;
    piconweb.appendChild(imgEl);
    newrender[i].views++;
  }
}

function handleClick(event) {
  for (var i = 0; i < newrender.length; i++) {
    if (event.target.id === newrender[i].name) {
      newrender[i].clicks++;
      totalClicks++;
    }
  }
  if (totalClicks === 25) {
    piconweb.removeEventListener('click', handleClick);
    wipe();
    coolChart();
  } else {
    wipe();
    randomPic();
    render();
  }
}

function coolChart() {
  var chartLabel = [];
  var chartData = [];
  for (var i = 0; i < allArray.length; i++){
    chartData.push(allArray[i].clicks);
    chartLabel.push(allArray[i].name);
  }

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: 'Buss Mall - Products Clicked ',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 88, 0.3)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 88, 0.3)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 88, 0.3)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.3)',
          'rgba(255, 99, 132,1)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.jpg');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');
randomPic();
render();
imgrool.addEventListener('click', handleClick);
