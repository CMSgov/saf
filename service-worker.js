importScripts("/precache-manifest.31d9c60620d2e26a0c9534ee2d0975e3.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener("message", e => {
  if (!e.data) {
    return;
  }
  switch (e.data) {
    case "skipWaiting":
      self.skipWaiting();
      break;
    default:
      // NOOP
      break;
  }
});

// importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js");

// var config = {
//   apiKey: "AIzaSyBb-1hlnQfIELblC3HUqzI-M29xiwoMYds",
//   authDomain: "cms-saf.firebaseapp.com",
//   databaseURL: "https://cms-saf.firebaseio.com",
//   projectId: "cms-saf",
//   storageBucket: "cms-saf.appspot.com",
//   messagingSenderId: "157303555912",
//   appId: "1:157303555912:web:04c0e431777d1ee41f557d"
// };

// firebase.initializeApp(config);

// const messaging = firebase.messaging();

var dataPush = {}

self.addEventListener('push', (event)=>{
    if (event.data) {
        let data = JSON.parse(event.data.text());
        dataPush = data.notification
        dataPush.body = JSON.parse(dataPush.body);
    }
    var options = {
        body: dataPush.body.body,
        icon: 'img/icons/favicon-32x32.png',
        dir: 'ltr',
        image: dataPush.image,
        badge: 'img/icons/favicon-32x32.png',
        tag: dataPush.tag,
        requireInteraction:true,
        renotify: true,
        actions: [{
            action: 'register',
            title: 'Register'
        },{
            action: 'visit',
            title: 'view Event'
        }]
    };
    event.waitUntil(self.registration.showNotification(dataPush.title, options));
}
);
self.addEventListener('notificationclick', function(event) {
    if (event.action === 'register') {
        clients.openWindow(dataPush.body.regLink);
    }else if(event.action === 'visit'){
        clients.openWindow("/events/"+dataPush.body.eventID);
    }else{
        clients.openWindow("/");
    }
    event.notification.close();
}, false);

workbox.clientsClaim();

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

