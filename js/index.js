/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

var destinationType;
var bildBreite;

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        destinationType = navigator.camera.DestinationType;
    };

    $("#aufnahme").click(function () {
        navigator.camera.getPicture(onSuccess1, onFail, {
            quality: 50, destinationType: destinationType.DATA_URL
        });
    });
    $("#loeschen").click(function () {
        $('#bild').css({
            'display': "none"
        });
        $("#meldung").html('Bildanzeige gelöscht');
    });
    $("#speichern").click(function () {
        navigator.camera.getPicture(onSuccess2, onFail, {
            quality: 50, destinationType: destinationType.FILE_URI,
            saveToPhotoAlbum: true,
            encodingType: navigator.camera.EncodingType.PNG
        });
    });
    function onSuccess1(imageData) {
        bildBreite = (screen.width * 0.9) + "px";
        $('#bild').attr('src', "data:image/jpeg;base64," + imageData);
        $('#bild').css({
            'display': "block", 'width': bildBreite, 'margin': 'auto'
        });
        $("#meldung").html('Aufnahme erfolgreich');
    }
    function onSuccess2(imageData) {
        $("#meldung").html('Aufnahme erfolgreich gespeichert');
    }
    function onFail(message) {
        $("#meldung").html('Fehler bei der Aufnahme: ' + message);
        $('#bild').css({
            'display': "none"
        });
    }

} )();