if (!dashboards) var dashboards = {};

dashboards['pipeline'] = (function () {

    "use strict";

    function render() {

        var html =
            '<div id="chart1" class="chart full-height full-width"></div>' +
            '<div class="card tooltip">' +
                '<div class="item item-text-wrap" style="background:#fbfbfb;text-align: center;">' +
                    '<h1 id="name"></h1>' +
                    '<h2 id="amount"></h2>' +
                    '<div id="gauge"></div>' +
                    '<p id="revenue"></p>' +
                    '<span id="closeDate"></span><br/>' +
                    '<span id="owner"></span>' +
                '</div>' +
            '</div>' +
            '<div style="position: absolute;width: 50px;height: 120px;background: white;"></div>'

        $("#content").html(html);

        var $name = $('#name'),
            $revenue = $('#revenue'),
            $owner = $('#owner'),
            $closeDate = $('#closeDate'),
            $amount = $('#amount'),
            w = $('#content').width(),
            h = $('#content').height();

        var chart = new charts.OpportunityBubbles('#chart1', opportunities.getTopOpportunities(), 'Sales Pipeline', function(point, event) {
            var opp = opportunities.getById(point.tag);
            $name.html(opp.Name);
            $revenue.html(accounting.formatMoney(opp.ExpectedRevenue));
            $owner.html('Owner: ' + opp.Owner.Name);
            $closeDate.html('Close Date: ' + moment(opp.CloseDate).format('MMMM Do YYYY'));
            $amount.html(accounting.formatMoney(opp.Amount));
            gauge.update(opp.Probability);
            var x = event.pageX;
            var y = event.pageY - 60;
            if (x > w/2) {
                x = x - $('.card').width();
            }
            if (y > h/2) {
                y = y - $('.card').height();
            }
            $('.card').css({'left': x + 'px', 'top': y + 'px',  'opacity': 1});
        });
        var gauge = new charts.ProbabilityGauge('#gauge', 0);
    }

    return {
        render: render
    }

}());