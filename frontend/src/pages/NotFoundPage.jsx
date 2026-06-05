import Seo from "../components/common/Seo";

export function Component() {
  return (
    <>
      <Seo
        title="Halaman Tidak Ditemukan - B2D"
        description="Halaman yang Anda cari tidak tersedia."
        noIndex
      />
      <main
        id="main-content"
        className="relative z-10 flex min-h-[70vh] w-full flex-col items-center justify-center px-6 text-center"
      >
        <p className="font-unbounded text-sm uppercase tracking-[0.3em] text-gray-400">
          404
        </p>
        <h1 className="mt-5 font-unbounded text-4xl font-semibold md:text-6xl">
          Halaman tidak ditemukan
        </h1>
        <a
          href="/"
          className="mt-10 rounded-full border border-blue-500/40 bg-[#111827]/80 px-7 py-3 font-unbounded text-sm shadow-[0_0_15px_rgba(70,138,255,0.15)] transition-all duration-300 hover:bg-blue-900/40"
        >
          Kembali ke Beranda
        </a>
      </main>
    </>
  );
}
