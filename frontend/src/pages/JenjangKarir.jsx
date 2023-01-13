import Footer from "../components/Footer";
import { bgkarir } from "../image";
import "./JenjangKarir.css"

const JenjangKarir = () => {
    return(
        <section>
                <img src={bgkarir} alt="bgkarir" className="bgkarir"/>
                <h1 className="titlekarir">Jenjang Karir</h1>
                <p className="quoteskarir">Temukan karir kesehatan impianmu disini!</p>
                <section>

                </section>
                <section>

                </section>
                <Footer/>
        </section>
    )
}

export default JenjangKarir;