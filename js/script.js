import tabs from './modules/tabs';
import modals from './modules/modals';
import cards from './modules/cards';
import calc from './modules/calc';
import slider from './modules/slider';
import forms from './modules/forms';
import timer from './modules/timer';
import { openModal } from './modules/modals';

window.addEventListener('DOMContentLoaded', () =>{
        
    const modalTimerId = setTimeout(()=> openModal('.modal', modalTimerId),50000);

    tabs('.tabheader__item','.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modals("[data-modal]",".modal", modalTimerId);
    cards();
    calc();
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        currentCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    forms('form', modalTimerId);
    timer('.timer','2026-04-18');
});
