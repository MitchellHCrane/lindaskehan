import "../css/footer.css";
import "../css/App.css";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footerGridItem">
          <h3 className="footerH3">Contact</h3>
          <p className="footerP">
            Phone: <a href="tel:801-209-4744">(801)-209-4744</a>
          </p>
          <p className="footerP">Fax: (801)-951-5213</p>
          <p className="footerP">
            Email:{" "}
            <a href="mailto:linda@firstclasshomemortgage.com">
              Linda@firstclasshomemortgage.com
            </a>
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">License Info</h3>
          <p className="footerP">Linda Skehan (NMLS #262918)</p>
          <p className="footerP">
            Regulated by the Colorado Divison of Real Estate NMLS #1843
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">Address</h3>
          <p className="footerP">First Class Home Mortgage</p>
          <p className="footerP">
            <a
              href="https://goo.gl/maps/o97dcDxGxFcAcRheA"
              target="_blank"
              rel="noreferrer"
            >
              10808 River Front Parkway, Suite #3035,{<br />} South Jordan, UT
              84095
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
