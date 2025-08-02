import "./duolingoCard.css";

export default function DuolingoCard() {
  const username = "tahayk3";
  const duolingoUrl = `https://www.duolingo.com/profile/${username}`;
  const cardUrl = `https://duolingo-stats-card.vercel.app/api?username=${username}&theme=shades-of-purple&sort=xp`;


  return (
    <div className="duo-wrapper">
                <h2 className="duo-title">Mi progreso en Duolingo</h2>
      <div className="duo-card">
        <a href={duolingoUrl} target="_blank" rel="noopener noreferrer">
          <div className="duo-image-container">
            <img
              src={cardUrl}
              alt={`Progreso en Duolingo de ${username}`}
              className="duo-image"
            />
          </div>
        </a>
        <p className="duo-text">
          Puedes hacer clic en la tarjeta para ver mi perfil completo en Duolingo.
        </p>
      </div>
    </div>
  );
}
