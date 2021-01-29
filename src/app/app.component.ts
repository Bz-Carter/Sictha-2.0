import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $, jQuery: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {
  }

  ngOnInit(){

    (function ($) {
        'use strict';
    
        /*-----------------------------
        === ALL ESSENTIAL FUNCTIONS ===
        ------------------------------*/
        // ===== 01. Main Menu
        function mianMenu() {
            // Variables
            var var_window = $(window),
                navContainer = $('.nav-container'),
                pushedWrap = $('.nav-pushed-item'),
                pushItem = $('.nav-push-item'),
                pushedHtml = pushItem.html(),
                pushBlank = '',
                navbarToggler = $('.navbar-toggler'),
                navMenu = $('.nav-menu'),
                navMenuLi = $('.nav-menu ul li'),
                closeIcon = $('.navbar-close');
    
            // navbar toggler
            navbarToggler.on('click', function () {
                navbarToggler.toggleClass('active');
                navMenu.toggleClass('menu-on');
            });
    
            // close icon
            closeIcon.on('click', function () {
                navMenu.removeClass('menu-on');
                navbarToggler.removeClass('active');
            });
    
            
        }
    
        /*---------------------
        === DOCUMENT READY  ===
        ----------------------*/
        $(document).ready(function () {
            mianMenu()
        });
    
    })(jQuery);





      this.recallJsFuntions();
  }

  recallJsFuntions() {
      this.router.events
      .subscribe((event) => {
          if ( event instanceof NavigationStart ) {

              (function ($) {
                'use strict';
            
                /*-----------------------------
                === ALL ESSENTIAL FUNCTIONS ===
                ------------------------------*/
                // ===== 01. Main Menu
                function mianMenu() {
                    // Variables
                    var navbarToggler = $('.navbar-toggler'),
                        navMenu = $('.nav-menu'),
                        closeIcon = $('.navbar-close');
            
                        navMenu.removeClass('menu-on');
                        navbarToggler.removeClass('active');
                }
            
                /*---------------------
                === DOCUMENT READY  ===
                ----------------------*/
                $(document).ready(function () {
                    mianMenu()
                });

                $('#preloader').fadeIn('slow');
            
            })(jQuery);
          }
      });
      this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
          $.getScript('assets/js/main.js');
          $('#preloader').fadeOut('slow');
          this.location = this.router.url;
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }
}


