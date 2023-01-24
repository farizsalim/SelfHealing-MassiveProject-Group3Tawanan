import { Container, Figure, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { imgartikel, artikel2, artikel3, artikel4, artikel6, } from "../image";
import Artikelcard from "../components/Artikelcard";
import "./Artikel.css";

const Artikel = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      {loading ? <Loading /> :
        <section>
          <div className="line-title">
            <Container>
              <h1 className="title-artikel">Blog</h1>
            </Container>
          </div>
          <Container>
            <section className="body-artikel">
              <h1 className="subtitle-artikel">Pentingnya Menjaga Mental Health Anak Sejak Dini</h1>
              <Figure>
                <Figure.Image
                  width={1296}
                  alt="imgartikel"
                  src={imgartikel}
                />
                <Figure.Caption>
                  Arya Widya Hastungkoro | 16 Desember 2022</Figure.Caption>
              </Figure>
              <div className="text-artikel">
                <p>Kesehatan mental atau mental health anak berperan penting terhadap kemampuan anak untuk bersosialisasi di sekolah. Terjaganya kesehatan mental anak juga akan memengaruhi kualitas hidup anak serta cara anak berpikir atau bertindak.</p>
                <p>Tahap penting perkembangan mental umumnya terjadi saat masa kanak-kanak dan remaja. Di masa ini, perkembangan otak berlangsung begitu cepat.</p>
                <p>Jika anak tumbuh dengan pengalaman negatif, seperti menjadi korban kekerasan atau bullying, risiko anak menderita gangguan kesehatan mental juga akan meningkat. Hal ini dapat memengaruhi kemampuan anak dalam belajar, bahkan memunculkan rasa rendah diri.</p>
                <h2>Tips Menjaga Mental Health Anak</h2>
                <p>Pembelajaran tatap muka di sekolah dapat menjadi sarana pengembangan kemampuan sosial anak. Pasalnya, anak harus bersosialisasi dan beradaptasi dengan lingkungan sekolah, termasuk dengan guru dan teman-temannya. Ia juga jadi tahu bagaimana harus bersikap ketika muncul masalah.</p>
                <p>Agar aktivitas belajar bisa berjalan lancar dan anak merasa percaya diri di sekolah, peran orang tua untuk mempersiapkan mental health anak menjadi sangat penting. Ada beberapa cara yang bisa orang tua lakukan untuk menjaga kesehatan mental anak, antara lain: </p>
                <h6>1. Memperkuat ikatan dengan anak</h6>
                <p>Mau mendengarkan keluh kesah dan mendukung aktivitas anak dapat membangun ikatan emosional antara anak dan orang tua. Hal ini membuat anak percaya bahwa Anda adalah tempat yang aman untuk berkeluh-kesah, sehingga tidak ada hal yang perlu disembunyikan saat ia merasa kesulitan di sekolah.</p>
                <p>Saat anak mengalami kesulitan, misalnya berselisih dengan temannya di sekolah, berilah ia kesempatan untuk menyampaikan apa yang ia rasakan. Selanjutnya, dorong anak untuk menyelesaikan masalah tersebut dengan cara yang bijak. Dengan demikian, anak akan terstimulasi untuk selalu tangguh saat menghadapi masalahnya.</p>
                <h6>2. Membiasakan anak untuk mandiri</h6>
                <p>Kemandirian penting ditanamkan sejak dini oleh orang tua agar anak belajar bertanggung jawab, bisa membuat keputusan sendiri, dan tahu apa yang ia inginkan. Terbiasa mandiri akan menjadikan mental health anak lebih tangguh dan membuat anak siap menghadapi segala hal dengan percaya diri.</p>
                <p>Untuk melatih kemandirian anak, Anda bisa menunjukkan kebanggaan dan dukungan terhadap hal-hal positif yang ia lakukan, baik selama di sekolah atau di rumah. Berilah kesempatan agar anak dapat bertanggung jawab atas keputusan yang ia pilih, serta hargai perasaan dan pendapatnya.</p>
                <h6>3. Melatih anak untuk tanggap dalam segala situasi</h6>
                <p>Perubahan akan senantiasa terjadi dalam kehidupan dan anak-anak mungkin saja terkena dampaknya. Sebagai contoh, rencana liburan keluarga yang telah direncanakan batal karena suatu hal dan membuat Si Kecil merasa kecewa.</p>
                <p>Alih-alih memaksa mereka untuk mengerti keadaan, orang tua bisa mengajak anak untuk berpikir tentang aktivitas lain yang menyenangkan dan bisa dilakukan di sekitar rumah. Dengan begitu, anak akan terbiasa tanggap dengan segala perubahan yang terjadi dalam hidupnya di masa depan.</p>
                <h6>4. Mendorong minat dan bakat anak </h6>
                <p>Setiap anak memiliki minat dan bakatnya masing-masing. Ada anak yang senang bermain musik, ada pula anak yang gemar bernyanyi, mewarnai, atau berenang. Anda dapat mendukung kegiatan yang disukai anak agar ia menjadi lebih aktif, kreatif, dan terampil.</p>
                <p>Mendukung kegiatan anak dapat membantu menjaga mental health anak. Oleh karena itu, bebaskan dan dorong anak untuk mengeksplorasi minat serta bakatnya. Jangan melarang atau membatasi aktivitas anak, kecuali bila kegiatan yang ia lakukan bisa membahayakan keselamatannya.</p>
                <h6>5. Menerapkan pola hidup sehat pada anak</h6>
                <p>Sama halnya pada orang dewasa, pola hidup sehat yang diterapkan pada anak dapat meningkatkan mental health dan membantu mencegah terjadinya gangguan kesehatan mental. Anda bisa mulai membentuk pola hidup sehat pada anak dengan cara sederhana, seperti memastikan anak cukup tidur, memberikan anak asupan bergizi seimbang, dan mendorong anak untuk rutin berolahraga atau aktif bergerak.</p>
                <p>Susu kaya akan nutrisi yang diperlukan untuk tumbuh kembang anak, seperti protein, kalsium, dan asam lemak omega-3. Berbagai nutrisi tersebut diketahui dapat meningkatkan fungsi otak, memperbaiki suasana hati, serta membantu anak menjadi cepat tinggi, tangguh, dan tanggap. Agar praktis dan mudah disajikan, pilihlah susu pertumbuhan bubuk.</p>
                <p>Agar anak dapat melakukan aktivitas yang mendukung dan menjaga kesehatan mentalnya, Anda dapat melengkapi nutrisi harian anak dengan memberinya asupan sayuran, buah-buahan, sumber karbohidrat, dan susu.</p>
                <p>Selain beberapa tips di atas, Anda juga sebaiknya mengawasi perkembangan anak selama di sekolah maupun di luar sekolah. Anda bisa menanyakan kegiatan yang anak lakukan di sekolah, kesulitan yang ia hadapi saat belajar, juga hal-hal yang membuatnya senang maupun yang membuatnya sedih.</p>
                <p>Tunjukkan bahwa Anda juga tertarik pada kehidupan anak. Dengan begitu, anak tidak akan ragu untuk bercerita dan Anda bisa memberi masukan untuk membantu menyelesaikan masalahnya.</p>
                <p>Perlu diingat, anak bisa saja mengalami berbagai masalah terkait kesehatan mental selama perjalanannya tumbuh dewasa, misalnya akibat hubungan pertemanan yang merenggang, bullying, atau hal-hal lainnya yang membuatnya tertekan.</p>
                <p>Oleh karena itu, tips menjaga mental health anak di atas penting untuk diterapkan setiap orang tua demi mendukung kualitas hidup dan kesejahteraan anak di masa depan</p>
                <p>Jika anak mengalami gejala gangguan kesehatan mental akibat masalah di sekolah, seperti perubahan perilaku, menarik diri dari lingkungan, menghindari hal-hal yang sebelumnya mereka sukai, sulit tidur, atau melakukan hal yang dapat menyakiti dirinya, rangkullah dirinya dan berikan dukungan agar ia dapat melewati dan menyelesaikan masalahnya.</p>
                <p>Namun, apabila segala upaya yang Anda lakukan tidak juga berhasil membuat anak merasa lebih baik, tidak ada salahnya membawa anak ke psikolog untuk mendapatkan saran dan penanganan yang tepat.</p>
              </div>
              <Row className="list-cardartikel">
                <h3>ALSO ON SELFHEALING BLOG</h3>
                <Col>
                  <Artikelcard img={artikel4} title="Tips Tetap Semangat dan Menjaga Kesehatan Saat WFO" text="1 bulan lalu" />
                </Col>
                <Col>
                  <Artikelcard img={artikel6} title="6 Cara Tingkatkan Produktivitas Kerja" text="1 bulan lalu" />
                </Col>
                <Col>
                  <Artikelcard img={artikel3} title="6 Pantangan Cacar Air yang Perlu Dihindari" text="1 bulan lalu" />
                </Col>
                <Col>
                  <Artikelcard img={artikel2} title="9 Penyakit Kelamin Pria Beserta Gejalanya" text="1 bulan lalu" />
                </Col>
              </Row>
            </section>
          </Container>
          <Footer />
        </section>
      }
    </>
  )
}

export default Artikel;