window.App = {
  Models: {},
  Collections: {},
  Views: {},

  Routers: {},

  initialize: function() {
    this.router = new this.Routers.Main();
    Backbone.history.start({pushState: true});

    // automatically retrieves the dataset specified and
    // adds it to an Autocompleter object in the browser
    App.autocompleter = new Autocompleter();
    var ws = new WebSocket('ws://' + window.location.host + window.location.pathname);
    ws.onmessage = function(m) {
      App.autocompleter.add(m.data);
    };
  }

};

$(document).ready(function(){
  App.initialize();
});
