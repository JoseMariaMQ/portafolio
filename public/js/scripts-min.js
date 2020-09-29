"use strict";function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var events=[document.getElementById("skills-items"),document.getElementById("portfolio-img"),document.getElementById("experience-description1"),document.getElementById("experience-description2"),document.getElementById("education-description1"),document.getElementById("education-description2"),document.getElementById("education-description3"),document.getElementById("contact-container")];window.addEventListener("scroll",function(){var e,t=_createForOfIteratorHelper(events);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.getBoundingClientRect().top<window.innerHeight&&r.classList.add("animations")}}catch(e){t.e(e)}finally{t.f()}});var contactMessage=document.getElementById("contact-message"),form=document.getElementById("form");form.addEventListener("submit",function(e){e.preventDefault(),contactMessage.innerText="¡Gracias por contactar conmigo!"});var headerNav=document.getElementById("nav"),mainNav=document.getElementById("main-nav"),toggleMenu=document.getElementById("toggle-menu"),header=document.getElementById("header"),nav=document.getElementById("nav");function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}toggleMenu.addEventListener("click",function(e){"toggle-menu"!==e.target.id&&"toggle-menu"!==e.target.parentElement.id||(headerNav.classList.toggle("nav__show"),mainNav.classList.toggle("main-nav__show"),toggleMenu.classList.toggle("show"))}),window.addEventListener("scroll",function(){header.getBoundingClientRect().bottom<=100?nav.classList.add("nav__color"):nav.classList.remove("nav__color")});var icon1=document.getElementById("portfolio-icon1"),icon2=document.getElementById("portfolio-icon2"),img1=document.querySelectorAll(".portfolio__img1"),img2=document.querySelectorAll(".portfolio__img2");if(icon1.classList.toggle("portfolio__icon-checked"),icon1.classList.contains("portfolio__icon-checked")&&!icon2.classList.contains("portfolio__icon-checked")){var _step,_iterator=_createForOfIteratorHelper(img2);try{for(_iterator.s();!(_step=_iterator.n()).done;){var img=_step.value;img.classList.toggle("portfolio__img-hidden")}}catch(e){_iterator.e(e)}finally{_iterator.f()}icon2.addEventListener("click",function(e){icon2.classList.add("portfolio__icon-checked"),icon1.classList.remove("portfolio__icon-checked");var t,r=_createForOfIteratorHelper(img1);try{for(r.s();!(t=r.n()).done;){t.value.classList.add("portfolio__img-hidden")}}catch(e){r.e(e)}finally{r.f()}var n,o=_createForOfIteratorHelper(img2);try{for(o.s();!(n=o.n()).done;){n.value.classList.remove("portfolio__img-hidden")}}catch(e){o.e(e)}finally{o.f()}}),icon1.addEventListener("click",function(e){icon1.classList.add("portfolio__icon-checked"),icon2.classList.remove("portfolio__icon-checked");var t,r=_createForOfIteratorHelper(img2);try{for(r.s();!(t=r.n()).done;){t.value.classList.add("portfolio__img-hidden")}}catch(e){r.e(e)}finally{r.f()}var n,o=_createForOfIteratorHelper(img1);try{for(o.s();!(n=o.n()).done;){n.value.classList.remove("portfolio__img-hidden")}}catch(e){o.e(e)}finally{o.f()}})}