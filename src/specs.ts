import 'zone.js/dist/async-test';

import { setBaseTestProviders } from '@angular/core/testing';
import { 
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS, 
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS 
} from '@angular/platform-browser-dynamic/testing';
 
// Setup angular test framework providers.
setBaseTestProviders(
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
); 

// I like to wrap my entire test suite in a describe block
// If we have multiple apps or plan to share other pieces this can help
// delimit which tests belong to each app or shared libraries
describe('Ng2-Dumpster-Fire', () => {

    // Here we are leveraging webpack to load all files that end with .spec.ts
    // The '.' tells webpack to look in the current directory
    // The true tells webpack to recurse directories
    // The /\.spec\.ts$/ tells webpack the regular expression match to use.
    let context = (<any>require).context('.', true, /\.spec\.ts$/);
    context.keys().forEach(context);
});