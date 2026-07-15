export function NextFeatureCard() {
  return (
    <div className="rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6">
      <p className="text-sm font-semibold text-cyan-200">Next MVP feature</p>
      <h2 className="mt-2 text-2xl font-bold">Add cards to a binder</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Next we will make the Add card button actually store a card in your
        collection. After that, we connect real Pokemon card data.
      </p>
    </div>
  );
}
