# youtube-channel-live-stream

You could fetch all live stream status in youtube channel. You could get data for videoId, videoTitle, liveStatus.

# Installation

```
npm install youtube-channel-live-stream

```


# Usage

First of all, you need to find your youtube channel address. If your channel address name is given name. Your first parameter is your channel name. Your second parameter is true. If your channel address name is ID. Your first parameter is your channel ID. Your second parameter is false.

**Example 1**

```
var ytChLiveStream = require('youtube-channel-live-stream')

ytChLiveStream.getLiveStream('trthaber',true)
.then((res)=>console.log(res));
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


**Example 2**

```
var ytChLiveStream = require('youtube-channel-live-stream')

ytChLiveStream.getLiveStream('UCNlfGuzOAKM1sycPuM_QTHg',false)
.then((res)=>console.log(res));
```

Result:
```
[
  {
    videoId: 't5WhjYYM6dM',
    videoTitle: 'Deep Focus Music To Improve',
    liveStatus: 'live'
  },
  {
    videoId: '8yRgYiNH39E',
    videoTitle: '🔴 Deep Focus 24/7 - Ambient Music For Studying',
    liveStatus: 'live'
  },
  .
  .
  .
  {
    videoId: 'Voh11CtTn4M',
    videoTitle: '🔴 Deep Focus 24/7 - Ambient Music For Studying',
    liveStatus: 'live'
  }
]

```


