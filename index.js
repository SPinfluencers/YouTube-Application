
const API =  "AIzaSyCA4j7mgLD5W8dtdsfqPBB-ZqbJrc6MBKw"

const searchVideo = async() => {
    try{
        const q = document.getElementById("query").value

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`)

        const data = await res.json()

        console.log(data.items)

        append(data.items)
    }

    catch(err) {
          console.log(err)
    }
};
searchVideo()

const append = (video) => {
    let show_video = document.getElementById("content")
    show_video.innerHTML = null

    video.forEach(({id:{videoId} , snippet:{title}}) => {

        let div = document.createElement("div")

        let iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${videoId}`

        iframe.width = "80%"
        iframe.hight = "80%"
        iframe.allow = "fullscreen"

        let name = document.createElement("h5")
        name.innerText = title
        

        div.append(iframe , name)

        let data = {
            title,
            videoId,
        }

        div.onclick = () => {
            showVideo(data)
        }

        show_video.append(div)
    });
}

const showVideo = (x) => {
    window.location.href = "video.html"
    store.push(x)
    localStorage.setItem("video", JSON.stringify(x));
}