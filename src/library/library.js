const library = {
  currentMarketToString,
  parseMarketString,
  resetOrNot
}

function currentMarketToString(currentMarket) {
  let amazonString = currentMarket['Amazon'] ? 'Amazon+' : ''
  let eBayString = currentMarket['eBay'] ? 'eBay+' : ''
  let AliExpressString = currentMarket['AliExpress'] ? 'AliExpress+' : ''
  return amazonString + eBayString + AliExpressString
}

function parseMarketString(marketString) {
  var currentMarket = {
    "Amazon" : false,
    "eBay" : false,
    "AliExpress" : false

  }
  var marketList = marketString.split("+")
  marketList.forEach(element => {
    if (element != '') currentMarket[element] = true
  });
  return currentMarket
}

function resetOrNot(currentMarket) {
  if (currentMarket['Amazon'] && currentMarket['eBay'] && currentMarket['AliExpress']) {
    return true;
  }
  else return false;
}

export default library
