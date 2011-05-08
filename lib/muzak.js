(function() {
  var MUZAK_REDIRECT, MUZAK_URL, argv, muzakBaby, request, rest, room, sys;
  sys = require('sys');
  rest = require('restler');
  MUZAK_URL = 'http://muzak.heroku.com';
  MUZAK_REDIRECT = 'http://hawmuzak.heroku.com';
  argv = process.argv;
  if (argv) {
    request = process.argv[2];
    if (request === 'current') {
      rest.get(MUZAK_REDIRECT, {
        followRedirects: false
      }).on('complete', function(headers, data) {
        return sys.puts('Current Muzak room is: ' + data.headers.location);
      });
    } else if (request === 'create') {
      if (room = process.argv[3]) {
        rest.post(MUZAK_REDIRECT, {
          data: {
            url: room
          }
        }).on('complete', function(data, response) {
          return sys.puts('New Muzak room created: ' + response.headers.location);
        });
      } else {
        sys.puts("Could not create a new room. You need to supply a URL for it.");
      }
    } else if (request === 'baby') {
      muzakBaby = '                                                        \n             MMMMMMMMMM                                 \n         MM     M        MM                             \n      M        M            M                           \n    M         M    MM        M                          \n   M                          M                         \n  M                           M                         \n M                                                      \n                                                        \nM                                                       \nM       MM    M                                         \nM      M   M   M                                        \n            M             MM                            \n M                        M                             \n  M                           M                         \n M    M              M         M                        \n M   MM           MMM                                   \n      M                M                                \n      M                                                 \n       M                                                \n         MMMMM       MMMM                               \n                                                        ';
      sys.puts(muzakBaby);
    }
  }
}).call(this);
