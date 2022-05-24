# youtube-channel-live-stream

You fetch all live stream in your youtube channel.

# Installation

```
npm install youtube-channel-live-stream

```


# Usage

```
var ytChLiveStream = require('youtube-channel-live-stream') // 

ytChLiveStream.getLiveStream('trthaber').then((res)=>console.log(res));
```

Result:

```
[
  {
    videoId: 'Rc5qrxlJZzc',
    videoTitle: 'TRT Haber Canlı Yayını',
    liveStatus: 'live'
  }
]

```




