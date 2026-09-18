
import { motion } from "framer-motion";

import achyutNaamPrabhu from "../assets/leaders/hgAchyutnaamPrabhuji.png";
import avatar from "../assets/leaders/avatar.png";
import istadevaPrabhu from "../assets/leaders/hgIstadevaPrabhuji.png";
import nitaichandraNimaiPrabhu from "../assets/leaders/hgNitaichandraNimaiPrabhu.png";
import somapatiPrabhu from "../assets/leaders/hgSomapatiPrabhuji.png";
import subekshanaPrabhu from "../assets/leaders/hgSubekshanaPrabhu.png";
import tirthangaNitaiPrabhu from "../assets/leaders/hgTirthangaNitaiPrabhu.png";


// ============================================================
// LEADERS DATA
// ============================================================

const leaders = {
  director: {
    name: "His Grace Subhekshna Prabhu",
    role: "Co-Director",
    image: subekshanaPrabhu,
  },

  advisor: {
    name: "His Grace Tirthanga Nitai Prabhu",
    role: "Chief Advisor",
    image: tirthangaNitaiPrabhu,
  },

  chairman: {
    name: "HG Nitaichandra Nimai Prabhu",
    role: "Chairman",
    image: nitaichandraNimaiPrabhu,
  },

  secretary: {
    name: "His Grace Achyut Nam Das",
    role: "Secretary",
    image: achyutNaamPrabhu,
  },

  executiveSecretary: {
    name: "His Grace Istadeva Gopal Das",
    role: "Executive Secretary",
    image: istadevaPrabhu,
  },

  educationalCoordinator: {
    name: "His Grace Somapati Prabhu",
    role: "Educational Coordinator",
    image: somapatiPrabhu,
  },

  centralExecutiveSecretary: {
    name: "Suvilas Vrajahari Prabhu",
    role: "Central Executive Secretary",
    image: avatar,
  },

  teamMember: {
    name: "Bh. Keshav",
    role: "Team Member",
    image: avatar,
  },
};


// ============================================================
// ANIMATION VARIANTS
// ============================================================

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.94,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const lineVariants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },

  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


// ============================================================
// LEADER CARD
// ============================================================

function LeaderCard({ leader, featured = false }) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.25,
      }}
      whileHover={{
        y: -7,
        transition: {
          duration: 0.25,
        },
      }}
      className={`
        group
        relative
        w-full
        ${featured ? "max-w-lg" : "max-w-md"}
        bg-[#FFFDF9]
        border border-amber-200/70
        rounded-2xl
        p-5 sm:p-6
        flex items-center gap-5
        shadow-[0_10px_35px_rgba(120,80,20,0.07)]
        hover:shadow-[0_18px_50px_rgba(120,80,20,0.14)]
        transition-shadow duration-500
      `}
    >

      {/* ------------------------------------------------------
          Hover glow
      ------------------------------------------------------ */}

      <div
        className="
          absolute
          inset-0
          rounded-2xl
          bg-amber-200/20
          blur-2xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        "
      />


      {/* ------------------------------------------------------
          Portrait
      ------------------------------------------------------ */}

      <div
        className={`
          relative
          shrink-0
          ${featured ? "w-28 h-28 sm:w-32 sm:h-32" : "w-24 h-24 sm:w-28 sm:h-28"}
          rounded-full
          p-[3px]
          bg-gradient-to-br
          from-amber-400
          via-amber-100
          to-amber-500
          shadow-[0_5px_20px_rgba(180,120,20,0.18)]
        `}
      >

        {/* Outer glow */}
        <div
          className="
            absolute
            inset-[-5px]
            rounded-full
            bg-amber-300/20
            blur-md
            opacity-60
          "
        />

        <div
          className="
            relative
            w-full
            h-full
            rounded-full
            overflow-hidden
            bg-stone-100
          "
        >
          <img
            src={leader.image}
            alt={leader.name}
            loading="lazy"
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      </div>


      {/* ------------------------------------------------------
          Details
      ------------------------------------------------------ */}

      <div className="relative z-10 min-w-0">

        <h3
          className={`
            font-serif
            font-semibold
            text-stone-900
            leading-tight
            ${featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}
          `}
        >
          {leader.name}
        </h3>

        <div className="flex items-center gap-2 mt-2">

          <span className="w-5 h-[1px] bg-amber-400" />

          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.16em]
              text-amber-700
              font-semibold
            "
          >
            {leader.role}
          </p>

        </div>

      </div>
    </motion.article>
  );
}


// ============================================================
// CONNECTING VERTICAL LINE
// ============================================================

function VerticalLine({ height = "h-16" }) {
  return (
    <motion.div
      variants={lineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.4,
      }}
      className={`
        ${height}
        w-px
        bg-gradient-to-b
        from-amber-300
        via-amber-500/70
        to-amber-300
        origin-top
      `}
    />
  );
}


// ============================================================
// GOLDEN NODE
// ============================================================

function GoldenNode() {
  return (
    <div
      className="
        relative
        z-20
        w-3
        h-3
        rounded-full
        bg-amber-500
        border-2
        border-[#FFFDF9]
        shadow-[0_0_0_4px_rgba(245,158,11,0.15)]
      "
    />
  );
}


// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Leaders() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFFDF9]
        px-5
        py-20
        sm:px-8
        md:px-12
        lg:px-24
        md:py-28
      "
      aria-labelledby="leaders-heading"
    >

      {/* ======================================================
          BACKGROUND DECORATION
      ====================================================== */}

      {/* Main golden backlight */}
      <div
        className="
          absolute
          top-32
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[450px]
          rounded-full
          bg-amber-200/20
          blur-[130px]
          pointer-events-none
        "
      />

      {/* Secondary glow */}
      <div
        className="
          absolute
          right-[-150px]
          top-[45%]
          w-[350px]
          h-[350px]
          rounded-full
          bg-yellow-200/15
          blur-[100px]
          pointer-events-none
        "
      />

      {/* Decorative dots */}
      <div className="absolute top-32 left-[8%] w-2 h-2 rounded-full bg-amber-400/50" />
      <div className="absolute top-40 left-[10%] w-1 h-1 rounded-full bg-amber-500/40" />

      <div className="absolute top-[35%] right-[8%] w-2 h-2 rounded-full bg-amber-400/50" />
      <div className="absolute top-[37%] right-[10%] w-1 h-1 rounded-full bg-amber-500/40" />


      {/* ======================================================
          INTRO
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          max-w-2xl
          mx-auto
          text-center
          mb-16
          md:mb-20
        "
      >

        {/* Eyebrow */}

        <div className="flex items-center justify-center gap-3 mb-5">

          <span className="w-12 h-px bg-amber-400/70" />

          <p
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.3em]
              text-amber-700
              font-semibold
            "
          >
            The people behind the mission
          </p>

          <span className="w-12 h-px bg-amber-400/70" />

        </div>


        {/* Ornament */}

        <div className="text-amber-500 text-sm mb-3">
          ✦
        </div>


        {/* Heading */}

        <h2
          id="leaders-heading"
          className="
            relative
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-semibold
            text-stone-900
            leading-tight
          "
        >
          Our{" "}
          <span className="italic font-normal text-amber-600">
            Leadership
          </span>

          {/* Heading glow */}
          <span
            className="
              absolute
              inset-0
              -z-10
              bg-amber-200/20
              blur-3xl
            "
          />
        </h2>


        <p
          className="
            mt-5
            text-sm
            sm:text-base
            leading-relaxed
            text-stone-600
            max-w-xl
            mx-auto
          "
        >
          Guided by experienced leaders and dedicated servants,
          IYF Mayapur is committed to nurturing the spiritual and
          educational growth of the youth.
        </p>

      </motion.div>


      {/* ======================================================
          HIERARCHY
      ====================================================== */}

      <div className="relative z-10 max-w-6xl mx-auto">


        {/* ====================================================
            LEVEL 1 — CO-DIRECTOR
        ==================================================== */}

        <div className="flex flex-col items-center">

          <LeaderCard
            leader={leaders.director}
            featured
          />

          <GoldenNode />

          <VerticalLine height="h-14" />

        </div>


        {/* ====================================================
            LEVEL 2 — CHIEF ADVISOR
        ==================================================== */}

        <div className="flex flex-col items-center">

          <LeaderCard
            leader={leaders.advisor}
            featured
          />

          <GoldenNode />

          <VerticalLine height="h-14" />

        </div>


        {/* ====================================================
            LEVEL 3 — CHAIRMAN
        ==================================================== */}

        <div className="flex flex-col items-center">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Chairman backlight */}
            <div
              className="
                absolute
                inset-[-25px]
                rounded-full
                bg-amber-300/20
                blur-3xl
              "
            />

            <LeaderCard
              leader={leaders.chairman}
              featured
            />

          </motion.div>

          <GoldenNode />

          <VerticalLine height="h-16" />

        </div>


        {/* ====================================================
            LEVEL 4 — SECRETARIAT
        ==================================================== */}

        <div className="relative">

          {/* Desktop horizontal connector */}

          <div
            className="
              hidden
              md:block
              absolute
              top-0
              left-[25%]
              right-[25%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-amber-400/70
              to-transparent
            "
          />

          {/* Center vertical node */}

          <div
            className="
              hidden
              md:block
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <GoldenNode />
          </div>


          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
              md:gap-16
              max-w-4xl
              mx-auto
            "
          >

            {/* Secretary */}

            <div className="relative flex justify-center pt-6">

              {/* vertical connector */}
              <div
                className="
                  hidden
                  md:block
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  h-6
                  w-px
                  bg-amber-400/70
                "
              />

              <LeaderCard leader={leaders.secretary} />

            </div>


            {/* Executive Secretary */}

            <div className="relative flex justify-center pt-6">

              {/* vertical connector */}
              <div
                className="
                  hidden
                  md:block
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  h-6
                  w-px
                  bg-amber-400/70
                "
              />

              <LeaderCard
                leader={leaders.executiveSecretary}
              />

            </div>

          </div>

        </div>


        {/* ====================================================
            LEVEL 5 — COORDINATION TEAM
        ==================================================== */}

        <div className="relative mt-12">

          {/* Connecting line */}

          <div
            className="
              hidden
              md:block
              absolute
              top-0
              left-[16.66%]
              right-[16.66%]
              h-px
              bg-gradient-to-r
              from-transparent
              via-amber-300
              to-transparent
            "
          />

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              max-w-5xl
              mx-auto
            "
          >

            <div className="relative pt-5 flex justify-center">

              <div
                className="
                  hidden
                  lg:block
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  h-5
                  w-px
                  bg-amber-300
                "
              />

              <LeaderCard
                leader={leaders.educationalCoordinator}
              />

            </div>


            <div className="relative pt-5 flex justify-center">

              <div
                className="
                  hidden
                  lg:block
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  h-5
                  w-px
                  bg-amber-300
                "
              />

              <LeaderCard
                leader={leaders.centralExecutiveSecretary}
              />

            </div>


            <div className="relative pt-5 flex justify-center">

              <div
                className="
                  hidden
                  lg:block
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  h-5
                  w-px
                  bg-amber-300
                "
              />

              <LeaderCard
                leader={leaders.teamMember}
              />

            </div>

          </div>

        </div>


        {/* ====================================================
            BOTTOM ORNAMENT
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 1,
          }}
          className="
            flex
            items-center
            justify-center
            gap-4
            mt-16
          "
        >

          <span className="w-20 h-px bg-amber-300/60" />

          <span className="text-amber-500 text-sm">
            ✦
          </span>

          <span className="w-20 h-px bg-amber-300/60" />

        </motion.div>

      </div>

    </section>
  );
}
// ```

// ### Visual hierarchy

// The resulting structure is intentionally:

// ```text
//                     ✦
//                     │
//           ┌─────────────────────┐
//           │     CO-DIRECTOR     │
//           │ Subhekshna Prabhu   │
//           └─────────────────────┘
//                     │
//                     ●
//                     │
//           ┌─────────────────────┐
//           │    CHIEF ADVISOR    │
//           │ Tirthanga Nitai     │
//           └─────────────────────┘
//                     │
//                     ●
//                     │
//           ┌─────────────────────┐
//           │      CHAIRMAN       │
//           │ Nitaichandra Nimai  │
//           └─────────────────────┘
//                     │
//                     ●
//               ──────┴──────
//              /             \
//             /               \
//      SECRETARY        EXECUTIVE SECRETARY
//           │                   │
//           └─────────┬─────────┘
//                     │
//              ───────┼───────
//              /      │       \
//             /       │        \
//            /        │         \
//     EDUCATIONAL   CENTRAL    TEAM
//     COORDINATOR   EXECUTIVE  MEMBER
//                  SECRETARY
// ```

// One detail: I've kept **Co-Director → Chief Advisor → Chairman** as the explicit top-to-bottom hierarchy you specified, while treating the remaining roles as the operational team branching beneath the Chairman rather than assigning an additional authority relationship that you haven't specified.
