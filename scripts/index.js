var symptomName = last_month_day();

$(function () {


    init();
    init2();
    $("#el-dialog").addClass("hide");
    $(".close").click(function (event) {
        $("#el-dialog").addClass("hide");
    });

    var date = new Date();
    var numble = date.getDate();
    var today = getFormatMonth(new Date());
    $("#date1").html(today);
    $("#date2").html(today);
    $("#date3").html(today);
    $("#date4").html(today);


    lay('.demo-input').each(function () {
        laydate.render({
            type: 'month',
            elem: this,
            trigger: 'click',
            theme: '#95d7fb',
            calendar: true,
            showBottom: true,
            done: function () {
                console.log($("#startDate").val())

            }
        })
    });

})
function init() {
    //地图
    var mapChart = echarts.init(document.getElementById('mapChart'));
    mapChart.setOption({
        bmap: {
            center: [120.807120,31.351219],
            zoom: 12,
            roam: true,

        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                return params.value[2]
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
                [120.864120,31.383219, '企业01'],
                [120.864120,31.353219, '企业02'],
                [120.843120,31.351519, '企业03'],
                [120.953120,31.353219, '企业04'],
                [120.863120,31.383219, '企业05']
            ]
        }]
    });
    mapChart.on('click', function (params) {
        $("#el-dialog").removeClass('hide');
        $("#reportTitle").html(params.value[2]);
    });

    var bmap = mapChart.getModel().getComponent('bmap').getBMap()
    bmap.addControl(new BMap.MapTypeControl({ mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP] }));
    bmap.setMapStyle({ style: 'midnight' })


    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption({

        color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6",],

        legend: {
            y: '260',
            x: 'center',
            textStyle: {
                color: '#ffffff',

            },
            data: ['aaa', 'aaa', 'aaa', 'aaa',],
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}G ({d}%)"
        },
        calculable: false,
        series: [
            {
                name: '采集数据量',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '45%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    }
                },
                data: [
                    { value: 335, name: '造纸企业' },
                    { value: 310, name: '煤电企业' },
                    { value: 234, name: '化工企业' },
                    { value: 135, name: '水泥企业' },
                    { value: 135, name: '印染企业' }
                ]
            }
        ]
    });


    var lineChart = echarts.init(document.getElementById('lineChart'));
    lineChart.setOption({

        color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6",],
        legend: {
            y: '260',
            x: 'center',
            textStyle: {
                color: '#ffffff',

            },
            data: ['企业01', '企业02', '企业03', '企业04',],
        },
        calculable: false,
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}条"
        },
        yAxis: [
            {
                type: 'value',
                axisLine: { onZero: false },
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "k条"
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
            }
        ],
        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },
        series: [
            {
                name: '企业01',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [15, 0, 20, 45, 22.1, 25, 70, 55, 76]
            },
            {
                name: '企业02',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [25, 10, 30, 55, 32.1, 35, 80, 65, 76]
            },
            {
                name: '企业03',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [35, 20, 40, 65, 42.1, 45, 90, 75, 96]
            },
            {
                name: '企业04',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [45, 30, 50, 75, 52.1, 55, 100, 85, 106]
            }
        ]
    });

    var histogramChart = echarts.init(document.getElementById('histogramChart'));
    histogramChart.setOption({

        color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6",],
        legend: {
            y: '250',
            x: 'center',
            data: ['企业01', '企业02', '企业03', '企业04'],
            textStyle: {
                color: '#ffffff',

            }
        },

        calculable: false,


        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#f2f2f2'],
                        width: 0,
                        type: 'solid'
                    }
                }

            }
        ],

        yAxis: [
            {
                type: 'category',
                data: ['污染物01', '污染物02', '污染物03', '污染物04', '污染物05', '污染物06','污染物07', '污染物08'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],

        series: [
            {
                name: '企业01',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [200, 180,200,220,200,200, 180,200]
            },
            {
                name: '企业02',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [220, 180, 200,190,210,200,200, 180]
            },
            {
                name: '企业03',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [200, 208, 192,200,200, 180,200,200]
            },
            {
                name: '企业04',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [200, 192,200,200, 180, 208,200,200]
            },
        ]
    });

    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
    lineChart2.setOption({

        color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6",],
        legend: {
            y: '260',
            x: 'center',
            textStyle: {
                color: '#ffffff',

            },
            data: ['企业01', '企业02', '企业03', '企业04', '企业04'],
        },
        calculable: false,
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}条"
        },
        yAxis: [
            {
                type: 'value',
                axisLine: { onZero: false },
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "k条"
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['01', '03', '05', '07', '09', '11'],
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
            }
        ],
        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },
        series: [
            {
                name: '企业01',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [15, 0, 20, 45, 22.1, 25,].reverse()
            },
            {
                name: '企业02',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [25, 10, 30, 55, 32.1, 35,].reverse()
            },
            {
                name: '企业03',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [35, 20, 40, 65, 42.1, 45,].reverse()
            },
            {
                name: '企业04',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [45, 30, 50, 75, 52.1, 55, 6].reverse()
            }
        ]
    });



}

function init2() {
    var lineChart3 = echarts.init(document.getElementById('lineChart3'));
    lineChart3.setOption({

        color: ["#87cefa", "#ff7f50",],
        legend: {
            y: 'top',
            x: 'center',
            textStyle: {
                color: '#ffffff',

            },
            data: ['门诊人次', '住院人次'],
        },
        calculable: false,
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}人"
        },
        dataZoom: {
            show: true,
            realtime: true,
            start: 0,
            end: 18,
            height: 20,
            backgroundColor: '#f8f8f8',
            dataBackgroundColor: '#e4e4e4',
            fillerColor: '#87cefa',
            handleColor: '#87cefa',
        },
        yAxis: [
            {
                type: 'value',
                axisLine: { onZero: false },
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "吨"
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: symptomName,
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
            }
        ],
        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },
        series: [
            {
                name: '',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [1150, 180, 2100, 2415, 1212.1, 3125, 1510, 810, 2100, 2415, 1122.1, 3215, 1510, 801, 2001, 2245, 1232.1, 3245, 1520, 830, 2200, 2145, 1223.1, 3225, 150, 80, 200, 245, 122.1, 325]
            },
            {
                name: '',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005, 2500, 1000, 3000, 5005, 3200.1, 3005,]
            },
        ]
    });


    var lineChart4 = echarts.init(document.getElementById('lineChart4'));
    lineChart4.setOption({

        color: ["#87cefa", "#ff7f50",],
        calculable: false,
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}ppm"
        },
        dataZoom: {
            show: true,
            realtime: true,
            start: 0,
            end: 18,
            height: 20,
            backgroundColor: '#f8f8f8',
            dataBackgroundColor: '#e4e4e4',
            fillerColor: '#87cefa',
            handleColor: '#87cefa',
        },
        yAxis: [
            {
                type: 'value',
                axisLine: { onZero: false },
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "ppm"
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: symptomName,
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
            }
        ],
        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },
        series: [
            {
                name: '',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: [1500, 800, 1200, 2450, 1122.1, 1325, 1150, 180, 1200, 1245, 1122.1, 1325, 150, 180, 1200, 2145, 1212.1, 3215, 1510, 180, 2100, 2415, 122.1, 325, 150, 80, 200, 245, 122.1, 325].reverse()
            },
        ]
    });

    //年龄分布
    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption({
        color: ["#32cd32", "#ff7f50", "#87cefa", "#FD6C88", "#4b5cc4", "#faff72"],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}人"
        },
        calculable: true,
        series: [
            {
                name: '发病人数',
                type: 'pie',
                radius: [30, 110],
                center: ['50%', '50%'],
                roseType: 'area',
                x: '50%',



                sort: 'ascending',
                data: [
                    { value: 10, name: '婴儿(1-3岁)' },
                    { value: 5, name: '少儿(4-10岁)' },
                    { value: 15, name: '少年(10-18岁)' },
                    { value: 25, name: '青年(18-45岁)' },
                    { value: 125, name: '中年(45-60岁)' },
                    { value: 175, name: '老年(60岁以上)' },
                ]
            }
        ]
    })

    //医疗费用组成
    var pieChart3 = echarts.init(document.getElementById('pieChart3'));
    pieChart3.setOption({
        color: ["#32cd32", "#ff7f50", "#87cefa", "#FD6C88", "#4b5cc4", "#faff72"],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}吨"
        },
        calculable: true,
        series: [
            {
                name: '发病人数',
                type: 'pie',
                radius: [30, 110],
                center: ['50%', '50%'],
                roseType: 'area',
                x: '50%',



                sort: 'ascending',
                data: [
                    { value: 10, name: '诊察费用' },
                    { value: 500, name: '检查费用' },
                    { value: 150, name: '检验费用' },
                    { value: 250, name: '西药费用' },
                    { value: 125, name: '中药费用' },
                    { value: 1750, name: '手术费用' },
                ]
            }
        ]
    })
}
