import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#main-nav').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if (window.matchMedia("(max-width:991px)").matches) {
          $('.nav-menu').hide();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  (<any>$(document)).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  (<any>$(window)).scroll(function() {
    var scroll = $(window).scrollTop();
    if (!$('.subpage-nav').length) {
      if (scroll > 200) {
        $("#main-nav").slideDown(700);
      } else {
        $("#main-nav").slideUp(700);
      }
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

   // ========================================================================= //
  //  Typed Js
  // ========================================================================= //


})(jQuery);
  }

}
