
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
    $('.language .language-selected').text('ESP');
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

  var y1 = x1.data.slice(0,20);
  btc.innerHTML = parseFloat(y1[0].quote.USD.price.toFixed(5));
  ether.innerHTML = parseFloat(y1[1].quote.USD.price.toFixed(5));
  teth.innerHTML = parseFloat(y1[2].quote.USD.price.toFixed(5));
  bnb.innerHTML = parseFloat(y1[3].quote.USD.price.toFixed(5));
  usdc.innerHTML = parseFloat(y1[4].quote.USD.price.toFixed(5));
  xrp.innerHTML = parseFloat(y1[5].quote.USD.price.toFixed(5));
  cardano.innerHTML = parseFloat(y1[6].quote.USD.price.toFixed(5));
  doge.innerHTML = parseFloat(y1[7].quote.USD.price.toFixed(5));
  polygon.innerHTML = parseFloat(y1[8].quote.USD.price.toFixed(5));
  solona.innerHTML = parseFloat(y1[9].quote.USD.price.toFixed(5));
  tron.innerHTML = parseFloat(y1[10].quote.USD.price.toFixed(5));
  litecoin.innerHTML = parseFloat(y1[11].quote.USD.price.toFixed(5));
  polkadot.innerHTML = parseFloat(y1[12].quote.USD.price.toFixed(5));
  binance.innerHTML = parseFloat(y1[13].quote.USD.price.toFixed(5));
  shiba.innerHTML = parseFloat(y1[14].quote.USD.price.toFixed(3));
  dai.innerHTML = parseFloat(y1[15].quote.USD.price.toFixed(5));
  avalanche.innerHTML = parseFloat(y1[16].quote.USD.price.toFixed(5));
  wbtc.innerHTML = parseFloat(y1[17].quote.USD.price.toFixed(5));
  chainlink.innerHTML = parseFloat(y1[18].quote.USD.price.toFixed(5));
  unus.innerHTML = parseFloat(y1[19].quote.USD.price.toFixed(5));
});       

