// components/TechMarquee.tsx
import TechStackIcon from "./TechStackIcon";
import styles from "./TechMarquee.module.css";

const ROW1 = [
  { src: "/tech-icons/python.svg", alt: "python", name: "Python" },
  { src: "/tech-icons/javascript.svg", alt: "javascript", name: "Javascript" },
  { src: "/tech-icons/typescript.svg", alt: "typescript", name: "Typescript" },
  { src: "/tech-icons/cpp.svg", alt: "cplusplus", name: "C++" },
  { src: "/tech-icons/react.svg", alt: "react", name: "React" },
  {
    src: "/tech-icons/react-native.svg",
    alt: "react-native",
    name: "React Native",
  },
  { src: "/tech-icons/nodejs.svg", alt: "nodejs", name: "NodeJs" },
  { src: "/tech-icons/nextjs.svg", alt: "nextjs", name: "Next.js" },
  { src: "/tech-icons/firebase.svg", alt: "firebase", name: "Firebase" },
];

const ROW2 = [
  { src: "/tech-icons/aws.svg", alt: "aws", name: "AWS" },
  { src: "/tech-icons/fastapi.svg", alt: "fastapi", name: "FastAPI" },
  {
    src: "/tech-icons/tailwindcss.svg",
    alt: "tailwindcss",
    name: "Tailwind CSS",
  },
  { src: "/tech-icons/git.svg", alt: "git", name: "Git" },
  { src: "/tech-icons/mongodb.svg", alt: "mongodb", name: "MongoDB" },
  { src: "/tech-icons/pytorch.svg", alt: "pytorch", name: "PyTorch" },
  { src: "/tech-icons/pandas.svg", alt: "pandas", name: "Pandas" },
  { src: "/tech-icons/scikit-learn.svg", alt: "scikit-learn", name: "Scikit-learn" },
  { src: "/tech-icons/streamlit.svg", alt: "streamlit", name: "Streamlit" },
];

export default function TechMarquee() {
  return (
    <section className="max-w-full mx-auto">
      {/* Row 1 */}
      <div className={`${styles.marquee}`}>
        <div className={`${styles.track} ${styles["animate-left"]}`}>
          {[...ROW1, ...ROW1].map((t, i) => (
            <div className={styles.item} key={`row1-${i}`}>
              <TechStackIcon src={t.src} alt={t.alt} name={t.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className={`${styles.marquee} mt-4`}>
        <div className={`${styles.track} ${styles["animate-right"]}`}>
          {[...ROW2, ...ROW2].map((t, i) => (
            <div className={styles.item} key={`row2-${i}`}>
              <TechStackIcon src={t.src} alt={t.alt} name={t.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}