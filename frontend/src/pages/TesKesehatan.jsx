import { Container} from "react-bootstrap";
import "./TesKesehatan.css";
import "../components/Formtes.css"
import Bannertes from "../components/Bannertes";
import Footer from "../components/Footer";
import { bglineartes, bgtes } from "../image";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { TROOM } from "../routes";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";

const TesKesehatan = () => {

  const [loading,setLoading] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setLoading(false),200);
    return () => clearTimeout(timer);
  }, [])

  
  const [badResult,setBadResult] = useState(false);
  const [normalResult,setNormalResult] = useState(false);
  const [goodResult,setGoodResult] = useState(false);
  const [score1,getScore1] = useState();
  const [score2,getScore2] = useState();
  const [score3,getScore3] = useState();
  const [score4,getScore4] = useState();
  const [score5,getScore5] = useState();
  const questname1 = "Dalam 4 minggu terakhir, Anda tiba-tiba merasa lelah?";
  const questname2 = "Dalam 4 minggu terakhir, Anda merasa cemas?";
  const questname3 = "Dalam 4 minggu terakhir, Anda merasa cemas sampai tidak bisa menenangkan diri sendiri meskipun ada bantuan?";
  const questname4 = "Dalam 4 minggu terakhir, Anda merasa putus asa?";
  const questname5 = "Dalam 4 minggu terakhir, Anda merasa gelisah atau tidak tenang?";
  const scoreTotal = parseInt(score1) + parseInt(score2) + parseInt(score3) + parseInt(score4) + parseInt(score5);
  
  const hasiltes = (e) =>{
    window.scrollTo(0, 0)
    if(scoreTotal >= 25){
      setBadResult(true)
      e.preventDefault()
      console.log(scoreTotal);
    }
    if(scoreTotal >=15){
      setNormalResult(true)
      e.preventDefault()
    }
    if(scoreTotal >=5){
      setGoodResult(true)
      e.preventDefault()
    }
    else {
      Swal.fire("Lengkapi Data !","", "error")
      e.preventDefault()
    }
  }
  return (
    <section>
      {loading ? <Loading/> : (<section>
      {badResult ? ( 
        <section>
          <img src={bgtes} alt="bgtes" className="bgtes2"/>
          <div className="">
            <h1 className="title-tkes2 m-5">Hasil Tes</h1>
          </div>
          <Container className="d-flex justify-content-center">
            <div className="card hasil-tes">
              <div className="card-body  d-flex justify-content-center">
                <h5 className="card-title-hasiltest text-center">Tingkat kesehatan mentalmu Rendah</h5>
              </div>
              <div className="card-body2">
                <p className="card-text m-5 text-center">
                  Hasil tes kamu menunjukkan persepsi tingkat kesehatan mental yang yang rendah.
                  Saat ini kamu cenderung merasa tidak nyaman dengan kehidupanmu.
                  Mungkin kamu merasa ada hal-hal tidak terduga yang terjadi dalam hidupmu.
                  Kamu juga mungkin mengalami kesulitan untuk mengatasi masalah-masalah yang sedang dihadapi.</p>
                <p className="card-text m-5 text-center">Butuh bantuan buat solusiin masalahmu?</p>
                <p className="card-text m-5 text-center">Hasil ini tidak dimaksudkan sebagai diagnosis.
                  Anda dapat bertemu dengan dokter atau terapis untuk mendapatkan diagnosis dan/atau mengakses terapi atau pengobatan.
                  Berbagi hasil ini dengan seseorang yang Anda percayai bisa menjadi tempat yang bagus untuk memulai.</p>
              </div>
              <NavLink className="text-center m-3" to={TROOM}><button className="btn-rterapi">Yuk Coba Ruang Terapi</button></NavLink>
            </div>
          </Container>
            <div className="card disclaimer m-3">
              <div className="card-body-disclaimer">
                <p className="card-text-disclaimer mx-5 mt-3">Disclaimer</p>
                <p className="card-text-disclaimer mx-5">Jika Anda sedang mengalami krisis psikologis yang mengancam hidup Anda, layanan ini tidak direkomendasikan.</p>
                <p className="card-text-disclaimer mx-5 mb-3">Silakan menghubungi 119.</p>
              </div>
            </div>
        </section>
        )
        : normalResult ? (
          <section>
          <img src={bgtes} alt="bgtes" className="bgtes2"/>
          <div className="">
            <h1 className="title-tkes2 m-5">Hasil Tes</h1>
          </div>
          <Container className="d-flex justify-content-center">
            <div className="card hasil-tes">
              <div className="card-body  d-flex justify-content-center">
                <h5 className="card-title-hasiltest text-center">Tingkat kesehatan mentalmu kurang stabil</h5>
              </div>
              <div className="card-body2">
                <p className="card-text m-5 text-center">
                  Hasil tes kamu menunjukkan persepsi tingkat kesehatan mental yang kurang stabil.
                  Saat ini Kamu Membutuhkan Sedikit Bantuan!
                  Berdasarkan hasil screening kesehatan mental, saat ini kondisimu tergolong kurang stabil.
                  Kamu mungkin membutuhkan sedikit bantuan untuk melewati situasi ini. Coba ingat-ingat lagi,
                  adakah hal yang membuat kamu merasa kurang nyaman atau mengganggumu dalam beberapa hari belakangan ini?
                  Jangan ragu untuk bercerita mengenai hal tersebut pada teman, keluarga, atau orang yang kamu percaya ya.</p>
                <p className="card-text m-5 text-center">Butuh bantuan buat solusiin masalahmu?</p>
                <p className="card-text m-5 text-center">Hasil ini tidak dimaksudkan sebagai diagnosis.
                  Anda dapat bertemu dengan dokter atau terapis untuk mendapatkan diagnosis dan/atau mengakses terapi atau pengobatan.
                  Berbagi hasil ini dengan seseorang yang Anda percayai bisa menjadi tempat yang bagus untuk memulai.</p>
              </div>
              <NavLink className="text-center m-3" to={TROOM}><button className="btn-rterapi">Yuk Coba Ruang Terapi</button></NavLink>
            </div>
          </Container>
            <div className="card disclaimer m-3">
              <div className="card-body-disclaimer">
                <p className="card-text-disclaimer mx-5 mt-3">Disclaimer</p>
                <p className="card-text-disclaimer mx-5">Jika Anda sedang mengalami krisis psikologis yang mengancam hidup Anda, layanan ini tidak direkomendasikan.</p>
                <p className="card-text-disclaimer mx-5 mb-3">Silakan menghubungi 119.</p>
              </div>
            </div>
          </section>
        ) 
        : goodResult ?(
          <section>
            <img src={bgtes} alt="bgtes" className="bgtes2"/>
            <div className="">
              <h1 className="title-tkes2 m-5">Hasil Tes</h1>
            </div>
            <Container className="d-flex justify-content-center">
              <div className="card hasil-tes">
                <div className="card-body  d-flex justify-content-center">
                  <h5 className="card-title-hasiltest text-center">Sepertinya Kamu Baik baik saja!</h5>
                </div>
                <div className="card-body2">
                  <p className="card-text m-5 text-center">
                    Hasil tes kamu menunjukkan persepsi tingkat kesehatan mental yang baik.
                    Berdasarkan hasil screening kesehatan mental, saat ini kondisimu tergolong stabil. Jaga terus kesehatan mental kamu ya.</p>
                  <p className="card-text m-5 text-center">Butuh bantuan buat solusiin masalahmu?</p>
                  <p className="card-text m-5 text-center">Hasil ini tidak dimaksudkan sebagai diagnosis.
                    Anda dapat bertemu dengan dokter atau terapis untuk mendapatkan diagnosis dan/atau mengakses terapi atau pengobatan.
                    Berbagi hasil ini dengan seseorang yang Anda percayai bisa menjadi tempat yang bagus untuk memulai.</p>
                </div>
                <NavLink className="text-center m-3" to={TROOM}><button className="btn-rterapi">Yuk Coba Ruang Terapi</button></NavLink>
              </div>
            </Container>
              <div className="card disclaimer m-3">
                <div className="card-body-disclaimer">
                  <p className="card-text-disclaimer mx-5 mt-3">Disclaimer</p>
                  <p className="card-text-disclaimer mx-5">Jika Anda sedang mengalami krisis psikologis yang mengancam hidup Anda, layanan ini tidak direkomendasikan.</p>
                  <p className="card-text-disclaimer mx-5 mb-3">Silakan menghubungi 119.</p>
                </div>
              </div>
          </section>
        ) 
        : (
        <section>
            <img src={bgtes} alt="bgtes" className="bgtes"/>
            <img src={bglineartes} alt="bglineartes" className="bglineartes" />
      <Container>
        <img src={bgtes} alt="bgtes" className="bgtes"/>
        <div className="d-flex justify-content-center">
          <h1 className="title-tkes text-center">Tes Kepribadian di SelfHealing.ID</h1>
        </div>
        <Bannertes/>
        <form>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname1}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <input type="radio" name={questname1} value={1} id={questname1+"-1"} className="rd-form1" onChange={e=>getScore1(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname1+"-1"}></label>

            <input type="radio" name={questname1} value={2} id={questname1+"-2"} className="rd-form2" onChange={e=>getScore1(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname1+"-2"}></label>

            <input type="radio" name={questname1} value={3} id={questname1+"-3"} className="rd-form3" onChange={e=>getScore1(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname1+"-3"}></label>

            <input type="radio" name={questname1} value={4} id={questname1+"-4"} className="rd-form4" onChange={e=>getScore1(e.target.value)}/>
            <label className="lbl-rd4" htmlFor={questname1+"-4"}></label>

            <input type="radio" name={questname1} value={5} id={questname1+"-5"} className="rd-form3" onChange={e=>getScore1(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname1+"-5"}></label>

            <input type="radio" name={questname1} value={6} id={questname1+"-6"} className="rd-form2" onChange={e=>getScore1(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname1+"-6"}></label>

            <input type="radio" name={questname1} value={7} id={questname1+"-7"} className="rd-form1" onChange={e=>getScore1(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname1+"-7"}></label>
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <div className="line-form"></div>
        </section>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname2}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <input type="radio" name={questname2} value={1} id={questname2+"-1"} className="rd-form1" onChange={e=>getScore2(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname2+"-1"}></label>

            <input type="radio" name={questname2} value={2} id={questname2+"-2"} className="rd-form2" onChange={e=>getScore2(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname2+"-2"}></label>

            <input type="radio" name={questname2} value={3} id={questname2+"-3"} className="rd-form3" onChange={e=>getScore2(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname2+"-3"}></label>

            <input type="radio" name={questname2} value={4} id={questname2+"-4"} className="rd-form4" onChange={e=>getScore2(e.target.value)}/>
            <label className="lbl-rd4" htmlFor={questname2+"-4"}></label>

            <input type="radio" name={questname2} value={5} id={questname2+"-5"} className="rd-form3" onChange={e=>getScore2(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname2+"-5"}></label>

            <input type="radio" name={questname2} value={6} id={questname2+"-6"} className="rd-form2" onChange={e=>getScore2(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname2+"-6"}></label>

            <input type="radio" name={questname2} value={7} id={questname2+"-7"} className="rd-form1" onChange={e=>getScore2(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname2+"-7"}></label>
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <div className="line-form"></div>
        </section>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname3}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <input type="radio" name={questname3} value={1} id={questname3+"-1"} className="rd-form1" onChange={e=>getScore3(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname3+"-1"}></label>

            <input type="radio" name={questname3} value={2} id={questname3+"-2"} className="rd-form2" onChange={e=>getScore3(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname3+"-2"}></label>

            <input type="radio" name={questname3} value={3} id={questname3+"-3"} className="rd-form3" onChange={e=>getScore3(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname3+"-3"}></label>

            <input type="radio" name={questname3} value={4} id={questname3+"-4"} className="rd-form4" onChange={e=>getScore3(e.target.value)}/>
            <label className="lbl-rd4" htmlFor={questname3+"-4"}></label>

            <input type="radio" name={questname3} value={5} id={questname3+"-5"} className="rd-form3" onChange={e=>getScore3(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname3+"-5"}></label>

            <input type="radio" name={questname3} value={6} id={questname3+"-6"} className="rd-form2" onChange={e=>getScore3(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname3+"-6"}></label>

            <input type="radio" name={questname3} value={7} id={questname3+"-7"} className="rd-form1" onChange={e=>getScore3(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname3+"-7"}></label>
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <div className="line-form"></div>
        </section>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname4}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <input type="radio" name={questname4} value={1} id={questname4+"-1"} className="rd-form1" onChange={e=>getScore4(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname4+"-1"}></label>

            <input type="radio" name={questname4} value={2} id={questname4+"-2"} className="rd-form2" onChange={e=>getScore4(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname4+"-2"}></label>

            <input type="radio" name={questname4} value={3} id={questname4+"-3"} className="rd-form3" onChange={e=>getScore4(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname4+"-3"}></label>

            <input type="radio" name={questname4} value={4} id={questname4+"-4"} className="rd-form4" onChange={e=>getScore4(e.target.value)}/>
            <label className="lbl-rd4" htmlFor={questname4+"-4"}></label>

            <input type="radio" name={questname4} value={5} id={questname4+"-5"} className="rd-form3" onChange={e=>getScore4(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname4+"-5"}></label>

            <input type="radio" name={questname4} value={6} id={questname4+"-6"} className="rd-form2" onChange={e=>getScore4(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname4+"-6"}></label>

            <input type="radio" name={questname4} value={7} id={questname4+"-7"} className="rd-form1" onChange={e=>getScore4(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname4+"-7"}></label>
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <div className="line-form"></div>
        </section>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname5}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <input type="radio" name={questname5} value={1} id={questname5+"-1"} className="rd-form1" onChange={e=>getScore5(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname5+"-1"}></label>

            <input type="radio" name={questname5} value={2} id={questname5+"-2"} className="rd-form2" onChange={e=>getScore5(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname5+"-2"}></label>

            <input type="radio" name={questname5} value={3} id={questname5+"-3"} className="rd-form3" onChange={e=>getScore5(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname5+"-3"}></label>

            <input type="radio" name={questname5} value={4} id={questname5+"-4"} className="rd-form4" onChange={e=>getScore5(e.target.value)}/>
            <label className="lbl-rd4" htmlFor={questname5+"-4"}></label>

            <input type="radio" name={questname5} value={5} id={questname5+"-5"} className="rd-form3" onChange={e=>getScore5(e.target.value)}/>
            <label className="lbl-rd3" htmlFor={questname5+"-5"}></label>

            <input type="radio" name={questname5} value={6} id={questname5+"-6"} className="rd-form2" onChange={e=>getScore5(e.target.value)}/>
            <label className="lbl-rd2" htmlFor={questname5+"-6"}></label>

            <input type="radio" name={questname5} value={7} id={questname5+"-7"} className="rd-form1" onChange={e=>getScore5(e.target.value)}/>
            <label className="lbl-rd1" htmlFor={questname5+"-7"}></label>
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <section className="d-flex justify-content-center">
            <button className="btn-selesai" onClick={hasiltes}>Selesai</button>
          </section>
          <div className="line-form"></div>
        </section>
      </form>
      </Container>
        </section>
      )}
     </section>
     )}
      <Footer/>
    </section>
  )
}

export default TesKesehatan;