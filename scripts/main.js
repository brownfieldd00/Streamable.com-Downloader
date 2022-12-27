let x = document.querySelector('#footer-content')
if (x) {
    let downloadLink = document.createElement('a')
    let downloadUrl = document.querySelector('#video-player-tag').src || 'javascript:window.alert(\'No video found\')'
    downloadLink.href = downloadUrl
    downloadLink.innerText = 'Download'
    x.appendChild(downloadLink)
}