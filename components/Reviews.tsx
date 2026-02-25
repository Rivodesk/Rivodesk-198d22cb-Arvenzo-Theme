const reviews = [
  {
    name: 'Lena V.',
    location: 'Antwerpen',
    rating: 5,
    text: 'Fantastische kwaliteit! De hoodie is super zacht en het design is prachtig. Zeker voor herhaling vatbaar.',
    product: 'Crescent Peak Hoodie',
  },
  {
    name: 'Thomas B.',
    location: 'Gent',
    rating: 5,
    text: 'Snel geleverd en de kwaliteit is top. De mok ziet er geweldig uit en de bedrukking is scherp en helder.',
    product: 'Crescent Peak Mug',
  },
  {
    name: 'Sarah M.',
    location: 'Brussel',
    rating: 5,
    text: 'Het sweatshirt is heerlijk comfortabel. Goede maatvoering en de stof voelt premium aan. Aanrader!',
    product: 'Crescent Peak Sweatshirt',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-arvenzo-orange' : 'text-arvenzo-cream-dark'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 bg-arvenzo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-arvenzo-orange font-sans text-sm font-medium uppercase tracking-widest mb-3">
            Klantbeoordelingen
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-arvenzo-dark">
            Wat onze klanten zeggen
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="font-heading font-bold text-arvenzo-dark">4.9</span>
            <span className="text-arvenzo-muted font-sans text-sm">op basis van 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-arvenzo-cream rounded-2xl p-7 border border-arvenzo-cream-dark"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 font-sans text-arvenzo-dark leading-relaxed text-[15px]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="font-heading font-semibold text-arvenzo-dark text-sm">{review.name}</div>
                  <div className="text-xs text-arvenzo-muted font-sans">{review.location}</div>
                </div>
                <div className="text-xs text-arvenzo-muted font-sans text-right">
                  {review.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
