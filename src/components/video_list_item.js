import React from 'react';

export default ({video, onVideoSelect}) => {
    console.log('Video List Item:', onVideoSelect)
    const { url } = video.snippet.thumbnails.default;
    const { title } = video.snippet;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={url}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    );
}