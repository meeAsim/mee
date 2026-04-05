import { useState, useEffect } from "react";

export default function Survey() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState<"np" | "en">("np");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // ✅ Detect submitted from URL
    setSubmitted(params.get("submitted") === "true");

    const name = params.get("name");
    // You can use `name` if needed
  }, []);

  const text = {
    np: {
      title: (
        <span>
          यो सर्वेक्षण{" "}
          <span className="text-2xl font-display font-bold text-red-400 tracking-wide">
            Mee<span className="text-primary">.</span>
          </span>{" "}
          द्वारा सञ्चालित छ।
        </span>
      ),
      desc: "कृपया अगाडि बढ्नु अघि यो सर्वेक्षणमा सहभागी हुन सहमति दिनुहोस्।",
      agree: "म यो सर्वेक्षणमा सहभागी हुन सहमत छु",
      proceed: "सर्वेक्षण सुरु गर्नुहोस्",
      thank: "धन्यवाद",
      thankDesc: "हाम्रो सर्वेक्षणमा सहभागी भईदिनुभएकोमा हार्दिक धन्यवाद। तपाईंले दिनुभएको समय र महत्वपूर्ण सुझावहरूको हामी उच्च कदर गर्दछौं। तपाईंको योगदानले हाम्रो काम सुधार गर्न महत्वपूर्ण सहयोग पुर्‍याउनेछ।",
      chooseLang: "भाषा छान्नुहोस्",
    },
    en: {
      title: (
        <span>
          This Survey powered by{" "}
          <span className="text-2xl font-display font-bold text-red-400 tracking-wide">
            Mee<span className="text-primary">.</span>
          </span>
        </span>
      ),
      desc: "Please acknowledge before proceeding to the survey.",
      agree: "I agree to participate in this survey",
      proceed: "Proceed to Survey",
      thank: "Thank you",
      thankDesc: "Thank you for your participation in our survey. We truly appreciate the time and effort you took to share your valuable insights. Your contribution is important to us and will help us improve our work.",
      chooseLang: "Choose Language",
    },
  };

  const t = text[language];

  const handleProceed = () => {
    const surveyLinks: Record<"np" | "en", string> = {
      np: "https://forms.gle/3kbAERwvn5px6WkD8",
      en: "https://forms.gle/3kbAERwvn5px6WkD8",
    };

    window.location.href = surveyLinks[language];
  };

  // ✅ Show ONLY thank you screen if submitted=true
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-6">
        <div className="max-w-lg w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center shadow-xl">
          <div className="flex flex-col mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="text-4xl font-display font-bold text-foreground tracking-wide"
          >
            Mee<span className="text-primary">.</span>
          </a>

          <span className="hidden sm:block text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
            Digital Ads and Marketing
          </span>
        </div>
          <h1 className="text-lg font-bold mb-4">
            {t.thank} ! 🎉
          </h1>
          <p className="text-gray-400">{t.thankDesc}</p>

          {/* Optional: Go back home */}
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
          >
            Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        {/* Logo */}
        <div className="flex flex-col mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="text-2xl font-display font-bold text-foreground tracking-wide"
          >
            Mee<span className="text-primary">.</span>
          </a>

          <span className="hidden sm:block text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
            Digital Ads and Marketing
          </span>
        </div>

        {/* Language selector */}
        <div className="mb-6">
          <p className="text-gray-400 mb-2">{t.chooseLang}</p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setLanguage("np")}
              className={`px-4 py-2 rounded ${
                language === "np" ? "bg-purple-600" : "bg-gray-700"
              }`}
            >
              नेपाली
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded ${
                language === "en" ? "bg-purple-600" : "bg-gray-700"
              }`}
            >
              English
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">{t.title}</h1>

        <p className="text-gray-400 mb-6">{t.desc}</p>

        <label className="flex items-center gap-2 justify-center mb-6">
          <input
            type="checkbox"
            onChange={(e) => setAgreed(e.target.checked)}
          />
          {t.agree}
        </label>

        <button
          disabled={!agreed}
          onClick={handleProceed}
          className={`px-6 py-3 rounded-lg ${
            agreed
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          {t.proceed}
        </button>
      </div>
    </div>
  );
}