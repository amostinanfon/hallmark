
$(function(){
    $(".fr").click(function(){

        $('.language .language-selected').text('FRA');
        $(".language-selected").removeClass("change-pt");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-fr");
        $('.language .language-selected').text('FRA');
  })

});

$(function(){
  $('.en').click(function() { 
    $(".language-selected").removeClass("change-pt");
    $(".language-selected").removeClass("change-fr");
    $(".language-selected").removeClass("change-es");
    $(".language-selected").addClass("change-en");
    $('.language .language-selected').text('ENG');
   })
});

$(function(){
  $('.pt').click(function() { 
    $(".language-selected").removeClass("change-en");
    $(".language-selected").removeClass("change-fr");
    $(".language-selected").removeClass("change-es");
    $(".language-selected").addClass("change-pt");
    $('.language .language-selected').text('POR');
   })
})
$(function(){
  $('.es').click(function() { 
    $(".language-selected").removeClass("change-en");
    $(".language-selected").removeClass("change-fr");
    $(".language-selected").removeClass("change-pt");
    $(".language-selected").addClass("change-es");
    $('.language .language-selected').text('SPA');
   })
})


var btc = document.getElementById('btc');
var ether = document.getElementById('ether');
var teth = document.getElementById('teth');
var bnb = document.getElementById('bnb');
var usdc = document.getElementById('usdc');
var xrp = document.getElementById('xrp');
var cardano = document.getElementById('cardano');
var doge = document.getElementById('doge');
var polygon = document.getElementById('polygon');
var solona = document.getElementById('solona');
var tron = document.getElementById('tron');
var litecoin = document.getElementById('litecoin');
var polkadot = document.getElementById('polkadot');
var binance = document.getElementById('binance');
var shiba = document.getElementById('shiba');
var dai = document.getElementById('dai');
var avalanche = document.getElementById('avalanche');
var wbtc = document.getElementById('wbtc');
var chainlink = document.getElementById('chainlink');
var unus = document.getElementById('unus');

var apikey= {key:'8eb38772-272b-4cc1-a770-179c0ae3d2a3'};
var liveprice = {
  'async': true,
  'scroosDomain': true,
  'url':'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key,
  'method': 'GET',
  'headers':{}
}


  $.ajax(liveprice).done(function(response){
  var x1 = response;

  console.log(x1.data.slice(0,20));

 var y1 = x1.data.slice(0,20)
  btc.innerHTML = Math.round(y1[0].quote.USD.price);
  ether.innerHTML = Math.round(y1[1].quote.USD.price);
  teth.innerHTML = Math.round(y1[2].quote.USD.price);
  bnb.innerHTML = Math.round(y1[3].quote.USD.price);
  usdc.innerHTML = Math.round(y1[4].quote.USD.price);
  xrp.innerHTML = Math.round(y1[5].quote.USD.price);
  cardano.innerHTML = Math.round(y1[6].quote.USD.price);
  doge.innerHTML = Math.round(y1[7].quote.USD.price);
  polygon.innerHTML = Math.round(y1[8].quote.USD.price);
  solona.innerHTML = Math.round(y1[9].quote.USD.price);
  tron.innerHTML = Math.round(y1[10].quote.USD.price);
  litecoin.innerHTML = Math.round(y1[11].quote.USD.price);
  polkadot.innerHTML = Math.round(y1[12].quote.USD.price);
  binance.innerHTML = Math.round(y1[13].quote.USD.price);
  shiba.innerHTML = Math.round(y1[14].quote.USD.price);
  dai.innerHTML = Math.round(y1[15].quote.USD.price);
  avalanche.innerHTML = Math.round(y1[16].quote.USD.price);
  wbtc.innerHTML = Math.round(y1[17].quote.USD.price);
  chainlink.innerHTML = Math.round(y1[18].quote.USD.price);
  unus.innerHTML = Math.round(y1[19].quote.USD.price);
});

        
// var apikey= {key:'8eb38772-272b-4cc1-a770-179c0ae3d2a3'};
// request(
//   'GET',
//   'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
//   .then((r1) => {
//     var x1 = JSON.parse(r1.target.responseText);
//     console.log(x1.data.slice(0,10))
//   })
//   .catch(err => {
//     console.log(err);
//   })

//   function request(method, url){
//     return new Promise (function (resolve, reject) {
//       var xhr = new XMLHttpRequest();
//       xhr.open(method, url);
//       xhr.onload = resolve;
//       xhr.onerror = reject;
//       xhr.send();
//     })
//   }

