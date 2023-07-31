


var cardano = document.getElementById("cardano");
var algorand = document.getElementById("algorand");
var btc = document.getElementById("bitcoin");
var bnb = document.getElementById("binancecoin");
var dai = document.getElementById("dai");
var dash = document.getElementById("dash");
var digix = document.getElementById("DigixDao");
var doge = document.getElementById("dogecoin");
var eth = document.getElementById("Ethereum");
var ftm = document.getElementById("fantom");
var iota = document.getElementById("iota");
var ltc = document.getElementById("Litecoin");
var neo = document.getElementById("neo");
var nexo = document.getElementById("nexo");
var usdt = document.getElementById("tether");
var xlm = document.getElementById("stellar");
var xmr = document.getElementById("Monero");
var xrp = document.getElementById("RIpple");



var liveprice = {
	"async": true,
	"scroosDomain": true,
	"url": "https://api.coingecko.com/api/v3/simple/price?ids=cardano%2Calgorand%2Cbinancecoin%2Cbitcoin%2Cdai%2Cdash%2CDigixDAO%2Cdogecoin%2CEthereum%2Cfantom%2Ciota%2Clitecoin%2Cneo%2Cnexo%2Ctether%2Cstellar%2Cmonero%2Cripple&vs_currencies=usd",
	
	"method": "GET",
	"headers": {}
}

$.ajax(liveprice).done(function (response){
	cardano.innerHTML = response.cardano.usd;
	algorand.innerHTML = response.algorand.usd;
	btc.innerHTML = response.bitcoin.usd;
	bnb.innerHTML = response.binancecoin.usd;
	dash.innerHTML = response.dash.usd;
	dai.innerHTML = response.dai.usd;
	digix.innerHTML = response.digixdao.usd;
	doge.innerHTML = response.dogecoin.usd;
	eth.innerHTML = response.ethereum.usd;
	ftm.innerHTML = response.fantom.usd;
	iota.innerHTML = response.iota.usd;
	ltc.innerHTML = response.litecoin.usd;
	neo.innerHTML = response.neo.usd;
	nexo.innerHTML = response.nexo.usd;
	tether.innerHTML = response.tether.usd;
	xlm.innerHTML = response.stellar.usd;
	xmr.innerHTML = response.monero.usd;
	xrp.innerHTML = response.ripple.usd;
});