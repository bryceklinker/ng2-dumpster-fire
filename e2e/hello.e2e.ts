describe('Given Ng2 Dumpster Fire', () => {
    describe('When I go to the site', () => {
        beforeEach(() => {
            browser.get('/');
        });

        it('Then I should see hello', () => {
            expect(element(by.tagName('h3')).getText()).toContain('Hello');
        });
    });
});