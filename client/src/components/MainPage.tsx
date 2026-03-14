import mainVideo from "../assets/videos/YJWsurgicalamc_mainVideo.mp4";

export default function MainHero() {
  return (
    <div className="video-wrapper_PV">
      <video
        className="background-video"
        src={mainVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="content-overlay">
        <main className="site-main">
          <h1>메인 콘텐츠 영역</h1>
          <p>Footer / Header 레이아웃 확인용</p>
        </main>
      </div>
    </div>
  );
}