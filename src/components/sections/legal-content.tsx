export type LegalBlock = { heading: string; body: string[] };

export function LegalContent({ blocks, updated }: { blocks: LegalBlock[]; updated: string }) {
  return (
    <section className="section">
      <div className="container-tight max-w-3xl">
        <p className="text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-8 space-y-8">
          {blocks.map((b) => (
            <div key={b.heading}>
              <h2 className="font-heading text-xl font-semibold text-ink">{b.heading}</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {b.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
