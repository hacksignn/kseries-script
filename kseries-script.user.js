// ==UserScript==
// @name            kseries-script
// @description     user script for use with kseries.co
// @author          Houndy Dreamer
// @namespace       https://github.com/hacksignn
// @match           http://www.kseries.co/clip/*
// @require         https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @version         0.2
// @downloadUrl     https://github.com/hacksignn/kseries-script/raw/master/kseries-script.meta.js
// @updateURL       https://github.com/hacksignn/kseries-script/raw/master/kseries-script.user.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function retriveTheLink(item) {
    var iframeBody = item.contentWindow.document.body;
    if (iframeBody.querySelector('#content_video > #content_video_html5_api') !== null) {
        var videoUrl = iframeBody.querySelector('#content_video > #content_video_html5_api').getAttribute('src');
        window.open(videoUrl, '_blank');
    } else {
        window.alert('Download link not found. Try another mirror.');
    }
}

function gimmeTheLink() {
    document.querySelectorAll("#playlist").forEach( item => retriveTheLink(item))
}

(function() {
    'use strict';
    addGlobalStyle('#kseries-download-button { border: 1px solid #D4D4D4; border-radius: 5px; padding: 5px; margin: 2px 0 2px; background: #25DC02; color: #000; cursor: pointer; }');

    var customDiv = $('<div></div>')
    var customTxt1 = $('<span></span>').text('Download for offline viewer: ');
    var customButton1 = $('<button></button>').text('Download');
    customButton1.attr('id', 'kseries-download-button');
    
    customDiv.append(customTxt1, customButton1)
    customDiv.attr('id', 'kseries-main-div');
    customDiv.appendTo($('#clipanotherx'))
})();

$(document).ready(function(){
    $('#kseries-download-button').click(function(){
        gimmeTheLink();
    })
});