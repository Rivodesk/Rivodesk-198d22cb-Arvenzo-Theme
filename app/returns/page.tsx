import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Herroepingsrecht & Retourbeleid | Arvenzo',
  description: 'Retourbeleid van Arvenzo conform Belgisch Wetboek van Economisch Recht en EU-richtlijn 2011/83/EU.',
};

export default function ReturnsPage() {
  return (
    <div className="bg-arvenzo-light min-h-screen">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-[100px] pb-24">
        <nav className="flex items-center gap-2 text-xs font-sans text-arvenzo-muted mb-10">
          <Link href="/" className="hover:text-arvenzo-brown transition-colors">Home</Link>
          <span>/</span>
          <span className="text-arvenzo-ink">Retourneren</span>
        </nav>

        <h1 className="font-heading font-black text-4xl text-arvenzo-ink mb-3">Herroepingsrecht & Retourbeleid</h1>
        <p className="text-arvenzo-muted font-sans mb-2 text-sm">
          Dit beleid is opgesteld in overeenstemming met het Belgisch Wetboek van Economisch Recht (Boek VI) en de EU-richtlijn 2011/83/EU betreffende consumentenrechten.
        </p>
        <p className="text-arvenzo-muted font-sans mb-12 text-sm">
          Bij <strong className="text-arvenzo-ink">Arvenzo</strong> (Van Eylen Jonas) streven wij naar volledige klanttevredenheid. Indien u echter niet tevreden bent met uw aankoop, heeft u het recht om uw bestelling te retourneren onder de hierna vermelde voorwaarden.
        </p>

        <div className="font-sans text-sm text-arvenzo-muted leading-relaxed space-y-10">

          <section>
            <h2 className="font-heading font-bold text-xl text-arvenzo-ink mb-4">1. Herroepingsrecht</h2>
            <p className="mb-4">U heeft het recht om binnen een termijn van <strong className="text-arvenzo-ink">14 kalenderdagen</strong> zonder opgave van redenen de overeenkomst te herroepen.</p>

            <h3 className="font-heading font-semibold text-base text-arvenzo-ink mb-2">Termijn</h3>
            <p className="mb-4">De herroepingstermijn verstrijkt 14 kalenderdagen na de dag waarop u, of een door u aangewezen derde (die niet de vervoerder is), het goed fysiek in bezit krijgt. Indien uw bestelling in verschillende zendingen wordt geleverd, gaat de termijn in op de dag dat u het laatste onderdeel heeft ontvangen.</p>

            <h3 className="font-heading font-semibold text-base text-arvenzo-ink mb-2">Uitoefening van het herroepingsrecht</h3>
            <p className="mb-3">Om het herroepingsrecht uit te oefenen, moet u ons via een ondubbelzinnige verklaring op de hoogte stellen van uw beslissing de overeenkomst te herroepen. Dit kan via:</p>
            <ul className="space-y-1.5 mb-4">
              <li>• <strong className="text-arvenzo-ink">E-mail:</strong> <a href="mailto:support@arvenzo.eu" className="text-arvenzo-brown hover:underline">support@arvenzo.eu</a></li>
              <li>• <strong className="text-arvenzo-ink">Klantensupport:</strong> <Link href="/contact" className="text-arvenzo-brown hover:underline">contactpagina</Link></li>
            </ul>
            <p>U kunt hiervoor gebruikmaken van het bijgevoegde <strong className="text-arvenzo-ink">modelformulier voor herroeping</strong> onderaan dit document, maar dit is niet verplicht. Om de herroepingstermijn na te leven, volstaat het om uw mededeling betreffende de uitoefening van het herroepingsrecht te verzenden voordat de herroepingstermijn is verstreken.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-arvenzo-ink mb-4">2. Uitzonderingen op het herroepingsrecht (Art. VI.53 WER)</h2>
            <p className="mb-3">Conform de Belgische wetgeving kunt u in de volgende gevallen geen aanspraak maken op het herroepingsrecht:</p>
            <ul className="space-y-2">
              <li>• <strong className="text-arvenzo-ink">Hygiëne en Verzegeling:</strong> Producten die niet geschikt zijn om te worden teruggezonden om redenen van gezondheidsbescherming of hygiëne en waarvan de verzegeling na de levering is verbroken.</li>
              <li>• <strong className="text-arvenzo-ink">Gedragen Kleding:</strong> Kledingstukken die daadwerkelijk zijn gedragen (verder dan het louter passen zoals men in een fysieke winkel zou doen) of waarvan de originele labels zijn verwijderd.</li>
              <li>• <strong className="text-arvenzo-ink">Gepersonaliseerde goederen:</strong> Producten die volgens uw specificaties zijn vervaardigd of die een duidelijk persoonlijk karakter hebben.</li>
              <li>• <strong className="text-arvenzo-ink">Bederfelijke waren:</strong> Goederen die snel bederven of een beperkte houdbaarheid hebben.</li>
              <li>• <strong className="text-arvenzo-ink">Audio/Video/Software:</strong> Verzegelde audio- of video-opnamen of computerprogrammatuur waarvan de verzegeling na levering is verbroken.</li>
              <li>• <strong className="text-arvenzo-ink">Digitale inhoud:</strong> De levering van digitale inhoud die niet op een materiële drager is geleverd, indien de uitvoering is begonnen met uw uitdrukkelijke voorafgaande toestemming.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-arvenzo-ink mb-4">3. Retourprocedure en Staat van het Product</h2>

            <h3 className="font-heading font-semibold text-base text-arvenzo-ink mb-3">Te volgen stappen</h3>
            <div className="space-y-3 mb-6">
              {[
                { stap: '01', tekst: 'Meld uw retour aan via support@arvenzo.eu met uw ordernummer en de reden van retour.' },
                { stap: '02', tekst: 'Verpak het product zorgvuldig in de originele verpakking.' },
                { stap: '03', tekst: 'Verzend het pakket naar het adres dat u van Arvenzo ontvangt.' },
              ].map(({ stap, tekst }) => (
                <div key={stap} className="flex gap-5 p-5 bg-arvenzo-cream rounded-2xl">
                  <span className="font-heading font-black text-3xl text-arvenzo-brown/20 shrink-0 leading-none">{stap}</span>
                  <p className="leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-semibold text-base text-arvenzo-ink mb-2">Staat van het product</h3>
            <p>U bent alleen aansprakelijk voor de waardevermindering van de goederen die het gevolg is van het gebruik dat verder gaat dan nodig is om de aard, de kenmerken en de werking van de goederen vast te stellen. Voor kleding betekent dit dat u het artikel mag passen, maar niet mag dragen voor gebruik.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-arvenzo-ink mb-4">4. Kosten van retourzending</h2>
            <p>De directe kosten voor het terugzenden van de goederen komen voor uw rekening, tenzij Arvenzo uitdrukkelijk heeft aangegeven deze kosten op zich te nemen of indien het product beschadigd of incorrect geleverd is (zie sectie Wettelijke Garantie).</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-arvenzo-ink mb-4">5. Terugbetaling</h2>
            <p className="mb-4">Indien u de overeenkomst herroept, ontvangt u alle betalingen die u tot op dat moment heeft gedaan, inclusief de leveringskosten (met uitzondering van eventuele extra kosten ten gevolge van uw keuze voor een andere wijze van levering dan de door ons geboden goedkoopste standaard levering), onverwijld en in ieder geval niet later dan <strong className="text-arvenzo-ink">14 kalenderdagen</strong> nadat wij op de hoogte zijn gesteld van uw beslissing om de overeenkomst te herroepen.</p>
            <p className="font-semibold text-arvenzo-ink mb-2">Belangrijke voorwaarden voor terugbetaling:</p>
            <ul className="space-y-2">
              <li>• <strong className="text-arvenzo-ink">Betaalmethode:</strong> Wij betalen u terug met hetzelfde betaalmiddel als waarmee u de oorspronkelijke transactie heeft verricht, tenzij u uitdrukkelijk anderszins heeft ingestemd.</li>
              <li>• <strong className="text-arvenzo-ink">Inhouding:</strong> Wij mogen wachten met de terugbetaling totdat wij de goederen hebben teruggekregen, of u heeft aangetoond dat u de goederen heeft teruggezonden, al naar gelang welk tijdstip eerst valt.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-arvenzo-ink mb-4">6. Wettelijke Garantie (Art. 1649quater BW)</h2>
            <p className="mb-3">Voor alle goederen die u bij ons koopt, geldt de wettelijke garantie van <strong className="text-arvenzo-ink">2 jaar</strong>.</p>
            <ul className="space-y-2">
              <li>• Indien een product een defect vertoont binnen deze termijn, heeft u recht op herstelling of vervanging.</li>
              <li>• Indien herstelling of vervanging onmogelijk of buitenverhouding is, heeft u recht op een prijsvermindering of ontbinding van de koopovereenkomst.</li>
              <li>• Meld gebreken zo snel mogelijk, en uiterlijk binnen 2 maanden na vaststelling, schriftelijk via <a href="mailto:support@arvenzo.eu" className="text-arvenzo-brown hover:underline">support@arvenzo.eu</a>.</li>
            </ul>
          </section>

          <section className="bg-arvenzo-cream rounded-2xl p-6 border border-arvenzo-cream-dark">
            <h2 className="font-heading font-bold text-lg text-arvenzo-ink mb-4">Bijlage: Modelformulier voor herroeping</h2>
            <p className="italic mb-4">(Dit formulier alleen invullen en terugzenden wanneer u de overeenkomst wilt herroepen)</p>
            <div className="space-y-2">
              <p><strong>Aan:</strong></p>
              <p>Van Eylen Jonas (Arvenzo)<br />
              Pandhoevestraat 62<br />
              3130 Begijnendijk, België<br />
              E-mail: <a href="mailto:support@arvenzo.eu" className="text-arvenzo-brown hover:underline">support@arvenzo.eu</a></p>
              <p className="pt-3">Ik/Wij (*) deel/delen (*) u hierbij mede dat ik/wij (*) onze overeenkomst betreffende de verkoop van de volgende goederen herroep/herroepen (*):</p>
              <p className="pt-2">Besteld op (*) / ontvangen op (*):</p>
              <p>Naam/Namen consument(en):</p>
              <p>Adres consument(en):</p>
              <p>Handtekening van consument(en) (alleen wanneer dit formulier op papier wordt ingediend):</p>
              <p>Datum:</p>
              <p className="pt-3 text-xs">(*) Doorhalen wat niet van toepassing is.</p>
            </div>
          </section>

          <div className="bg-arvenzo-brown/5 border border-arvenzo-brown/10 rounded-2xl p-5 flex gap-4">
            <span className="text-2xl">💬</span>
            <div>
              <p className="font-heading font-semibold text-arvenzo-ink text-sm">Retour aanmelden</p>
              <p className="font-sans text-xs text-arvenzo-muted mt-1">Mail naar <a href="mailto:support@arvenzo.eu" className="text-arvenzo-brown hover:underline">support@arvenzo.eu</a> of gebruik <Link href="/contact" className="text-arvenzo-brown hover:underline">ons contactformulier</Link>. Vermeld steeds uw ordernummer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
