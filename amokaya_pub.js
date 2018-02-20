/* (c) Paul Marshall 2017 */
/* (c) amokaya LLC 2017 */

        pubnub.publish({
          channel: news1,
          message: 
		[{"latlng":[36,-99]}]
        });
      setInterval(function(){
        pubnub.publish({
          channel: channel1,
          message: {
            eon: {
              'Fixed Income': Math.floor(Math.random() * 50),
              'Equities': Math.floor(Math.random() * 80),
              'Equities Derivatives': Math.floor(35+Math.random() * 120),
              'FX': Math.floor(Math.random() * 25)
            }
          }
        });
      }, 1500);
      setInterval(function(){
        pubnub.publish({
          channel: channel2,
          message: {
            eon: {
              'Operational Risk': Math.floor(50+Math.random() * 25)
            }
          }
        });
      }, 5000);
      setInterval(function(){
        pubnub.publish({
          channel: channel3,
          message: {
            eon: {
              'Credit Risk': Math.floor(Math.random() * 100),
              'Market Risk': Math.floor(Math.random() * 100)
            }
          }
        });
      }, 3000);
      setInterval(function(){
        pubnub.publish({
          channel: channel4,
          message: {
            eon: {
              'Firmwide Risk': Math.floor(Math.random() * 100)
            }
          }
        });
      }, 1800);

