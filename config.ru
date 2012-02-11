require 'rubygems'
require 'sinatra'
get('/') { open('public/index.html').read }
get('/boolean') { open('public/boolean/index.html').read }
get('/boolean/css/reset.css') { open('public/boolean/css/reset.css').read }
get('/boolean/css/boolean.css') { open('public/boolean/css/boolean.css').read }
run Sinatra::Application
