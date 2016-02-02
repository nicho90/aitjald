
// CHARTS
$( document ).ready(function() {
    // register function to change the diagram from the map
    changeHighcharts = {
        /*
        * function to change the diagram
        * @param options {object} it should contain 'type' and 'features'
        * */
        setDiagram: function(options) {
            if (populationType == 'main' || populationType == 'entitled') {
                var categories =[],
                    series = [];
                for (var i = 0; i < options.features.length; i++) {
                    if (options.features[i].population != undefined) {
                        series.push({
                            name:options.features[i].name,
                            data: []
                        });
                        for (var year in options.features[i].population) {
                            series[series.length-1].data.push(options.features[i].population[year]);
                            categories.push(year);
                        }
                    }
                }
                if (series.length != 0) {
                    $('#chart').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: null
                        },
                        subtitle: {
                            text: null
                        },
                        xAxis: {
                            categories: categories,
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: language[getCookieObject().language].map.panel.highCharts.yAxis
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0
                            }
                        },
                        series: series,
                        credits: {
                            enabled: false
                        },
                        exporting: {
                            enabled: false
                        }
                    });
                }
                else {
                    $('#chart').html('Data missing');
                }
            }
            else if (populationType == 'female' || populationType == 'male'){
                var categories =[],
                    series = [];
                for (var i = 0; i < options.features.length; i++) {
                    if (options.features[i].population != undefined) {
                        series.push({
                            name:options.features[i].name,
                            data: []
                        });
                        for (var year in options.features[i].population) {
                            for (var ageGroup in options.features[i].population[year]) {
                                series[series.length-1].data.push(options.features[i].population[year][ageGroup]);
                                categories.push(ageGroup);
                            }

                        }
                    }
                }
                if (series.length != 0) {
                    $('#chart').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: null
                        },
                        subtitle: {
                            text: null
                        },
                        xAxis: {
                            categories: categories,
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: language[getCookieObject().language].map.panel.highCharts.yAxis
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0
                            }
                        },
                        series: series,
                        credits: {
                            enabled: false
                        },
                        exporting: {
                            enabled: false
                        }
                    });
                }
                else {
                    $('#chart').html('Data missing');
                }
            }
            else {

                $('#chart').parent().append('<div class="chart" id="chart2"></div>');
                var categoriesFemale =[],
                    seriesFemale = [],
                    categoriesMale =[],
                    seriesMale = [];

                for (var i = 0; i < options.features.length; i++) {
                    if (options.features[i].population != undefined) {
                        var name = options.features[i].name
                        for (var gender in options.features[i].population) {
                            if (gender == 'female') {
                                seriesFemale.push({
                                    name:language[getCookieObject().language].map.panel.highCharts.gender.female,
                                    data: []
                                });
                                for (var year in options.features[i].population[gender]) {
                                    for (var ageGroup in options.features[i].population[gender][year]) {
                                        seriesFemale[seriesFemale.length-1].data.push(options.features[i].population[gender][year][ageGroup]);
                                        categoriesFemale.push(ageGroup);
                                    }
                                }
                            }
                            else {
                                seriesMale.push({
                                    name:language[getCookieObject().language].map.panel.highCharts.gender.male,
                                    data: []
                                });
                                for (var year in options.features[i].population[gender]) {
                                    for (var ageGroup in options.features[i].population[gender][year]) {
                                        seriesMale[seriesMale.length-1].data.push(options.features[i].population[gender][year][ageGroup]);
                                        categoriesMale.push(ageGroup);
                                    }
                                }
                            }

                        }
                    }
                }
                if (seriesFemale.length != 0) {
                    $('#chart').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: name + ' ' + selectedYear
                        },
                        subtitle: {
                            text: null
                        },
                        xAxis: {
                            categories: categoriesFemale,
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: language[getCookieObject().language].map.panel.highCharts.yAxis
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0
                            }
                        },
                        series: seriesFemale,
                        credits: {
                            enabled: false
                        },
                        exporting: {
                            enabled: false
                        }
                    });
                }
                else {
                    $('#chart').html('Data missing');
                }
                if (seriesMale.length != 0) {
                    $('#chart2').highcharts({
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: null
                        },
                        subtitle: {
                            text: null
                        },
                        xAxis: {
                            categories: categoriesMale,
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: language[getCookieObject().language].map.panel.highCharts.yAxis
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y}</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0.2,
                                borderWidth: 0
                            }
                        },
                        series: seriesMale,
                        credits: {
                            enabled: false
                        },
                        exporting: {
                            enabled: false
                        }
                    });
                }

                else {
                    $('#chart2').html('Data missing');
                }
            }
        },
        emptyHighCharts: function() {
            $('#chart').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: language[getCookieObject().language].map.panel.highCharts.empty
                },
                series: [{
                    type: 'pie',
                    name: 'Random data',
                    data: []
                }],
                credits: {
                    enabled: false
                }
            });
        }
    };
    changeHighcharts.emptyHighCharts();
});
