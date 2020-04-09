;(function($) {
    $.extend($.fn, {
      CleverTimeline: function(options) {
        var defaults = {
            startDate: new Date()
        };
        var CleverTimeline = this;
        CleverTimeline.settings = {};
        var el = this;
        function init() {
            CleverTimeline.settings = $.extend({}, defaults, options);
            ShowTimeline();
            return el;
        };

        init();

        function ShowTimeline() {
            html= '<div class="timeline">'+
            '<div class="timebox left">'+
              '<div class="timeinfo">'+
                '<p class="timeheader">2017</p>'+
                '<p>Lorem ipsum..</p>'+
              '</div>'+
            '</div>'+
            '<div class="timebox right">'+
              '<div class="timeinfo">'+
                '<p class="timeheader">2016</p>'+
                '<p>Lorem ipsum..</p>'+
              '</div>'+
            '</div>'+
          '</div>';
            el.html(html);
        }
      }
    });
})(window.Zepto || window.jQuery);