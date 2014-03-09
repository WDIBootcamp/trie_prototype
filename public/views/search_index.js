App.Views.SearchIndex = Backbone.View.extend({

  id: 'search_box',

  // template: HandlebarsTemplates['templates/index'],

  template: function(){
    return "<form id='search'><input id='searched_text' type='text' placeholder='type to search through wikipedia...' autofocus autocomplete='off'></form>";
  },

   events: {
    'keyup #search':                'search'
  },

  render: function()  {

    $(this.el).html(this.template());
    return this;

  },

  search: function(event)  {
    event.preventDefault();

    var view = new App.Views.Results();
    $('#results-container').html(view.render().el);


  }

});
