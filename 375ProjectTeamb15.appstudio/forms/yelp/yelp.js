let yelp = ""


btnShowData.onclick = function() {
  let locations = inptLocation.value
  let term = inptTerm.value
  let price = inptPrice.value
  const URL = 'https://api.yelp.com/v3/businesses/search?location=' + locations + '&term=' + term + '&price=' + price

  const getData = () =>
    fetch(URL).then(response => response.json()).then(({
      results
    }) => results)

  function freeData(apiData) {
    yelp = apiData
  }

  getData().then(data => {
    freeData(data)
    yelp = data
  })
}
Button1.onclick=function(){
  ChangeForm(Next)
}
