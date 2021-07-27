// ==UserScript==
// @name        autolike - youtube.com
// @namespace   youtube
// @match       https://www.youtube.com/watch
// @author      https://github.com/andersonbosa <aka @t4inha>
// ==/UserScript==

const likeVideo = () => {
    const mainSelector = '[id="top-level-buttons-computed"] #text'
    const isLiked = Boolean(document.querySelector(`${mainSelector}.style-default-active`))
    if (isLiked) {
        return
    }
    document.querySelector(`${mainSelector}`).click()
}

const getPageChannel = () => {
  const channelStr = document.querySelector('#text > a')
  return channelStr &&
    channelStr.innerText &&
    channelStr.innerText.toLowerCase() 
}

const isChannelWhitelisted = () => {
    const channelsWhiteliste = [
        'Try Hack Me',
        'liveoverflow'
    ]

    return channelsWhiteliste
      .map(item => item.toLowerCase())
      .includes(getPageChannel())
}

const autoLike = () => {
    if (!isChannelWhitelisted()) {
        return 
    }
    clearInterval(setedInterval)
    likeVideo()
}

const setedInterval = setInterval(autoLike, 3000)

