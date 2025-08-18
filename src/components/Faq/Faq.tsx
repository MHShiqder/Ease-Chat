interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does the co-ownership work?",
    answer:
      "When a seller enables the 'Buy a Share' option, interested buyers can express interest in purchasing a portion of the property. Once 5 buyers join, a private group chat is unlocked for all parties to discuss details. You'll need to be on our 'Buy a Share' plan ($99 for 3 months or $399/year) to participate."
  },
  {
    question: "What happens if a co-buying group doesn’t form within 90 days?",
    answer:
      "If the required number of buyers isn’t reached within 90 days, the group purchase will be canceled, and no transaction will take place. Any fees or deposits will be refunded according to our policy."
  },
  {
    question: "How do I become a verified seller?",
    answer:
      "To become a verified seller, go to 'My Account' → 'Edit Profile' and submit your identification and proof of property ownership. Our team will review and approve your verification within 1–3 business days."
  },
  {
    question: "How do I become a verified buyer?",
    answer:
      "To verify your buyer status, complete your profile information, provide identification, and agree to our terms. This ensures sellers can trust your commitment to purchasing."
  },
  {
    question: "What happens if a co-buying group doesn’t form within 90 days?",
    answer:
      "If the group fails to form in 90 days, your participation request will expire, and you’ll be notified. You can join other active listings or wait for the same property to be relisted."
  }
];

export default function Faq() {
  return (
    <section className="bg-primary mx-32 rounded-lg py-20 px-44 mb-20">
      <header className="pb-12">
        <h1 className="text-white font-semibold mb-6 text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="montserrat-font text-lg text-white">
          Find answers to common questions about our platform.
        </p>
      </header>

      <div>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-100 border border-base-300 p-4 pb-0 mb-5 last:mb-0"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={index === 0}
            />
            <div className="collapse-title font-semibold text-xl px-0">
              {item.question}
            </div>
            <div className="collapse-content  font-light text-xl montserrat-font border-t-2 pt-2 border-black px-0">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
