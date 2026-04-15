window.addEventListener('DOMContentLoaded', () =>{
    const tabs = require('./modules/tabs'),
          modals = require('./modules/modals'),
          cards = require('./modules/cards'),
          calc = require('./modules/calc'),
          slider = require('./modules/slider'),
          forms = require('./modules/forms'),
          timer = require('./modules/timer');

    tabs();
    modals()
    cards();
    calc();
    slider();
    forms();
    timer();
});
