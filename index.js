const axios = require('axios');

async function getLiveStream(url) {
    var liveStream = []
    const getURL = 'https://www.youtube.com/c/'+ url +'/videos?view=2&live_view=501'
    const response = await axios.get(getURL)

    var getData = response.data
    var liveVideoIDTag = 'var ytInitialData = '
    let position = getData.indexOf(liveVideoIDTag)
    var positionEnd = getData.indexOf('</script>', position)
    // console.log(position)
    // console.log(getData.slice(position+20,positionEnd-1))
    var gettingData = JSON.parse(getData.slice(position+20,positionEnd-1))
    // console.log(gettingData)
    // console.log(gettingData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents)
    
    var searchArray = gettingData.contents.twoColumnBrowseResultsRenderer.tabs[1].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].gridRenderer.items

    for (let index = 0; index < searchArray.length; index++) {
        const element = searchArray[index];

        var findVideoId = element.gridVideoRenderer.videoId
        var findTitle = element.gridVideoRenderer.title.runs[0].text

        if(element.gridVideoRenderer.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer.style == 'LIVE'){
            var findLiveStatus = 'live'
            liveStream.push({videoId: findVideoId, videoTitle: findTitle, liveStatus:findLiveStatus}) 

        }
    }

    return liveStream
}

module.exports = {
    getLiveStream
}
