;(function($) {
    $.extend($.fn, {
      CleverTimeline: function(options) {
        var defaults = {
            startDate: new Date(),
            items: [
                {time: "16:00",name: "Tango Class", busy: "Fully booked", message: "Fully booked" },
                {time: "17:00",name: "Tango Class"},
                {time: "18:00",name: "Tango Class"},
                {time: "19:00",name: "Tango Class"},
                {time: "20:00",name: "Tango Class"}
            ]
        };
        var CleverTimeline = this;
        this.settings = {};
        var el = this;
        function init() {
            this.settings = $.extend({}, defaults, options);
            ShowTimeline();
            return el;
        };

        init();

        function ShowTimeline() {
            html = '<div class="timeline">';
            this.settings.items.forEach((item, index) => {
                console.log(item);
                var busy = "notbusy"; 
                var message = (item.message) ? item.message : "";
                if (item.busy) { busy = "busy"; }
                var side = ((index % 2) === 0 ? "right" : "left");
                console.log(side);
                html += '<div class="'+busy+'box timebox '+ side + 
                        '">'+
                        '<div class="timeinfo ' + busy +'">'+
                        '<div><span class="timeheader">'+item.time+'</span><i class="busymessage">'+message+'</i></div>'+
                        '<div class="timebody">'+item.name+'</div>'+
                        '</div>'+
                    '</div>';
            });
            /*
            '<div class="timebox left">'+
              '<div class="timeinfo">'+
                '<p class="timeheader">08:00</p>'+
                '<p>Tango Class</p>'+
              '</div>'+
            '</div>'+*/
            html += '</div>';
            el.html(html);
        }
      }
    });
})(window.Zepto || window.jQuery);