import Game from "@/components/game";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="mb-4 text-2xl">Tic Tac Toe</h1>
      <Game />
    </div>
  );
}
