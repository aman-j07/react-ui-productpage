import spencersLogoTransparent from "../assets/logos/spencers-logo-transparent.png";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__top row--centeraligned">
          {[1, 2, 3, 4, 5].map((ele) => {
            return (
              <ul className="footer__lists">
                <li className="footer__listhead smtext">FOOTER{ele}</li>
                {[1, 2, 3].map((ele) => (
                  <li className="footer__listitem vsmtext">Item</li>
                ))}
              </ul>
            );
          })}
        </div>
        <div className="footer__bottom">
          <img src={spencersLogoTransparent} alt="spencers-logo-transparent" />
        </div>
      </footer>
  )
}

export default Footer