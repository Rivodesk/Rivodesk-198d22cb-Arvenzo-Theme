export type ReturnsStep = { step: string; text: string };

export type ReturnsContent = {
  title: string;
  intro1: string;
  intro2: string;
  sec1: {
    heading: string;
    p1: string;
    termHeading: string;
    termText: string;
    exerciseHeading: string;
    exerciseText: string;
    exerciseMethods: string[];
    exerciseNote: string;
  };
  sec2: {
    heading: string;
    intro: string;
    exceptions: { strong: string; rest: string }[];
  };
  sec3: {
    heading: string;
    stepsHeading: string;
    steps: ReturnsStep[];
    conditionHeading: string;
    conditionText: string;
  };
  sec4: { heading: string; body: string };
  sec5: {
    heading: string;
    p1: string;
    conditionsHeading: string;
    conditions: { strong: string; rest: string }[];
  };
  sec6: {
    heading: string;
    p1: string;
    items: string[];
  };
  modelForm: {
    heading: string;
    intro: string;
    toLabel: string;
    toAddress: string;
    bodyText: string;
    orderedOn: string;
    consumerName: string;
    consumerAddress: string;
    signature: string;
    date: string;
    footnote: string;
  };
  returnBox: {
    heading: string;
    emailPre: string;
    orContact: string;
    contactText: string;
    orderNote: string;
  };
};

const returnsContent: Record<string, ReturnsContent> = {
  nl: {
    title: 'Herroepingsrecht & Retourbeleid',
    intro1: 'Dit beleid is opgesteld in overeenstemming met het Belgisch Wetboek van Economisch Recht (Boek VI) en de EU-richtlijn 2011/83/EU betreffende consumentenrechten.',
    intro2: 'Bij Arvenzo (Van Eylen Jonas) streven wij naar volledige klanttevredenheid. Indien u echter niet tevreden bent met uw aankoop, heeft u het recht om uw bestelling te retourneren onder de hierna vermelde voorwaarden.',
    sec1: {
      heading: '1. Herroepingsrecht',
      p1: 'U heeft het recht om binnen een termijn van 14 kalenderdagen zonder opgave van redenen de overeenkomst te herroepen.',
      termHeading: 'Termijn',
      termText: 'De herroepingstermijn verstrijkt 14 kalenderdagen na de dag waarop u, of een door u aangewezen derde (die niet de vervoerder is), het goed fysiek in bezit krijgt. Indien uw bestelling in verschillende zendingen wordt geleverd, gaat de termijn in op de dag dat u het laatste onderdeel heeft ontvangen.',
      exerciseHeading: 'Uitoefening van het herroepingsrecht',
      exerciseText: 'Om het herroepingsrecht uit te oefenen, moet u ons via een ondubbelzinnige verklaring op de hoogte stellen van uw beslissing de overeenkomst te herroepen. Dit kan via:',
      exerciseMethods: ['E-mail: support@arvenzo.eu', 'Klantensupport: contactpagina'],
      exerciseNote: 'U kunt hiervoor gebruikmaken van het bijgevoegde modelformulier voor herroeping onderaan dit document, maar dit is niet verplicht. Om de herroepingstermijn na te leven, volstaat het om uw mededeling betreffende de uitoefening van het herroepingsrecht te verzenden voordat de herroepingstermijn is verstreken.',
    },
    sec2: {
      heading: '2. Uitzonderingen op het herroepingsrecht (Art. VI.53 WER)',
      intro: 'Conform de Belgische wetgeving kunt u in de volgende gevallen geen aanspraak maken op het herroepingsrecht:',
      exceptions: [
        { strong: 'Hygiëne en Verzegeling:', rest: 'Producten die niet geschikt zijn om te worden teruggezonden om redenen van gezondheidsbescherming of hygiëne en waarvan de verzegeling na de levering is verbroken.' },
        { strong: 'Gedragen Kleding:', rest: 'Kledingstukken die daadwerkelijk zijn gedragen (verder dan het louter passen zoals men in een fysieke winkel zou doen) of waarvan de originele labels zijn verwijderd.' },
        { strong: 'Gepersonaliseerde goederen:', rest: 'Producten die volgens uw specificaties zijn vervaardigd of die een duidelijk persoonlijk karakter hebben.' },
        { strong: 'Bederfelijke waren:', rest: 'Goederen die snel bederven of een beperkte houdbaarheid hebben.' },
        { strong: 'Audio/Video/Software:', rest: 'Verzegelde audio- of video-opnamen of computerprogrammatuur waarvan de verzegeling na levering is verbroken.' },
        { strong: 'Digitale inhoud:', rest: 'De levering van digitale inhoud die niet op een materiële drager is geleverd, indien de uitvoering is begonnen met uw uitdrukkelijke voorafgaande toestemming.' },
      ],
    },
    sec3: {
      heading: '3. Retourprocedure en Staat van het Product',
      stepsHeading: 'Te volgen stappen',
      steps: [
        { step: '01', text: 'Meld uw retour aan via support@arvenzo.eu met uw ordernummer en de reden van retour.' },
        { step: '02', text: 'Verpak het product zorgvuldig in de originele verpakking.' },
        { step: '03', text: 'Verzend het pakket naar het adres dat u van Arvenzo ontvangt.' },
      ],
      conditionHeading: 'Staat van het product',
      conditionText: 'U bent alleen aansprakelijk voor de waardevermindering van de goederen die het gevolg is van het gebruik dat verder gaat dan nodig is om de aard, de kenmerken en de werking van de goederen vast te stellen. Voor kleding betekent dit dat u het artikel mag passen, maar niet mag dragen voor gebruik.',
    },
    sec4: {
      heading: '4. Kosten van retourzending',
      body: 'De directe kosten voor het terugzenden van de goederen komen voor uw rekening, tenzij Arvenzo uitdrukkelijk heeft aangegeven deze kosten op zich te nemen of indien het product beschadigd of incorrect geleverd is (zie sectie Wettelijke Garantie).',
    },
    sec5: {
      heading: '5. Terugbetaling',
      p1: 'Indien u de overeenkomst herroept, ontvangt u alle betalingen die u tot op dat moment heeft gedaan, inclusief de leveringskosten (met uitzondering van eventuele extra kosten ten gevolge van uw keuze voor een andere wijze van levering dan de door ons geboden goedkoopste standaard levering), onverwijld en in ieder geval niet later dan 14 kalenderdagen nadat wij op de hoogte zijn gesteld van uw beslissing om de overeenkomst te herroepen.',
      conditionsHeading: 'Belangrijke voorwaarden voor terugbetaling:',
      conditions: [
        { strong: 'Betaalmethode:', rest: 'Wij betalen u terug met hetzelfde betaalmiddel als waarmee u de oorspronkelijke transactie heeft verricht, tenzij u uitdrukkelijk anderszins heeft ingestemd.' },
        { strong: 'Inhouding:', rest: 'Wij mogen wachten met de terugbetaling totdat wij de goederen hebben teruggekregen, of u heeft aangetoond dat u de goederen heeft teruggezonden, al naar gelang welk tijdstip eerst valt.' },
      ],
    },
    sec6: {
      heading: '6. Wettelijke Garantie (Art. 1649quater BW)',
      p1: 'Voor alle goederen die u bij ons koopt, geldt de wettelijke garantie van 2 jaar.',
      items: [
        'Indien een product een defect vertoont binnen deze termijn, heeft u recht op herstelling of vervanging.',
        'Indien herstelling of vervanging onmogelijk of buitenverhouding is, heeft u recht op een prijsvermindering of ontbinding van de koopovereenkomst.',
        'Meld gebreken zo snel mogelijk, en uiterlijk binnen 2 maanden na vaststelling, schriftelijk via support@arvenzo.eu.',
      ],
    },
    modelForm: {
      heading: 'Bijlage: Modelformulier voor herroeping',
      intro: '(Dit formulier alleen invullen en terugzenden wanneer u de overeenkomst wilt herroepen)',
      toLabel: 'Aan:',
      toAddress: 'Van Eylen Jonas (Arvenzo)\nPandhoevestraat 62\n3130 Begijnendijk, België\nE-mail: support@arvenzo.eu',
      bodyText: 'Ik/Wij (*) deel/delen (*) u hierbij mede dat ik/wij (*) onze overeenkomst betreffende de verkoop van de volgende goederen herroep/herroepen (*):',
      orderedOn: 'Besteld op (*) / ontvangen op (*):',
      consumerName: 'Naam/Namen consument(en):',
      consumerAddress: 'Adres consument(en):',
      signature: 'Handtekening van consument(en) (alleen wanneer dit formulier op papier wordt ingediend):',
      date: 'Datum:',
      footnote: '(*) Doorhalen wat niet van toepassing is.',
    },
    returnBox: {
      heading: 'Retour aanmelden',
      emailPre: 'Mail naar',
      orContact: 'of gebruik',
      contactText: 'ons contactformulier',
      orderNote: 'Vermeld steeds uw ordernummer.',
    },
  },
  fr: {
    title: 'Droit de rétractation & Politique de retour',
    intro1: "Cette politique est établie conformément au Code de droit économique belge (Livre VI) et à la directive européenne 2011/83/UE relative aux droits des consommateurs.",
    intro2: "Chez Arvenzo (Van Eylen Jonas), nous visons la satisfaction totale de nos clients. Si toutefois vous n'êtes pas satisfait de votre achat, vous avez le droit de retourner votre commande dans les conditions ci-dessous.",
    sec1: {
      heading: '1. Droit de rétractation',
      p1: "Vous avez le droit de vous rétracter dans un délai de 14 jours calendaires sans donner de motif.",
      termHeading: 'Délai',
      termText: "Le délai de rétractation expire 14 jours calendaires après le jour où vous, ou un tiers désigné par vous (autre que le transporteur), prenez physiquement possession du bien. Si votre commande est livrée en plusieurs envois, le délai court à partir du jour où vous avez reçu le dernier élément.",
      exerciseHeading: 'Exercice du droit de rétractation',
      exerciseText: "Pour exercer le droit de rétractation, vous devez nous informer de votre décision de vous rétracter au moyen d'une déclaration sans équivoque. Vous pouvez le faire via :",
      exerciseMethods: ['E-mail : support@arvenzo.eu', 'Support client : page de contact'],
      exerciseNote: "Vous pouvez utiliser le modèle de formulaire de rétractation joint à la fin de ce document, mais cela n'est pas obligatoire. Pour respecter le délai de rétractation, il suffit d'envoyer votre communication relative à l'exercice du droit de rétractation avant l'expiration du délai.",
    },
    sec2: {
      heading: '2. Exceptions au droit de rétractation',
      intro: "Conformément à la législation belge, vous ne pouvez pas exercer le droit de rétractation dans les cas suivants :",
      exceptions: [
        { strong: 'Hygiène et scellement :', rest: "Produits qui ne peuvent pas être retournés pour des raisons de protection de la santé ou d'hygiène et dont le sceau a été brisé après la livraison." },
        { strong: 'Vêtements portés :', rest: "Vêtements qui ont effectivement été portés (au-delà du simple essayage comme on le ferait dans un magasin physique) ou dont les étiquettes d'origine ont été retirées." },
        { strong: 'Biens personnalisés :', rest: "Produits fabriqués selon vos spécifications ou présentant un caractère clairement personnel." },
        { strong: 'Denrées périssables :', rest: "Biens susceptibles de se détériorer rapidement ou ayant une durée de conservation limitée." },
        { strong: 'Audio/Vidéo/Logiciels :', rest: "Enregistrements audio ou vidéo scellés ou logiciels informatiques dont le sceau a été brisé après la livraison." },
        { strong: 'Contenu numérique :', rest: "La fourniture d'un contenu numérique non fourni sur un support matériel, si l'exécution a commencé avec votre accord préalable exprès." },
      ],
    },
    sec3: {
      heading: '3. Procédure de retour et état du produit',
      stepsHeading: 'Étapes à suivre',
      steps: [
        { step: '01', text: 'Signalez votre retour à support@arvenzo.eu avec votre numéro de commande et la raison du retour.' },
        { step: '02', text: "Emballez soigneusement le produit dans son emballage d'origine." },
        { step: '03', text: "Envoyez le colis à l'adresse que vous recevrez d'Arvenzo." },
      ],
      conditionHeading: 'État du produit',
      conditionText: "Vous n'êtes responsable que de la dépréciation des biens résultant d'une manipulation autre que celle nécessaire pour établir la nature, les caractéristiques et le bon fonctionnement des biens. Pour les vêtements, cela signifie que vous pouvez essayer l'article mais pas le porter pour l'utiliser.",
    },
    sec4: {
      heading: '4. Frais de retour',
      body: "Les frais directs de retour des marchandises sont à votre charge, sauf si Arvenzo a expressément indiqué prendre en charge ces frais ou si le produit est endommagé ou livré incorrectement (voir section Garantie légale).",
    },
    sec5: {
      heading: '5. Remboursement',
      p1: "Si vous vous rétractez, nous vous rembourserons tous les paiements reçus de votre part, y compris les frais de livraison (à l'exception des frais supplémentaires découlant du fait que vous avez choisi un mode de livraison autre que le mode standard le moins cher), sans retard excessif et en tout état de cause au plus tard 14 jours calendaires après la date à laquelle nous avons été informés de votre décision de vous rétracter.",
      conditionsHeading: 'Conditions importantes pour le remboursement :',
      conditions: [
        { strong: 'Mode de paiement :', rest: "Nous vous rembourserons en utilisant le même moyen de paiement que celui que vous avez utilisé pour la transaction initiale, sauf si vous avez expressément convenu d'un autre moyen." },
        { strong: 'Retenue :', rest: "Nous pouvons retenir le remboursement jusqu'à ce que nous ayons reçu les biens ou que vous ayez fourni une preuve d'expédition, selon la première éventualité." },
      ],
    },
    sec6: {
      heading: '6. Garantie légale',
      p1: 'Pour tous les biens que vous achetez chez nous, la garantie légale de 2 ans s\'applique.',
      items: [
        "Si un produit présente un défaut dans ce délai, vous avez droit à une réparation ou un remplacement.",
        "Si la réparation ou le remplacement est impossible ou disproportionné, vous avez droit à une réduction de prix ou à la résolution du contrat.",
        "Signalez les défauts dès que possible et au plus tard dans les 2 mois suivant la constatation, par écrit via support@arvenzo.eu.",
      ],
    },
    modelForm: {
      heading: 'Annexe : Formulaire type de rétractation',
      intro: "(Complétez et renvoyez ce formulaire uniquement si vous souhaitez vous rétracter de l'accord)",
      toLabel: 'À :',
      toAddress: 'Van Eylen Jonas (Arvenzo)\nPandhoevestraat 62\n3130 Begijnendijk, Belgique\nE-mail : support@arvenzo.eu',
      bodyText: "Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant sur la vente des biens suivants :",
      orderedOn: 'Commandé le (*) / reçu le (*) :',
      consumerName: 'Nom du/des consommateur(s) :',
      consumerAddress: 'Adresse du/des consommateur(s) :',
      signature: 'Signature du/des consommateur(s) (uniquement en cas de notification sur papier) :',
      date: 'Date :',
      footnote: '(*) Rayer la mention inutile.',
    },
    returnBox: {
      heading: 'Initier un retour',
      emailPre: 'Envoyez un e-mail à',
      orContact: 'ou utilisez',
      contactText: 'notre formulaire de contact',
      orderNote: 'Mentionnez toujours votre numéro de commande.',
    },
  },
  de: {
    title: 'Widerrufsrecht & Rückgaberecht',
    intro1: 'Diese Richtlinie wurde in Übereinstimmung mit dem belgischen Wirtschaftsgesetzbuch (Buch VI) und der EU-Richtlinie 2011/83/EU über Verbraucherrechte erstellt.',
    intro2: 'Bei Arvenzo (Van Eylen Jonas) streben wir vollständige Kundenzufriedenheit an. Wenn Sie mit Ihrem Kauf nicht zufrieden sind, haben Sie das Recht, Ihre Bestellung unter den folgenden Bedingungen zurückzugeben.',
    sec1: {
      heading: '1. Widerrufsrecht',
      p1: 'Sie haben das Recht, binnen 14 Kalendertagen ohne Angabe von Gründen den Vertrag zu widerrufen.',
      termHeading: 'Frist',
      termText: 'Die Widerrufsfrist beträgt 14 Kalendertage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter (der nicht der Spediteur ist) die Waren physisch in Besitz genommen haben. Wenn Ihre Bestellung in mehreren Sendungen geliefert wird, beginnt die Frist an dem Tag, an dem Sie den letzten Teil erhalten haben.',
      exerciseHeading: 'Ausübung des Widerrufsrechts',
      exerciseText: 'Um das Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung über Ihren Entschluss, den Vertrag zu widerrufen, informieren. Dies kann erfolgen über:',
      exerciseMethods: ['E-Mail: support@arvenzo.eu', 'Kundensupport: Kontaktseite'],
      exerciseNote: 'Sie können dafür das beigefügte Muster-Widerrufsformular am Ende dieses Dokuments verwenden, was jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.',
    },
    sec2: {
      heading: '2. Ausnahmen vom Widerrufsrecht',
      intro: 'Gemäß der belgischen Gesetzgebung können Sie in folgenden Fällen kein Widerrufsrecht geltend machen:',
      exceptions: [
        { strong: 'Hygiene und Versiegelung:', rest: 'Produkte, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rücksendung geeignet sind und deren Versiegelung nach der Lieferung gebrochen wurde.' },
        { strong: 'Getragene Kleidung:', rest: 'Kleidungsstücke, die tatsächlich getragen wurden (über das bloße Anprobieren wie in einem Ladengeschäft hinaus) oder deren Originaletiketten entfernt wurden.' },
        { strong: 'Personalisierte Waren:', rest: 'Produkte, die nach Ihren Spezifikationen angefertigt wurden oder die einen eindeutig persönlichen Charakter haben.' },
        { strong: 'Verderbliche Waren:', rest: 'Waren, die schnell verderben oder eine begrenzte Haltbarkeit haben.' },
        { strong: 'Audio/Video/Software:', rest: 'Versiegelte Ton- oder Videoaufnahmen oder Computerprogramme, deren Versiegelung nach der Lieferung gebrochen wurde.' },
        { strong: 'Digitale Inhalte:', rest: 'Die Lieferung von digitalen Inhalten, die nicht auf einem materiellen Datenträger geliefert werden, wenn die Ausführung mit Ihrer ausdrücklichen vorherigen Zustimmung begonnen hat.' },
      ],
    },
    sec3: {
      heading: '3. Rücksendeverfahren und Produktzustand',
      stepsHeading: 'Zu befolgende Schritte',
      steps: [
        { step: '01', text: 'Melden Sie Ihre Rücksendung unter support@arvenzo.eu mit Ihrer Bestellnummer und dem Grund der Rücksendung an.' },
        { step: '02', text: 'Verpacken Sie das Produkt sorgfältig in der Originalverpackung.' },
        { step: '03', text: 'Senden Sie das Paket an die Adresse, die Sie von Arvenzo erhalten.' },
      ],
      conditionHeading: 'Zustand des Produkts',
      conditionText: 'Sie haften nur für eine etwaige Minderung des Wertes der Waren, die auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang zurückzuführen ist. Bei Kleidung bedeutet dies, dass Sie den Artikel anprobieren, aber nicht tragen dürfen.',
    },
    sec4: {
      heading: '4. Kosten der Rücksendung',
      body: 'Die direkten Kosten der Rücksendung der Waren gehen zu Ihren Lasten, es sei denn, Arvenzo hat ausdrücklich angegeben, diese Kosten zu übernehmen, oder das Produkt ist beschädigt oder falsch geliefert worden (siehe Abschnitt Gesetzliche Garantie).',
    },
    sec5: {
      heading: '5. Erstattung',
      p1: 'Wenn Sie den Vertrag widerrufen, erhalten Sie alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die entstehen, wenn Sie eine andere Art der Lieferung als die von uns angebotene günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen 14 Kalendertagen zurück, nachdem wir über Ihren Entschluss zur Ausübung des Widerrufsrechts unterrichtet worden sind.',
      conditionsHeading: 'Wichtige Bedingungen für die Erstattung:',
      conditions: [
        { strong: 'Zahlungsmethode:', rest: 'Wir verwenden für diese Rückzahlung dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, sofern nicht ausdrücklich etwas anderes vereinbart wurde.' },
        { strong: 'Einbehalt:', rest: 'Wir können die Erstattung verweigern, bis wir die Waren zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.' },
      ],
    },
    sec6: {
      heading: '6. Gesetzliche Garantie',
      p1: 'Für alle Waren, die Sie bei uns kaufen, gilt die gesetzliche Garantie von 2 Jahren.',
      items: [
        'Wenn ein Produkt innerhalb dieser Frist einen Defekt aufweist, haben Sie Anspruch auf Reparatur oder Ersatz.',
        'Wenn Reparatur oder Ersatz unmöglich oder unverhältnismäßig ist, haben Sie Anspruch auf eine Preisminderung oder Auflösung des Kaufvertrags.',
        'Melden Sie Mängel so schnell wie möglich und spätestens innerhalb von 2 Monaten nach Feststellung schriftlich via support@arvenzo.eu.',
      ],
    },
    modelForm: {
      heading: 'Anhang: Muster-Widerrufsformular',
      intro: '(Füllen Sie dieses Formular nur aus und senden Sie es zurück, wenn Sie den Vertrag widerrufen möchten)',
      toLabel: 'An:',
      toAddress: 'Van Eylen Jonas (Arvenzo)\nPandhoevestraat 62\n3130 Begijnendijk, Belgien\nE-Mail: support@arvenzo.eu',
      bodyText: 'Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren:',
      orderedOn: 'Bestellt am (*) / erhalten am (*):',
      consumerName: 'Name des/der Verbraucher(s):',
      consumerAddress: 'Anschrift des/der Verbraucher(s):',
      signature: 'Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):',
      date: 'Datum:',
      footnote: '(*) Unzutreffendes streichen.',
    },
    returnBox: {
      heading: 'Rücksendung anmelden',
      emailPre: 'Sende eine E-Mail an',
      orContact: 'oder nutze',
      contactText: 'unser Kontaktformular',
      orderNote: 'Gib immer deine Bestellnummer an.',
    },
  },
  en: {
    title: 'Right of withdrawal & Returns policy',
    intro1: 'This policy is established in accordance with the Belgian Code of Economic Law (Book VI) and EU Directive 2011/83/EU on consumer rights.',
    intro2: 'At Arvenzo (Van Eylen Jonas) we aim for complete customer satisfaction. If however you are not satisfied with your purchase, you have the right to return your order under the conditions stated below.',
    sec1: {
      heading: '1. Right of withdrawal',
      p1: 'You have the right to withdraw from the agreement within 14 calendar days without giving any reason.',
      termHeading: 'Period',
      termText: 'The withdrawal period expires 14 calendar days after the day on which you, or a third party designated by you (other than the carrier), physically take possession of the goods. If your order is delivered in multiple shipments, the period begins on the day you receive the last item.',
      exerciseHeading: 'Exercising the right of withdrawal',
      exerciseText: 'To exercise the right of withdrawal, you must inform us of your decision to withdraw from the agreement by means of an unambiguous statement. You can do this via:',
      exerciseMethods: ['Email: support@arvenzo.eu', 'Customer support: contact page'],
      exerciseNote: 'You may use the attached model withdrawal form at the bottom of this document, but this is not mandatory. To meet the withdrawal deadline, it is sufficient for you to send your communication concerning the exercise of the right of withdrawal before the withdrawal period has expired.',
    },
    sec2: {
      heading: '2. Exceptions to the right of withdrawal',
      intro: 'In accordance with Belgian law, you cannot exercise the right of withdrawal in the following cases:',
      exceptions: [
        { strong: 'Hygiene and sealing:', rest: 'Products that are not suitable for return for reasons of health protection or hygiene and whose seal has been broken after delivery.' },
        { strong: 'Worn clothing:', rest: 'Garments that have actually been worn (beyond mere trying on as you would in a physical shop) or whose original labels have been removed.' },
        { strong: 'Personalised goods:', rest: 'Products that have been manufactured according to your specifications or that have a clearly personal character.' },
        { strong: 'Perishable goods:', rest: 'Goods that are liable to deteriorate rapidly or have a limited shelf life.' },
        { strong: 'Audio/Video/Software:', rest: 'Sealed audio or video recordings or computer programs whose seal has been broken after delivery.' },
        { strong: 'Digital content:', rest: 'The supply of digital content not supplied on a tangible medium, if performance has begun with your explicit prior consent.' },
      ],
    },
    sec3: {
      heading: '3. Return procedure and product condition',
      stepsHeading: 'Steps to follow',
      steps: [
        { step: '01', text: 'Register your return via support@arvenzo.eu with your order number and the reason for return.' },
        { step: '02', text: 'Pack the product carefully in the original packaging.' },
        { step: '03', text: 'Send the package to the address you will receive from Arvenzo.' },
      ],
      conditionHeading: 'Product condition',
      conditionText: 'You are only liable for any diminished value of the goods resulting from handling other than what is necessary to establish the nature, characteristics and functioning of the goods. For clothing this means you may try the item on but not wear it for use.',
    },
    sec4: {
      heading: '4. Cost of return shipment',
      body: 'The direct costs of returning the goods are at your expense, unless Arvenzo has expressly stated that it will bear these costs or if the product is damaged or incorrectly delivered (see section Legal Guarantee).',
    },
    sec5: {
      heading: '5. Refund',
      p1: 'If you withdraw from the agreement, you will receive all payments you have made up to that point, including delivery costs (except for any additional costs resulting from your choice of a delivery method other than the cheapest standard delivery we offer), without undue delay and in any event no later than 14 calendar days after we have been informed of your decision to withdraw.',
      conditionsHeading: 'Important conditions for refund:',
      conditions: [
        { strong: 'Payment method:', rest: 'We will repay using the same payment method as you used for the original transaction, unless you have expressly agreed otherwise.' },
        { strong: 'Withholding:', rest: 'We may withhold the refund until we have received the goods back, or you have provided proof of return, whichever is the earlier.' },
      ],
    },
    sec6: {
      heading: '6. Legal guarantee',
      p1: 'A legal guarantee of 2 years applies to all goods you purchase from us.',
      items: [
        'If a product shows a defect within this period, you are entitled to repair or replacement.',
        'If repair or replacement is impossible or disproportionate, you are entitled to a price reduction or dissolution of the purchase agreement.',
        'Report defects as soon as possible, and no later than 2 months after discovery, in writing via support@arvenzo.eu.',
      ],
    },
    modelForm: {
      heading: 'Annex: Model withdrawal form',
      intro: '(Complete and return this form only when you wish to withdraw from the agreement)',
      toLabel: 'To:',
      toAddress: 'Van Eylen Jonas (Arvenzo)\nPandhoevestraat 62\n3130 Begijnendijk, Belgium\nEmail: support@arvenzo.eu',
      bodyText: 'I/We (*) hereby give notice that I/we (*) withdraw from my/our (*) contract of sale of the following goods:',
      orderedOn: 'Ordered on (*) / received on (*):',
      consumerName: 'Name of consumer(s):',
      consumerAddress: 'Address of consumer(s):',
      signature: 'Signature of consumer(s) (only when this form is submitted on paper):',
      date: 'Date:',
      footnote: '(*) Delete as appropriate.',
    },
    returnBox: {
      heading: 'Register a return',
      emailPre: 'Email',
      orContact: 'or use',
      contactText: 'our contact form',
      orderNote: 'Always include your order number.',
    },
  },
};

export function getReturns(locale: string): ReturnsContent {
  return returnsContent[locale] ?? returnsContent['en'];
}
