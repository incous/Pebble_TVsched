/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

ajax(
  {
    url:'http://www.incous.info/vtv1.json',
    type:'json'
  },
  function(data) {
    console.log('Download successful JSON data.');
    var menuItems = [];
    for (var i=0; i < 10; i++) {
      console.log('Parsing program data #' + i);
      menuItems.push({
        title: data.progs[i].time,
        subtitle: data.progs[i].ptype + ': ' + data.progs[i].ptitle
      });
    }
    console.log('Finish parsing data. Initializing menu interface...');
    var scheduleMenu = new UI.Menu({
      sections: [{
        title: 'VTV1',
        items: menuItems
      }]
    });
    console.log('Show up the menu.');
    scheduleMenu.show();
    //main.body('Success and Result is: ' + data.name);
    //main.body('Success and Result is: ' + data.name + time + ptype + ptitle);
    //console.log('Success and Result is: ' + time);
    //console.log('Success and Result is: ' + ptype);
  },
  function(error) {
    console.log('Download failed: ' + error);
  }
);


