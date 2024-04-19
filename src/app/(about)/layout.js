import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "20+ Projects Completed",
    "1+ Years of Freelancing",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
