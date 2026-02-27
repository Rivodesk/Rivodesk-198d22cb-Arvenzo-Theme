export type ShippingBullet = { strong: string; rest: string };
export type ShippingSubsection = { heading: string; content: string };

export type ShippingContent = {
  title: string;
  intro: string;
  sec1: { heading: string; intro: string; bullets: ShippingBullet[] };
  sec2: {
    heading: string;
    intro: string;
    table: [string, string][];
    note: string;
    colDest: string;
    colTime: string;
  };
  sec3: { heading: string; body: string };
  sec4: { heading: string; p1: string; p2: string };
  sec5: { heading: string; bullets: ShippingBullet[] };
  sec6: {
    heading: string;
    sub1: ShippingSubsection;
    sub2: ShippingSubsection;
    sub3: ShippingSubsection;
  };
  sec7: { heading: string; bullets: ShippingBullet[] };
  contactBox: { heading: string };
};

const shippingContent: Record<string, ShippingContent> = {
  nl: {
    title: 'Verzendbeleid',
    intro: 'Bij Arvenzo streven we naar een transparante en betrouwbare bezorgervaring. Dit verzendbeleid is van toepassing op alle bestellingen geplaatst via www.arvenzo.be.',
    sec1: {
      heading: '1. Verwerkingstijd',
      intro: 'De verwerkingstijd is de periode tussen de ontvangst van uw bestelling en het moment dat het pakket aan de vervoerder wordt overhandigd.',
      bullets: [
        { strong: 'Standaard verwerkingstijd:', rest: 'Alle bestellingen worden verwerkt binnen 1 tot 6 werkdagen (productietijd).' },
        { strong: 'Cut-off tijden:', rest: 'Bestellingen geplaatst na 12:00 uur op werkdagen worden vanaf de eerstvolgende werkdag in behandeling genomen.' },
        { strong: 'Uitzonderingen:', rest: 'Tijdens drukke perioden (feestdagen, acties, weekends) of bij gepersonaliseerde artikelen kan de verwerkingstijd afwijken.' },
      ],
    },
    sec2: {
      heading: '2. Leveringstermijnen',
      intro: 'De geschatte levertijd is de optelsom van de verwerkingstijd en de transporttijd van de koerier. Conform de wettelijke bepalingen (Art. VI.43 WER) verbindt Arvenzo zich ertoe de goederen uiterlijk binnen 30 dagen na bestelling te leveren, tenzij anders overeengekomen.',
      colDest: 'Bestemming',
      colTime: 'Leveringstermijn na verzending',
      table: [
        ['België', 'Gem. 3–5 werkdagen na verzending'],
        ['Nederland', 'Gem. 3–5 werkdagen na verzending'],
        ['Andere EU-landen', 'Gem. 3–7 werkdagen na verzending'],
      ],
      note: 'Let op: Leveringstermijnen zijn indicatief. Factoren zoals stakingen bij postdiensten of extreme weersomstandigheden kunnen de bezorging vertragen.',
    },
    sec3: {
      heading: '3. Verzendkosten en Tarieven',
      body: 'De verzendkosten worden duidelijk weergegeven in de checkout voordat u de betaling definitief bevestigt.',
    },
    sec4: {
      heading: '4. Bezorgdiensten en Track & Trace',
      p1: 'Arvenzo werkt samen met gerenommeerde partners zoals bpost, PostNL en DHL.',
      p2: 'Zodra uw pakket ons magazijn verlaat, ontvangt u een automatische verzendbevestiging via e-mail met daarin een Track & Trace-code. Hiermee kunt u de status van uw zending online opvolgen.',
    },
    sec5: {
      heading: '5. Leveringsopties',
      bullets: [
        { strong: 'Thuislevering:', rest: 'Bezorging op het door u opgegeven adres.' },
        { strong: 'Afhaalpunten/Pakketautomaten:', rest: 'Niet beschikbaar.' },
        { strong: 'Click & Collect:', rest: 'Afhalen op onze locatie te Begijnendijk is niet mogelijk.' },
      ],
    },
    sec6: {
      heading: '6. Problemen bij levering en Aansprakelijkheid',
      sub1: {
        heading: '6.1 Afwezigheid bij levering',
        content: 'Indien u niet aanwezig bent op het moment van levering, zal de vervoerder ofwel een tweede poging ondernemen, ofwel het pakket afleveren bij een nabijgelegen afhaalpunt. Indien een pakket retour komt omdat het niet werd afgehaald of een foutief adres werd opgegeven, behouden wij ons het recht voor om de kosten voor een herverzending aan te rekenen.',
      },
      sub2: {
        heading: '6.2 Beschadigde pakketten',
        content: 'Conform de EU-wetgeving gaat het risico van verlies of beschadiging op u over zodra u (of een door u aangewezen derde) de goederen fysiek in bezit heeft gekregen. Belangrijk: Controleer de verpakking bij ontvangst. Is het pakket zichtbaar beschadigd? Weiger de zending of laat de koerier een schriftelijke aantekening maken. Meld transportschade binnen 24 uur via support@arvenzo.eu.',
      },
      sub3: {
        heading: '6.3 Verloren pakketten',
        content: 'Indien een pakket meer dan 10 werkdagen buiten de verwachte levertermijn vertraagd is, gelieve contact op te nemen voor een onderzoek bij de vervoerder.',
      },
    },
    sec7: {
      heading: '7. Internationale Verzending (buiten EU)',
      bullets: [
        { strong: 'Invoerrechten:', rest: 'Alle eventuele douanerechten, invoerbelastingen en administratieve kosten vallen volledig onder de verantwoordelijkheid van de koper.' },
        { strong: 'BTW:', rest: 'Bestellingen buiten de EU kunnen onderhevig zijn aan lokale BTW-regels bij invoer.' },
        { strong: 'Vertraging:', rest: 'Wij zijn niet verantwoordelijk voor vertragingen veroorzaakt door douaneprocedures.' },
      ],
    },
    contactBox: { heading: 'Contact & Klachten' },
  },
  fr: {
    title: 'Politique de livraison',
    intro: "Chez Arvenzo, nous visons une expérience de livraison transparente et fiable. Cette politique de livraison s'applique à toutes les commandes passées via www.arvenzo.be.",
    sec1: {
      heading: '1. Délai de traitement',
      intro: "Le délai de traitement est la période entre la réception de votre commande et le moment où le colis est remis au transporteur.",
      bullets: [
        { strong: 'Délai de traitement standard :', rest: 'Toutes les commandes sont traitées dans un délai de 1 à 6 jours ouvrables (délai de production).' },
        { strong: 'Heures limites :', rest: "Les commandes passées après 12h00 les jours ouvrables sont prises en charge à partir du prochain jour ouvrable." },
        { strong: 'Exceptions :', rest: "Pendant les périodes de forte activité (fêtes, promotions, week-ends) ou pour les articles personnalisés, le délai de traitement peut varier." },
      ],
    },
    sec2: {
      heading: '2. Délais de livraison',
      intro: "Le délai de livraison estimé est la somme du délai de traitement et du délai de transport du coursier. Conformément aux dispositions légales, Arvenzo s'engage à livrer les marchandises dans un délai maximum de 30 jours après la commande, sauf accord contraire.",
      colDest: 'Destination',
      colTime: 'Délai de livraison après expédition',
      table: [
        ['Belgique', 'En moyenne 3–5 jours ouvrables après expédition'],
        ['Pays-Bas', 'En moyenne 3–5 jours ouvrables après expédition'],
        ["Autres pays de l'UE", 'En moyenne 3–7 jours ouvrables après expédition'],
      ],
      note: "Remarque : Les délais de livraison sont indicatifs. Des facteurs tels que les grèves des services postaux ou les conditions météorologiques extrêmes peuvent retarder la livraison.",
    },
    sec3: {
      heading: '3. Frais et tarifs de livraison',
      body: 'Les frais de livraison sont clairement affichés lors du paiement, avant que vous ne confirmiez définitivement votre commande.',
    },
    sec4: {
      heading: '4. Services de livraison et suivi',
      p1: 'Arvenzo travaille avec des partenaires réputés tels que bpost, PostNL et DHL.',
      p2: "Dès que votre colis quitte notre entrepôt, vous recevez une confirmation d'expédition automatique par e-mail avec un code de suivi. Vous pouvez ainsi suivre l'état de votre envoi en ligne.",
    },
    sec5: {
      heading: '5. Options de livraison',
      bullets: [
        { strong: 'Livraison à domicile :', rest: 'Livraison à l\'adresse que vous avez indiquée.' },
        { strong: 'Points relais / Consignes :', rest: 'Non disponibles.' },
        { strong: 'Click & Collect :', rest: 'Le retrait dans nos locaux à Begijnendijk n\'est pas possible.' },
      ],
    },
    sec6: {
      heading: '6. Problèmes de livraison et responsabilité',
      sub1: {
        heading: '6.1 Absence lors de la livraison',
        content: "Si vous n'êtes pas présent au moment de la livraison, le transporteur effectuera soit une deuxième tentative, soit déposera le colis dans un point relais à proximité. Si un colis revient parce qu'il n'a pas été récupéré ou qu'une adresse incorrecte a été fournie, nous nous réservons le droit de facturer les frais de réexpédition.",
      },
      sub2: {
        heading: '6.2 Colis endommagés',
        content: "Conformément à la législation européenne, le risque de perte ou de dommage vous est transféré dès que vous (ou un tiers désigné par vous) prenez physiquement possession des marchandises. Important : Vérifiez l'emballage à la réception. Si le colis est visiblement endommagé, refusez la livraison ou demandez au transporteur de faire une remarque écrite. Signalez les dommages de transport dans les 24 heures via support@arvenzo.eu.",
      },
      sub3: {
        heading: '6.3 Colis perdus',
        content: "Si un colis est retardé de plus de 10 jours ouvrables au-delà du délai de livraison prévu, veuillez nous contacter pour une enquête auprès du transporteur.",
      },
    },
    sec7: {
      heading: "7. Livraison internationale (hors UE)",
      bullets: [
        { strong: 'Droits de douane :', rest: "Tous les droits de douane, taxes d'importation et frais administratifs éventuels sont entièrement à la charge de l'acheteur." },
        { strong: 'TVA :', rest: "Les commandes hors UE peuvent être soumises aux règles locales de TVA à l'importation." },
        { strong: 'Retards :', rest: "Nous ne sommes pas responsables des retards causés par les procédures douanières." },
      ],
    },
    contactBox: { heading: 'Contact & Réclamations' },
  },
  de: {
    title: 'Versandrichtlinie',
    intro: 'Bei Arvenzo streben wir eine transparente und zuverlässige Liefererfahrung an. Diese Versandrichtlinie gilt für alle Bestellungen, die über www.arvenzo.be aufgegeben werden.',
    sec1: {
      heading: '1. Bearbeitungszeit',
      intro: 'Die Bearbeitungszeit ist der Zeitraum zwischen dem Eingang Ihrer Bestellung und dem Zeitpunkt, an dem das Paket an den Spediteur übergeben wird.',
      bullets: [
        { strong: 'Standard-Bearbeitungszeit:', rest: 'Alle Bestellungen werden innerhalb von 1 bis 6 Werktagen bearbeitet (Produktionszeit).' },
        { strong: 'Cut-off-Zeiten:', rest: 'Bestellungen, die nach 12:00 Uhr an Werktagen aufgegeben werden, werden ab dem nächsten Werktag bearbeitet.' },
        { strong: 'Ausnahmen:', rest: 'Während Stoßzeiten (Feiertage, Aktionen, Wochenenden) oder bei personalisierten Artikeln kann die Bearbeitungszeit abweichen.' },
      ],
    },
    sec2: {
      heading: '2. Lieferzeiten',
      intro: 'Die geschätzte Lieferzeit ist die Summe aus Bearbeitungszeit und Transportzeit des Kuriers. Gemäß den gesetzlichen Bestimmungen verpflichtet sich Arvenzo, die Waren spätestens innerhalb von 30 Tagen nach der Bestellung zu liefern, sofern nichts anderes vereinbart wurde.',
      colDest: 'Ziel',
      colTime: 'Lieferzeit nach Versand',
      table: [
        ['Belgien', 'Durchschnittlich 3–5 Werktage nach Versand'],
        ['Niederlande', 'Durchschnittlich 3–5 Werktage nach Versand'],
        ['Andere EU-Länder', 'Durchschnittlich 3–7 Werktage nach Versand'],
      ],
      note: 'Hinweis: Lieferzeiten sind unverbindlich. Faktoren wie Streiks bei Postdiensten oder extreme Wetterbedingungen können die Lieferung verzögern.',
    },
    sec3: {
      heading: '3. Versandkosten und Tarife',
      body: 'Die Versandkosten werden beim Checkout klar angezeigt, bevor Sie die Zahlung endgültig bestätigen.',
    },
    sec4: {
      heading: '4. Lieferdienste und Sendungsverfolgung',
      p1: 'Arvenzo arbeitet mit renommierten Partnern wie bpost, PostNL und DHL zusammen.',
      p2: 'Sobald Ihr Paket unser Lager verlässt, erhalten Sie eine automatische Versandbestätigung per E-Mail mit einem Track & Trace-Code. Damit können Sie den Status Ihrer Sendung online verfolgen.',
    },
    sec5: {
      heading: '5. Lieferoptionen',
      bullets: [
        { strong: 'Heimlieferung:', rest: 'Lieferung an die von Ihnen angegebene Adresse.' },
        { strong: 'Abholpunkte/Paketstationen:', rest: 'Nicht verfügbar.' },
        { strong: 'Click & Collect:', rest: 'Abholung an unserem Standort in Begijnendijk ist nicht möglich.' },
      ],
    },
    sec6: {
      heading: '6. Lieferprobleme und Haftung',
      sub1: {
        heading: '6.1 Abwesenheit bei der Lieferung',
        content: 'Wenn Sie zum Zeitpunkt der Lieferung nicht anwesend sind, wird der Spediteur entweder einen zweiten Versuch unternehmen oder das Paket an einem nahegelegenen Abholpunkt hinterlassen. Wenn ein Paket zurückkommt, weil es nicht abgeholt wurde oder eine falsche Adresse angegeben wurde, behalten wir uns das Recht vor, die Kosten für eine Neulieferung in Rechnung zu stellen.',
      },
      sub2: {
        heading: '6.2 Beschädigte Pakete',
        content: 'Gemäß EU-Recht geht das Risiko von Verlust oder Beschädigung auf Sie über, sobald Sie (oder ein von Ihnen benannter Dritter) die Waren physisch in Besitz genommen haben. Wichtig: Überprüfen Sie die Verpackung bei Erhalt. Ist das Paket sichtbar beschädigt? Verweigern Sie die Annahme oder lassen Sie den Kurier eine schriftliche Notiz machen. Melden Sie Transportschäden innerhalb von 24 Stunden an support@arvenzo.eu.',
      },
      sub3: {
        heading: '6.3 Verlorene Pakete',
        content: 'Wenn ein Paket mehr als 10 Werktage über den erwarteten Lieferzeitraum hinaus verspätet ist, kontaktieren Sie uns bitte für eine Untersuchung beim Spediteur.',
      },
    },
    sec7: {
      heading: '7. Internationaler Versand (außerhalb der EU)',
      bullets: [
        { strong: 'Einfuhrzölle:', rest: 'Alle etwaigen Zollgebühren, Einfuhrsteuern und Verwaltungskosten fallen vollständig in die Verantwortung des Käufers.' },
        { strong: 'MwSt.:', rest: 'Bestellungen außerhalb der EU können bei der Einfuhr lokalen Mehrwertsteuerregelungen unterliegen.' },
        { strong: 'Verzögerungen:', rest: 'Wir sind nicht verantwortlich für Verzögerungen durch Zollverfahren.' },
      ],
    },
    contactBox: { heading: 'Kontakt & Beschwerden' },
  },
  en: {
    title: 'Shipping policy',
    intro: 'At Arvenzo we aim for a transparent and reliable delivery experience. This shipping policy applies to all orders placed via www.arvenzo.be.',
    sec1: {
      heading: '1. Processing time',
      intro: 'Processing time is the period between receiving your order and the moment the package is handed over to the carrier.',
      bullets: [
        { strong: 'Standard processing time:', rest: 'All orders are processed within 1 to 6 business days (production time).' },
        { strong: 'Cut-off times:', rest: 'Orders placed after 12:00 on business days are processed from the next business day.' },
        { strong: 'Exceptions:', rest: 'During busy periods (holidays, promotions, weekends) or for personalised items, processing time may vary.' },
      ],
    },
    sec2: {
      heading: '2. Delivery times',
      intro: 'The estimated delivery time is the sum of processing time and the courier\'s transport time. In accordance with legal provisions, Arvenzo commits to delivering goods within 30 days of ordering at the latest, unless otherwise agreed.',
      colDest: 'Destination',
      colTime: 'Delivery time after dispatch',
      table: [
        ['Belgium', 'Avg. 3–5 business days after dispatch'],
        ['Netherlands', 'Avg. 3–5 business days after dispatch'],
        ['Other EU countries', 'Avg. 3–7 business days after dispatch'],
      ],
      note: 'Note: Delivery times are indicative. Factors such as postal strikes or extreme weather conditions may delay delivery.',
    },
    sec3: {
      heading: '3. Shipping costs and rates',
      body: 'Shipping costs are clearly displayed at checkout before you confirm your payment.',
    },
    sec4: {
      heading: '4. Delivery services and tracking',
      p1: 'Arvenzo works with renowned partners such as bpost, PostNL and DHL.',
      p2: 'Once your package leaves our warehouse, you will receive an automatic shipping confirmation by email with a Track & Trace code. You can use this to track the status of your shipment online.',
    },
    sec5: {
      heading: '5. Delivery options',
      bullets: [
        { strong: 'Home delivery:', rest: 'Delivery to the address you provided.' },
        { strong: 'Pick-up points / Parcel lockers:', rest: 'Not available.' },
        { strong: 'Click & Collect:', rest: 'Collection at our location in Begijnendijk is not possible.' },
      ],
    },
    sec6: {
      heading: '6. Delivery issues and liability',
      sub1: {
        heading: '6.1 Absence at delivery',
        content: 'If you are not present at the time of delivery, the carrier will either make a second attempt or leave the package at a nearby pick-up point. If a package is returned because it was not collected or an incorrect address was given, we reserve the right to charge the costs of re-shipment.',
      },
      sub2: {
        heading: '6.2 Damaged packages',
        content: 'In accordance with EU law, the risk of loss or damage transfers to you once you (or a third party designated by you) physically take possession of the goods. Important: Check the packaging on receipt. Is the package visibly damaged? Refuse the shipment or ask the courier to make a written note. Report transport damage within 24 hours via support@arvenzo.eu.',
      },
      sub3: {
        heading: '6.3 Lost packages',
        content: 'If a package is delayed by more than 10 business days beyond the expected delivery period, please contact us for an investigation with the carrier.',
      },
    },
    sec7: {
      heading: '7. International shipping (outside EU)',
      bullets: [
        { strong: 'Import duties:', rest: 'All applicable customs duties, import taxes and administrative costs are entirely the responsibility of the buyer.' },
        { strong: 'VAT:', rest: 'Orders outside the EU may be subject to local VAT rules upon import.' },
        { strong: 'Delays:', rest: 'We are not responsible for delays caused by customs procedures.' },
      ],
    },
    contactBox: { heading: 'Contact & Complaints' },
  },
};

export function getShipping(locale: string): ShippingContent {
  return shippingContent[locale] ?? shippingContent['en'];
}
