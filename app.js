var allArray = [];
var newrender = [];
var oldrender = [];
var piconweb = document.getElementById('imgrool');
var totalClicks = 0;

// product constructer
function imgMaker(name, path) {
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

new imgMaker('bag', 'img/bag.jpg');
new imgMaker('banana', 'img/banana.jpg');
new imgMaker('bathroom', 'img/bathroom.jpg');
new imgMaker('boots', 'img/boots.jpg');
new imgMaker('breakfast', 'img/breakfast.jpg');
new imgMaker('bubblegum', 'img/bubblegum.jpg');
new imgMaker('chair', 'img/chair.jpg');
new imgMaker('cthulhu', 'img/cthulhu.jpg');
new imgMaker('dog-duck', 'img/dog-duck.jpg');
new imgMaker('dragon', 'img/dragon.jpg');
new imgMaker('pen', 'img/pen.jpg');
new imgMaker('pet-sweep', 'img/pet-sweep.jpg');
new imgMaker('scissors', 'img/scissors.jpg');
new imgMaker('shark', 'img/shark.jpg');
new imgMaker('sweep', 'img/sweep.jpg');
new imgMaker('tauntaun', 'img/tauntaun.jpg');
new imgMaker('unicorn', 'img/unicorn.jpg');
new imgMaker('usb', 'img/usb.jpg');
new imgMaker('water-can', 'img/water-can.jpg');
new imgMaker('wine-glass', 'img/wine-glass.jpg');
randomPic();
render();
imgrool.addEventListener('click', handleClick);
