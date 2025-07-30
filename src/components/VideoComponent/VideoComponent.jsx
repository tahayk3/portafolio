const VideoComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2.5rem' }}>
      <video width="330" controls style={{  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
        <source src="/apinasa.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
};

export default VideoComponent;
