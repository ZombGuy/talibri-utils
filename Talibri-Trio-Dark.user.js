// ==UserScript==
// @name         Talibri Trio Dark
// @namespace    http://tampermonkey.net/
// @version      1.1.9
// @description  Revamp to make it easier on the eyes
// @author       Dapper Zom
// @match        https://www.talibri.com/*
// @match        https://talibri.com/*
// @grant        none
//Code originally from Stretch or Dan Campbell he let me use his style code to create this.
// ==/UserScript==

// BEGIN EDITING

var highlightColor = '#99ccff'; // hex color code or recognized color code
var darkMode = true;            // true or false
var displayChatHeading = true; // true or false
// END EDITING

// and if you screwed something up, here are the default values:

//var hpColor  = 'green'; // hex color code or recognized color code
//var darkMode = false;   // true or false
//var displayChatHeading = true; // true or false

(function() {

    'use strict';

    //controls friends list
    //setTimeout(friendList, 1000);
    //global styles
    //fix useless scrollbars appearing
    addGlobalStyle('.dropdown-menu {overflow: auto;}');
    //reset body height to 100% of window
    addGlobalStyle('html, body { height: 100%; }');
    //set static height
    addGlobalStyle('.navbar-fixed-top { height:50px !important }');
    addGlobalStyle('.navbar-fixed-bottom { height:65px !important }');
    addGlobalStyle('.panel-footer { height:143px !important; }');
    addGlobalStyle('.row:first-of-type { margin-left:0 !important; margin-right:0 !important; }');
    addGlobalStyle('body>.container-fluid:first-of-type { margin-top:0 !important; padding-top:50px !important; padding-left:0 !important; padding-bottom:450px !important; background-size:cover; background-position: center center; background-attachment: fixed; }');

    //activeskills stuff
    addGlobalStyle('.bg-success { background-color: #333;}');
    addGlobalStyle('#active_skill_dropdown {padding-bottom: 36px;}');
    addGlobalStyle('.panel.panel-default {margin-bottom: 0 !important;}');
    addGlobalStyle('.col-sm-8 { color: #999 !important}');
    addGlobalStyle('.btn-success { background-color: #5bc0de; border-color: #46b8da;}');
    addGlobalStyle('.btn-success:hover { background-color: #5bded0;}');
    addGlobalStyle('#notifications { overflow-y: auto !important;}');
    addGlobalStyle('.col-md-2 {background-color: #1a1a1a; width: auto;}');
    addGlobalStyle('#dice-roll.row {background: #1a1a1a !important;}');
    addGlobalStyle('#skill_details {width: 600px;}');


    //modify chat panel
    addGlobalStyle('body>.container-fluid:first-of-type>div.row>div.col-xs-3 { padding-left:0 !important; height:calc(100vh - 228px) !important; position: fixed !important; width:20%; margin-top: 2px; }');
    addGlobalStyle('.main-chat-panel.panel-heading { height:37px !important; }');
    addGlobalStyle('#messages { height:calc(87vh - 228px) !important; }');
    addGlobalStyle('.main-page { margin-left:20% !important; width:80% !important; margin-right:0 !important; padding-right:0 !important; }');
    addGlobalStyle('.main-chat-panel .form-group>br,.main-chat-panel .form-group>.text-muted {display:none; }');
    addGlobalStyle('.main-chat-panel .panel-footer { height:80px !important; }');
    addGlobalStyle('.chat-tab {background-color: #333; border: 1px solid #666; border-radius: 0px 0px 3px 3px !important; }');
    addGlobalStyle('.nav-pills>li.active>a {background:#5bc0de; color:#fff !important;};');
    addGlobalStyle('.nav>li>a:hover {background: #77c5dc; color:#fff !important;};')
    addGlobalStyle('.nav>li>a {margin-bottom: 2px;};');
    addGlobalStyle('.panel-footer {border-bottom-right-radius: 0px !important; border-bottom-left-radius: 0px !important;};');

    addGlobalStyle('.main-chat-panel .form-group { margin-bottom:0 !important; }');
    addGlobalStyle('p.card-text {color: silver;}');
    addGlobalStyle('.admin { color: #FF0000 !important;}');

    //footer styles
    addGlobalStyle('.percentage-circle-fill {fill: '+highlightColor+'}');
    
    //login styles
    addGlobalStyle('.jumbotron { background-color:rgba(0,0,0,0.75) !important; }');
    addGlobalStyle('.jumbotron .btn-success { background-color:'+highlightColor+' !important; border-color:black }');
    addGlobalStyle('.main-page .jumbotron { display:none !important; }');

    //dashboard styles
    addGlobalStyle('.jumbotron { display:none !important; }');
    addGlobalStyle('p.text-center {color: #6182b7;}');
    addGlobalStyle('h3.panel-title{color: #ccc; font-weight: bold;}');
    addGlobalStyle('.col-xs-6 {color: silver;}');
    addGlobalStyle('.progress { background-color: lightgray;');
    
    //inventory styles
    addGlobalStyle('.inventory-panel { max-height:none !important; overflow-y:visible !important; }');
    addGlobalStyle('.inventory-panel>.panel-body { max-height:none !important; overflow-y:visible !important;  }');
    addGlobalStyle('#inventory-component-table.panel-body {overflow-y: auto !important;}');

    //profile styles
    addGlobalStyle('#profile-main-div .col-xs-8 { max-height:none !important; overflow-y:visible !important; }');
    addGlobalStyle('.progress-bar {background-color:'+highlightColor+'}');
    addGlobalStyle('#profile-main-div .col-xs-8 div.panel-body{ max-height: 405px !important;}');

    //market stuffs
    addGlobalStyle('.modal-footer {background-color: #333;}');
    addGlobalStyle('.modal-body {background-color: #333;}');
    addGlobalStyle('.modal-header {background-color: #111;}');
    addGlobalStyle('.fren {color: #ff1c95;}');

    if(darkMode) enterDarkMode();
    if(displayChatHeading == false) {
        addGlobalStyle('.main-chat-panel>.panel-heading {display:none}');
        addGlobalStyle('#messages { height:calc(100vh - 191px) !important; overflow-y:default !important; }');
    }

})();
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
function enterDarkMode(){
    addGlobalStyle('.navbar-default { background-color:#333; color:#ccc !important; }');
    addGlobalStyle('.navbar-default .navbar-nav>li>a { color:#999 !important }');
    addGlobalStyle('.navbar-default .navbar-nav>li>a:hover { color:#ccc !important }');
    addGlobalStyle('.navbar-default .navbar-nav>li>a:focus { color:#ccc !important }');
    addGlobalStyle('.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover { background-color: #1a1a1a !important;');
    addGlobalStyle('.percentage-circle-contents { color:#ccc !important }');
    addGlobalStyle('.percentage-circle-contents>img { filter: invert(100%); }');
    addGlobalStyle('.percentage-circle-fg {fill: black;}');
    addGlobalStyle('.panel, .breadcrumb { background-color: rgba(0,0,0,0.5) !important; }');
    addGlobalStyle('body { color:#ccc !important; }');
    addGlobalStyle('a { color:'+highlightColor+' !important; }');
    addGlobalStyle('.main-chat-panel .panel-footer { background-color:rgba(0,0,0,0.5) !important; }');
    addGlobalStyle('.panel-success>.panel-heading, .alert-success, .panel-default>.panel-heading, .panel-info>.panel-heading, .panel-primary>.panel-heading {color: #ccc; background-color: #333; border-color: #666;}');
    addGlobalStyle('.panel-success, .panel-default, .panel-info, .panel-primary { border-color: #666;}');
    addGlobalStyle('.dropdown-menu,.list-group-item,.well { background-color:#333; }');
    addGlobalStyle('.dropdown-menu a:hover { background-color:#111 !important; }');
    addGlobalStyle('.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li>a:hover{ background-color:#333 !important; }');
    addGlobalStyle('.actions button.btn-sm {background-color: '+highlightColor+'; border-color:black; color: white;}');
    addGlobalStyle('.actions button.btn-sm.btn-danger {background-color: #d9534f; border-color:black; color: white; }');
    addGlobalStyle('.table>tbody>tr.success>td, .table>tbody>tr.success>th, .table>tbody>tr>td.success, .table>tbody>tr>th.success, .table>tfoot>tr.success>td, .table>tfoot>tr.success>th, .table>tfoot>tr>td.success, .table>tfoot>tr>th.success, .table>thead>tr.success>td, .table>thead>tr.success>th, .table>thead>tr>td.success, .table>thead>tr>th.success{background-color: rgba(255,255,255,0.25) !important;}');
    addGlobalStyle('.panel-footer {background-color:rgba(0,0,0,0.2); height: 100px !important;}');
    addGlobalStyle('select {background-color:#333}');
    addGlobalStyle('.table-striped>tbody>tr:nth-of-type(odd) { background: none !important}');
    addGlobalStyle('.table-hover>tbody>tr:hover { background-color: rgba(0,0,0,0.4) !important}');
    addGlobalStyle('.popover { background-color: #333 !important}');
    addGlobalStyle('.popover-title { background-color: #333 !important}');
    addGlobalStyle('#main-chat-text-area {background-color: #333 !important;color: #ccc !important}');
    addGlobalStyle('.container-fluid:first-of-type {background-color: #1a1a1a;background-image: none !important}');
    addGlobalStyle('#bs-example-navbar-collapse-1 {background: linear-gradient(#333,#1a1a1a);}');
    addGlobalStyle('.container-fluid {padding-left: 0 !important; padding-right:0 !important;}');
    addGlobalStyle('.navbar-default .row {padding-left: 0 !important; padding-right:0 !important;background: linear-gradient(#1a1a1a, #333);}');
    
    //timestampremoval borrowed from Stretch's Talibri Chemo
    addGlobalStyle('#messages .card-text br:first-of-type { display:none');
    fixChatStamps();
    $('#messages').bind('DOMNodeInserted', function() {
        fixChatStamps();
    });
}
$( document ).on('turbolinks:load', function() {
    fixChatStamps();
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
    $('#messages').bind('DOMNodeInserted', function() {
        fixChatStamps();
    });
});
var lastSender = '';
var lastTime = '';

function fixChatStamps(){
    $('#messages .card-text').each(function(){
        var dt = $(this).children(".chat-date").html();
        var thisSender = $(this).children("span:first").children("a").html();
        if(dt.match(/\d\d\/\d\d \d\d:\d\d/)) {
            dt=dt.replace(/\d\d\/\d\d /,'');
            var thisTime = dt;
            if(thisSender == lastSender) {
                $(this).children("span:first").children("a").html("");
            } else if (thisSender == '') {
                $(this).children("span:first").children("a").html("");
            } else {
                $(this).children("span:first").children("a").html(thisSender);
                lastSender = thisSender;
            }

            if(thisTime == lastTime) {
                $(this).children(".chat-date").html("");
            } else if (thisTime == '') {
                $(this).children(".chat-date").html("");
            } else {
                $(this).children(".chat-date").html(thisTime);
                lastTime = thisTime;
            }
        }
    });
}
    //Beta FriendsList
//while(document.getElementsByClassName('buyer-seller') <= 1){
// friendList();
//}
//    var marketNames = document.getElementsByClassName('buyer-seller');
//console.log(marketNames);

//var friends = ['deverin', 'stretch','Bloopy','Pirion']; //Put someones name here using this format , 'persons ign' always put a colon first ebfore adding someone
//console.log(friends[4]);
//var r = 0;
//var i = 0;
//var u = 0;
//function friendList(){
//for(var r = 0; r < 100; r++){
   // for (var i = 0; i < marketNames.length; i++){
     //  for(var u = 0; u < friends.length; u++){
      //   if(indexOf(friends[u], 0) != -1){
      //      marketNames[i].classList.add("fren");
       //     }else{}
     //  }
      //  if(u >= friends.length){
       //     u = 0;
       //    }
      //  if(i >= marketNames.length){
      //     i = 0;
       //    }
  //  }
//}
 //       if(r >= 100){
 //       r = 0;
 //   }
//}
