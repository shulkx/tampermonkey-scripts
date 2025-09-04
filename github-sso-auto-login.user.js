// ==UserScript==
// @name         GitHub SSO Auto Login
// @version      1.0.0
// @description  Automatically logs you into your SSO provider on GitHub.
// @author       Marcus Shu
// @match      https://github.com/*
// @match      https://github.teradyne.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function clickButton(selector) {
        const button = document.querySelector(selector);
        if (button) {
            button.click();
        }
    }

    // Case 1: Click "Sign in with SAML"
    clickButton('.auth-form-body .btn-primary.btn-block.Details-content--shown');

    // Case 2: Click "Continue" button for Single sign-on
    clickButton('.business-sso-panel .Button--primary.Button--medium.Button.Button--fullWidth');
})();