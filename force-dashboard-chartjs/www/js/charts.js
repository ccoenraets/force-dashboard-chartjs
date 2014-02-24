var charts = (function() {

    function OpportunitiesByMonth(selector, data, title, pointClick) {

        var $selector = $(selector);

        $selector.dxChart({
            dataSource: data,
            animation: {
                duration: 350
            },
            title: {
                text: title ? title : "Deals by Month",
                font: {
                    size: "24px"
                }
            },
            legend: {
                visible: false
            },
            series: {
                argumentField: "month",
                valueField: "total",
                name: "Opportunity",
                type: "bar",
                color: '#ffa500'
            },
            valueAxis: {
                label: {
                    format: "currency millions"
                }
            },
            pointClick: pointClick
        });

    }

    function OpportunitiesByLeadSource(selector, data, title, pointClick) {

        var $selector = $(selector);

        $selector.dxPieChart({
            dataSource: data,
            animation: {
                duration: 350
            },
            title: {
                text: title ? title : "Deals by Lead Source",
                font: {
                    size: "24px"
                }
            },
            legend: {
                horizontalAlignment: "left",
                verticalAlignment: "bottom",
                margin: 0
            },
            series: [
                {
                    type: "doughnut",
                    argumentField: "category",
                    valueField: "total",
                    label: {
                        visible: true,
                        connector: {
                            visible: true
                        },
                        format: 'currency millions',
                        precision: 1
                    }
                }
            ]
        });

        var chart = $selector.dxPieChart('instance');

        function update(dataSource, title) {
            chart.option({
                dataSource: dataSource,
                title: title
            });
        }

        return {
            update: update
        }

    }

    function OpportunitiesByStage(selector, data, title, pointClick) {

        var $selector = $(selector);

        $selector.dxPieChart({
            dataSource: data,
            animation: {
                duration: 350
            },
            title: {
                text: title ? title : "Deals by Stage",
                font: {
                    size: "24px"
                }
            },
            legend: {
                horizontalAlignment: "left",
                verticalAlignment: "bottom",
                margin: 0
            },
            series: [
                {
                    type: "doughnut",
                    argumentField: "category",
                    valueField: "total",
                    label: {
                        visible: true,
                        connector: {
                            visible: true
                        },
                        format: 'currency millions',
                        precision: 1
                    }
                }
            ],
            pointClick: pointClick
        });

        var chart = $selector.dxPieChart('instance');

        function update(dataSource, title) {
            chart.option({
                dataSource: dataSource,
                title: title
            });
        }

        return {
            update: update
        }

    }

    function OpportunitiesByOwner(selector, data, title, pointClick) {

        var $selector = $(selector);

        $selector.dxChart({
            dataSource: data,
            animation: {
                duration: 350
            },
            valueAxis: {
                label: {
                    format: 'currency millions',
                    precision: 1
                }
            },
            title: {
                text: title ? title : "Deals by Owner",
                font: {
                    size: "24px"
                }
            },
            legend: {
                visible: false
            },
            rotated: true,
            series: [
                {
                    type: "bar",
                    argumentField: "category",
                    valueField: "total",
                    label: {
                        visible: true,
                        connector: {
                            visible: true
                        },
                        format: 'currency millions',
                        precision: 1
                    }
                }
            ],
            pointClick: pointClick
        });

        var chart = $selector.dxChart('instance');

        function update(dataSource, title) {
            chart.option({
                dataSource: dataSource,
                title: title
            });
        }

        return {
            update: update
        }

    }


    function OpportunitiesByIndustry(selector, data, title, pointClick) {

        var $selector = $(selector);

        $selector.dxPieChart({
            dataSource: data,
            animation: {
                duration: 350
            },
            title: {
                text: title ? title : "Deals by Industry",
                font: {
                    size: "24px"
                }
            },
            legend: {
                horizontalAlignment: "left",
                verticalAlignment: "bottom",
                margin: 0
            },
            series: [
                {
                    type: "doughnut",
                    argumentField: "category",
                    valueField: "total",
                    label: {
                        visible: true,
                        connector: {
                            visible: true
                        },
                        format: 'currency millions',
                        precision: 1
                    }
                }
            ]
        });

        var chart = $selector.dxPieChart('instance');

        function update(dataSource, title) {
            chart.option({
                dataSource: dataSource,
                title: title
            });
        }

        return {
            update: update
        }

    }

    function OpportunityBubbles(selector, data, title, pointClick) {

        var $selector = $(selector);

        $selector.dxChart({
            dataSource: data,
            commonAxisSettings: {
                valueMarginEnabled: true,
                minValueMargin:.15,
                maxValueMargin:.15
            },
            animation: {
                duration: 350
            },
            title: {
                text: title ? title : "Top 10 Deals",
                font: {
                    size: "24px"
                }
            },
            legend: {
                visible: false
            },
            argumentAxis: {
                label: {
                    format: 'monthAndYear'
                }
            },
            series: {
                argumentField: "CloseDate",
                valueField: "ProbabilityPC",
                sizeField: "Amount",
                name: "Opportunity",
                type: "bubble",
                color: '#ffa500',
                tagField: 'Id'
            },
            argumentAxis: {
                tick: {
                    visible: true,
                    opacity: 0.75
                }
            },
            valueAxis: {
                min: 0,
                max:1,
                label: {
                    format: 'percent'
                }
            },
            pointClick: pointClick

        });
    }

    function TopDeals(selector, data, title, pointClick) {

        var $selector = $(selector);

        $selector.dxChart({
            dataSource: data,
            animation: {
                duration: 350
            },
            valueAxis: {
                label: {
                    format: "currency thousands"
                }
            },
            title: {
                text: title ? title : "Top Deals",
                font: {
                    size: "24px"
                }
            },
            legend: {
                visible: false
            },
            rotated: true,
            series: {
                argumentField: "UniqueName",
                valueField: "Amount",
                tagField: 'Id',
                name: selector,
                type: "bar",
                color: '#ffa500'
            },
            pointClick: pointClick
        });

        var chart = $selector.dxChart('instance');

        function update(dataSource, title) {
            chart.option({
                dataSource: dataSource,
                title: title
            });
        }

        return {
            update: update
        }

    }

    function ProbabilityGauge(selector, value, title, pointClick) {

        var $selector = $(selector);

        $selector.dxCircularGauge({
            scale: {
                startValue: 0,
                endValue: 100,
                majorTick: {
                    tickInterval: 10
                },
                label: {
                    customizeText: function (arg) {
                        return arg.valueText + ' %';
                    }
                }
            },
            rangeContainer: {
                ranges: [
                    { startValue: 0, endValue: 40, color: '#CE2029' },
                    { startValue: 40, endValue: 75, color: '#FFD700' },
                    { startValue: 75, endValue: 100, color: '#228B22' }
                ]
            },
            value: value
        });

        var chart = $selector.dxCircularGauge('instance');

        function update(value) {
            chart.option({
                value: value
            });
        }

        return {
            update: update
        }

    }

    return {
        OpportunitiesByMonth: OpportunitiesByMonth,
        OpportunitiesByOwner: OpportunitiesByOwner,
        OpportunitiesByIndustry: OpportunitiesByIndustry,
        OpportunityBubbles: OpportunityBubbles,
        TopDeals: TopDeals,
        ProbabilityGauge: ProbabilityGauge,
        OpportunitiesByLeadSource: OpportunitiesByLeadSource,
        OpportunitiesByStage: OpportunitiesByStage
    }

}());