import Image from "next/image";

const teaTypes = [
  {
    name: "डस्ट (DUST)",
    description: "बारीक कण, लवकर विरघळणारे, तीव्र चव.",
    image: "/images/dust.png",
    accent: "bg-amber-900",
    whatsappText:
      "नमस्कार, मला डस्ट (DUST) चहा पावडर ऑर्डर करायची आहे. कृपया किंमत आणि उपलब्धता सांगा.",
    schemes: [
      "4 स्टील ग्लास मोफत",
      "4 प्लास्टिक डबे मोफत",
      "1 किलो साखर मोफत",
    ],
  },
  {
    name: "फॅमिली (FAMILY)",
    description: "बारीक आणि गोळी मिश्रण, संतुलित चव, घरच्या चहासारखी खास.",
    image: "/images/family.png",
    accent: "bg-orange-800",
    whatsappText:
      "नमस्कार, मला फॅमिली (FAMILY) चहा पावडर ऑर्डर करायची आहे. कृपया किंमत आणि उपलब्धता सांगा.",
    schemes: [
      "4 स्टील ग्लास मोफत",
      "4 प्लास्टिक डबे मोफत",
      "1 किलो साखर मोफत",
    ],
  },
  {
    name: "हॉटेल ब्लेंड (HOTEL)",
    description:
      "हॉटेलसाठी खास बनवलेले, मजबूत आणि भरपूर चव, व्यावसायिक दर्जाचे.",
    image: "/images/hotel.png",
    accent: "bg-yellow-800",
    whatsappText:
      "नमस्कार, मला हॉटेल ब्लेंड (HOTEL) चहा पावडर ऑर्डर करायची आहे. कृपया बल्क किंमत आणि उपलब्धता सांगा.",
    schemes: ["5 किलो पावडर सोबत 5 किलो साखर मोफत"],
  },
  {
    name: "वेलची (ELAICHI)",
    description: "परम वेलची सुगंध, गोड चव, विशेष पाहुण्यांसाठी योग्य.",
    image: "/images/elaichi.png",
    accent: "bg-green-800",
    whatsappText:
      "नमस्कार, मला वेलची (ELAICHI) चहा पावडर ऑर्डर करायची आहे. कृपया किंमत आणि उपलब्धता सांगा.",
    schemes: [],
  },
  {
    name: "मसाला (MASALA)",
    description:
      "पारंपारिक मसाल्यांचे मिश्रण, गरम चव, खास नाश्त्याचा साथीदार.",
    image: "/images/masala.png",
    accent: "bg-red-800",
    whatsappText:
      "नमस्कार, मला मसाला (MASALA) चहा पावडर ऑर्डर करायची आहे. कृपया किंमत आणि उपलब्धता सांगा.",
    schemes: [],
  },
];

function PhoneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Simple top nav - no hamburger, just logo + 2 big buttons */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-tea-light/30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🍵</span>
            <span className="font-bold text-base sm:text-lg text-tea-dark leading-tight">
              संजय गाताडे
              <br className="sm:hidden" />
              <span className="sm:ml-1">टी कंपनी</span>
            </span>
          </a>
          <div className="flex gap-2">
            <a
              href="tel:+917218973243"
              className="flex items-center gap-1.5 bg-tea-brown text-white px-4 py-2.5 rounded-full text-sm font-semibold active:scale-95 transition-transform"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <a
              href="https://wa.me/917218973243?text=नमस्कार%2C%20मला%20चहा%20पावडर%20बद्दल%20माहिती%20हवी%20आहे"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 text-white px-4 py-2.5 rounded-full text-sm font-semibold active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-b from-tea-cream to-white px-4 py-16 sm:py-24 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-tea-dark leading-tight mb-4">
            संजय गाताडे
            <br />
            <span className="text-tea-brown">टी कंपनी</span>
          </h1>
          <p className="text-tea-gold font-semibold text-base sm:text-lg mb-6">
            असामच्या बागांमधून थेट तुमच्या कपात — चव आणि दर्जाचे उत्कृष्ट मिश्रण
          </p>
          <p className="text-tea-brown/70 text-lg leading-relaxed mb-8">
            असामच्या चहाच्या बागांमधून निवडलेली उत्कृष्ट पानं, सांगलीत
            काळजीपूर्वक तयार केलेली चहा पावडर. प्रत्येक कपात परंपरा, दर्जा
            आणि प्रेम.
          </p>

          {/* Big CTA buttons for mobile */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-tea-brown text-white font-bold rounded-full text-lg active:scale-95 transition-transform"
            >
              Tea Varieties
            </a>
            <a
              href="https://wa.me/917218973243?text=नमस्कार%2C%20मला%20चहा%20पावडर%20ऑर्डर%20करायची%20आहे"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-full text-lg active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teaTypes.map((tea) => (
              <div
                key={tea.name}
                className="rounded-2xl overflow-hidden shadow-md border border-tea-light/20"
              >
                {/* Product image */}
                <div className="relative h-52 sm:h-64 bg-tea-cream">
                  <Image
                    src={tea.image}
                    alt={tea.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute top-3 right-3 ${tea.accent} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {tea.name.split("(")[0].trim()}
                  </div>
                </div>

                <div className="p-5 bg-tea-cream">
                  <h3 className="text-xl font-bold text-tea-dark mb-2">
                    {tea.name}
                  </h3>
                  <p className="text-tea-brown/80 text-base leading-relaxed mb-3">
                    {tea.description}
                  </p>

                  {/* Schemes */}
                  {tea.schemes.length > 0 && (
                    <div className="bg-tea-gold/10 border border-tea-gold/30 rounded-xl p-3 mb-3">
                      <p className="text-sm font-bold text-tea-gold mb-1">
                        Special Offer (1 किलो पावडर सोबत):
                      </p>
                      <p className="text-xs text-tea-brown/50 mb-2">
                        यापैकी कोणतीही एक ऑफर निवडा
                      </p>
                      <ul className="space-y-1.5">
                        {tea.schemes.map((scheme, i) => (
                          <li
                            key={i}
                            className="text-sm text-tea-dark flex items-start gap-2"
                          >
                            <span className="text-tea-gold mt-0.5 shrink-0">
                              &#9679;
                            </span>
                            {scheme}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Order button - big and tappable */}
                  <a
                    href={`https://wa.me/917218973243?text=${encodeURIComponent(tea.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded-full active:scale-95 transition-transform"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Owner Section */}
      <section className="bg-tea-cream px-4 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <div className="text-center mb-6">
              <p className="text-tea-brown/60 text-sm font-semibold uppercase tracking-wide mb-1">
                Owner
              </p>
              <h3 className="text-2xl font-bold text-tea-dark">
                इंद्रायणी रांदिवे
              </h3>
            </div>

            <div className="space-y-4 text-base text-tea-brown/80">
              <div className="flex items-start gap-3">
                <LocationIcon />
                <p>A/P सांगली, महाराष्ट्र, भारत — 416305</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 shrink-0" />
                <a
                  href="tel:+917218973243"
                  className="hover:text-tea-dark transition-colors"
                >
                  +917218973243
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  href="mailto:randiveshubham3@gmail.com"
                  className="hover:text-tea-dark transition-colors break-all"
                >
                  randiveshubham3@gmail.com
                </a>
              </div>
            </div>

            {/* Big contact buttons */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+917218973243"
                className="flex items-center justify-center gap-3 bg-tea-brown text-white font-bold py-4 rounded-full text-lg active:scale-95 transition-transform"
              >
                <PhoneIcon className="w-5 h-5" />
                Call
              </a>
              <a
                href="https://wa.me/917218973243?text=नमस्कार%2C%20मला%20चहा%20पावडर%20बद्दल%20माहिती%20हवी%20आहे"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 text-white font-bold py-4 rounded-full text-lg active:scale-95 transition-transform"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gradient-to-b from-tea-dark to-tea-brown text-white px-4 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            इंद्रायणी चहाची <span className="text-tea-gold">गोष्ट</span>
          </h2>

          <div className="space-y-6 text-white/85 text-lg leading-relaxed">
            <p>
              असामच्या ब्रह्मपुत्रा खोऱ्यात, जिथे धुकं आणि पाऊस यांची सतत
              सोबत असते, तिथल्या सर्वोत्तम चहाच्या बागांमध्ये इंद्रायणीची गोष्ट
              सुरू होते.
            </p>
            <p>
              पहाटेच्या थंड हवेत कुशल हातांनी दोन कोवळी पानं आणि एक कळी
              खुडली जाते. हीच असामची खासियत — या मातीत, या पाण्यात आणि या
              उन्हात तयार झालेली पानं जगात इतरत्र कुठेही मिळत नाहीत.
            </p>
            <p>
              ती पानं वाळवली जातात, दाबली जातात, ऑक्सिडेशनमधून जातात — आणि
              मग तयार होतो तो सोनेरी-तांबूस रंगाचा, सुगंधी, गाढ चहा.
              असामपासून सांगलीपर्यंतचा हा प्रवास म्हणजेच इंद्रायणी चहाची
              ओळख.
            </p>
            <p>
              संजय गाताडे टी कंपनीच्या माध्यमातून, इंद्रायणी रांदिवे यांनी हा
              दर्जेदार चहा थेट तुमच्या घरापर्यंत आणला आहे. प्रत्येक कप
              म्हणजे असामच्या बागांचं, इथल्या मातीचं आणि आमच्या कुटुंबाच्या
              प्रेमाचं प्रतिबिंब.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-tea-gold">5+</div>
              <div className="text-white/60 text-sm mt-1">Tea Varieties</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-tea-gold">100%</div>
              <div className="text-white/60 text-sm mt-1">Pure & Natural</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl sm:text-3xl font-bold text-tea-gold">असाम</div>
              <div className="text-white/60 text-sm mt-1">Premium Leaves</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tea-dark text-white/60 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg font-bold text-white mb-1">
            संजय गाताडे टी कंपनी
          </p>
          <p className="text-sm mb-4">सांगली, महाराष्ट्र</p>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button - large for easy tapping */}
      <a
        href="https://wa.me/917218973243?text=नमस्कार%2C%20मला%20चहा%20पावडर%20बद्दल%20माहिती%20हवी%20आहे"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-2xl active:scale-95 transition-transform z-50"
        aria-label="WhatsApp वर संपर्क करा"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </a>
    </>
  );
}
