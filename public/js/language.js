/**
 * Language-Schema:
 * - english support
 * - german support
 * Language-Functions:
 * - browser-cookies-support
 * - set/add content to div-element
 * - language-provider
 **/

var language = {
    "en": {
        "main": {
            "title": "Population Open Data"
        },
        "navbar": {
            "home": "Home",
            "map": "Map",
            "help": "Help",
            "about": "About us",
            "license": "License",
            "language": {
                "title": 'Change language &nbsp;<span class="caret"></span>',
                "english": '<b>English</b>',
                "german": 'German (Deutsch)'
            },
        },
        "index": {
            "heading" :'<h1>Introduction into JavaScript and Linked data</h1>',
            "sub-heading_1": '<h3>- Institute for Geoinformatics -</h3>',
            "sub-heading_2": '<h4>Muenster</h4>',
            "sub-heading_3": '<h5>Winter term 2015\/16</h5>',
            "content": '<br><p class="lead">The purpose of this web application is to visualize open data of the city of Münster.</p>'
        },
        "map": {
            "layerButton": {
                "city": "Cities",
                "district": "Districts",
                "cityDistrict": "Citydistricts"
            },
            "compareButton": {
                "comparison": '<i class="fa fa-balance-scale"></i>&nbsp;&nbsp;Compare '
            },
            "panel": {
                "highCharts": {
                    "title": {
                        "mainPopulation": "Main population",
                        "agePopulation": {
                            "female": "Female population by age",
                            "male": "Male population by age",
                            "both": "Population by age",
                            "all": "All",
                            "description": "Age group"
                        },
                        "entitledPopulation": "Population entitled to live in Münster",
                    },
                    "gender": {
                        "female": "Women",
                        "male": "Man"
                    },
                    "yAxis": "Population",
                    "empty": "Please select a feature on the map to display information."
                },
                "general": {
                    "loading": "Loading data"
                },
                "error": {
                    "dataMissing" : "No data available"
                }
            },
            "legend": {
                "title": {
                    "mainPopulation": "People per squarekilometre",
                    "percentPopulation": "Percent of the population"
                }
            }
        },
        "info": {
            "heading": 'More information'
        },
        "about": {
            "heading": '<h1>About us</h1>'
        },
        "help": {
            "heading": '<h1>User manual</h1>',
            "sub-heading_1": "Introduction",
            "sub-heading_2": "Map",
            "sub-heading_2_1": "Basics",
            "sub-heading_2_2": "Charts",
            "sub-heading_2_3": "Information-Panel",
            "sub-heading_3": "Compare-Function",
            "sub-heading_3_1": "Main Population",
            "sub-heading_3_2": "Population entitled to live in",
            "sub-heading_3_3": "Female population by age",
            "sub-heading_3_4": "Male population by age",
            "sub-heading_3_5": "Population by age",
            "content_1": 'This web-application focuses on Linked Data about the population of Münster, Germany. The Open Data was provided by the <i>Amt für Stadtentwicklung, Stadtplanung, Verkehrsplanung</i> and was converted into RDF-triples to demonstrate the Linked Data concept. The defined RDF-Schema can be found on GitHub. The RDF-Schema was written in the <i>RDF-Turtle-Syntax</i> and stored in a <i>Parliament triple store</i>. The application can filter and request the RDF-Data via AJAX and visualized it in different styles on an interactive map. This user manual shows how to use the web-application.',
            "content_2": 'The core of this application is the interactive map.',
            "content_2_1_1": 'To Zoom-In or Zoom-Out you can use your mouse-wheel or the <i class="fa fa-plus"></i> or <i class="fa fa-minus"></i> buttons on the left upper corner of the map:',
            "content_2_1_2": 'You can also change the baselayers on the <i class="fa fa-bars"></i> botton on the upper right corner of the map. You can choose between the following map-styles:',
            "content_2_1_3": 'You can choose between different levels to get more detailed information about the city, its districts and city district.',
            "content_2_1_4": 'On the lower right site of the map you can see a legend, which contains the classes about the population density of Münster. The density unit is "People per squarekilometre". The different colors build a Choropleth map.',
            "content_2_1_5": 'With the slider on the lower left corner of the map you can change the years to see the changes of the densities of the cities, its districts or subdistricts over time.',
            "content_2_2": 'To see charts on thr right side of the application, please click on a feature on the map. It will be highlighted with a red border, when its selected. After the selection, the charts and related information about the Feature will be loaded.',
            "content_2_3": 'If you want to see related information about the selected feature for example other Linked Data, click on the button <b>More information</b>. The application shows a list of RDF-triples. The selected Feature is the Subject.',
            "content_3": 'It is also possible to compare cities, districts or citydistricts. If you want to compare two or more Features, please click first on the <i class="fa fa-balance-scale"></i> button to switch to the <b>comparing-mode</b>. If you are in the comparing-mode, the button will be highlighted blue. Now you are able to select more than one feature on the map. If you want to remove a already selected Feature, you can click on the <i class="fa fa-minus-circle"></i> button. To close the <b>comparing-mode</b> you can click again on the <i class="fa fa-balance-scale"></i> button.',
            "content_3_1": 'To see the main population of Münster and its districts or citydistricts, select one or more areas on the map and click on the select menue <i class="fa fa-users"></i> on the upper right side of the application and select the option <i>Main population</i>:',
            "content_3_2": 'To see the entitled population of Münster and its districts or citydistricts, select one or more areas on the map and click on the select menue <i class="fa fa-users"></i> on the upper right side of the application and select the option <i>Entitled population</i>:',
            "content_3_3": 'To see the male population by different age groups of Münster and its districts or citydistricts, select one or more areas on the map and click on the select menue <i class="fa fa-users"></i> on the upper right side of the application and select the option <i>Male population by age</i>:',
            "content_3_4": 'To see the female population by different age groups of Münster and its districts or citydistricts, select one or more areas on the map and click on the select menue <i class="fa fa-users"></i> on the upper right side of the application and select the option <i>Female population by age</i>:',
            "content_3_5": 'To see the total population by different age groups of Münster and its districts or citydistricts, select one or more areas on the map and click on the select menue <i class="fa fa-users"></i> on the upper right side of the application and select the option <i>Population by age</i>:',
            "cookie": {
                "title":'<h3>3. Privacy</h3>',
                "more": "More info",
                "cookie-content": "This application saves cookies. These cookies are saving the preferred language of the user. No personal data will be saved."
            }
        },
        "license": {
            "heading": '<h1>Licenses</h1>',
            'software': '<h3>1. Software</h3>',
            'framework': '<h5>Used Frameworks:</h5>',
            'data': '<h3>2. Open Data</h3>',
            'cookie': '<h3>3. Privacy</h3>',
            'cc': '<div class="row"><div class="col-sm-2"><a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"></a></div><div class="col-sm-10"><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"><b>Linked Open Data</b></span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Guiying Du, Nicholas Schiestel, Pawan Thapa, André Wieghardt</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank">Creative Commons Attribution-NonCommercial 4.0 International License</a>.</div></div><br><br>',
            'frameworks': '<ul>' +
                '<li>JQuery (<a href="https://github.com/jquery/jquery/blob/master/LICENSE.txt" target="_blank">License</a>)</li>' +
                '<li>JQuery-UI (<a href="https://github.com/jquery/jquery-ui/blob/master/LICENSE.txt" target="_blank">License</a>)</li>' +
                '<li>Leaflet (<a href="https://github.com/Leaflet/Leaflet/blob/master/LICENSE" target="_blank">License</a>)</li>' +
                '<li>Bootstrap (<a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank">License</a>)</li>' +
                '<li>Mapbox (<a href="https://github.com/mapbox/mapbox.js/blob/mb-pages/LICENSE.md" target="_blank">License</a>)</li>' +
                '<li>Highcharts (<a href="http://shop.highsoft.com/faq#Non-Commercial-0" target="_blank">License</a>)</li>' +
                '<li>Font-Awesome (<a href="https://github.com/FortAwesome/Font-Awesome" target="_blank">License</a>)</li>' +
                '<li>Flag-Icon (<a href="https://github.com/lipis/flag-icon-css/blob/master/LICENSE" target="_blank">License</a>)</li>' +
                '<li>Terraformer (<a href="https://github.com/Esri/Terraformer/blob/master/LICENSE" target="_blank">License</a>)</li>' +
                '<li>Terraformer-WKT-Parser (<a href="https://github.com/Esri/terraformer-wkt-parser/blob/master/LICENSE" target="_blank">License</a>)</li>' +
                '<li>Cookieconsent2 (<a href="https://github.com/silktide/cookieconsent2/blob/master/licence" target="_blank">License</a>)</li></ul>',
            'opendata': 'This application visualizes Open Data about the population of Münster and its city districts, which were published by the <b>Amt für Stadtentwicklung, Stadtplanung, Verkehrsplanung</b> (<a href="http://www.stadt-muenster.de/stadtentwicklung/zahlen-daten-fakten.html">http://www.stadt-muenster.de/stadtentwicklung/zahlen-daten-fakten.html</a>).<br>The dataset, which was used for this application can be found <a  href="http://www.stadt-muenster.de/fileadmin//user_upload/stadt-muenster/61_stadtentwicklung/pdf/sms/SMS_Bevoelkerung_2014.pdf"  target="_blank">here</a>. The terms of use for this dataset can be found <a href="http://www.stadt-muenster.de/fileadmin/user_upload/stadt-muenster/61_stadtentwicklung/pdf/zahlen/MS_Statistikdaten_Nutzungsbedingungen.pdf">here</a>.',
            "cookie-content": "This application will create cookies. These cookies are saving the preferred language of the user. No personal data will be saved."
        },
        "genderal":{
            "loadingInformation": "Loading information"
        }
    },
    "de": {
        "main": {
            "title": "Bevölkerung - Open Data"
        },
        "navbar": {
            "home": "Start",
            "map": "Karte",
            "help": "Hilfe",
            "about": "Über uns",
            "license": "Lizenz",
            "language": {
                "title": 'Sprache ändern &nbsp;<span class="caret"></span>',
                "english": 'Englisch (English)',
                "german": '<b>Deutsch</b> (German)'
            },
        },
        "index": {
            "heading" :'<h1>Einführung in JavaScript und Linked Data</h1>',
            "sub-heading_1": '<h3>- Institute for Geoinformatik -</h3>',
            "sub-heading_2": '<h4>Münster</h4>',
            "sub-heading_3": '<h5>Wintersemester 2015\/16</h5>',
            "content": '<br><p class="lead">Das Ziel dieser Web Appliaction ist es Open Data aus Münster zu visualisieren.</p>'
        },
        "map": {
            "layerButton": {
                "city": "Städte",
                "district": "Stadtbezirke",
                "cityDistrict": "Stadtteile"
            },
            "compareButton": {
                "comparison": '<i class="fa fa-balance-scale"></i>&nbsp;&nbsp;Vergleiche '
            },
            "panel": {
                "highCharts": {
                    "title": {
                        "mainPopulation": "Bevölkerung mit Hauptwohnsitz",
                        "agePopulation": {
                            "female": "Weibliche Bevölkerung nach Alter",
                            "male": "Männliche Bevölkerung nach Alter",
                            "both": "Bevölkerung nach Alter",
                            "all": "Alle",
                            "description": "Altersgruppe"
                        },
                        "entitledPopulation": "Wohnberechtigte Bevölkerung"
                    },
                    "gender": {
                        "female": "Frauen",
                        "male": "Männer"
                    },
                    "yAxis": "Einwohner",
                    "empty": "Bitte wähle ein Objekt auf der Karte aus um Daten anzeigen zu lassen."
                },
                "general": {
                    "loading": "Lade Daten"
                },
                "error": {
                    "dataMissing" : "Keine Daten vorhanden"
                }
            },
            "legend": {
                "title": {
                    "mainPopulation": "Einwohner pro Quadratkilometer",
                    "percentPopulation": "Prozent der gesamt Einwohner"
                }
            }
        },
        "info": {
            "heading": 'Mehr Informationen'
        },
        "about": {
            "heading": '<h1>Über uns</h1>'
        },
        "help": {
            "heading": '<h1>Benutzerhandbuch</h1>',
            "sub-heading_1": "Einleitung",
            "sub-heading_2": "Karte",
            "sub-heading_2_1": "Allgemeines",
            "sub-heading_2_2": "Diagramme",
            "sub-heading_2_3": "Informations-Fenster",
            "sub-heading_3": "Vergleichsfunktion",
            "sub-heading_3_1": "Bevölkerung mit Hauptwohnsitz",
            "sub-heading_3_2": "Wohnberechtigte Bevölkerung",
            "sub-heading_3_3": "Weibliche Bevölkerung nach Alter",
            "sub-heading_3_4": "Männliche Bevölkerung nach Alter",
            "sub-heading_3_5": "Bevölkerung nach Alter",
            "content_1": 'Diese Web-Applikation zeigt Linked Data über die Bevölkerung von Münster. Die Open Data wurden vom <i>Amt für Stadtentwicklung, Stadtplanung, Verkehrsplanung</i> zur Verfügung gestellt und in sogenannte RDF-triples konvertiert, um das Linked Data Kozept zu veranschaulichen. Das definierte RDF-Schema kann auf GitHub nachgeschlagen werden. Das RDF-Schema wurde in der <i>RDF-Turtle-Syntax</i> geschrieben und in einem <i>Parliament triple store</i> gespeichert. Die Applikation kann diese Daten filtern und über AJAX abfragen und sie anschließend in unterschiedlichen Stilen auf einer interaktiven Karte visualisieren. Diese Benutzerhandbuch soll beim Verwenden der Web-Applikation helfen.',
            "content_2": 'Der Kern dieser Applikation ist die interaktive Karte.',
            "content_2_1_1": 'Um rein oder heraus zu zoomen, kann entweder das Mausrad benutzt werden, sowie der <i class="fa fa-plus"></i> oder <i class="fa fa-minus"></i> Button in der oberen linken Ecke der Karte:',
            "content_2_1_2": 'Es können zudem zwischen verschieden Baselayers gewählt werden, dazu auf den <i class="fa fa-bars"></i> Button in der oberen rechten Ecke der Karte klicken. Zur Auswahl stehen folgende Kartenstile:',
            "content_2_1_3": 'Es können unterschiedliche Level gewählt werden um genauere Informationen über die Städte, Verwaltungsdistrikte oder Stadtteile zu erhalten.',
            "content_2_1_4": 'Im unteren rechten Bereich der Karte, befinden sich die Legende, die die Klassen der Bevölkerungsdichte enthält. Die Einheit der Bevölkerungsdichte gegeben durch Menschen pro Quadratkilometer. Durch die verschieden Farben entsteht so eine Choroplethenkarte.',
            "content_2_1_5": 'Mit dem Slider im linken unteren Bereich der Karte, kann die Zeit verändert werden, um die  Veränderungen der Bevölkerungsdichte der Städte, Verwaltungsdistrikte oder Stadtteil zu sehen.',
            "content_2_2": 'Um die Diagramme auf der rechten Seite der Applikation zu sehen, muss zuerst auf ein Feature auf der Karte geklickt werden. Es wird rot-umrandet, sobald es ausgewählt wurde. Nachdem Anklicken werden sowohl die Daten für das Diagramm, sowie weitere Information über das Feature geladen und angezeigt.',
            "content_2_3": 'Um weitere Information über ein ausgewähltes Feature zu erhalten, klicke auf den <b>Mehr Informationen</b> Button unterhalb des Diagramms. Es beinhaltet zum Beispiel andere Linked Data in einer RDF-Triple Liste. Das ausgewählte FEature ist dabei das sogenannte Subjekt.',
            "content_3": 'Des Weiteren ist es möglich Städte, Verwaltungsdistrikte oder Stadtteile zu vergleichen. Wenn 2 oder mehr Features verglichen werden sollen, klicke zunächst auf den <i class="fa fa-balance-scale"></i> Button um in den <b>Vergleichsmodus</b> zu wechseln. Der Button wird blau, sobald der Vergleichsmodus aktiv ist. Nun können auf der Karte 2 oder mehr Features per Anklicken ausgewählt werden. Wenn ein Feature wieder abgewählt werden soll, klicke auf den <i class="fa fa-minus-circle"></i> Button. Um den <b>Vergleichsmodus</b> auszuschalten, klicke wieder auf den <i class="fa fa-balance-scale"></i> Button.',
            "content_3_1": 'Um die "Bevölkerung mit Hauptwohnsitz" zu sehen von Münster und seiner Verwaltungsdistrikte oder Stadtteile, wähle eines oder mehrere Features aus und klicke im oben rechten Auswahlmenü <i class="fa fa-users"></i> auf die Option <i>Bevölkerung mit Hauptwohnsitz</i>:',
            "content_3_2": 'Um die "Weibliche Bevölkerung nach Altersklassen" zu sehen von Münster und seiner Verwaltungsdistrikte oder Stadtteile, wähle eines oder mehrere Features aus und klicke im oben rechten Auswahlmenü <i class="fa fa-users"></i> auf die Option <i>Weibliche Bevölkerung nach Alter</i>:',
            "content_3_3": 'Um die "Wohnberechtigte Bevölkerung" zu sehen von Münster und seiner Verwaltungsdistrikte oder Stadtteile, wähle eines oder mehrere Features aus und klicke im oben rechten Auswahlmenü <i class="fa fa-users"></i> auf die Option <i>Wohnberechtigte Bevölkerung</i>:',
            "content_3_4": 'Um die "Männliche Bevölkerung nach Altersklassen" zu sehen von Münster und seiner Verwaltungsdistrikte oder Stadtteile, wähle eines oder mehrere Features aus und klicke im oben rechten Auswahlmenü <i class="fa fa-users"></i> auf die Option <i>Männliche Bevölkerung nach Alter</i>:',
            "content_3_5": 'Um die "Bevölkerung nach Altersklassen" zu sehen von Münster und seiner Verwaltungsdistrikte oder Stadtteile, wähle eines oder mehrere Features aus und klicke im oben rechten Auswahlmenü <i class="fa fa-users"></i> auf die Option <i>Bevölkerung nach Alter</i>:',
            "cookie": {
                "title":'<h3>3. Privatsphäre</h3>',
                "more": "Mehr Informationen",
                "cookie-content": "Diese Webanwendung speichert Cookies. Diese Cookies speichern die bevorzugte Sprache des Nutzers. Keine personenbezogenen Daten werden gespeichert"
            }
        },
        "license": {
            "heading": '<h1>Lizenzen</h1>',
            'software': '<h3>1. Software</h3>',
            'framework': '<h5>Verwendete Frameworks:</h5>',
            'data': '<h3>2. Open Data</h3>',
            'cc': '<div class="row"><div class="col-sm-2"><a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"></a></div><div class="col-sm-10"><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"><b>Linked Open Data</b></span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Guiying Du, Nicholas Schiestel, Pawan Thapa, André Wieghardt</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank">Creative Commons Attribution-NonCommercial 4.0 International License</a>.</div></div><br><br>',
            'frameworks': '<ul>' +
                '<li>JQuery (<a href="https://github.com/jquery/jquery/blob/master/LICENSE.txt" target="_blank">Lizenz</a>)</li>' +
                '<li>JQuery-UI (<a href="https://github.com/jquery/jquery-ui/blob/master/LICENSE.txt" target="_blank">Lizenz</a>)</li>' +
                '<li>Leaflet (<a href="https://github.com/Leaflet/Leaflet/blob/master/LICENSE" target="_blank">Lizenz</a>)</li>' +
                '<li>Bootstrap (<a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank">Lizenz</a>)</li>' +
                '<li>Mapbox (<a href="https://github.com/mapbox/mapbox.js/blob/mb-pages/LICENSE.md" target="_blank">Lizenz</a>)</li>' +
                '<li>Highcharts (<a href="http://shop.highsoft.com/faq#Non-Commercial-0" target="_blank">Lizenz</a>)</li>' +
                '<li>Font-Awesome (<a href="https://github.com/FortAwesome/Font-Awesome" target="_blank">License</a>)</li>' +
                '<li>Flag-Icon (<a href="https://github.com/lipis/flag-icon-css/blob/master/LICENSE" target="_blank">Lizenz</a>)</li>' +
                '<li>Terraformer (<a href="https://github.com/Esri/Terraformer/blob/master/LICENSE" target="_blank">Lizenz</a>)</li>' +
                '<li>Terraformer-WKT-Parser (<a href="https://github.com/Esri/terraformer-wkt-parser/blob/master/LICENSE" target="_blank">Lizenz</a>)</li>' +
                '<li>Cookieconsent2 (<a href="https://github.com/silktide/cookieconsent2/blob/master/licence" target="_blank">Lizenz</a>)</li></ul>',
            'opendata': 'Diese Applikation visualisiert <i>Open Data</i> über die Bevölkerung der Stadt Münster und ihrer Stadtteile. Die Daten wurden vom <b>Amt für Stadtentwicklung, Stadtplanung, Verkehrsplanung</b> (<a href="http://www.stadt-muenster.de/stadtentwicklung/zahlen-daten-fakten.html">http://www.stadt-muenster.de/stadtentwicklung/zahlen-daten-fakten.html</a>) veröffentlicht.<br>Der Datensatz, welcher für diese Applikation verwendet wurde, kann <a  href="http://www.stadt-muenster.de/fileadmin//user_upload/stadt-muenster/61_stadtentwicklung/pdf/sms/SMS_Bevoelkerung_2014.pdf" target="_blank">hier</a> nachgeschlagen werden. Die Nutzungsbedingungen für diesen Datensatz können <a href="http://www.stadt-muenster.de/fileadmin/user_upload/stadt-muenster/61_stadtentwicklung/pdf/zahlen/MS_Statistikdaten_Nutzungsbedingungen.pdf">hier</a> nachgeschlagen werden.'
        },
        "genderal":{
            "loadingInformation": "Lade Informationen"
        }
    }
};

if (!document.cookie) {
    document.cookie = getStandardLanguage();
}

// SET LANGUAGE BASED ON BROWSER-COOKIE
function getCookieObject() {
    var cookieArray = document.cookie.split(';');
    var cookieJSON = {};
    for (var i = 0; i < cookieArray.length; i++) {
        var splittedArray = cookieArray[i].split('=');
        cookieJSON[splittedArray[0].replace(' ','')] = splittedArray[1].replace(' ','');
    }
    return cookieJSON;
}

// SET LANGUAGE-BASED-CONTENT TO DIV-ELEMENT
function setDiv(div, input) {
    document.getElementById(div).innerHTML = readLanguageJSON(input);
}

// ADD LANGUAGE-BASED-CONTENT TO DIV-ELEMENT
function appendDiv(div, input) {
    document.getElementById(div).innerHTML = document.getElementById(div).innerHTML + '' + readLanguageJSON(input);
}

// LANGUAGE PROVIDER
function readLanguageJSON(input) {
    var inputArray = input.split('.');
    var object = language[getCookieObject().language];
    for (var i = 0; i < inputArray.length; i++) {
        object = object[inputArray[i]];
    }
    return object;
}
