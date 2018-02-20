/* (c) amokaya LLC 2017 */
/* (c) Paul Marshall    */

      var pubnub = PUBNUB.init({
        publish_key: 'pub-c-b9c4a1f2-884f-4792-86ea-9734aa3cec52',
        subscribe_key: 'sub-c-a0d2df6c-0360-11e5-bc83-0619f8945a4f'
      });

      var news1 = "news1" + Math.random();
      var news2 = "news2" + Math.random();

      eon.map({
        pubnub: pubnub,
        channel: news1,
        bindto: '#news',
      });

      eon.chart({
        pubnub: pubnub,
        channel: news2,
        history: false,
        debug: true,
        generate: {
          bindto: '#newspie',
          data: {
      	    colors: {"Politics":"#F9BF3B","Sport":"#1E824C","Entertainment":"#65C6BB","Arts":"#F62459"},
      	    type: "donut",
            labels: false
      });
