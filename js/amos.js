
$(function(){
    $(".fr").click(function(){

        $('.language .language-selected').text('FRA');
        $(".language-selected").removeClass("change-pt");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-fr");
  })

});


$(function(){
  $('.en').click(function() { 
    $(".language-selected").removeClass("change-pt");
    $(".language-selected").removeClass("change-fr");
    $(".language-selected").addClass("change-en");
    $('.language .language-selected').text('ENG');
   })
})


var ether = document.getElementById('ether');
var btc = document.getElementById('btc');
var lite = document.getElementById('lite');
var cos = document.getElementById('cos');
var doge = document.getElementById('doge');
var teth = document.getElementById('teth');

var liveprice = {
  'async': true,
  'scroosDomain': true,
  'url':'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cdogecoin%2Ctether%2Cbinance%2Cdogecoin%2Cbnb%2Cxps%2Ccosmos&vs_currencies=usd',
  'method': 'GET',
  'headers':{}
}

$.ajax(liveprice).done(function(response){
  btc.innerHTML = response.bitcoin.usd;
  doge.innerHTML = response.dogecoin.usd;
  lite.innerHTML = response.litecoin.usd;
  ether.innerHTML = response.ethereum.usd;
  cos.innerHTML = response.cosmos.usd;
  teth.innerHTML = response.tether.usd;
})
        

