import { Container} from "react-bootstrap";
import "./TesKesehatan.css";
import "../components/TestButton.css"
import Bannertes from "../components/Bannertes";
import Footer from "../components/Footer";
import { bglineartes, bgtes } from "../image";
import { useState, useEffect, React} from "react";
import Swal from "sweetalert2";
import { TROOM } from "../routes";
import { NavLink } from "react-router-dom";
import Loading from "../components/Loading";
import TestButton from "../components/TestButton";

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

  const [listScore, setScore] = useState({

  })
  // console.log(listScore);


  const scoreTotal = obj => Object.values(obj).reduce((a, b) => parseInt(a) + parseInt(b), 0);
  console.log(scoreTotal(listScore));

  const questname1 = "Dalam 4 minggu terakhir, Anda tiba-tiba merasa lelah?";
  const questname2 = "Dalam 4 minggu terakhir, Anda merasa cemas?";
  const questname3 = "Dalam 4 minggu terakhir, Anda merasa cemas sampai tidak bisa menenangkan diri sendiri meskipun ada bantuan?";
  const questname4 = "Dalam 4 minggu terakhir, Anda merasa putus asa?";
  const questname5 = "Dalam 4 minggu terakhir, Anda merasa gelisah atau tidak tenang?";
  
  const onHandleScore = (key, value) => {
    // console.log(value)
    setScore((prevState) => {
      return {
        ...prevState,
        [key] : value,

      }
    })
  }

  const hasiltes = (e) =>{
    window.scrollTo(0, 0)
    if(scoreTotal(listScore) >= 25){
      setBadResult(true)
      e.preventDefault()
      console.log(scoreTotal(listScore));
    }
    if(scoreTotal(listScore) >=15){
      setNormalResult(true)
      e.preventDefault()
    }
    if(scoreTotal(listScore) >=5){
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
        <div className="d-flex justify-content-center">
          <h1 className="title-tkes text-center">Tes Kepribadian di SelfHealing.ID</h1>
        </div>
        <Bannertes/>
        <form>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname1}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <TestButton  name={'questname1'} id={'questname11'} value={1} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname1', e.target.value)} />
            <TestButton  name={'questname1'} id={'questname12'} value={2} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname1', e.target.value)} />
            <TestButton  name={'questname1'} id={'questname13'} value={3} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname1', e.target.value)} />
            <TestButton  name={'questname1'} id={'questname14'} value={4} labelClass="lbl-rd4" inputClass={"rd-form4"} onChange={e => onHandleScore('questname1', e.target.value)} />
            <TestButton  name={'questname1'} id={'questname15'} value={5} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname1', e.target.value)} />
            <TestButton  name={'questname1'} id={'questname16'} value={6} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname1', e.target.value)} />
            <TestButton  name={'questname1'} id={'questname17'} value={7} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname1', e.target.value)} />
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <div className="line-form"></div>
        </section>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname2}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <TestButton  name={'questname2'} id={'questname21'} value={1} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname2', e.target.value)} />
            <TestButton  name={'questname2'} id={'questname22'} value={2} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname2', e.target.value)} />
            <TestButton  name={'questname2'} id={'questname23'} value={3} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname2', e.target.value)} />
            <TestButton  name={'questname2'} id={'questname24'} value={4} labelClass="lbl-rd4" inputClass={"rd-form4"} onChange={e => onHandleScore('questname2', e.target.value)} />
            <TestButton  name={'questname2'} id={'questname25'} value={5} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname2', e.target.value)} />
            <TestButton  name={'questname2'} id={'questname26'} value={6} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname2', e.target.value)} />
            <TestButton  name={'questname2'} id={'questname27'} value={7} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname2', e.target.value)} />
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <div className="line-form"></div>
        </section>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname3}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <TestButton  name={'questname3'} id={'questname31'} value={1} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname3', e.target.value)} />
            <TestButton  name={'questname3'} id={'questname32'} value={2} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname3', e.target.value)} />
            <TestButton  name={'questname3'} id={'questname33'} value={3} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname3', e.target.value)} />
            <TestButton  name={'questname3'} id={'questname34'} value={4} labelClass="lbl-rd4" inputClass={"rd-form4"} onChange={e => onHandleScore('questname3', e.target.value)} />
            <TestButton  name={'questname3'} id={'questname35'} value={5} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname3', e.target.value)} />
            <TestButton  name={'questname3'} id={'questname36'} value={6} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname3', e.target.value)} />
            <TestButton  name={'questname3'} id={'questname37'} value={7} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname3', e.target.value)} />
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <div className="line-form"></div>
        </section>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname4}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <TestButton  name={'questname4'} id={'questname41'} value={1} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname4', e.target.value)} />
            <TestButton  name={'questname4'} id={'questname42'} value={2} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname4', e.target.value)} />
            <TestButton  name={'questname4'} id={'questname43'} value={3} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname4', e.target.value)} />
            <TestButton  name={'questname4'} id={'questname44'} value={4} labelClass="lbl-rd4" inputClass={"rd-form4"} onChange={e => onHandleScore('questname4', e.target.value)} />
            <TestButton  name={'questname4'} id={'questname45'} value={5} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname4', e.target.value)} />
            <TestButton  name={'questname4'} id={'questname46'} value={6} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname4', e.target.value)} />
            <TestButton  name={'questname4'} id={'questname47'} value={7} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname4', e.target.value)} />
            <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
          </section>
          <div className="line-form"></div>
        </section>
        <section className="mb-5">
          <h3 className="pertanyaan">{questname5}</h3>
          <section className="d-flex justify-content-between align-items-center">
            <h4 className="ket-jawaban">Saya Setuju</h4>
            <TestButton  name={'questname5'} id={'questname51'} value={1} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname5', e.target.value)} />
            <TestButton  name={'questname5'} id={'questname52'} value={2} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname5', e.target.value)} />
            <TestButton  name={'questname5'} id={'questname53'} value={3} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname5', e.target.value)} />
            <TestButton  name={'questname5'} id={'questname54'} value={4} labelClass="lbl-rd4" inputClass={"rd-form4"} onChange={e => onHandleScore('questname5', e.target.value)} />
            <TestButton  name={'questname5'} id={'questname55'} value={5} labelClass="lbl-rd3" inputClass={"rd-form3"} onChange={e => onHandleScore('questname5', e.target.value)} />
            <TestButton  name={'questname5'} id={'questname56'} value={6} labelClass="lbl-rd2" inputClass={"rd-form2"} onChange={e => onHandleScore('questname5', e.target.value)} />
            <TestButton  name={'questname5'} id={'questname57'} value={7} labelClass="lbl-rd1" inputClass={"rd-form1"} onChange={e => onHandleScore('questname5', e.target.value)} />
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