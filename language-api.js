load('ajax-environment.js');

load('http://www.google.com/jsapi');
google.load('language', '1');

google.language.translate("Hello world", "en", "es", function(result) {
    print(result.translation);
});
