$(function() {
    /* A test that makes sure our allFeeds array is
    *  well defined and not empty.
    */
    describe('RSS Feeds', function() {

        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('feed url is defined', () => {
            for(let i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBeNull();
                expect(allFeeds[i].url.length).not.toBe(0);  
            }
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('feed name is defined', () => {
            for(let i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBeNull();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });
    });

    describe('The menu', () => {

        const bodyElement = document.querySelector("body");
        const menuButton = document.getElementsByClassName("icon-list")[0];

        /* A test that ensures the menu element is
         * hidden by default.
         */

         it('should be hidden', () => {
            expect(bodyElement.classList.contains("menu-hidden")).toBe(true);
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */

          it('should toggle visibility', () => {
            menuButton.click();
            expect(bodyElement.classList.contains("menu-hidden")).toBe(false);

            menuButton.click();
            expect(bodyElement.classList.contains("menu-hidden")).toBe(true);
          });
    });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
    describe('Initial Entries', () => {

        let entryElement;

        beforeEach( (done) => {
            loadFeed(0, () => {
                entryElement = document.querySelector(".feed .entry");
                done();
            });
        });

        it('loads feed properly', () => {
            expect(entryElement).toBeDefined();
            expect(entryElement).not.toBeNull();
        });
    });
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function the content actually changes.
         */

    describe("New Feed Selection", () => {
        
        let firstFeed;
        let secondFeed;

        beforeEach( (done) => {
            loadFeed(0, () => {
                firstFeed = document.querySelector(".feed").innerHTML;
                loadFeed(1, () => {
                    secondFeed = document.querySelector(".feed").innerHTML;
                    done();
                });
            });
        });

        it('content changes at new feed load', () => {  
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });
}());
