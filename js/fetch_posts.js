console.log("Start call to FB")
FB.api("/eres.unc.cajamarca/posts", function (res) {
  console.log("RES", res)
  //   for (var i = 0; i < response.data.length; i++) {
  //     alert(response.data[i].message)
  //   }
})
console.log("END call")

FB.api("/eres.unc.cajamarca/feed", function (response) {
  console.log("resp 2")
  if (response && !response.error) {
    /* handle the result */
    console.log("res2", response)
  }
})
