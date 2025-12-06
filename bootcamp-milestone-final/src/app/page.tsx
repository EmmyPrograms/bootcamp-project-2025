/*
 Homepage for personal website. Has a short introduction
 @author Amelia Harris
 @version 2.0
*/

export default function Home() {
  return (
    <div className="flex justify-start max-w-5xl mx-auto mt-12 ">
      <div className="about-image">
        <img
          src="/California-Poppies.webp"
          alt="California Poppies"
          width="600px"
          height="700px"
          className="rounded-3xl animate-floatUp shadow-lg left-0"
        />
      </div>
      <div className=" absolute top-1/3 right-40 panel">
        <h3 className="text‑secondary font-semibold text-xl leading‑snug">
          Hi! I'm Amelia
        </h3>
        <p className="text-base leading-relaxed">
          I’m a current Junior Software Engineering Major at Cal Poly. I'm
          passionate about full-stack development, and have interests in quantum
          mechanics, mathematics, and making an impact with my work. I love a
          good challenge and I’m driven to create innovative software. I’m
          proficient in a wide range of programming languages/concepts with
          excellent communication and an innate ability to solve problems
          creatively. Currently, I'm focusing on expanding my experience within
          software development and I'm on the hunt for new opportunities to
          learn and grow. Outside the classroom I'm learning Quantitative
          Finance in the Cal Poly Quantitative Finance Club, tutoring my peers
          in a variety of STEM coursework, thrifting with the Cal poly
          Sustainability Club, and connecting with others like me who are
          enthusiastic about technology, innovative solutions, and science.
        </p>
      </div>

      <footer className="footer text-center">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
