export type City = {
  slug: string; // full route slug, e.g. "bamboo-chick-delhi"
  city: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: string;
  intro: string[];
  localAreas: string[];
  whyLocal: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

// Clean single-photo hero images (the chickbanner*.jpg files are busy collages).
const heroes = ['Bamboochick.jpg', 'chickblinds.jpg', 'Bamboochickoutdoor.jpg'] as const;
const banner = (n: 1 | 2 | 3) => `/images/${heroes[n - 1]}`;

export const cities: City[] = [
  {
    slug: 'bamboo-chick-delhi',
    city: 'Delhi',
    metaTitle: 'Bamboo Chick Makers in Delhi — Chicks, Blinds, Zebra Blinds & Pigeon Nets',
    metaDescription:
      'Bamboo Chick Makers in Delhi — custom bamboo chicks, zebra & roller blinds, pigeon nets, bamboo jafri and bamboo huts for homes, offices and farmhouses. Based in Vasant Vihar, fast fitting across Delhi. Free WhatsApp quote.',
    keywords: ['bamboo chick makers in delhi', 'bamboo chick maker delhi', 'bamboo chick delhi', 'bamboo chick price delhi', 'zebra blinds delhi', 'pigeon net delhi'],
    hero: banner(1),
    intro: [
      'Bamboo Chick Makers is a trusted bamboo chick maker in Delhi, supplying and installing custom bamboo chicks, blinds, zebra blinds, pigeon nets, bamboo jafri and bamboo huts across the capital. Delhi’s harsh summers and dusty, sun-baked balconies make natural bamboo shading a favourite for homes, offices and farmhouses.',
      'Based in Vasant Vihar, South Delhi, we measure, manufacture and fit weather-treated solutions built for Delhi’s climate — from compact apartments to large bungalows and farmhouses.',
    ],
    localAreas: ['Vasant Vihar', 'Vasant Kunj', 'Greater Kailash', 'Defence Colony', 'Saket', 'Hauz Khas', 'Chanakyapuri', 'Dwarka'],
    whyLocal: [
      { title: 'Delhi’s complete range', description: 'Chicks, blinds, zebra blinds, pigeon nets, jafri and huts — all from one local maker.' },
      { title: 'Built for Delhi weather', description: 'Weather-treated materials for intense summer sun, dust and monsoon rain.' },
      { title: 'Homes to farmhouses', description: 'Apartments, bungalows, offices and farmhouse projects across the city.' },
    ],
    faqs: [
      { question: 'Who is the best bamboo chick maker in Delhi?', answer: 'Bamboo Chick Makers, based in Vasant Vihar, offers custom bamboo chicks, blinds, pigeon nets, bamboo jafri and huts across Delhi with weather-treated materials, professional fitting and a warranty. Share your requirement on WhatsApp for a quote.' },
      { question: 'What is the price of bamboo chick in Delhi?', answer: 'Bamboo chick in Delhi typically starts from around ₹45 per sq.ft depending on size, grade and mechanism. Zebra blinds, nets, jafri and huts are priced separately. WhatsApp us for an exact quote.' },
      { question: 'Which areas of Delhi do you cover?', answer: 'We cover all of Delhi including Vasant Vihar, Vasant Kunj, Greater Kailash, Defence Colony, Saket, Hauz Khas, Chanakyapuri and Dwarka.' },
    ],
    cta: 'Get your free Delhi bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-new-delhi',
    city: 'New Delhi',
    metaTitle: 'Bamboo Chick in New Delhi — Chicks, Blinds & Nets | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, designer blinds and pigeon nets in New Delhi — Lutyens’ Delhi, Chanakyapuri and central colonies. Premium custom shading with discreet, professional fitting. Free WhatsApp quote.',
    keywords: ['bamboo chick new delhi', 'blinds new delhi', 'pigeon net new delhi', 'bamboo chick chanakyapuri'],
    hero: banner(2),
    intro: [
      'New Delhi’s embassies, bungalows and government colonies demand a clean, high-end finish. Bamboo Chick Makers supplies and installs premium bamboo chicks, designer and zebra blinds and near-invisible pigeon nets across central New Delhi.',
      'We focus on discreet fixings, weather-treated materials and tailored sizing to suit Lutyens-zone bungalows, Chanakyapuri residences and central offices.',
    ],
    localAreas: ['Chanakyapuri', 'Connaught Place', 'Lodhi Estate', 'Lodhi Colony', 'Moti Bagh', 'Sunder Nagar', 'Golf Links', 'Diplomatic Enclave'],
    whyLocal: [
      { title: 'Premium, discreet finish', description: 'High-end installation suited to embassies, bungalows and government colonies.' },
      { title: 'Complete product range', description: 'Bamboo chicks, designer blinds, zebra blinds and invisible pigeon nets.' },
      { title: 'Central Delhi service', description: 'Prompt site visits across Chanakyapuri, Lodhi and central colonies.' },
    ],
    faqs: [
      { question: 'Do you install bamboo chicks in Lutyens’ Delhi bungalows?', answer: 'Yes — we specialise in premium, clean installations for central New Delhi bungalows, residences and offices, with custom sizing and discreet fixings.' },
      { question: 'What products do you offer in New Delhi?', answer: 'Bamboo chicks, fancy chicks, designer bamboo and Roman blinds, zebra and roller blinds, vertical blinds and near-invisible pigeon nets.' },
      { question: 'How do I get a quote in New Delhi?', answer: 'Send your window or balcony measurements and a photo on WhatsApp and we will share pricing and options the same day.' },
    ],
    cta: 'Get your free New Delhi bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-vasant-vihar',
    city: 'Vasant Vihar',
    metaTitle: 'Bamboo Chick Makers in Vasant Vihar, Delhi — Chicks, Blinds & Nets',
    metaDescription:
      'Bamboo Chick Makers in Vasant Vihar, Delhi — our home base. Custom bamboo chicks, blinds, zebra blinds and pigeon nets for bungalows, apartments and offices with premium professional fitting. Free WhatsApp quote.',
    keywords: ['bamboo chick makers in vasant vihar', 'bamboo chick makers in vasant vihar delhi', 'bamboo chick maker vasant vihar', 'bamboo chick vasant vihar', 'blinds vasant vihar', 'pigeon net vasant vihar'],
    hero: banner(3),
    intro: [
      'Vasant Vihar is our home base — and our specialty. Bamboo Chick Makers supplies and installs custom bamboo chicks, designer blinds, zebra blinds and near-invisible pigeon nets across Vasant Vihar and the surrounding South Delhi neighbourhoods.',
      'Being local means the fastest site visits, easy follow-up and a premium, clean finish suited to the area’s upmarket bungalows, embassies and offices.',
    ],
    localAreas: ['Vasant Vihar Blocks A–F', 'Shanti Niketan', 'Anand Niketan', 'Munirka', 'Vasant Kunj', 'Moti Bagh', 'Chanakyapuri', 'R.K. Puram'],
    whyLocal: [
      { title: 'We are based in Vasant Vihar', description: 'Fastest site visits, fitting and after-sales service in the area.' },
      { title: 'Premium finish', description: 'High-end, discreet installation suited to Vasant Vihar homes and offices.' },
      { title: 'Complete range', description: 'Bamboo chicks, designer blinds, zebra blinds and invisible pigeon nets.' },
    ],
    faqs: [
      { question: 'Are you located in Vasant Vihar?', answer: 'Yes — our base is in Vasant Vihar, New Delhi, so we offer the quickest measurement, fitting and service across Vasant Vihar and South Delhi.' },
      { question: 'What products do you offer in Vasant Vihar?', answer: 'Bamboo chicks, fancy chicks, designer bamboo and Roman blinds, zebra and roller blinds, vertical blinds and near-invisible pigeon nets.' },
      { question: 'How do I get a quote in Vasant Vihar?', answer: 'Send your window or balcony measurements and a photo on WhatsApp and we will share pricing and options the same day.' },
    ],
    cta: 'Get your free Vasant Vihar bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-vasant-kunj',
    city: 'Vasant Kunj',
    metaTitle: 'Bamboo Chick in Vasant Kunj, Delhi — Chicks, Blinds & Nets | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, zebra blinds and balcony pigeon nets for Vasant Kunj condominiums and apartments. Custom-fit, weather-treated and professionally installed. Free WhatsApp quote across Vasant Kunj.',
    keywords: ['bamboo chick vasant kunj', 'balcony bamboo chick vasant kunj', 'zebra blinds vasant kunj', 'pigeon net vasant kunj'],
    hero: banner(1),
    intro: [
      'Vasant Kunj’s many condominium towers and DDA flats face strong sun and need privacy from facing blocks. Bamboo Chick Makers supplies and installs custom balcony bamboo chicks, blinds and near-invisible pigeon nets throughout Vasant Kunj.',
      'As a neighbouring Vasant Vihar business, we’re minutes away for quick, society-friendly installation.',
    ],
    localAreas: ['Sector A', 'Sector B', 'Sector C', 'Sector D', 'Pocket 1–9', 'Nelson Mandela Marg', 'Masoodpur', 'Kishangarh'],
    whyLocal: [
      { title: 'Condominium specialists', description: 'Tidy, society-compliant fitting for Vasant Kunj towers and DDA flats.' },
      { title: 'Minutes away', description: 'From our Vasant Vihar base, Vasant Kunj visits are fast and reliable.' },
      { title: 'Balcony & privacy focus', description: 'Shade exposed balconies and screen from facing blocks.' },
    ],
    faqs: [
      { question: 'Do you install in Vasant Kunj condominiums?', answer: 'Yes, we regularly fit balcony bamboo chicks, blinds and pigeon nets in Vasant Kunj condominiums and DDA flats, with society-friendly installation.' },
      { question: 'What does a balcony bamboo chick cost in Vasant Kunj?', answer: 'Balcony bamboo chicks start from around ₹50 per sq.ft depending on size and finish. WhatsApp us your balcony dimensions for an exact quote.' },
      { question: 'Can you install pigeon nets in Vasant Kunj?', answer: 'Yes — near-invisible pigeon nets for balconies and ducts are one of our most requested services in Vasant Kunj.' },
    ],
    cta: 'Get your free Vasant Kunj bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-greater-kailash',
    city: 'Greater Kailash',
    metaTitle: 'Bamboo Chick in Greater Kailash (GK), Delhi | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, designer & zebra blinds and pigeon nets for Greater Kailash (GK I & II) homes and offices. Premium custom shading with professional fitting. Free WhatsApp quote.',
    keywords: ['bamboo chick greater kailash', 'blinds gk delhi', 'zebra blinds greater kailash', 'pigeon net gk'],
    hero: banner(2),
    intro: [
      'Greater Kailash (GK I & II) is one of South Delhi’s most sought-after addresses. Bamboo Chick Makers fits premium bamboo chicks, designer and zebra blinds and near-invisible pigeon nets across GK’s bungalows, builder floors and M-block offices.',
      'We deliver a clean, upmarket finish with custom sizing and weather-treated materials.',
    ],
    localAreas: ['GK I', 'GK II', 'M Block Market', 'N Block', 'S Block', 'W Block', 'Kailash Colony', 'Chittaranjan Park'],
    whyLocal: [
      { title: 'Upmarket finish', description: 'Premium, discreet installation for GK bungalows and builder floors.' },
      { title: 'Designer blinds', description: 'Zebra, Roman and bamboo blinds to suit high-end interiors.' },
      { title: 'Local South Delhi team', description: 'Fast visits across GK I, GK II and nearby colonies.' },
    ],
    faqs: [
      { question: 'Do you serve GK I and GK II?', answer: 'Yes, we cover both Greater Kailash I and II along with Kailash Colony, CR Park and surrounding South Delhi colonies.' },
      { question: 'What is the price of zebra blinds in Greater Kailash?', answer: 'Zebra blinds typically start from around ₹120 per sq.ft depending on fabric and size. WhatsApp us your window measurements for an exact quote.' },
      { question: 'Can you fit bamboo chicks on GK builder-floor balconies?', answer: 'Yes — custom balcony chicks and blinds for builder floors and bungalows are a core part of our GK work.' },
    ],
    cta: 'Get your free Greater Kailash bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-defence-colony',
    city: 'Defence Colony',
    metaTitle: 'Bamboo Chick in Defence Colony, Delhi | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, blinds and balcony pigeon nets for Defence Colony homes and offices. Leafy, upscale South Delhi shading with premium custom fitting. Free WhatsApp quote.',
    keywords: ['bamboo chick defence colony', 'blinds defence colony', 'pigeon net defence colony', 'bamboo chick south delhi'],
    hero: banner(3),
    intro: [
      'Defence Colony’s leafy streets and elegant homes are perfect for natural bamboo shading. Bamboo Chick Makers supplies and installs custom bamboo chicks, designer blinds and near-invisible pigeon nets across Defence Colony and its surrounding blocks.',
      'Our finish is clean and understated — ideal for the area’s upscale residences and offices.',
    ],
    localAreas: ['A Block', 'B Block', 'C Block', 'D Block', 'Defence Colony Market', 'Andrews Ganj', 'Lajpat Nagar', 'Jangpura'],
    whyLocal: [
      { title: 'Elegant, natural shading', description: 'Warm bamboo chicks that suit Defence Colony’s leafy character.' },
      { title: 'Clean installation', description: 'Discreet, tidy fitting for upscale homes and offices.' },
      { title: 'Local & quick', description: 'Fast site visits from our nearby Vasant Vihar base.' },
    ],
    faqs: [
      { question: 'Do you cover all blocks of Defence Colony?', answer: 'Yes, we serve all of Defence Colony (A–D blocks) plus Andrews Ganj, Lajpat Nagar and Jangpura nearby.' },
      { question: 'What is the bamboo chick price in Defence Colony?', answer: 'Prices start from around ₹45 per sq.ft depending on size and finish. WhatsApp us your measurements for an exact quote.' },
      { question: 'Do you install pigeon nets in Defence Colony?', answer: 'Yes — near-invisible pigeon and anti-bird nets for balconies and ducts are a popular service here.' },
    ],
    cta: 'Get your free Defence Colony bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-saket',
    city: 'Saket',
    metaTitle: 'Bamboo Chick in Saket, Delhi — Chicks, Blinds & Nets | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, zebra blinds and balcony pigeon nets for Saket apartments, builder floors and offices. Custom-fit, weather-treated and professionally installed. Free WhatsApp quote across Saket.',
    keywords: ['bamboo chick saket', 'balcony bamboo chick saket', 'zebra blinds saket', 'pigeon net saket'],
    hero: banner(1),
    intro: [
      'Saket’s mix of apartments, builder floors and offices around the district centre makes bamboo chicks and blinds a popular choice for cutting heat and gaining privacy. Bamboo Chick Makers supplies and installs custom chicks, blinds and pigeon nets across Saket.',
      'We make weather-treated solutions to your exact size and fit them cleanly and quickly.',
    ],
    localAreas: ['Saket', 'Malviya Nagar', 'Pushp Vihar', 'Saidulajab', 'Hauz Rani', 'Khirki Extension', 'Sainik Farms', 'Mehrauli'],
    whyLocal: [
      { title: 'Apartments & builder floors', description: 'Tailored balcony and window shading for Saket homes.' },
      { title: 'Heat & privacy', description: 'Cut harsh sun and screen from facing buildings.' },
      { title: 'Quick local service', description: 'Fast visits across Saket and Malviya Nagar.' },
    ],
    faqs: [
      { question: 'Do you serve Saket and Malviya Nagar?', answer: 'Yes, we cover Saket, Malviya Nagar, Pushp Vihar, Khirki Extension and nearby South Delhi areas.' },
      { question: 'What is the bamboo chick price in Saket?', answer: 'Prices start from around ₹45 per sq.ft depending on size and finish. WhatsApp your measurements for an exact quote.' },
      { question: 'How quickly can you install in Saket?', answer: 'Most residential orders are measured, manufactured and fitted within a few days to a week.' },
    ],
    cta: 'Get your free Saket bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-hauz-khas',
    city: 'Hauz Khas',
    metaTitle: 'Bamboo Chick in Hauz Khas, Delhi — Chicks, Blinds & Nets | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, fancy chicks and blinds for Hauz Khas homes, cafés and offices. Natural shading and décor for South Delhi’s creative quarter. Free WhatsApp quote across Hauz Khas.',
    keywords: ['bamboo chick hauz khas', 'fancy bamboo chick hauz khas', 'cafe bamboo chick delhi', 'blinds hauz khas'],
    hero: banner(2),
    intro: [
      'Hauz Khas — from its leafy enclave to the buzzing village cafés — loves the natural, characterful look of bamboo. Bamboo Chick Makers supplies and installs bamboo chicks, fancy designer chicks, blinds and partitions across Hauz Khas homes, cafés and studios.',
      'We’re a popular choice for café and restaurant fit-outs that want a warm, natural aesthetic.',
    ],
    localAreas: ['Hauz Khas Enclave', 'Hauz Khas Village', 'SDA', 'Green Park', 'Gulmohar Park', 'Safdarjung Enclave', 'IIT Gate', 'Aurobindo Marg'],
    whyLocal: [
      { title: 'Homes, cafés & studios', description: 'From quiet enclave homes to busy village cafés and studios.' },
      { title: 'Designer fancy chicks', description: 'Decorative chicks and partitions for a natural, creative look.' },
      { title: 'Local & fast', description: 'Quick visits across Hauz Khas, Green Park and SDA.' },
    ],
    faqs: [
      { question: 'Do you do café and restaurant installations in Hauz Khas?', answer: 'Yes — bamboo chicks, fancy chicks and partitions for cafés and restaurants in Hauz Khas Village and beyond are a speciality.' },
      { question: 'What is a fancy bamboo chick?', answer: 'A fancy chick uses decorative weaves, borders and premium finishes as a statement screen — popular for entrances and hospitality interiors.' },
      { question: 'Which areas around Hauz Khas do you cover?', answer: 'Hauz Khas Enclave and Village, Green Park, SDA, Gulmohar Park and Safdarjung Enclave.' },
    ],
    cta: 'Get your free Hauz Khas bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-south-delhi',
    city: 'South Delhi',
    metaTitle: 'Bamboo Chick in South Delhi — Chicks, Blinds & Nets | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chick maker for South Delhi — chicks, zebra & roller blinds, pigeon nets, bamboo jafri and huts for homes, offices and farmhouses. Premium custom fitting. Free WhatsApp quote.',
    keywords: ['bamboo chick south delhi', 'blinds south delhi', 'pigeon net south delhi', 'bamboo chick maker south delhi'],
    hero: banner(3),
    intro: [
      'South Delhi is the heart of our service area. From Vasant Vihar and Vasant Kunj to GK, Saket, Hauz Khas and the farmhouse belt, Bamboo Chick Makers supplies and installs the full range — bamboo chicks, blinds, zebra blinds, pigeon nets, jafri and huts.',
      'Being based in Vasant Vihar, we offer South Delhi the fastest visits, fairest pricing and a premium, reliable finish.',
    ],
    localAreas: ['Vasant Vihar', 'Vasant Kunj', 'Greater Kailash', 'Defence Colony', 'Saket', 'Hauz Khas', 'Chhatarpur', 'Mehrauli'],
    whyLocal: [
      { title: 'South Delhi base', description: 'Located in Vasant Vihar — fastest, most reliable South Delhi service.' },
      { title: 'Full product range', description: 'Chicks, blinds, nets, jafri and huts for every South Delhi space.' },
      { title: 'Homes to farmhouses', description: 'Apartments, bungalows, offices and the Chhatarpur farmhouse belt.' },
    ],
    faqs: [
      { question: 'Which South Delhi areas do you serve?', answer: 'All of South Delhi including Vasant Vihar, Vasant Kunj, GK, Defence Colony, Saket, Hauz Khas, Mehrauli and the Chhatarpur farmhouse belt.' },
      { question: 'What is the bamboo chick price in South Delhi?', answer: 'Bamboo chick starts from around ₹45 per sq.ft; blinds, nets, jafri and huts are priced separately. WhatsApp us for an exact quote.' },
      { question: 'Do you handle farmhouse projects?', answer: 'Yes — bamboo jafri fencing, huts, gazebos and large-span shading for the Chhatarpur and Mehrauli farmhouse belt are a speciality.' },
    ],
    cta: 'Get your free South Delhi bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-dwarka',
    city: 'Dwarka',
    metaTitle: 'Bamboo Chick in Dwarka, Delhi — Chicks, Blinds & Nets | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, zebra blinds and balcony pigeon nets for Dwarka society flats and apartments. Custom-fit, weather-treated and professionally installed. Free WhatsApp quote across Dwarka.',
    keywords: ['bamboo chick dwarka', 'balcony bamboo chick dwarka', 'zebra blinds dwarka', 'pigeon net dwarka'],
    hero: banner(1),
    intro: [
      'Dwarka’s many cooperative group housing societies and high-rise flats face open sun and need privacy and bird protection on balconies. Bamboo Chick Makers supplies and installs balcony bamboo chicks, blinds and near-invisible pigeon nets across all Dwarka sectors.',
      'We provide tidy, society-friendly installation built for high-floor exposure.',
    ],
    localAreas: ['Sector 1–23', 'Dwarka Mor', 'Palam', 'Sector 10', 'Sector 12', 'Sector 19', 'Sector 22', 'Najafgarh Road'],
    whyLocal: [
      { title: 'Society-friendly fitting', description: 'Tidy, compliant installation for Dwarka’s CGHS towers.' },
      { title: 'High-rise ready', description: 'Wind-rated balcony chicks and nets for high floors.' },
      { title: 'All sectors covered', description: 'Service across Dwarka Sectors 1 to 23 and Dwarka Mor.' },
    ],
    faqs: [
      { question: 'Do you cover all Dwarka sectors?', answer: 'Yes, we serve all Dwarka sectors (1–23) plus Dwarka Mor and Palam.' },
      { question: 'Can you install on high-floor Dwarka balconies?', answer: 'Yes — we use wind-rated brackets and reinforced fixings specified for the height and exposure of your balcony.' },
      { question: 'What does a balcony bamboo chick cost in Dwarka?', answer: 'Balcony bamboo chicks start from around ₹50 per sq.ft. Share your balcony size on WhatsApp for an exact quote.' },
    ],
    cta: 'Get your free Dwarka bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-gurgaon',
    city: 'Gurgaon',
    metaTitle: 'Bamboo Chick in Gurgaon (Gurugram) — Chicks, Blinds & Nets | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, zebra & roller blinds and balcony pigeon nets for Gurgaon condominiums, villas and offices. Custom-fit and professionally installed across Gurugram. Free WhatsApp quote.',
    keywords: ['bamboo chick gurgaon', 'blinds gurgaon', 'zebra blinds gurugram', 'pigeon net gurgaon', 'balcony chick gurgaon'],
    hero: banner(2),
    intro: [
      'Gurgaon’s glass-fronted condominiums and corporate offices take the full force of the sun. Bamboo Chick Makers supplies and installs balcony bamboo chicks, zebra and roller blinds and near-invisible pigeon nets across Gurugram’s high-rises, villas and workplaces.',
      'We deliver a clean, modern finish suited to Gurgaon’s contemporary towers and offices.',
    ],
    localAreas: ['DLF Phase 1–5', 'Sohna Road', 'Golf Course Road', 'Sushant Lok', 'Sector 56', 'MG Road', 'Nirvana Country', 'New Gurgaon'],
    whyLocal: [
      { title: 'Condo & corporate ready', description: 'Modern blinds and balcony chicks for high-rises and offices.' },
      { title: 'Beat the glass-facade heat', description: 'Effective shading and glare control for sun-facing flats.' },
      { title: 'NCR coverage', description: 'Service across DLF, Golf Course Road, Sohna Road and New Gurgaon.' },
    ],
    faqs: [
      { question: 'Do you serve Gurgaon condominiums?', answer: 'Yes, we install balcony chicks, zebra and roller blinds and pigeon nets across Gurgaon’s DLF, Golf Course Road, Sohna Road and Sushant Lok condominiums.' },
      { question: 'What is the price of zebra blinds in Gurgaon?', answer: 'Zebra blinds start from around ₹120 per sq.ft depending on fabric and size. WhatsApp us your measurements for an exact quote.' },
      { question: 'Do you install pigeon nets in Gurgaon high-rises?', answer: 'Yes — near-invisible balcony pigeon nets with wind-rated fixings are one of our most-requested Gurgaon services.' },
    ],
    cta: 'Get your free Gurgaon bamboo chick quote on WhatsApp',
  },
  {
    slug: 'bamboo-chick-noida',
    city: 'Noida',
    metaTitle: 'Bamboo Chick in Noida — Chicks, Blinds & Nets | Bamboo Chick Makers',
    metaDescription:
      'Bamboo chicks, zebra & roller blinds and balcony pigeon nets for Noida apartments, societies and offices. Custom-fit and professionally installed across Noida & Greater Noida. Free WhatsApp quote.',
    keywords: ['bamboo chick noida', 'blinds noida', 'zebra blinds noida', 'pigeon net noida', 'balcony chick noida'],
    hero: banner(3),
    intro: [
      'Noida and Greater Noida’s sector apartments and high-rise societies need effective shade, privacy and bird protection on open balconies. Bamboo Chick Makers supplies and installs balcony bamboo chicks, zebra and roller blinds and near-invisible pigeon nets across Noida.',
      'We offer tidy, society-friendly installation built for high-floor sun and wind.',
    ],
    localAreas: ['Sector 18', 'Sector 62', 'Sector 78', 'Sector 110', 'Sector 137', 'Greater Noida', 'Noida Extension', 'Expressway'],
    whyLocal: [
      { title: 'Society high-rises', description: 'Society-friendly fitting for Noida and Greater Noida towers.' },
      { title: 'Shade, privacy & nets', description: 'Balcony chicks, blinds and pigeon nets in one visit.' },
      { title: 'Noida-wide coverage', description: 'Across Noida sectors, Noida Extension and Greater Noida.' },
    ],
    faqs: [
      { question: 'Do you cover Noida and Greater Noida?', answer: 'Yes, we serve Noida sectors, Noida Extension and Greater Noida societies and apartments.' },
      { question: 'What is the bamboo chick price in Noida?', answer: 'Balcony bamboo chicks start from around ₹50 per sq.ft; blinds and nets are priced separately. WhatsApp us for an exact quote.' },
      { question: 'Can you install pigeon nets on Noida high-rise balconies?', answer: 'Yes — near-invisible pigeon nets with wind-rated fixings for high-floor balconies are a popular Noida service.' },
    ],
    cta: 'Get your free Noida bamboo chick quote on WhatsApp',
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function citySlugs() {
  return cities.map((c) => c.slug);
}
