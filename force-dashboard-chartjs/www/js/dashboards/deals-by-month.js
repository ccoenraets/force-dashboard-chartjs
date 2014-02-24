if (!dashboards) var dashboards = {};

dashboards['deals-by-month'] = (function () {

    function render() {

        var html =
            '<div id="chart1" class="chart full-width"></div>' +
            '<div id="chart2" class="chart"></div>' +
            '<div id="chart3" class="chart"></div>';

        $('#content').html(html);

        var chart1 = new charts.OpportunitiesByMonth('#chart1', opportunities.groupByMonth(), null, function(point) {
            var month = point.argument;
            var filteredOpportunities = opportunities.filterByMonth(month);
            chart2.update(opportunities.groupByStage(filteredOpportunities), "Stage Breakdown for " + month);
            chart3.update(opportunities.groupByOwner(filteredOpportunities), "Owner Breakdown for " + month);
        });

        var chart2 = new charts.OpportunitiesByStage('#chart2', opportunities.groupByStage(), "Stage Breakdown");
        var chart3 = new charts.OpportunitiesByOwner('#chart3', opportunities.groupByOwner(), "Owner Breakdown");
    }

    return {
        render: render
    }

}());