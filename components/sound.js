import React from 'react';

const SoundCloudPlayer = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '280px' }}>
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1841758128&color=%2337312f&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"
        ></iframe>
      </div>
      <div style={{
        fontSize: '10px',
        color: '#cccccc',
        lineBreak: 'anywhere',
        wordBreak: 'normal',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
        fontWeight: 100
      }}>
        <a href="https://soundcloud.com/pibestron" title="Pibestron" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>
          Pibestron
        </a> · <a href="https://soundcloud.com/pibestron/sets/sets" title="Sets" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>
          Sets
        </a>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;