
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
  doge.innerHTML = response.dogecoin.usd;
  lite.innerHTML = response.litecoin.usd;
  ether.innerHTML = response.ethereum.usd;
  cos.innerHTML = response.cosmos.usd;
  teth.innerHTML = response.tether.usd;
  btc.innerHTML = response.bitcoin.usd;
});
        


