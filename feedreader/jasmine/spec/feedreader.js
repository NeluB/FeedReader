/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test allFeeds that it has a URL defined
         * and that the URL is not empty.
         */

        it('has URL defined and URL is not empty', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

        /* test allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    
        it('has name defined and name is not empty', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);

            });

        });
    });

    /* test suite named "The menu" */

       describe('The menu', function() {

        /* test that ensures the menu element is
         * hidden by default. */

         it('is hidden', function() {

            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* test that ensures the menu changes visibility */

        it('hide by default visible by click', function() {

            $('a.menu-icon-link').click(); 
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

         });

    });

    /*test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* test the loadFeed */

         beforeEach(function(done) {
            loadFeed(0, done);

        });

        it('are there', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* test suite named "New Feed Selection" */

      describe('New Feed Selection', function() {

        var InitialFeed;

        /* test new feed is loaded */

           beforeEach(function(done) {

            loadFeed(0, function() {

                InitialFeed = $('.feed').html();
                loadFeed(1, done);

            });

        });
           it('are different from Initial', function() {
                expect($('.feed').html()).not.toBe(InitialFeed);
           })
      });  
          
}());
