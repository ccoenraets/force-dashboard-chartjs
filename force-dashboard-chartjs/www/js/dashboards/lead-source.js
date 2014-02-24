if (!dashboards) var dashboards = {};

dashboards['lead-source'] = (function () {

    function render() {

        var html =
            '<div id="chart1" class="chart full-width"></div>' +
            '<div id="chart2" class="chart"></div>' +
            '<div id="chart3" class="chart"></div>';

        $('#content').html(html);

        var chart1 = new charts.OpportunitiesByMonth('#chart1', opportunities.groupByMonth(), null, function(point) {
            var month = point.argument;
            var filteredOpportunities = opportunities.filterByMonth(month);
            chart2.update(opportunities.groupByLeadSource(filteredOpportunities), "Source Breakdown for " + month);
            chart3.update(opportunities.groupByIndustry(filteredOpportunities), "Industry Breakdown for " + month);
        });

        var chart2 = new charts.OpportunitiesByLeadSource('#chart3', opportunities.groupByLeadSource(), "Source Breakdown");
        var chart3 = new charts.OpportunitiesByIndustry('#chart2', opportunities.groupByIndustry(), "Industry Breakdown");
    }

    return {
        render: render
    }

}());