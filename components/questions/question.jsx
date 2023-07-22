import { useState } from "react";
import FaQ from "./content";

const Questions = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Apa yang menjadi fokus utama JISS Agency dalam membantu perusahaan dan usaha perorangan?",
      answer: "Fokus utama JISS Agency adalah membantu perusahaan dan usaha perorangan dalam bidang pemasaran produk barang dan jasa. Kami menyediakan layanan pemasaran khusus dengan metode dan strategi yang dirancang untuk memaksimalkan profitabilitas bisnis klien kami.",
      open: false,
    },
    {
      question: " Apa yang menjadi keunggulan JISS Agency sebagai mitra pemasaran?",
      answer: "JISS Agency memiliki keunggulan sebagai mitra pemasaran yang terpercaya dan dapat diandalkan. Kami memiliki tim yang terlatih dan sistem pendukung yang kuat untuk memberikan layanan yang profesional. Selain itu, kita juga memiliki legalitas dan kantor mandiri yang menunjukkan profesionalisme kami sebagai agensi pemasaran.",
      open: false,
    },
    {
      question: "Bagaimana logo JISS Agency dirancang untuk mencapai kesan yang diinginkan?",
      answer: "Logo JISS Agency didesain dengan simbol Kupu-Kupu Cantik. Desain ini dipilih agar mudah diingat dan dikenali oleh masyarakat atau pasar. Meskipun demikian, logo tersebut tetap memberikan kesan profesional dan visioner dalam memberikan pelayanan. Dengan demikian, logo tersebut mencerminkan identitas JISS Agency sebagai agensi pemasaran yang handal dan inovatif.",
      open: false,
    },
    {
      question: "Siapa target market dari JISS Agency?",
      answer: "Target market dari JISS Agency adalah perusahaan maupun individu yang memiliki bisnis rintisan atau yang sedang mengembangkan bisnis mereka. JISS Agency bertujuan untuk membantu mereka agar bisnis mereka menjadi lebih menguntungkan melalui layanan pemasaran yang khusus dan strategis.",
      open: false,
    },
  ]);

  const handleToggle = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className="mb-16">
      <h2 className=" h2">Mengapa Memilih Kami</h2>
      <p className="p">
      Kepastian Aman dan Kenyamanan Tertinggi serta Jaminan Terwujudnya Kondisi yang Sangat Mendukung Tanpa Tawar-Menawar, Demi Kemajuan Iklim Investasi yang Luar Biasa, Jasa inti Solusi Sukses Mempersembahkan Solusi Terbaik.
      </p>
      <div className=" border-b my-8 ">
        {faqs.map((faq, i) => (
          <FaQ key={i} index={i} toggle={handleToggle} question={faq.question} answer={faq.answer} open={faq.open} />
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default Questions;
