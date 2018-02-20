<div id="demochart"></div>
<script type="text/javascript">
var __eon_pubnub = PUBNUB.init({
  subscribe_key: "sub-c-bd9ab0d6-6e02-11e5-8d3b-0619f8945a4f"
});
var __eon_cols = ["Austin","New York","San Francisco","Portland"]; 
var __eon_labels = {}; 
chart = eon.chart({
  pubnub: __eon_pubnub,
  channel: "test-channel-0.5279049738132486",
  history: false,
  flow: true,
  rate: 1000,
  limit: 5,
  generate: {
    bindto: "#demochart",
    data: {
      colors: {"Austin":"#D70060","New York":"#E54028","San Francisco":"#F18D05","Portland":"#113F8C"},
      type: "spline"
    },
    transition: {
      duration: 250
    },
    axis: {
      x: {
        label: ""
      },
      y: {
        label: ""
      }
    },
    grid: {
      x: {
        show: false 
      },
      y: {
        show: false 
      }
    },
    tooltip: {
     show: true
    },
    point: {
      show: true
    }
  },
  transform: function(message) {
    var message = eon.c.flatten(message.eon);
    var o = {};
    for(index in message) {
      if(__eon_cols.indexOf(index) > -1){
        o[__eon_labels[index] || index] = message[index];
      }
    }
    return {
      eon: o
    };
  }
});
</script>
