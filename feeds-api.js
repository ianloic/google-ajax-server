load('ajax-environment.js');

load('http://www.google.com/jsapi');

google.load('feeds', '1');

var feed = new google.feeds.Feed("http://feeds.feedburner.com/ianloic");
feed.setNumEntries(10);
feed.load(function(result) {
  if (!result.error) {
    print(result.feed.title);
    for (var i = 0; i < result.feed.entries.length; i++) {
      print(' '+result.feed.entries[i].title);
      print('  '+result.feed.entries[i].link);
    }
  }
});
