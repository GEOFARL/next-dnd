import LeaguesBoard from "@/components/LeaguesBoard";
import LogoIcon from "@/assets/icons/logo.svg";
import ClientOnly from "@/components/ClientOnly";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-secondary text-white">
      <div className="flex flex-col gap-12 max-w-2xl mx-auto pt-10 w-full">
        <h1 className="flex items-center gap-3 font-tactic text-xl font-bold">
          <LogoIcon />
          Leagues
        </h1>
        <ClientOnly>
          <LeaguesBoard />
        </ClientOnly>
      </div>
    </main>
  );
}
