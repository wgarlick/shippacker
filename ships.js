var pdfPages = [];

var shipData = [{
      "shipid":"1",
	  "shipname":"A-Wing",
	  "faction":"Rebel",
	  "wave":2,
	  "shipfiles":[
		{"filename":"awing.png", "width":1200, "height":1014}
	  ],
	  "gearboxfiles":[
		{"filename":"awinggb.png", "width":1764, "height":1185}
	  ]
     },
     {
      "shipid":"2",
      "shipname":"B-Wing",
	  "faction":"Rebel",
	  "wave":3,
	  "shipfiles":[
		{"filename":"bwing.png", "width":2046, "height":1647}
	  ],
	  "gearboxfiles":[
		{"filename":"bwinggb.png", "width":1815, "height":1194}
	  ]
     },
	 {
	  "shipid":"3",
      "shipname":"X-Wing (Core)",
	  "faction":"Rebel",
	  "wave":0.1,
	  "shipfiles":[
		{"filename":"xwing.png", "width":1586, "height":1186}
	  ],
	  "gearboxfiles":[
		{"filename":"xwingcoregb.png", "width":1773, "height":1191}
	  ]
     },
	 {
      "shipid":"4",
      "shipname":"Y-Wing",
	  "faction":"Rebel",
	  "wave":1,
	  "shipfiles":[
		{"filename":"ywing.png", "width":1378, "height":1288}
	  ],
	  "gearboxfiles":[
		{"filename":"ywinggb.png", "width":1772, "height":1184}
	  ]
     },
	 {
      "shipid":"5",
      "shipname":"YT-2400",
	  "faction":"Rebel",
	  "wave":5,
	  "shipfiles":[
		{"filename":"yt2400I.png",  "width":1633, "height":2381},
		{"filename":"yt2400II.png", "width":1782, "height":3036}
	  ],
	  "gearboxfiles":[
		{"filename":"yt2400gb.png", "width":1540, "height":2544}
	  ]
	 },
	 {
      "shipid":"6",
      "shipname":"ARC-170",
	  "faction":"Rebel",
	  "wave":9,
	  "shipfiles":[
		{"filename":"arc170.png", "width":1419, "height":2827}
	  ],
	  "gearboxfiles":[
		{"filename":"arc170gb.png", "width":1760, "height":1186}
	  ]
	 },
	 {
      "shipid":"7",
      "shipname":"E-Wing",
	  "faction":"Rebel",
	  "wave":4,
	  "shipfiles":[
		{"filename":"ewing.png", "width":1358, "height":1046}
	  ],
	  "gearboxfiles":[
		{"filename":"ewinggb.png", "width":1765, "height":1216}
	  ]
	 },
	 {
      "shipid":"8",
      "shipname":"Ghost",
	  "faction":"Rebel",
	  "wave":8,
	  "shipfiles":[
		{"filename":"vcx100I.png",  "width":2342, "height":3069},
		{"filename":"vcx100II.png", "width":2375, "height":3189},
		{"filename":"vcx100III.png", "width":1859, "height":3032}
	  ],
	  "gearboxfiles":[
		{"filename":"vcx100gb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
      "shipid":"9",
      "shipname":"YT-1300 Heroes",
	  "faction":"Rebel",
	  "wave":10.1,
	  "shipfiles":[
		{"filename":"yt1300horI.png",  "width":1983, "height":2652},
		{"filename":"yt1300horII.png", "width":1910, "height":2147},
		{"filename":"yt1300horIII.png", "width":1519, "height":2706}
	  ],
	  "gearboxfiles":[
		{"filename":"yt1300horgb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
      "shipid":"10",
      "shipname":"T70 X-Wing Heroes",
	  "faction":"Rebel",
	  "wave":10.1,
	  "shipfiles":[
		{"filename":"t70xwing.png", "width":1625, "height":1158}
	  ],
	  "gearboxfiles":[
		{"filename":"t70horgb.png", "width":1828, "height":1218}
	  ]
	 },
	 {
      "shipid":"11",
      "shipname":"Hounds Tooth",
	  "faction":"Scum",
	  "wave":7,
	  "shipfiles":[
		{"filename":"yv666I.png",  "width":2297, "height":3138},
		{"filename":"yv666II.png", "width":2239, "height":2539},
		{"filename":"yv666III.png", "width":1815, "height":2755}
	  ],
	  "gearboxfiles":[
		{"filename":"yv666gb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
      "shipid":"12",
      "shipname":"Aggressor",
	  "faction":"Scum",
	  "wave":6,
	  "shipfiles":[
		{"filename":"ig2000.png", "width":2038, "height":1532}
	  ],
	  "gearboxfiles":[
		{"filename":"ig2000gb.png", "width":1544, "height":2544}
	  ]
     },
	 {
      "shipid":"13",
      "shipname":"Tie Fighter (Core)",
	  "faction":"Imperial",
	  "wave":0.1,
	  "shipfiles":[
		{"filename":"tiefighter.png", "width":2075, "height":1495}
	  ],
	  "gearboxfiles":[
		{"filename":"tiefightercoregb.png", "width":1748, "height":1168}
	  ]
     },
	 {
      "shipid":"14",
      "shipname":"Tie Fighter",
	  "faction":"Imperial",
	  "wave":1,
	  "shipfiles":[
		{"filename":"tiefighter.png", "width":2075, "height":1495}
	  ],
	  "gearboxfiles":[
		{"filename":"tiefightergb.png", "width":1748, "height":1168}
	  ]
     },
	 {
	  "shipid":"15",
      "shipname":"X-Wing",
	  "faction":"Rebel",
	  "wave":1,
	  "shipfiles":[
		{"filename":"xwing.png", "width":1586, "height":1186}
	  ],
	  "gearboxfiles":[
		{"filename":"xwinggb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"16",
      "shipname":"Tie Advanced",
	  "faction":"Imperial",
	  "wave":1,
	  "shipfiles":[
		{"filename":"tieadvanced.png", "width":1604, "height":1158}
	  ],
	  "gearboxfiles":[
		{"filename":"tieadvancedgb.png", "width":1728, "height":1152}
	  ]
     },
	 {
      "shipid":"17",
      "shipname":"YT-1300",
	  "faction":"Rebel",
	  "wave":2,
	  "shipfiles":[
		{"filename":"yt-1300I.png",  "width":1973, "height":2655},
		{"filename":"yt-1300II.png", "width":1919, "height":2148},
		{"filename":"yt-1300III.png", "width":1514, "height":2703}
	  ],
	  "gearboxfiles":[
		{"filename":"yt-1300gb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
      "shipid":"18",
      "shipname":"Firespray",
	  "faction":"Imperial",
	  "wave":2,
	  "shipfiles":[
		{"filename":"firesprayI.png",  "width":2042, "height":3049},
		{"filename":"firesprayII.png", "width":1659, "height":1507}
	  ],
	  "gearboxfiles":[
		{"filename":"firespraygb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
	  "shipid":"19",
      "shipname":"Tie Interceptor",
	  "faction":"Imperial",
	  "wave":2,
	  "shipfiles":[
		{"filename":"tieinterceptor.png", "width":1640, "height":1218}
	  ],
	  "gearboxfiles":[
		{"filename":"tieinterceptorgb.png", "width":1748, "height":1168}
	  ]
     },
	 {
	  "shipid":"20",
      "shipname":"HWK-290",
	  "faction":"Rebel",
	  "wave":3,
	  "shipfiles":[
		{"filename":"hwk-290.png", "width":1905, "height":1396}
	  ],
	  "gearboxfiles":[
		{"filename":"hwk-290gb.png", "width":1728, "height":1152}
	  ]
     },
	 {
      "shipid":"21",
      "shipname":"Lambda Shuttle",
	  "faction":"Imperial",
	  "wave":3,
	  "shipfiles":[
		{"filename":"lambda.png",  "width":2181, "height":3249}
	  ],
	  "gearboxfiles":[
		{"filename":"lambdagb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
	  "shipid":"22",
      "shipname":"Tie Bomber",
	  "faction":"Imperial",
	  "wave":3,
	  "shipfiles":[
		{"filename":"tiebomber.png", "width":1929, "height":1229}
	  ],
	  "gearboxfiles":[
		{"filename":"tiebombergb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"23",
      "shipname":"Tie Defender",
	  "faction":"Imperial",
	  "wave":4,
	  "shipfiles":[
		{"filename":"tiedefender.png", "width":1533, "height":2429}
	  ],
	  "gearboxfiles":[
		{"filename":"tiedefendergb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"24",
      "shipname":"Tie Phantom",
	  "faction":"Imperial",
	  "wave":4,
	  "shipfiles":[
		{"filename":"tiephantom.png", "width":1593, "height":1269}
	  ],
	  "gearboxfiles":[
		{"filename":"tiephantomgb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"25",
      "shipname":"Z-95",
	  "faction":"Rebel",
	  "wave":4,
	  "shipfiles":[
		{"filename":"z-95.png", "width":1361, "height":1093}
	  ],
	  "gearboxfiles":[
		{"filename":"z-95gb.png", "width":1728, "height":1152}
	  ]
     },
	 {
      "shipid":"26",
      "shipname":"VT-49 Decimator",
	  "faction":"Imperial",
	  "wave":5,
	  "shipfiles":[
		{"filename":"vt-49I.png",  "width":2045, "height":2901},
		{"filename":"vt-49II.png", "width":2001, "height":2597},
		{"filename":"vt-49III.png", "width":1705, "height":2901}
	  ],
	  "gearboxfiles":[
		{"filename":"vt-49gb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
	  "shipid":"27",
      "shipname":"Most Wanted Z-95",
	  "faction":"Scum",
	  "wave":6,
	  "shipfiles":[
		{"filename":"mw_z-95.png", "width":1357, "height":1097}
	  ],
	  "gearboxfiles":[
		{"filename":"mw_z-95gb.png", "width":1748, "height":1168}
	  ]
     },
	 {
	  "shipid":"28",
      "shipname":"Most Wanted Y-Wing",
	  "faction":"Scum",
	  "wave":6,
	  "shipfiles":[
		{"filename":"mw_y-wing.png", "width":1353, "height":1257}
	  ],
	  "gearboxfiles":[
		{"filename":"mw_y-winggb.png", "width":1748, "height":1168}
	  ]
     },
	 {
      "shipid":"29",
      "shipname":"Most Wanted Firespray",
	  "faction":"Scum",
	  "wave":6,
	  "shipfiles":"none",
	  "gearboxfiles":[
		{"filename":"mw_firespraygb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
	  "shipid":"30",
      "shipname":"Most Wanted HWK-290",
	  "faction":"Scum",
	  "wave":6,
	  "shipfiles":"none",
	  "gearboxfiles":[
		{"filename":"mw_hwk-290gb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"31",
      "shipname":"M3-A",
	  "faction":"Scum",
	  "wave":6,
	  "shipfiles":[
		{"filename":"m3-a.png", "width":1217, "height":921}
	  ],
	  "gearboxfiles":[
		{"filename":"m3-agb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"32",
      "shipname":"Starviper",
	  "faction":"Scum",
	  "wave":6,
	  "shipfiles":[
		{"filename":"starviper.png", "width":2041, "height":1741}
	  ],
	  "gearboxfiles":[
		{"filename":"starvipergb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"33",
      "shipname":"Kihraxz Fighter",
	  "faction":"Scum",
	  "wave":7,
	  "shipfiles":[
		{"filename":"kihraxz.png", "width":1449, "height":1085}
	  ],
	  "gearboxfiles":[
		{"filename":"kihraxzgb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"34",
      "shipname":"K-Wing",
	  "faction":"Rebel",
	  "wave":7,
	  "shipfiles":[
		{"filename":"k-wing.png", "width":1985, "height":1673}
	  ],
	  "gearboxfiles":[
		{"filename":"k-winggb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"35",
      "shipname":"Tie Punisher",
	  "faction":"Imperial",
	  "wave":7,
	  "shipfiles":[
		{"filename":"tiepunisher.png", "width":1465, "height":2389}
	  ],
	  "gearboxfiles":[
		{"filename":"tiepunishergb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"36",
      "shipname":"Tie Advanced Prototype",
	  "faction":"Imperial",
	  "wave":8,
	  "shipfiles":[
		{"filename":"tieadvancedprototype.png", "width":1485, "height":985}
	  ],
	  "gearboxfiles":[
		{"filename":"tieadvancedprototypegb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"37",
      "shipname":"Mist Hunter",
	  "faction":"Scum",
	  "wave":8,
	  "shipfiles":[
		{"filename":"misthunter.png", "width":2273, "height":1821}
	  ],
	  "gearboxfiles":[
		{"filename":"misthuntergb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"38",
      "shipname":"Jumpmaster 5000",
	  "faction":"Scum",
	  "wave":8,
	  "shipfiles":[
		{"filename":"jumpmaster.png", "width":1621, "height":2885}
	  ],
	  "gearboxfiles":[
		{"filename":"jumpmastergb.png", "width":1544, "height":2544}
	  ]
     },
	 {
	  "shipid":"39",
      "shipname":"Attack Shuttle",
	  "faction":"Rebel",
	  "wave":8,
	  "shipfiles":[
		{"filename":"attackshuttle.png", "width":1325, "height":1133}
	  ],
	  "gearboxfiles":[
		{"filename":"attackshuttlegb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"40",
      "shipname":"T-70 X-Wing (Core)",
	  "faction":"Rebel",
	  "wave":8.1,
	  "shipfiles":[
		{"filename":"xwingt70core.png", "width":1625, "height":1161}
	  ],
	  "gearboxfiles":[
		{"filename":"xwingt70coregb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"41",
      "shipname":"T-70 X-Wing",
	  "faction":"Rebel",
	  "wave":8.1,
	  "shipfiles":[
		{"filename":"xwingt70core.png", "width":1625, "height":1161}
	  ],
	  "gearboxfiles":[
		{"filename":"xwingt70gb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"42",
      "shipname":"Tie/fo Fighter (Core)",
	  "faction":"Imperial",
	  "wave":8.1,
	  "shipfiles":[
		{"filename":"tiefocore.png", "width":2005, "height":1437}
	  ],
	  "gearboxfiles":[
		{"filename":"tiefocoregb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"43",
      "shipname":"Tie/fo Fighter",
	  "faction":"Imperial",
	  "wave":8.1,
	  "shipfiles":[
		{"filename":"tiefocore.png", "width":2005, "height":1437}
	  ],
	  "gearboxfiles":[
		{"filename":"tiefogb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"44",
      "shipname":"Tie/sf Fighter",
	  "faction":"Imperial",
	  "wave":9,
	  "shipfiles":[
		{"filename":"tiesf.png", "width":2013, "height":1433}
	  ],
	  "gearboxfiles":[
		{"filename":"tiesfgb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"45",
      "shipname":"Protectorate Starfighter",
	  "faction":"Scum",
	  "wave":9,
	  "shipfiles":[
		{"filename":"protectorate.png", "width":1517, "height":1069}
	  ],
	  "gearboxfiles":[
		{"filename":"protectorategb.png", "width":1748, "height":1168}
	  ]
     },
	 {
      "shipid":"46",
      "shipname":"Shadow Caster",
	  "faction":"Scum",
	  "wave":9,
	  "shipfiles":[
		{"filename":"shadowcasterI.png",  "width":2213, "height":2929},
		{"filename":"shadowcasterII.png", "width":2213, "height":2929},
		{"filename":"shadowcasterIII.png", "width":1449, "height":3065}
	  ],
	  "gearboxfiles":[
		{"filename":"shadowcastergb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
	  "shipid":"47",
      "shipname":"Sabine's Tie Fighter",
	  "faction":"Rebel",
	  "wave":10,
	  "shipfiles":[
		{"filename":"sabinestie.png", "width":2064, "height":1496}
	  ],
	  "gearboxfiles":[
		{"filename":"sabinestiegb.png", "width":1728, "height":1152}
	  ]
     },
	 {
      "shipid":"48",
      "shipname":"Upsilon Shuttle",
	  "faction":"Imperial",
	  "wave":10,
	  "shipfiles":[
		{"filename":"upsilonI.png",  "width":2165, "height":2985},
		{"filename":"upsilonII.png", "width":2215, "height":3118}
	  ],
	  "gearboxfiles":[
		{"filename":"upsilongb.png", "width":1544, "height":2544}
	  ]
	 },
	 {
	  "shipid":"49",
      "shipname":"Quadjumper",
	  "faction":"Scum",
	  "wave":10,
	  "shipfiles":[
		{"filename":"quadjumper.png", "width":2128, "height":1288}
	  ],
	  "gearboxfiles":[
		{"filename":"quadjumpergb.png", "width":1728, "height":1152}
	  ]
     },
	 {
	  "shipid":"50",
      "shipname":"U-Wing",
	  "faction":"Rebel",
	  "wave":10,
	  "shipfiles":[
		{"filename":"u-wing.png", "width":1612, "height":1780}
	  ],
	  "gearboxfiles":[
		{"filename":"u-winggb.png", "width":1544, "height":2544}
	  ]
     },
	 {
	  "shipid":"51",
      "shipname":"Tie Striker",
	  "faction":"Imperial",
	  "wave":10,
	  "shipfiles":[
		{"filename":"tiestriker.png", "width":1516, "height":1364}
	  ],
	  "gearboxfiles":[
		{"filename":"tiestrikergb.png", "width":1748, "height":1168}
	  ]
     },
	 {
	  "shipid":"52",
      "shipname":"Auzituck Gunship",
	  "faction":"Rebel",
	  "wave":11,
	  "shipfiles":[
		{"filename":"auzituck.png", "width":1656, "height":1464}
	  ],
	  "gearboxfiles":[
		{"filename":"auzituckgb.png", "width":1748, "height":1168}
	  ]
     },
	 {
	  "shipid":"53",
      "shipname":"Scurrg Bomber",
	  "faction":"Scum",
	  "wave":11,
	  "shipfiles":[
		{"filename":"scurrg.png", "width":1252, "height":2492}
	  ],
	  "gearboxfiles":[
		{"filename":"scurrgscugb.png", "width":1748, "height":1168}
	  ]
     },
	 {
	  "shipid":"54",
      "shipname":"Scurrg Bomber",
	  "faction":"Rebel",
	  "wave":11,
	  "shipfiles":"none",
	  "gearboxfiles":[
		{"filename":"scurrgrebgb.png", "width":1748, "height":1168}
	  ]
     },
	 {
	  "shipid":"55",
      "shipname":"Tie Agressor",
	  "faction":"Imperial",
	  "wave":11,
	  "shipfiles":[
		{"filename":"tieagressor.png", "width":1600, "height":1188}
	  ],
	  "gearboxfiles":[
		{"filename":"tieagressorgb.png", "width":1748, "height":1168}
	  ]
     }];
	 
	
$(function() {
	// Sort the array for display
	shipData.sort(function(a,b){
		var x = a.faction.toLowerCase();
		var y = b.faction.toLowerCase();
		var an = a.shipname.toLowerCase();
		var bn = b.shipname.toLowerCase();
		if (x<y) return -1;
		if (x>y) return 1;
		if (a.wave < b.wave) return -1;
		if (a.wave > b.wave) return 1;
		if (an<bn) return -1;
		if (an>bn) return 1;
		return 0;
	});
		
    $.each(shipData, function(i, item) {
		// This is this way because I don't know what I'm doing
		//console.log(item.shipfiles);
		if((item.shipfiles != "none")){
			$('<tr class="ships" id="'+item.shipid+'">').append(
				$('<td>').text(item.shipname),
				$('<td>').append('<input type="text" class="shipQuantity" id="' + item.shipid + 'shipquantity">'),
				$('<td>').append('<input type="text" class="gearboxQuantity" id="' + item.shipid + 'gearboxquantity">')
			).appendTo('#ships_table');
		} 
		else {
			$('<tr class="ships" id="'+item.shipid+'">').append(
				$('<td>').text(item.shipname),
				$('<td>').append(),
				$('<td>').append('<input type="text" class="gearboxQuantity" id="' + item.shipid + 'gearboxquantity">')
			).appendTo('#ships_table');
		}
    });
});

function buildSheets(){
	var boxesArray = [];
	pdfPages = [];
	
	// loop through input fields to see which boxes need to be printed
	$('tr.ships').each(function(index){
		var shipId = $(this).attr("id");
		var shipQuantity = $(this).find('.shipQuantity').val();
		var gearboxQuantity = $(this).find('.gearboxQuantity').val();
		
		if(shipQuantity === undefined)
			shipQuantity = "";
		
		// If either a ship or gearbox need to be made
		if (shipQuantity.length != 0 || gearboxQuantity !=0){
			var shipInfo = shipData.filter(function (obj){
				return obj.shipid==shipId;
			});
			
			//shipInfo[0] has the object 
			var ship = shipInfo[0];
			
			// For every ship box requested put it in the print thing
			if(shipQuantity.length !=0){
	
				for(i=0;i<shipQuantity;i++){
					for (var j=0; j < ship.shipfiles.length; j++) {
						var box = {};
						box.file = ship.shipfiles[j].filename;
						box.h = ship.shipfiles[j].height;
						box.w = ship.shipfiles[j].width;				
						box.sort = Math.max(box.h,box.w);
						boxesArray.push(box);
					}
				}
			}
			if(gearboxQuantity.length !=0){
	
				for(i=0;i<gearboxQuantity;i++){
					for (var j=0; j < ship.gearboxfiles.length; j++) {
						var box = {};
						box.file = ship.gearboxfiles[j].filename;
						box.h = ship.gearboxfiles[j].height;
						box.w = ship.gearboxfiles[j].width;				
						box.sort = Math.max(box.h,box.w);
						boxesArray.push(box);
					}
				}
			}
						
		}
		
		
		//console.log(shipId + ' - ' + shipQuantity + ' - ' + gearboxQuantity);
		
		//console.log($(this).attr("id") + ' - ' + $(this).val());
		//console.log($(this).attr("id") + ' - ' + $(this).find('.shipQuantity').val());
		
	});
	
	boxesArray.sort(function(a,b){
		return b.sort - a.sort;
	});
	console.log(boxesArray);
	
		var offset = 30;
	var packer = new Packer(2550-(2*offset),3300-(2*offset));
	//var packer = new Packer(2510,3260);
	packer.fit(boxesArray);
	
	/*	
	//console.log(boxesArray);
	//console.log(pages);
	// Create a canvas element
	
	var canvas = document.createElement('canvas');
	canvas.width = 2550;
	canvas.height = 3300;
	//pages[0] = canvas;
	
	//console.log(canvas);
	//var canvass = $("#myCanvas");
	//var canvas = canvass[0]
	// Get the drawing context
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	*/
	

	function loadImage(i,block,context){
		var image = new Image();
		//image.crossOrigin="Anonymous"
		image.addEventListener('load', function(){
			context.drawImage(image,block.fit.x+offset,block.fit.y+offset,block.w,block.h);
		}, false);
		image.src = "images/" + block.file;
	}
	
	//var pdfPages = [];
	for(var n = 0; n < boxesArray.length ; n++) {
		var block = boxesArray[n];
		//console.log(block);
		if (block.fit) {
			// create canvas if needed
			var ctx;
			if(!pdfPages[block.fit.page]){
				var canvas = document.createElement('canvas');
				canvas.width = 2550;
				canvas.height = 3300;
				pdfPages[block.fit.page] = canvas;
				
				ctx = pdfPages[block.fit.page].getContext('2d');
				ctx.fillStyle = "white";
				ctx.fillRect(0, 0, pdfPages[block.fit.page].width, pdfPages[block.fit.page].height);
			}
			else {
				ctx = pdfPages[block.fit.page].getContext('2d');
			}
			
			loadImage(n,block,ctx);
	
		}
		
	}
	console.log(pdfPages)
	/*
	//download.addEventListener("click", function() {
	var pdf = new jsPDF({
	  orientation: 'portrait',
	  unit: 'in',
	  format: [8.5,11]
	})
	
	var tCanvas = $("canvas");
	console.log(tCanvas);
	//var imgData = tCanvas.toDataURL("image/jpeg", 1.0);	
	pdf.addImage(tCanvas, 0, 0,8.5,11);
	pdf.save("download.pdf");
	//},false);
	*/
	//makePdf(canvas);

	
}

makePdf = function(){
	var pdf = new jsPDF({
	  orientation: 'portrait',
	  unit: 'in',
	  format: [8.5,11]
	})
	
	//console.log(canvas);
	//console.log(pages[0]);
	//var imgData = tCanvas.toDataURL("image/jpeg", 1.0);	
	for(var i=0; i < pdfPages.length; i++){
		if(i>0) {
			pdf.addPage();
		}
		
		pdf.addImage(pdfPages[i], 0, 0,8.5,11);
	}
	pdf.save("download.pdf");
}

Packer = function(w, h) {
  this.init(w, h);
};

Packer.prototype = {

  init: function(w, h) {
	this.pages = [];
    this.pages[0] = { page:0, x: 0, y: 0, w: w, h: h };
	this.width = w;
	this.height = h;
  },

  fit: function(blocks) {
    var n, node, block;
    for (n = 0; n < blocks.length; n++) {
      block = blocks[n];
	  var p, found=false;
      for (p = 0; p < this.pages.length && found == false; p++){
		if (node = this.findNode(this.pages[p], block.w, block.h)){
			block.fit = this.splitNode(node, block.w, block.h);
			found=true;
		}
	  }
	  if (found == false) {
			//console.log("couldn't fit " + block.file + " adding another bin");
			this.pages[p] = { page:p, x: 0, y: 0, w: this.width, h: this.height };
			if (node = this.findNode(this.pages[p], block.w, block.h))
				block.fit = this.splitNode(node, block.w, block.h);
		}
    }
  },

  findNode: function(root, w, h) {
    if (root.used)
      return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
    else if ((w <= root.w) && (h <= root.h))
      return root;
    else
      return null;
  },

  splitNode: function(node, w, h) {
    node.used = true;
    node.down  = { page: node.page, x: node.x,     y: node.y + h, w: node.w,     h: node.h - h };
    node.right = { page: node.page, x: node.x + w, y: node.y,     w: node.w - w, h: h          };
    return node;
  }

}