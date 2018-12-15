"use strict";
const D = document,
  P = D.querySelector( "pre" ),
  B = D.createElement( "base" );
B.href = "https://tools.ietf.org/html/";
B.target = "_blank";
D.head.appendChild( B );
P.style.cssText = "width:80ch;margin:0 auto 2em;";
P.innerHTML = P.textContent.replace( /(?:\n| (RFC|BCP))(0*([0-9]+))/g, ( m, a, b, c ) => ( a ? " " : "<br>" ) + '<a href="' + ( a ? a.toLowerCase() : ( /bcp-index/.test( location.pathname ) ? "bcp" : "rfc" ) ) + c + '">' + ( a || "" ) + b + '</a>' );