"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const MotionImage = motion.create(Image);
const WhyUsContent = () => {
  const DivStyle = "my-4 flex flex-col lg:flex-row items-center gap-10";

  const animate = {
    viewport: { once: true, amount: 0.5 },
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };
  const ImageAnimate = {
    viewport: {
      once: true,
      amount: 0.5,
    },
    initial: {
      opacity: 0,
      y: 20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 0.5 },
  };

  return (
    <section className="flex flex-col justify-evenly space-y-32 h-fit select-text cursor-default px-5 lg:px-20 py-10">
      <section className={DivStyle}>
        <div className="w-full lg:w-2/4">
          <motion.h2 {...animate} className="mb-3">
            STEM <span className="mark"> Egypt </span> Hack Club
          </motion.h2>
          <motion.p {...animate} className="ml-4">
            At STEM Egypt Hack Club, we are a welcoming Egyptian and Arabian
            communities of fellow makers, aspiring engineers, and outstanding
            computer scientists in the
            <b> boot camp </b>! The opportunity to interact with other students
            interested in technology is undoubtedly the most valuable perk.
            <i> Hack Club </i> is a fantastic social setting that is educational
            and enjoyable.
          </motion.p>
        </div>
        <MotionImage
          {...ImageAnimate}
          alt="Oragnizers"
          src="/KEP_1808.jpg"
          width={1000}
          height={1000}
          className="h-96 object-cover rounded-2xl w-full lg:w-2/4"
        />
      </section>

      <section className={DivStyle}>
        <MotionImage
          {...ImageAnimate}
          alt="Oragnizers"
          src="/Opening Ceremony 1.png"
          width={1000}
          height={1000}
          className="h-96 object-cover rounded-2xl w-full lg:w-2/4"
        />
        <div className="w-full lg:w-2/4">
          <motion.h2 {...animate} className="mb-3">
            Our annual <span className="mark"> Bootcamp </span>
          </motion.h2>
          <motion.p {...animate} className="ml-4">
            Our<b> Annual Bootcamp , </b>, held in August or September, is open
            to students from Egypt and the Arab world. It provides a strong
            foundation in
            <b>
              {" "}
              Competitive Programming, Cybersecurity, Game Development, and App
              Development{" "}
            </b>
            By the end of the bootcamp, participants create their own projects
            in their chosen fields. All attendees receive certificates, with top
            performers earning special prizes.
          </motion.p>
        </div>
      </section>

      <section className={DivStyle}>
        <div className="w-full lg:w-2/4">
          <motion.h2 {...animate} className="mb-3">
            Final <span className="mark"> Projects </span>{" "}
          </motion.h2>
          <motion.p {...animate} className="ml-4">
            We foster a collaborative community of coders and makers, guiding
            them to apply their skills in a final group project. Members are
            grouped within their tracks to enhance teamwork, culminating in
            evaluations and presentations that refine their technical and
            communication skills. Explore these projects and more in Projects
            Section. (will be hyperlink to the section of projects)
          </motion.p>
        </div>
        <MotionImage
          {...ImageAnimate}
          alt="Oragnizers"
          src="/Hackathons/scrapyard/KEP_1888.jpg"
          width={1000}
          height={1000}
          className="h-96 object-cover rounded-2xl w-full lg:w-2/4"
        />
      </section>

      <section className={DivStyle}>
        <MotionImage
          {...ImageAnimate}
          alt="Oragnizers"
          src="/images/Members-pictures/pic2.jpg"
          width={1000}
          height={1000}
          className="h-96 object-cover rounded-2xl w-full lg:w-2/4"
        />
        <div className="w-full lg:w-2/4">
          <motion.h2 {...animate} className="mb-3">
            {" "}
            Hackathons and <span className="mark"> Events </span>{" "}
          </motion.h2>
          <motion.p {...animate} className="ml-4">
            Every season we do two hackathons: a project hackathon
            <i> (online) </i>
            and a competitive programming hackathon
            <i> (in-person) </i>. These hackathons help the young coders be
            ready for the final project and look inside at what they will see in
            the final project. In addition, they help in letting them know what
            the environment is like in the
            <b> Egyptian and International Olympiads of Informatics </b>.
          </motion.p>
        </div>
      </section>

      <section className={DivStyle}>
        <div className="w-full lg:w-2/4">
          <motion.h2 {...animate} className="mb-3">
            Members <span className="mark">Arts</span>{" "}
          </motion.h2>
          <motion.p {...animate} className="ml-4">
            As we do not want to keep the
            <i> limits </i> to computer science and coding to these creative
            young students, we offer any member to share their graphic design
            skills in front of the community and teach how they do these pieces
            of designs.
          </motion.p>
        </div>

        <MotionImage
          {...ImageAnimate}
          alt="Oragnizers"
          src="/Hackathons/scrapyard/KEP_1929.jpg"
          width={1000}
          height={1000}
          className="h-96 object-cover rounded-2xl w-full lg:w-2/4"
        />
      </section>

      <section className={DivStyle}>
        <MotionImage
          {...ImageAnimate}
          alt="Oragnizers"
          src="/images/Members-pictures/bro with laptop.jpg"
          width={1000}
          height={1000}
          className="h-96 object-cover rounded-2xl w-full lg:w-2/4"
        />
        <div className="w-full lg:w-2/4">
          <motion.h2 {...animate} className="mb-3">
            Articles & Research <span className="mark"> Projects </span>{" "}
          </motion.h2>
          <motion.p {...animate} className="ml-4">
            As we expect more from each maker in the club, we offered them
            something that makes
            <b> STEM Egypt Hack Club </b> unique from any other branch: doing a
            research project or writing an article related to computer science,
            <i> not just a Python file as a final project </i>. They can submit
            a manuscript to be featured on our website and approved and edited
            by our mentors who did many other research projects in top-notch
            programs
            <b>
              <i> (e.g., pioneer research program) </i>
            </b>
            . We also review their work to ensure that our content satisfies our
            high standards for other
            <b> readers </b>.
          </motion.p>
        </div>
      </section>

      {/* <section className={DivStyle}>
        <div className="w-full lg:w-2/4">
          <motion.h2 {...animate} className="mb-3">
            {" "}
            Code Of Conduct
          </motion.h2>
          <h3>Treat everyone with respect and kindness.</h3>
          <h3>Be thoughtful in how you communicate.</h3>
          <h3>Don't be destructive or inflammatory.</h3>
          <motion.h2 {...animate} className="mb-3">
            <a href="https://hackclub.com/conduct/" target="_blank">
              For more information...
            </a>
          </motion.h2>
        </div>
        <MotionImage
          {...ImageAnimate}
          alt="Oragnizers"
          src="/KEP_1808.jpg"
          width={1000}
          height={1000}
          className="h-96 object-cover rounded-2xl w-full lg:w-2/4"
        />
      </section> */}
    </section>
  );
};

export default WhyUsContent;
