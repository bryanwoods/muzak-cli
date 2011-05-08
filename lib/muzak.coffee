sys     = require 'sys'
rest    = require 'restler'

MUZAK_URL      = 'http://muzak.heroku.com'
MUZAK_REDIRECT = 'http://hawmuzak.heroku.com'

argv = process.argv

if argv
  request = process.argv[2]

  if request == 'current'
    rest.get(MUZAK_REDIRECT, {
      followRedirects: false
    }).on 'complete',
    (headers, data) ->
      sys.puts 'Current Muzak room is: ' + data.headers.location

  else if request == 'create'
    if room = process.argv[3]
      rest.post(MUZAK_REDIRECT, {
        data: { url: room }
      }).on 'complete', (data, response) ->
        sys.puts 'New Muzak room created: ' + response.headers.location
    else
      sys.puts "Could not create a new room. You need to supply a URL for it."

  else if request == 'baby'
    muzakBaby = '''
                                                                                
                                     MMMMMMMMMM                                 
                                 MM     M        MM                             
                              M        M            M                           
                            M         M    MM        M                          
                           M                          M                         
                          M                           M                         
                         M                                                      
                                                                                
                        M                                                       
                        M       MM    M                                         
                        M      M   M   M                                        
                                    M             MM                            
                         M                        M                             
                          M                           M                         
                         M    M              M         M                        
                         M   MM           MMM                                   
                              M                M                                
                              M                                                 
                               M                                                
                                 MMMMM       MMMM                               
                                                                                
    '''
    sys.puts muzakBaby
