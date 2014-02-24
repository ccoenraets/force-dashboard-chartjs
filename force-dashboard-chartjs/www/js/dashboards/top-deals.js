if (!dashboards) var dashboards = {};

dashboards['top-deals'] = (function () {

    function render() {

        var html =
            '<div id="chart1" class="chart full-width"></div>' +
            '<div id="chart2" class="chart one-third">' +
                '<div class="empty">Select a deal in the chart above to see the details here.<br/><i class="ion-connection-bars"></i></div>' +
                '<div class="content">' +
                    '<h1 id="name"></h1>' +
                    '<h2 id="amount"></h2>' +
                    '<div id="gauge"></div>' +
                    '<p id="revenue"></p>' +
                    '<span id="closeDate"></span><br/>' +
                    '<span id="owner"></span>' +
                '</div>' +
            '</div>' +
            '<div id="chart3" class="chart two-thirds">' +
                '<div class="empty">Select a deal in the chart above to see the top deals for the selected deal owner.<br/><i class="ion-connection-bars"></i></div>' +
                '<div class="content"></div>' +
            '</div>';

        $('#content').html(html);

        var $name = $('#name'),
            $revenue = $('#revenue'),
            $owner = $('#owner'),
            $closeDate = $('#closeDate'),
            $amount = $('#amount');

        var chart1 = new charts.TopDeals('#chart1', opportunities.getTopOpportunities(10), null, function(point) {
            var opp = opportunities.getById(point.tag);
            $name.html(opp.Name);
            $revenue.html(accounting.formatMoney(opp.ExpectedRevenue));
            $owner.html('Owner: ' + opp.Owner.Name);
            $closeDate.html('Close Date: ' + moment(opp.CloseDate).format('MMMM Do YYYY'));
            $amount.html(accounting.formatMoney(opp.Amount));
            gauge.update(opp.Probability);

            var filteredOpportunities = opportunities.filterByOwner(opp.Owner.Name);
            chart3.update(opportunities.getTopOpportunities(10, filteredOpportunities), 'Top Deals for ' + opp.Owner.Name);
            $('#chart2 .empty').remove();
            $('#chart2 .content').css('opacity', 1);
            $('#chart3 .empty').remove();
            $('#chart3 .content').css('opacity', 1);
        });

        var gauge = new charts.ProbabilityGauge('#gauge', 0);
        var chart3 = new charts.TopDeals('#chart3 .content', opportunities.getTopOpportunities(10));

    }

    return {
        render: render
    }

}());