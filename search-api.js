load('ajax-environment.js');

load('http://www.google.com/jsapi');

google.load('search', '1');

var search = new google.search.WebSearch();
search.execute('Ian McKellar');

for (i in search.results) {
  var result = search.results[i];
  print(result.titleNoFormatting);
  print(' '+result.url);
}
