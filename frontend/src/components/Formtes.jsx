import "./Formtes.css";

const Formtes = () => {
  return (
    <section className="mb-5">
      <h3 className="pertanyaan">Anda Merasa Kesulitan memperkenalkan diri  ke orang lain.</h3>
      <form className="d-flex justify-content-between align-items-center">
        <h4 className="ket-jawaban">Saya Setuju</h4>
        <input type="radio" name="teskesehatan" value={1} id="radio-1" className="rd-form1" />
        <label className="lbl-rd1" htmlFor="radio-1"></label>

        <input type="radio" name="teskesehatan" value={2} id="radio-2" className="rd-form2" />
        <label className="lbl-rd2" htmlFor="radio-2"></label>

        <input type="radio" name="teskesehatan" value={3} id="radio-3" className="rd-form3" />
        <label className="lbl-rd3" htmlFor="radio-3"></label>

        <input type="radio" name="teskesehatan" value={4} id="radio-4" className="rd-form4" />
        <label className="lbl-rd4" htmlFor="radio-4"></label>

        <input type="radio" name="teskesehatan" value={5} id="radio-5" className="rd-form3" />
        <label className="lbl-rd3" htmlFor="radio-5"></label>

        <input type="radio" name="teskesehatan" value={6} id="radio-6" className="rd-form2" />
        <label className="lbl-rd2" htmlFor="radio-6"></label>

        <input type="radio" name="teskesehatan" value={7} id="radio-7" className="rd-form1" />
        <label className="lbl-rd1" htmlFor="radio-7"></label>
        <h4 className="ket-jawaban">Saya Tidak Setuju</h4>
      </form>
      <div className="line-form"></div>
    </section>
  )
}

export default Formtes;