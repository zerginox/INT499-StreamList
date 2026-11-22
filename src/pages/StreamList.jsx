import { Ticket } from 'lucide-react';
import TitleForm from '../components/TitleForm';
import cinemaPhoto from '../assets/cinema.jpg';

export default function StreamList() {
  function logTitle(title) {
    console.log('StreamList submission:', title);
  }

  return (
    <div className="wrap home">
      <title>StreamList | EZTechMovie</title>
      <section className="hero" aria-labelledby="watchlist-heading">
        <img className="hero-photo" src={cinemaPhoto} alt="" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1 id="watchlist-heading">Your<br /><em>watchlist.</em></h1>
          <p>What do you want to watch next?</p>
        </div>
        <div className="frame-marks" aria-hidden="true" />
      </section>
      <section className="entry" aria-labelledby="entry-heading">
        <div className="entry-intro">
          <Ticket aria-hidden="true" size={29} strokeWidth={1.5} />
          <h2 id="entry-heading">Add a title</h2>
        </div>
        <TitleForm onTitleSubmit={logTitle} />
      </section>
    </div>
  );
}
