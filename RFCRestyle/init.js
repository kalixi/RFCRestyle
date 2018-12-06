"use strict";
( function( A ) {
	let _r = !1;
	const
		 B = "textContent",
		 C = "Element",
		 D = "class",
		 E = "Child",
		 F = "append" + E,
		 G = D + "List",
		 H = "Sibling",
		 I = "legend",
		 J = chrome,
		 K = J.storage,
		 L = K.sync,
		 M = L.get,
		 N = K.local,
		 O = N.get,
		 P = J.runtime,
		 Q = P.sendMessage,
		 R = "Attribute",
		 S = "set" + R,
		 T = "parent",
		 U = T + C,
		 V = "content",
		 W = "remove",
		 X = "create",
		 Y = "title",
		 Z = "style",
		AA = "href",
		AB = "querySelector",
		AC = "insertBefore",
		AD = "next" + H,
		AE = "innerHTML",
		AF = "accesskey",
		AG = "previous",
		AH = "Listener",
		AI = "addEvent" + AH,
		AJ = "cyrillic",
		AK = "#404040",
		AL = /^\/(?:id|rfc)\/(rfc(?:[0-9]+)|draft-(?:[a-zA-Z0-9\-]+))(?:\.txt)?$/.exec( location.pathname ),
		BA = ( a, b ) => ( b || A )[ AB ]( a ),
		BB = ( a, b ) => Object.getOwnPropertyNames( a ).forEach( b ),
		BC = a => {
			a = a.prfls[ a.prfl ];
			if ( !!AL ) {
				if ( a.rdrct ) Q( { u: "https://tools.ietf.org/html/" + AL[ 1 ] } );
			} else if ( a.styl ) {
				let b = "https://fonts.googleapis.com/css?family=" + a.fnt.replace( / /g, "+" ) + ":400,700&amp;subset=" + [ AJ, "greek", "latin", "greek," + AJ ].join( "-ext," ),
					c = a.fzzy / 10 + "rem ",
					d = a.fzzy / 20 + "rem",
					e = f => A[ X + C ]( f || "button" );
				if ( !~[ "monospace", "Lucida Console", "Consolas", "Courier" ].indexOf( a.fnt ) && !BA( 'link[href="' + b + '"]' ) ) {
					let g = e( "link" );
					g.rel = Z + "sheet";
					g.type = "text/css";
					g[ AA ] = b;
					A.head[ F ]( g );
				}
				BA( Z )[ B ] = ":root{--" + [
					'a:"' + a.fnt + '",monospace!important',
					"b:0 0 " + c + c + a.bodybg,
					"c:" + a.htmlbg,
					"d:" + a.bodybg,
					"e:" + a.slctn,
					"f:" + a.nrml,
					"g:" + a.lnk,
					"h:" + a.vha,
					"i:0 0 " + d + " 0",
					"j:0 0 0 " + d,
					"k:.1rem " + a.ul,
					"l:" + d,
					"m:" + c,
					"n:" + a.fntsz + "px",
					"o:" + ( a.lnkwght ? "700" : "400" )
				].join( ";--" ) + "}.whitespace,a.invisible,.grey,.grey a:link,.grey a:visited{" +
					( a.continuous ? "display:none}pre{margin:0" : "color:" + a.lght +
					"}pre{margin:.4rem 0 0 0;border-top:1px dotted " + a.lght ) + "}";
				if ( !_r ) {
					let h = e(),
						i = e(),
						j = e( "nav" ),
						k = BA( "#" + I ),
						l = k[ U ],
						m = k[ AG + C + H ],
						n = A[ AB + "All" ]( "pre" ),
						o = ( p, q ) => {
							let r = e( "a" );
							r[ B ] = p;
							r[ AA ] = q;
							j[ F ]( r );
						},
						s = t => t.nodeType === 3,
						u = ( v, w ) => {
							if ( s( v ) ) {
								let x = e( "span" ), y;
								v[ B ].split( w ).forEach( z => {
									y = A[ X + "TextNode" ]( z );
									if ( w.test( z ) ) {
										y = e( "span" );
										y[ G ].add( "whitespace" );
										y[ B ] = z;
									}
									x[ F ]( y );
								} );
								v[ T + "Node" ][ "replace" + E ]( x, v );
							}
						};
					Q( { c: !0 }, () => {
						h[ S ]( D, m[ "get" + R ]( D ) );
						h[ Y ] = m[ Y ];
						l[ AE ] = BA( "script" )[ B ].match( /Colou?r legend[^"]+/ );
						l[ Y ] = "";
						l.id = I;
						l[ W + R ]( Z );
						l[ S ]( "tabindex", 0 );
						l[ S ]( D, k[ "get" + R ]( D ) );
						l[ U ][ AC ]( h, l );
						h[ S ]( AF, "l" );
						h[ B ] = "Color " + I + " ( alt+L )";
						h[ F ]( l );
						i.id = "toc";
						i[ S ]( AF, "t" );
						i[ AE ] = "<p>Table of " + V + "s ( alt+T )</p>";
						o( "Top", "#" + I );
						i[ F ]( j );
						i[ AI ]( "blur", () => i[ G ][ W ]( "open" ) );
						A[ AI ]( "focusin", aa => i[ G ].toggle( "open", ~aa.path.indexOf( i ) ) );
						A.body[ AC ]( i, BA( "." + V ) );
						BB( n, ab => {
							let ac = n[ ab ],
								ad = BA( ".selflink", ac ),
								ae = ac[ "first" + C + E ],
								af = ae[ AD ];
							if ( ad ) o( ad[ U ][ B ], ad[ Q ] );
							if ( ac[ G ].contains( "newpage" ) ) {
								if ( s( af ) && af[ B ].length === 1 ) ac[ W + E ]( af );
								u( ae[ "next" + C + H ][ AD ], /(^\n+|\n+$)/g );
							}
							u( ac[ "last" + C + E ][ AG + H ], /(\n+$)/ );
						} );
					} );
					_r = !0;
				}
			} else if ( _r ) Q( { r: !0 } );
		},
		BD = a => a.toString( 16 ).padStart( 2, "0" ),
		BE = a => {
			BB( a, b => {
				if ( typeof a[ b ] === "object" ) a[ b ] = "#" + BD( a[ b ].r ) + BD( a[ b ].g ) + BD( a[ b ].b );
			} );
			if ( typeof a.fzzy !== "number" ) a.fzzy = 8;
			return a;
		};
	P.connect( { name: "i" } );
	M( a => {
		if ( a.sync ) {
			BC( a );
			N.set( a );
		} else {
			O( b => {
				BC( b = b.prfl ? b : {
					sync: !1,
					prfl: "Foo",
					prfls: {
						Foo: Object.assign( {
							prfl: "Foo",
							fnt: "Inconsolata",
							htmlbg: AK,
							bodybg: "#e0e0e0",
							slctn: "#c0c0c0",
							nrml: AK,
							lght: "#a0a0a0",
							lnk: "#0040c0",
							vha: "#009123",
							continuous: !0,
							lnkwght: !0,
							rdrct: !1,
							styl: !0,
							ul: "none",
							fntsz: 16,
							fzzy: 8
						}, BE( b ) )
					}
				} );
				N.set( b );
			} );
		}
		K.onChanged[ "add" + AH ]( ( c, d ) => {
			if ( d === "sync" ) {
				M( e => {
					if ( e.sync && !c.sync ) O( f => BC( f ) );
				} );
			} else if ( c.sync ) {
				if ( c.sync.newValue ) O( g => L.set( g ) );
				else L.clear();
			} else O( h => BC( h ) );
		} );
	} );
} ( document ) );
