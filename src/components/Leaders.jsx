import { motion } from "framer-motion";

import achyutNaamPrabhu from "../assets/leaders/hgAchyutnaamPrabhuji.png";
import avatar from "../assets/leaders/avatar.png";
import istadevaPrabhu from "../assets/leaders/hgIstadevaPrabhuji.png";
import nitaichandraNimaiPrabhu from "../assets/leaders/hgNitaichandraNimaiPrabhu.png";
import somapatiPrabhu from "../assets/leaders/hgSomapatiPrabhuji.png";
import subekshnaPrabhu from "../assets/leaders/hgSubekshanaPrabhu.png";
import tirthangaNitaiPrabhu from "../assets/leaders/hgTirthangaNitaiPrabhu.png";

//singular icons
import guiding from "../assets/leaders/icon-png/guiding_the_mission.png"
import wisdom from "../assets/leaders/icon-png/wisdom.png"
import steering from "../assets/leaders/icon-png/driving_the_mission.png"
import leading from "../assets/leaders/icon-png/leading_the_mission.png"
import turning from "../assets/leaders/icon-png/turning_vision_to_action.png"
import cultivating from "../assets/leaders/icon-png/education.png"
import connecting from "../assets/leaders/icon-png/connecting_the_mission.png"
import serving from "../assets/leaders/icon-png/serving.png"

// ============================================================
// LEADERS DATA
// ============================================================

const leaders = {
  director: {
    name: "His Grace Subhekshna Prabhu",
    role: "Co-Director",
    singular: "Guiding the Mission",
    image: subekshnaPrabhu,
    singularIcon: guiding,
  },

  advisor: {
    name: "His Grace Tirthanga Nitai Prabhu",
    role: "Chief Advisor",
    singular: "Offering Wisdom & Direction",
    image: tirthangaNitaiPrabhu,
    singularIcon: wisdom,
  },

  chairman: {
    name: "HG Nitaichandra Nimai Prabhu",
    role: "Chairman",
    singular: "Steering the Vision",
    image: nitaichandraNimaiPrabhu,
    singularIcon: steering,
  },

  secretary: {
    name: "His Grace Achyut Nam Das",
    role: "Secretary",
    singular: "Leading the Mission Forward",
    image: achyutNaamPrabhu,
    singularIcon: leading,
  },

  executiveSecretary: {
    name: "His Grace Istadeva Gopal Das",
    role: "Executive Secretary",
    singular: "Turning Vision into Action",
    image: istadevaPrabhu,
    singularIcon: turning,
  },

  educationalCoordinator: {
    name: "His Grace Somapati Prabhu",
    role: "Educational Coordinator",
    singular: "Cultivating Knowledge & Growth",
    image: somapatiPrabhu,
    singularIcon: cultivating,
  },

  centralExecutiveSecretary: {
    name: "Suvilas Vrajahari Prabhu",
    role: "Central Executive Secretary",
    singular: "Connecting the Mission",
    image: avatar,
    singularIcon: connecting,
  },

  teamMember: {
    name: "Bh. Keshav",
    role: "Team Member",
    singular: "Serving the Mission",
    image: avatar,
    singularIcon: serving,
  },
};

// ============================================================
// ANIMATION CONFIG
// ============================================================

const headingTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

const springTransition = {
  type: "spring",
  stiffness: 70,
  damping: 19,
  mass: 0.9,
};

// ============================================================
// SINGULAR ICON
// ============================================================

function SingularIcon({
  src,
  alt,
  variant = "featured",
}) {
  if (!src) return null;

  const isFeatured = variant === "featured";

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.82,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.12,
      }}
      className={`
        relative
        flex
        shrink-0
        items-center
        justify-center
        ${
          isFeatured
            ? "h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44"
            : "h-20 w-20 sm:h-24 sm:w-24"
        }
      `}
    >
      {/* Soft glow */}
      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-amber-300/20
          blur-2xl
        "
      />

      {/* Decorative ring */}
      <div
        className="
          absolute
          inset-1
          rounded-full
          border
          border-amber-300/50
          bg-gradient-to-br
          from-amber-50
          via-white
          to-amber-100/70
          shadow-[0_10px_35px_rgba(180,120,20,0.12)]
        "
      />

      {/* Inner ring */}
      <div
        className="
          absolute
          inset-3
          rounded-full
          border
          border-amber-200/40
        "
      />

      <img
        src={src}
        alt={alt}
        className={`
          relative
          z-10
          object-contain
          ${
            isFeatured
              ? "h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36"
              : "h-14 w-14 sm:h-16 sm:w-16"
          }
          transition-transform
          duration-500
          group-hover:scale-105
        `}
      />
    </motion.div>
  );
}


// ============================================================
// SECTION HEADING
// ============================================================

function SectionHeader({
  eyebrow,
  title,
  description,
  compact = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={headingTransition}
      className={`
        relative
        z-20
        mx-auto
        max-w-3xl
        px-5
        text-center
        ${compact ? "mb-8 md:mb-10" : "mb-10 md:mb-12"}
      `}
    >
      {/* Eyebrow */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scaleX: 1,
        }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
        transition={{
          ...headingTransition,
          delay: 0.05,
        }}
        className="flex items-center justify-center gap-3 mb-4"
      >
        <span className="w-10 sm:w-12 h-px bg-amber-400/70" />

        <p
          className="
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[0.28em]
            text-amber-700
            font-semibold
          "
        >
          {eyebrow}
        </p>

        <span className="w-10 sm:w-12 h-px bg-amber-400/70" />
      </motion.div>

      {/* Ornament */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 0.5,
          delay: 0.12,
        }}
        className="text-amber-500 text-sm mb-3"
      >
        ✦
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
        transition={{
          ...headingTransition,
          delay: 0.12,
        }}
        className="
          font-serif
          text-4xl
          sm:text-5xl
          md:text-6xl
          font-semibold
          leading-[1.05]
          text-stone-900
        "
      >
        {title}
      </motion.h2>

      {/* Description */}

      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            ...headingTransition,
            delay: 0.2,
          }}
          className="
            mt-4
            text-sm
            sm:text-base
            leading-relaxed
            text-stone-600
          "
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

// ============================================================
// GOLD DIVIDER
// ============================================================

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400/70" />

      <span className="text-amber-500 text-xs">
        ✦
      </span>

      <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400/70" />
    </div>
  );
}

// ============================================================
// PORTRAIT
// ============================================================

function LeaderPortrait({ leader, size = "large" }) {
  const sizes =
    size === "featured"
      ? "w-56 h-56 sm:w-72 sm:h-72 lg:w-[350px] lg:h-[350px]"
      : "w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60";

  return (
    <div
      className={`
        relative
        shrink-0
        ${sizes}
      `}
    >
      {/* Aura */}

      <div
        className="
          absolute
          inset-[-22px]
          rounded-full
          bg-amber-300/20
          blur-3xl
        "
      />

      {/* Ring */}

      <div
        className="
          absolute
          inset-0
          rounded-full
          p-[5px]
          bg-gradient-to-br
          from-amber-400
          via-amber-100
          to-amber-500
          shadow-[0_18px_60px_rgba(180,120,20,0.18)]
        "
      >
        <div
          className="
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
              duration-700
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Outer ring */}

      <div
        className="
          absolute
          inset-[-12px]
          rounded-full
          border
          border-amber-300/30
          pointer-events-none
        "
      />
    </div>
  );
}

// ============================================================
// TOP THREE
// CARD + SINGULAR COME TOGETHER
// ============================================================

function FeaturedLeader({ leader, index }) {
  const cardFromLeft = index % 2 === 0;

  return (
    <section
      className="
        relative
        min-h-[78vh]
        w-full
        flex
        items-center
        overflow-hidden
        border-t
        border-amber-200/30
        py-12
        sm:py-16
        lg:py-20
      "
    >
      {/* Background glow */}

      <div
        className={`
          pointer-events-none
          absolute
          top-1/2
          ${
            cardFromLeft
              ? "left-[-100px]"
              : "right-[-100px]"
          }
          -translate-y-1/2
          w-[450px]
          h-[450px]
          rounded-full
          bg-amber-200/15
          blur-[110px]
        `}
      />

      <div
        className="
          relative
          z-10
          w-full
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-24
        "
      >
        <div
          className={`
            mx-auto
            w-full
            max-w-[1450px]
            flex
            flex-col
            ${
              cardFromLeft
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            }
            items-center
            justify-center
            gap-8
            lg:gap-12
            xl:gap-16
          `}
        >
          {/* ==================================================
              CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: cardFromLeft ? -130 : 130,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={springTransition}
            className="
              group
              relative
              w-full
              max-w-[540px]
              rounded-[1.75rem]
              border
              border-amber-200/70
              bg-[#FFFDF9]
              p-7
              sm:p-8
              lg:p-10
              shadow-[0_15px_50px_rgba(120,80,20,0.07)]
              hover:shadow-[0_25px_65px_rgba(120,80,20,0.13)]
              transition-shadow
              duration-500
            "
          >
            <div
              className="
                absolute
                -right-20
                -top-20
                w-60
                h-60
                rounded-full
                bg-amber-200/20
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              <LeaderPortrait
                leader={leader}
                size="featured"
              />

              <p
                className="
                  mt-7
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.28em]
                  text-amber-700
                  font-semibold
                "
              >
                {leader.role}
              </p>

              <h3
                className="
                  mt-2
                  font-serif
                  text-2xl
                  sm:text-3xl
                  font-semibold
                  leading-tight
                  text-stone-900
                "
              >
                {leader.name}
              </h3>
            </div>
          </motion.div>

          {/* ==================================================
              SINGULAR
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: cardFromLeft ? 130 : -130,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              ...springTransition,
              delay: 0.06,
            }}
            className="
              flex
              flex-1
              max-w-xl
              flex-col
              items-center
              lg:items-start
              text-center
              lg:text-left
            "
          >
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
              {leader.role}
            </p>

            <h3
              className="
                mt-4
                font-serif
                italic
                text-4xl
                sm:text-5xl
                lg:text-6xl
                xl:text-[4.3rem]
                font-semibold
                leading-[1.02]
                text-amber-700
              "
            >
              {leader.singular}
            </h3>

            <div className="my-6">
              <GoldDivider />
            </div>

            <p
              className="
                max-w-lg
                text-sm
                sm:text-base
                leading-relaxed
                text-stone-500
              "
            >
              Serving with purpose, wisdom and dedication,
              helping shape the vision and spiritual growth
              of IYF Mayapur.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// MIDDLE TWO CARDS
// ============================================================

function ExecutiveCard({ leader, index }) {
  const fromLeft = index === 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: fromLeft ? -130 : 130,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        ...springTransition,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -7,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-[1.75rem]
        border
        border-amber-200/70
        bg-[#FFFDF9]
        p-7
        sm:p-9
        lg:p-10
        shadow-[0_12px_45px_rgba(120,80,20,0.07)]
        hover:shadow-[0_22px_60px_rgba(120,80,20,0.13)]
        transition-shadow
        duration-500
      "
    >
      <div
        className="
          absolute
          -right-20
          -top-20
          w-64
          h-64
          rounded-full
          bg-amber-200/20
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      <div className="relative z-10 flex h-full flex-col items-center text-center">
        <LeaderPortrait
          leader={leader}
          size="large"
        />

        <p
          className="
            mt-7
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[0.28em]
            text-amber-700
            font-semibold
          "
        >
          {leader.role}
        </p>

        <h3
          className="
            mt-2
            font-serif
            text-2xl
            sm:text-3xl
            font-semibold
            leading-tight
            text-stone-900
          "
        >
          {leader.name}
        </h3>

        <div className="my-5">
          <GoldDivider />
        </div>

        <p
          className="
            max-w-lg
            font-serif
            text-xl
            sm:text-2xl
            italic
            leading-snug
            text-amber-800
          "
        >
          {leader.singular}
        </p>
      </div>
    </motion.article>
  );
}

// ============================================================
// FINAL THREE
// ============================================================

function MissionCard({ leader, index }) {
  const directions = [-120, 0, 120];

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: directions[index],
        y: 20,
        scale: 0.93,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        ...springTransition,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -7,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-[1.75rem]
        border
        border-amber-200/70
        bg-[#FFFDF9]
        p-7
        sm:p-8
        lg:p-9
        shadow-[0_12px_45px_rgba(120,80,20,0.06)]
        hover:shadow-[0_22px_60px_rgba(120,80,20,0.13)]
        transition-shadow
        duration-500
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-[-100px]
          -translate-x-1/2
          w-60
          h-60
          rounded-full
          bg-amber-200/20
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      <div className="relative z-10 flex h-full flex-col items-center text-center">
        <LeaderPortrait
          leader={leader}
          size="large"
        />

        <p
          className="
            mt-7
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[0.23em]
            text-amber-700
            font-semibold
          "
        >
          {leader.role}
        </p>

        <h3
          className="
            mt-2
            font-serif
            text-xl
            sm:text-2xl
            lg:text-[1.65rem]
            font-semibold
            leading-tight
            text-stone-900
          "
        >
          {leader.name}
        </h3>

        <div className="my-5">
          <GoldDivider />
        </div>

        <p
          className="
            max-w-sm
            font-serif
            text-lg
            sm:text-xl
            italic
            leading-snug
            text-amber-800
          "
        >
          {leader.singular}
        </p>
      </div>
    </motion.article>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Leaders() {
  const topLeaders = [
    leaders.director,
    leaders.advisor,
    leaders.chairman,
  ];

  const executiveLeaders = [
    leaders.secretary,
    leaders.executiveSecretary,
  ];

  const missionTeam = [
    leaders.educationalCoordinator,
    leaders.centralExecutiveSecretary,
    leaders.teamMember,
  ];

  return (
    <section
      aria-labelledby="leaders-heading"
      className="
        relative
        overflow-hidden
        bg-[#FFFDF9]
      "
    >
      {/* ====================================================
          GLOBAL GLOW
      ==================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[800px]
          h-[600px]
          rounded-full
          bg-amber-200/12
          blur-[150px]
        "
      />

      {/* ====================================================
          MAIN INTRO
      ==================================================== */}

      <div
        className="
          relative
          z-10
          px-5
          pt-20
          pb-8
          sm:pt-24
          md:pt-28
          md:pb-10
        "
      >
        <SectionHeader
          eyebrow="The people behind the mission"
          title={
            <>
              Our{" "}
              <span className="italic font-normal text-amber-600">
                Leadership
              </span>
            </>
          }
          description="
            Guided by experienced leaders and dedicated servants,
            IYF Mayapur is committed to nurturing the spiritual
            and educational growth of the youth.
          "
          compact
        />
      </div>

      {/* ====================================================
          TOP THREE
      ==================================================== */}

      <div className="relative">
        {topLeaders.map((leader, index) => (
          <FeaturedLeader
            key={leader.role}
            leader={leader}
            index={index}
          />
        ))}
      </div>

      {/* ====================================================
          EXECUTIVE TWO
      ==================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-5
          pt-16
          pb-20
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-24
          md:pt-20
          md:pb-24
        "
      >
        <SectionHeader
          eyebrow="Executive Leadership"
          title={
            <>
              From{" "}
              <span className="italic font-normal text-amber-600">
                Vision
              </span>{" "}
              to Action
            </>
          }
          description="
            Dedicated leadership translating the mission into
            meaningful action and continued service.
          "
          compact
        />

        <div
          className="
            relative
            z-10
            mt-2
            grid
            w-full
            grid-cols-1
            gap-6
            md:grid-cols-2
            md:gap-8
            lg:gap-10
          "
        >
          {executiveLeaders.map((leader, index) => (
            <ExecutiveCard
              key={leader.role}
              leader={leader}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* ====================================================
          FINAL THREE
      ==================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-amber-200/30
          px-5
          pt-16
          pb-20
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-24
          md:pt-20
          md:pb-24
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            right-[-150px]
            top-1/3
            w-[450px]
            h-[450px]
            rounded-full
            bg-yellow-200/12
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-150px]
            bottom-0
            w-[400px]
            h-[400px]
            rounded-full
            bg-amber-200/10
            blur-[110px]
          "
        />

        <SectionHeader
          eyebrow="Serving the Mission"
          title={
            <>
              Growing{" "}
              <span className="italic font-normal text-amber-600">
                Together
              </span>
            </>
          }
          description="
            Through education, coordination and dedicated service,
            every contribution strengthens the mission.
          "
          compact
        />

        <div
          className="
            relative
            z-10
            mt-2
            grid
            w-full
            grid-cols-1
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
            md:gap-7
            lg:gap-8
          "
        >
          {missionTeam.map((leader, index) => (
            <MissionCard
              key={leader.role}
              leader={leader}
              index={index}
            />
          ))}
        </div>

        {/* Bottom ornament */}

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
            duration: 0.8,
          }}
          className="
            relative
            z-10
            mt-14
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-16 bg-amber-300/60" />

          <span className="text-amber-500 text-sm">
            ✦
          </span>

          <span className="h-px w-16 bg-amber-300/60" />
        </motion.div>
      </section>
    </section>
  );
}
