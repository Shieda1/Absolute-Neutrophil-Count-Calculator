// https://www.omnicalculator.com/health/anc

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const absoluteneutrophilcountRadio = document.getElementById('absoluteneutrophilcountRadio');
const whitebloodcellsRadio = document.getElementById('whitebloodcellsRadio');
const neutrophilgranulocytesRadio = document.getElementById('neutrophilgranulocytesRadio');
const neutrophilicbandformsRadio = document.getElementById('neutrophilicbandformsRadio');

let absoluteneutrophilcount;
let whitebloodcells = v1;
let neutrophilgranulocytes = v2;
let neutrophilicbandforms = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

absoluteneutrophilcountRadio.addEventListener('click', function() {
  variable1.textContent = 'White blood cells';
  variable2.textContent = 'Neutrophil granulocytes';
  variable3.textContent = 'Neutrophilic band forms';
  whitebloodcells = v1;
  neutrophilgranulocytes = v2;
  neutrophilicbandforms = v3;
  result.textContent = '';
});

whitebloodcellsRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute neutrophil count';
  variable2.textContent = 'Neutrophil granulocytes';
  variable3.textContent = 'Neutrophilic band forms';
  absoluteneutrophilcount = v1;
  neutrophilgranulocytes = v2;
  neutrophilicbandforms = v3;
  result.textContent = '';
});

neutrophilgranulocytesRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute neutrophil count';
  variable2.textContent = 'White blood cells';
  variable3.textContent = 'Neutrophilic band forms';
  absoluteneutrophilcount = v1;
  whitebloodcells = v2;
  neutrophilicbandforms = v3;
  result.textContent = '';
});

neutrophilicbandformsRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute neutrophil count';
  variable2.textContent = 'White blood cells';
  variable3.textContent = 'Neutrophil granulocytes';
  absoluteneutrophilcount = v1;
  whitebloodcells = v2;
  neutrophilgranulocytes = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(absoluteneutrophilcountRadio.checked)
    result.textContent = `Absolute neutrophil count = ${computeabsoluteneutrophilcount().toFixed(2)}`;

  else if(whitebloodcellsRadio.checked)
    result.textContent = `White blood cells = ${computewhitebloodcells().toFixed(2)}`;

  else if(neutrophilgranulocytesRadio.checked)
    result.textContent = `Neutrophil granulocytes = ${computeneutrophilgranulocytes().toFixed(2)}`;

  else if(neutrophilicbandformsRadio.checked)
    result.textContent = `Neutrophilic band forms = ${computeneutrophilicbandforms().toFixed(2)}`;
})

// calculation

// absoluteneutrophilcount = whitebloodcells * (neutrophilgranulocytes + neutrophilicbandforms) / 100

function computeabsoluteneutrophilcount() {
  return Number(whitebloodcells.value) * (Number(neutrophilgranulocytes.value) + Number(neutrophilicbandforms.value)) / 100;
}

function computewhitebloodcells() {
  return (Number(absoluteneutrophilcount.value) * 100) / (Number(neutrophilgranulocytes.value) + Number(neutrophilicbandforms.value));
}

function computeneutrophilgranulocytes() {
  return ((Number(absoluteneutrophilcount.value) * 100) / Number(whitebloodcells.value)) - Number(neutrophilicbandforms.value);
}

function computeneutrophilicbandforms() {
  return ((Number(absoluteneutrophilcount.value) * 100) / Number(whitebloodcells.value)) - Number(neutrophilgranulocytes.value);
}