import Board from "@/components/board";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="mb-4">Tic Tac Toe</h1>
      <main className="flex items-center justify-center">
        <Board />
      </main>
    </div>
  );
}
