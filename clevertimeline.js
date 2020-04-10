;(function($) {
    $.fn.CleverTimeline = function(options) {
        var defaults = {
            items: [
            ],
            onSelectItem: function(item) {}
        };
        this.settings = {};
        var el = this;

        function init() {
            this.settings = $.extend({}, defaults, options);
            ShowTimeline();            
            return this;
        };

        init();        

        el.setItems = function(newItems) {
            settings.items = [...newItems]; 
            ShowTimeline();
        }

        onItemClick = function(time) {
            var item = this.settings.items.find(i => i.time == time);
            this.settings.onSelectItem(item);
        }

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
                        '" onclick="onItemClick(\''+item.time+'\')">'+
                        '<div class="timeinfo ' + busy +'">'+
                        '<div><span class="timeheader">'+item.time+'</span><i class="busymessage">'+message+'</i></div>'+
                        '<div class="timebody">'+item.name+'</div>'+
                        '</div>'+
                    '</div>';
            });
            html += '</div>';
            el.html(html);
        }
        return el;
      }

})(window.Zepto || window.jQuery);