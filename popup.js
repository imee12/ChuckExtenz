function getChuck () {
 $.ajax({
    url: 'http://api.icndb.com/jokes/random/',

    type: 'GET',
    datatype: 'JSONP',
    success: function (data) {
      //console.log(instaPage.memeConfig.baseurl + "_Select_ByTrending";
      console.log(data);
    //  _.each(data, function(item, idx, arr) {
      // _.each(item, function (currentItem, index, array) {
      //  _.each(currentItem, function (value, index, array){
            $('body').append('<p>' + data.value.joke + '</p>');
//});
//  });
//});
  },
      error: function (error) {
      console.log(error);
    }
  })
}

getChuck();
