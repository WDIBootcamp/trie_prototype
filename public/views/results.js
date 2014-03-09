App.Views.Results = Backbone.View.extend({

  tagName: 'ul',

  template: function(){
    return "<a href='http://en.wikipedia.org/wiki/{{title}}'><li class='each-result'>{{result}}</li></a>";
  },

  render: function()  {

    var results = App.autocompleter.complete($('#searched_text').val().toLowerCase());
    var source = this.template();
    var template = Handlebars.compile(source);

    for (var i=0; i<results.length; i++)  {
      var html = template({result: results[i]});
      this.$el.append(html);
    }

    return this;
    //
    // this.$el.append(results);
    // return this;

  },



});
