// Expanded React prototype for Resona test version with:
// - Fake search
// - Review save list
// - Fake recommendations (Next.js-style) prototype for Resona test version
// This is a simplified single-file example (index.js) to demonstrate
// search + review input + fake save.

import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [memo, setMemo] = useState("");

  // Fake search (no Spotify yet)
  const handleSearch = () => {
    setResults([
      { id: 1, title: "Fake Song A", artist: "Artist A" },
      { id: 2, title: "Fake Song B", artist: "Artist B" },
    ]);
  };

  

  // Saved reviews state
  const [reviews, setReviews] = useState([]);
  const [reco, setReco] = useState([]);

  const handleSave = () => {
    const newReview = { ...selected, memo };
    setReviews([...reviews, newReview]);

    // Fake recommendations
    setReco([
      { id: 101, title: `${selected.title} (Remix)`, artist: selected.artist },
      { id: 102, title: `${selected.artist} - Another Track`, artist: selected.artist },
    ]);

    alert(`保存しました: ${selected.title}`);
    setSelected(null);
    setMemo("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Resona</h1>

      {/* Search */}
      <div className="flex gap-2">
        <input
          className="border rounded px-3 py-2 flex-1"
          placeholder="曲名・アーティストを検索"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-black text-white rounded"
        >
          検索
        </button>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-3">
        {results.map((r) => (
          <div
            key={r.id}
            onClick={() => setSelected(r)}
            className="p-4 bg-white shadow-sm rounded-2xl cursor-pointer hover:shadow transition-all border border-gray-100"
          >
            <div className="font-semibold">{r.title}</div>
            <div className="text-gray-600 text-sm">{r.artist}</div>
          </div>
        ))}
      </div>

      {/* Review input */}
      {selected && (
        <div className="p-5 bg-white shadow-sm rounded-2xl flex flex-col gap-4 border border-gray-100">
          <h2 className="font-bold text-lg">レビュー記録</h2>
          <div className="font-semibold">{selected.title}</div>
          <input
            className="border rounded px-3 py-2"
            placeholder="一言メモを入力"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            保存する
          </button>
        </div>
      )}
    </div>
  );
}
