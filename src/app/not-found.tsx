import TransitionLink from "@/components/TransitionLink";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-Grey-08 text-white px-4">
      <h1 className="text-9xl sm:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-Green-75 to-Green-70 animate-fadeIn">
        404
      </h1>
      <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-300 text-center max-w-lg animate-fadeIn delay-300">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <TransitionLink
        href="/"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-Green-75 to-Green-70 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-400 animate-fadeIn delay-500"
      >
        Go Back Home
      </TransitionLink>
    </main>
  );
}
