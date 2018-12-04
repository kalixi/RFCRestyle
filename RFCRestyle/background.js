"use strict";
function popped( p ) {
	p.onDisconnect.removeListener( popped );
	chrome.storage.local.get( s => {
		if ( s.sync ) {
			chrome.storage.sync.set( s );
		}
	} );
}
chrome.runtime.onConnect.addListener( p => {
	if ( p.name === "init" ) {
		chrome.pageAction.show( p.sender.tab.id );
		chrome.runtime.onMessage.addListener( ( msg, msgSndr ) => {
			switch ( Object.keys( msg )[ 0 ] ) {
				case "ao": chrome.tabs.reload();
					break;
				case "af": chrome.tabs.insertCSS( msgSndr.tab.id, { file: "init.css" } );
					break;
				default: chrome.tabs.update( msgSndr.tab.id, { url: msg.f } );
			}
		} );
	} else {
		p.onDisconnect.addListener( popped );
	}
} );
