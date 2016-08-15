import { addProviders, async, inject, TestComponentBuilder } from '@angular/core/testing'

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(() => {
        addProviders([
            AppComponent
        ]);
    });

    it('should say hello', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(AppComponent)
            .then(fixture => {
                expect(fixture.nativeElement.querySelector('h3').innerText).toContain('Hello');
            });
    }));
});