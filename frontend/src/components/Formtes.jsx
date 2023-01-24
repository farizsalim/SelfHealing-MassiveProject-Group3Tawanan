import { useState } from "react";
import "./Formtes.css";

const Formtes = ({question,questname,setScore}) => {
 const [score,getScore] = useState();
 setScore=score;
  return (
    <section className="mb-5">
      <h3 className="pertanyaan">{question}</h3>
      <form className="d-flex justify-content-between align-items-center">
        <h4 className="ket-jawaban">Saya Setuju</h4>
        <input type="radio" name={questname} value={1} id={questname+"-1"} className="rd-form1" onChange={e=>getScore(e.target.value)}/>
        <label className="lbl-rd1" htmlFor={questname+"-1"}></label>

        <input type="radio" name={questname} value={2} id={questname+"-2"} className="rd-form2" onChange={e=>getScore(e.target.value)}/>
        <label className="lbl-rd2" htmlFor={questname+"-2"}></label>

        <input type="radio" name={questname} value={3} id={questname+"-3"} className="rd-form3" onChange={e=>getScore(e.target.value)}/>
        <label className="lbl-rd3" htmlFor={questname+"-3"}></label>

        <input type="radio" name={questname} value={4} id={questname+"-4"} className="rd-form4" onChange={e=>getScore(e.target.value)}/>
        <label className="lbl-rd4" htmlFor={questname+"-4"}></label>

        <input type="radio" name={questname} value={5} id={questname+"-5"} className="rd-form3" onChange={e=>getScore(e.target.value)}/>
        <label className="lbl-rd3" htmlFor={questname+"-5"}></label>

        <input type="radio" name={questname} value={6} id={questname+"-6"} className="rd-form2" onChange={e=>getScore(e.target.value)}/>
        <label className="lbl-rd2" htmlFor={questname+"-6"}></label>

        <input type="radio" name={questname} value={7} id={questname+"-7"} className="rd-form1" onChange={e=>getScore(e.target.value)}/>
        <label className="lbl-rd1" htmlFor={questname+"-7"}></label>
        <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
      </form>
      <div className="line-form"></div>
    </section>
  )
}

export default Formtes;