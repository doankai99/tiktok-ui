import ReactPlayer from "react-player";

function VideoPlayer(props: { videoUrl: string; index: number}) {
    return ( 
        <div className="pt-2">
            <div className="">Video {props.index + 1}</div>
                <div className="">
                    <ReactPlayer
                        url={props.videoUrl}
                        controls
                        width="auto"
                        height="auto"
                    />
                </div>
        </div>
    );
}

export default VideoPlayer;