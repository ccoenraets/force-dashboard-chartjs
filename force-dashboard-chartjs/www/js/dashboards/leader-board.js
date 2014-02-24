if (!dashboards) var dashboards = {};

dashboards['leader-board'] = (function () {

    function render() {

        var html =
            '<div id="chart1" class="chart full-width"></div>' +
            '<div id="chart2" class="chart two-thirds"></div>' +
            '<div id="chart3" class="chart one-third">' +
                '<div class="empty" style="with:100%;height:100%">Select a deal in the chart on the left to see the details here.<br/><i class="ion-connection-bars"></i></div>' +
                '<div class="content">' +
                    '<h1 id="name"></h1>' +
                    '<h2 id="amount"></h2>' +
                    '<div id="gauge"></div>' +
                    '<p id="revenue"></p>' +
                    '<span id="closeDate"></span><br/>' +
                    '<span id="owner"></span>' +
                '</div>';
            '</div>';

        $('#content').html(html);

        var $name = $('#name'),
            $revenue = $('#revenue'),
            $owner = $('#owner'),
            $closeDate = $('#closeDate'),
            $amount = $('#amount');

        var chart1 = new charts.OpportunitiesByOwner('#chart1', opportunities.groupByOwner(), 'Leader Board', function(point) {
            var filteredOpportunities = opportunities.filterByOwner(point.argument);
            chart2.update(opportunities.getTopOpportunities(10, filteredOpportunities), "Top Deals for " + point.argument);
        });
        var chart2 = new charts.TopDeals('#chart2', opportunities.getTopOpportunities(10), null, function(point) {
            var opp = opportunities.getById(point.tag);
            $name.html(opp.Name);
            $revenue.html(accounting.formatMoney(opp.ExpectedRevenue));
            $owner.html('Owner: ' + opp.Owner.Name);
            $closeDate.html('Close Date: ' + moment(opp.CloseDate).format('MMMM Do YYYY'));
            $amount.html(accounting.formatMoney(opp.Amount));
            chart3.update(opp.Probability);
            $('#chart3 .empty').remove();
            $('#chart3 .content').css('opacity', 1);

        });
        var chart3 = new charts.ProbabilityGauge('#gauge', 0);
    }

    return {
        render: render
    }

}());