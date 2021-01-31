


/* 

    App Name    : Bycicle - Responsive Admin Theme
    Author      : Pixelfarm.in
    Author URI  : http://Pixelfarm.in/


*/



/* global jvm */

var Maps = function (){	   
    
    
    var handelWorldMap = function () {

        $('.world-mile-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: 'transparent',
            series: {
                regions: [{
                        values: gdpData,
                        scale: ['#17BAE6', '#02A2C6'],
                        normalizeFunction: 'polynomial'
                    }]
            },
            hoverOpacity: 0.7,
            hoverColor: false
        });

    };  // handle World Map
    
    var handelUSAMap = function () {

        var fivedays = {
            "US-WA": 9,
            "US-ID": 26,
            "US-MT": 6,
            "US-WY": 13,
            "US-CA": 15,
            "US-AZ": 25,
            "US-CO": 4,
            "US-KS": 21,
            "US-TX": 14,
            "US-TN": 28,
            "US-IL": 26,
            "US-IN": 18,
            "US-UT": 17
        };

        var fifteen = {
            "US-WA": 13,
            "US-ID": 8,
            "US-MT": 20,
            "US-WY": 140,
            "US-CA": 19,
            "US-AZ": 17,
            "US-CO": 40,
            "US-KS": 21,
            "US-TX": 17,
            "US-TN": 21,
            "US-IL": 22,
            "US-IN": 4,
            "US-UT": 13
        };

        var fifteenplus = {
            "US-WA": 90,
            "US-ID": 22,
            "US-MT": 60,
            "US-WY": 130,
            "US-CA": 145,
            "US-AZ": 228,
            "US-CO": 46,
            "US-KS": 210,
            "US-TX": 109,
            "US-TN": 208,
            "US-IL": 265,
            "US-IN": 183,
            "US-UT": 157
        };

        $(function () {
            new jvm.Map({
                container: $('#usa-chart'),
                map: 'us_aea',
                backgroundColor: 'transparent',
                regionLabelStyle: {
                    initial: {
                        'font-family': 'DIN Next LT Pro',
                        'font-size': '10',
                        'font-weight': 'normal',
                        fill: '#FFFFFF'
                    },
                    hover: {
                        fill: '#FFFFFF'
                    }
                },
                labels: {
                    regions: {
                        render: function (code) {
                            var doNotShow = ['US-RI', 'US-DC', 'US-DE', 'US-MD'];

                            if (doNotShow.indexOf(code) === -1) {
                                return code.split('-')[1];
                            }
                        }
                    }
                }, // End labels

                regionStyle: {
                    initial: {
                        fill: '#b3b5c1'
                    }
                }, // End regionStyle

                series: {
                    regions: [{
                            scale: {
                                high: '#EB6841',
                                mid: '#FFBE40',
                                low: '#94C64B'
                            },
                            attribute: 'fill',
                            values: {
                                "US-WA": 'low',
                                "US-ID": 'high',
                                "US-MT": 'low',
                                "US-WY": 'mid',
                                "US-CA": 'mid',
                                "US-AZ": 'high',
                                "US-CO": 'low',
                                "US-KS": 'high',
                                "US-TX": 'mid',
                                "US-TN": 'high',
                                "US-IL": 'high',
                                "US-IN": 'mid',
                                "US-UT": 'mid'
                            }

                        }]
                }, // End Series

                onRegionTipShow: function (e, el, code) {
                    el.html(el.html() + ' <br>0-5 days : ' + fivedays[code] + '<br>10-15 days : ' + fifteen[code] + '<br>15+ days : ' + fifteenplus[code]);
                }

            });
        }); 
		
    };  //  Function to handel USA Map
    
    var handelAfricaMap = function () {

        $(function () {
            new jvm.Map({
                container: $('.mapAfrica'),
                map: 'africa_mill',
                backgroundColor: 'transparent',
                
                regionLabelStyle: {
                    initial: {
                        'font-family': 'DIN Next LT Pro',
                        'font-size': '9',
                        'font-weight': 'normal',
                        fill: '#FFFFFF'
                    },
                    hover: {
                        fill: '#FFFFFF'
                    }
                },
                
                labels: {
                    regions: {
                        render: function (code) {
                            var doNotShow = ['TG', 'CM', 'SL', 'GN'];

                            if (doNotShow.indexOf(code) === -1) {
                                return code.split('-')[1];
                            }
                        }
                    }
                }, // End labels

                regionStyle: {
                    initial: {
                        fill: '#b3b5c1'
                    }
                }, // End regionStyle

                series: {
                    regions: [{
                            scale: {
                                BF: '#25b2c3', DJ: '#2c3d73', BI: '#25b2c3',
                                BJ: '#92d236', ZA: '#92d236', BW: '#2c3d73',
                                DZ: '#25b2c3', ET: '#25b2c3', RW: '#f7a71c', TZ: '#f7a71c',
                                GQ: '#ee335e', NA: '#ee335e', NE: '#17bae6', NG: '#f7a71c',
                                TN: '#92d236', LR: '#ee335e', LS: '#17bae6', ZW: '#42b480',
                                TG: '#ee335e', TD: '#92d236', ER: '#25b2c3', LY: '#2c3d73',
                                GW: '#25b2c3', ZM: '#ee335e', CI: '#17bae6', EH: '#92d236',
                                CM: '#ee335e', EG: '#29b2c2', SL: '#f7a71c', CG: '#42b480',
                                CF: '#2c3d73', AO: '#29b2c2', CD: '#25b2c3', GA: '#42b480',
                                GN: '#f7a71c', GM: '#29b2c2', XS: '#f7a71c', CV: '#25b2c3',
                                GH: '#f7a71c', SZ: '#f7a71c'
                            },
                            attribute: 'fill',
                            values: {
                                "BF": 'BF',
                                "DJ": 'DJ',
                                "BI": 'BI',
                                "BJ": 'BJ',
                                "ZA": 'ZA',
                                "BW": 'BW',
                                "DZ": 'DZ',
                                "ET": 'ET',
                                "RW": 'RW',
                                "TZ": 'TZ',
                                "GQ": 'GQ',
                                "NA": 'NA',
                                "NE": 'NE',
                                "NG": 'NG',
                                "TN": 'TN',
                                "LR": 'LR',
                                "LS": 'LS',
                                "ZW": 'ZW',
                                "TG": 'TG',
                                "TD": 'TD',
                                "ER": 'ER',
                                "LY": 'LY',
                                "GW": 'GW',
                                "ZM": 'ZM',
                                "CI": 'CI',
                                "EH": 'EH',
                                "CM": 'CM',
                                "EG": 'EG',
                                "SL": 'SL',
                                "CG": 'CG',
                                "CF": 'CF',
                                "AO": 'AO',
                                "CD": 'CD',
                                "GA": 'GA',
                                "GN": 'GN',
                                "GM": 'GM',
                                "XS": 'XS',
                                "CV": 'CV',
                                "GH": 'GH',
                                "SZ": 'SZ',
                            }

                        }]
                }   // End Series                

            });
        }); 
		
    };  //  Function to handel Africa Map
    
    var handelIndiaMap = function () {

        var literacy = {
            "IN-BR": 63.82,
            "IN-PY": 86.55,
            "IN-DD": 87.07,
            "IN-DN": 77.65,
            "IN-DL": 86.34,
            "IN-NL": 80.11,
            "IN-WB": 77.08,
            "IN-HR": 76.64,
            "IN-HP": 83.78,
            "IN-AS": 73.18,
            "IN-UT": 79.63,
            "IN-JH": 67.63,
            "IN-JK": 68.74,
            "IN-UP": 69.72,
            "IN-SK": 82.20,
            "IN-MZ": 91.58,
            "IN-CT": 71.04,
            "IN-CH": 86.43,
            "IN-GA": 87.40,
            "IN-GJ": 79.31,
            "IN-RJ": 67.06,
            "IN-MP": 70.63,
            "IN-OR": 73.45,
            "IN-TN": 80.33,
            "IN-AN": 86.27,
            "IN-AP": 67.41,
            "IN-TR": 87.75,
            "IN-AR": 66.95,
            "IN-KA": 75.60,
            "IN-PB": 76.68,
            "IN-ML": 75.48,
            "IN-MN": 79.85,
            "IN-MH": 82.91,
            "IN-KL": 93.91
        };
        
        var SexRatio = {
            "IN-BR": 916,
            "IN-PY": 1038,
            "IN-DD": 618,
            "IN-DN": 775,
            "IN-DL": 866,
            "IN-NL": 931,
            "IN-WB": 947,
            "IN-HR": 877,
            "IN-HP": 974,
            "IN-AS": 954,
            "IN-UT": 963,
            "IN-JH": 947,
            "IN-JK": 883,
            "IN-UP": 908,
            "IN-SK": 889,
            "IN-MZ": 975,
            "IN-CT": 991,
            "IN-CH": 818,
            "IN-GA": 968,
            "IN-GJ": 918,
            "IN-RJ": 926,
            "IN-MP": 930,
            "IN-OR": 978,
            "IN-TN": 995,
            "IN-AN": 878,
            "IN-AP": 993,
            "IN-TR": 961,
            "IN-AR": 920,
            "IN-KA": 968,
            "IN-PB": 893,
            "IN-ML": 986,
            "IN-MN": 987,
            "IN-MH": 946,
            "IN-KL": 1084
        };


        $(function () {
            new jvm.Map({
                container: $('.mapIndia'),
                map: 'in_merc',
                backgroundColor: 'transparent',
                regionLabelStyle: {
                    initial: {
                        'font-family': 'DIN Next LT Pro',
                        'font-size': '10',
                        'font-weight': '500',
                        fill: '#FFFFFF'
                    },
                    hover: {
                        fill: '#FFFFFF'
                    }
                },
                labels: {
                    regions: {
                        render: function (code) {
                            var doNotShow = ['IN-PY', 'IN-DD', 'IN-DN', 'IN-AN'];

                            if (doNotShow.indexOf(code) === -1) {
                                return code.split('-')[1];
                            }
                        }
                    }
                }, // End labels

                regionStyle: {
                    initial: {
                        fill: '#b3b5c1'
                    }
                }, // End regionStyle

                series: {
                    regions: [{
                            scale: {
                                INBR: '#93ba3d', 
                                INPY: '#f05445', 
                                INDD: '#f05445', 
                                INDN: '#f05445', 
                                INDL: '#f05445', 
                                INNL: '#42B480', 
                                INWB: '#42B480', 
                                INHR: '#fbc934', 
                                INHP: '#42B480', 
                                INAS: '#fbc934', 
                                INUT: '#454952', 
                                INJH: '#454952', 
                                INJK: '#454952', 
                                INUP: '#42B480', 
                                INSK: '#42B480', 
                                INMZ: '#42B480', 
                                INCT: '#12a3b8', 
                                INCH: '#12a3b8', 
                                INGA: '#12a3b8', 
                                INGJ: '#17BAE6', 
                                INRJ: '#12a3b8', 
                                INMP: '#f77f71', 
                                INOR: '#17BAE6', 
                                INTN: '#afcc60', 
                                INAN: '#17BAE6', 
                                INAP: '#f05445', 
                                INTR: '#17BAE6', 
                                INAR: '#17BAE6', 
                                INKA: '#fbc934', 
                                INPB: '#fbc934', 
                                INML: '#17BAE6', 
                                INMN: '#f05445', 
                                INMH: '#454952', 
                                INKL: '#93ba3d'
                            },
                            attribute: 'fill',
                            values: {
                                "IN-BR": 'INBR', 
                                "IN-PY": 'INPY', 
                                "IN-DD": 'INDD', 
                                "IN-DN": 'INDN', 
                                "IN-DL": 'INDL', 
                                "IN-NL": 'INNL', 
                                "IN-WB": 'INWB', 
                                "IN-HR": 'INHR', 
                                "IN-HP": 'INHP', 
                                "IN-AS": 'INAS', 
                                "IN-UT": 'INUT', 
                                "IN-JH": 'INJH', 
                                "IN-JK": 'INJK', 
                                "IN-UP": 'INUP', 
                                "IN-SK": 'INSK', 
                                "IN-MZ": 'INMZ', 
                                "IN-CT": 'INCT', 
                                "IN-CH": 'INCH', 
                                "IN-GA": 'INGA', 
                                "IN-GJ": 'INGJ', 
                                "IN-RJ": 'INRJ', 
                                "IN-MP": 'INMP', 
                                "IN-OR": 'INOR', 
                                "IN-TN": 'INTN', 
                                "IN-AN": 'INAN', 
                                "IN-AP": 'INAP', 
                                "IN-TR": 'INTR', 
                                "IN-AR": 'INAR', 
                                "IN-KA": 'INKA', 
                                "IN-PB": 'INPB', 
                                "IN-ML": 'INML', 
                                "IN-MN": 'INMN', 
                                "IN-MH": 'INMH', 
                                "IN-KL": 'INKL'
                            }

                        }]
                }, // End Series

                onRegionTipShow: function (e, el, code) {
                    el.html(el.html() + ' <br><i class="ti-book"></i> Literacy : '  + literacy[code] + ' <br><i class="ti-user"></i> Sex Ratio : '  + SexRatio[code]);
                }

            });
        }); 
		
    };  //  Function to handel Indian Map
    
    var handelEuropeMap = function () {      

        $(function () {
            new jvm.Map({
                container: $('.mapEurope'),
                map: 'europe_merc',
                backgroundColor: 'transparent',                
                regionStyle: {
                    initial: {
                        fill: '#b3b5c1'
                    }
                } // End regionStyle

            });
        }); 
		
    };  //  Function to handel Europe Map
    
    
    return {
        init: function() {

            handelUSAMap();
            handelWorldMap();
            handelAfricaMap();
            handelIndiaMap();
            handelEuropeMap();

        }
        
    };
}();    // Handel Maps
