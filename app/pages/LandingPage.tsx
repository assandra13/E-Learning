import Link from "next/link";
import { FC } from "react";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";

const LandingPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {" "}
      {/* Warna background page diperhalus agar kontras dengan navbar */}
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg">
        {" "}
        {/* Gradient pada navbar agar terlihat lebih mewah */}
        <h1 className="text-5xl font-bold mb-4">Belajar Lebih Cerdas dengan AI</h1>
        <p className="text-lg mb-6">Platform pembelajaran berbasis AI untuk pengalaman belajar yang lebih efektif dan interaktif.</p>
        <Link href="/dashboard">
          <button className="px-6 py-3 text-lg bg-white text-blue-600 hover:bg-gray-200 rounded-lg shadow-md">Mulai Belajar</button>
        </Link>
      </header>
      {/* Keunggulan AI Learning */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Mengapa Memilih AI Learning?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon="📚" title="Pembelajaran Adaptif" description="AI menyesuaikan materi berdasarkan gaya belajar kamu." />
          <FeatureCard icon="🤖" title="Chatbot Tutor" description="Tanyakan apa saja dan dapatkan jawaban instan dari AI." />
          <FeatureCard icon="🏆" title="Rekomendasi Kursus" description="AI merekomendasikan kursus yang sesuai dengan kebutuhanmu." />
        </div>
      </section>
      {/* Demo / Video */}
      <section className="py-16 px-8 text-center bg-white shadow-sm rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Lihat AI Learning dalam Aksi</h2>
        <iframe className="mx-auto w-full max-w-lg h-60 md:h-80 rounded-lg shadow-md" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo AI Learning" />
      </section>
      {/* Testimoni */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial quote="Belajar dengan AI Learning sangat menyenangkan! AI-nya pintar banget!" name="Rina, Mahasiswa" />
          <Testimonial quote="Saya bisa memahami konsep lebih cepat dibanding belajar sendiri." name="Budi, Programmer" />
          <Testimonial quote="Sangat membantu! Terutama chatbot AI-nya, serasa punya tutor pribadi." name="Lina, Pelajar" />
        </div>
      </section>
      {/* Call To Action */}
      <section className="py-16 px-8 text-center bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Siap Belajar dengan AI?</h2>
        <p className="text-lg mb-6">Bergabung sekarang dan tingkatkan keterampilanmu dengan AI Learning!</p>
        <Link href="/dashboard">
          <button className="px-6 py-3 text-lg bg-white text-blue-600 hover:bg-gray-200 rounded-lg shadow-md">Mulai Sekarang</button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
