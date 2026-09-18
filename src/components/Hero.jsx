
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <EditorialHero />
    </div>
  );
}


// ============================================================
// ANIMATION VARIANTS
// ============================================================

const tileAnimations = [
  // Top left
  {
    hidden: { opacity: 0, x: -100, y: -60, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  },

  // Top center-right
  {
    hidden: { opacity: 0, y: -100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },

  // Top right
  {
    hidden: { opacity: 0, x: 100, y: -60, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  },

  // Bottom left
  {
    hidden: { opacity: 0, x: -100, y: 70, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  },

  // Bottom center
  {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },

  // Bottom right
  {
    hidden: { opacity: 0, x: 100, y: 70, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  },
];


const tileTransition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};


// ============================================================
// HERO TILE
// ============================================================

function HeroTile({
  image,
  className,
  animation,
  delay = 0,
}) {
  return (
    <motion.div
      initial={animation.hidden}
      whileInView={animation.visible}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        ...tileTransition,
        delay,
      }}
      whileHover={{
        y: -4,
        transition: {
          duration: 0.25,
        },
      }}
      className={`
        relative
        overflow-hidden
        group
        rounded-lg
        md:rounded-xl
        h-full
        shadow-[0_8px_25px_rgba(80,50,10,0.08)]
        ${className}
      `}
    >

      {/* Soft golden glow */}
      <div
        className="
          absolute
          inset-0
          bg-amber-200/10
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          z-10
          pointer-events-none
        "
      />

      <img
        src={image}
        alt=""
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-105
        "
      />

      {/* Subtle image overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-stone-900/10
          via-transparent
          to-white/5
          pointer-events-none
        "
      />

    </motion.div>
  );
}


// ============================================================
// MAIN HERO
// ============================================================

function EditorialHero() {

  // IMPORTANT:
  // Since this is inside React/Vite, importing the image
  // is preferable to using "src/assets/image.png" directly.
  //
  // If image.png is your hero image, change this import:
  //
  // import sampleImg from "../assets/image.png";

  const sampleImg = "/src/assets/image.png";


  const centers = [
    {
      span: "row-span-2 md:col-span-4 md:row-span-2",
    },
    {
      span: "md:col-span-5 md:row-span-1",
    },
    {
      span: "row-span-2 md:col-span-3 md:row-span-2",
    },
    {
      span: "row-span-2 md:col-span-4 md:row-span-2",
    },
    {
      span: "md:col-span-4 md:row-span-1 md:col-start-5 md:row-start-4",
    },
    {
      span: "row-span-2 md:col-span-4 md:row-span-2 md:col-start-9 md:row-start-3",
    },
  ];


  return (
    <section
      className="
        relative
        min-h-screen
        bg-[#FFFDF9]
        px-3
        py-5
        sm:px-5
        sm:py-7
        md:h-[100svh]
        md:min-h-0
        md:px-12
        md:py-6
        lg:px-24
        flex
        items-center
        justify-center
        font-sans
        overflow-hidden
      "
    >

      {/* ======================================================
          BACKGROUND DECORATION
      ====================================================== */}

      {/* Main ambient glow */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[500px]
          rounded-full
          bg-amber-200/20
          blur-[130px]
          pointer-events-none
        "
      />


      {/* Small decorative glow */}

      <div
        className="
          absolute
          top-[15%]
          left-[5%]
          w-40
          h-40
          rounded-full
          bg-yellow-200/20
          blur-[80px]
          pointer-events-none
        "
      />


      {/* ======================================================
          DECORATIVE CORNERS
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          top-8
          left-8
          md:top-12
          md:left-12
          flex
          items-center
          gap-2
          text-amber-500/60
        "
      >
        <span className="w-6 h-px bg-amber-400/50" />
        <span className="text-xs">✦</span>
      </motion.div>


      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="
          absolute
          bottom-8
          right-8
          md:bottom-12
          md:right-12
          flex
          items-center
          gap-2
          text-amber-500/60
        "
      >
        <span className="text-xs">✦</span>
        <span className="w-6 h-px bg-amber-400/50" />
      </motion.div>


      {/* ======================================================
          GRID
      ====================================================== */}

      <div
        className="
          relative
          w-full
          max-w-7xl
          md:h-full
          grid
          grid-cols-2
          md:grid-cols-12
          gap-3
          sm:gap-4
          md:gap-5
          auto-rows-[92px]
          sm:auto-rows-[120px]
          md:auto-rows-[minmax(0,1fr)]
          items-stretch
        "
      >


        {/* ====================================================
            CENTER 1 — TOP LEFT
        ==================================================== */}

        <HeroTile
          image={sampleImg}
          animation={tileAnimations[0]}
          delay={0.05}
          className={`
            hero-tile
            hero-tile--one
            ${centers[0].span}
          `}
        />


        {/* ====================================================
            CENTER 2 — TOP CENTER RIGHT
        ==================================================== */}

        <HeroTile
          image={sampleImg}
          animation={tileAnimations[1]}
          delay={0.15}
          className={`
            hero-tile
            hero-tile--two
            ${centers[1].span}
          `}
        />


        {/* ====================================================
            CENTER 3 — TOP RIGHT
        ==================================================== */}

        <HeroTile
          image={sampleImg}
          animation={tileAnimations[2]}
          delay={0.25}
          className={`
            hero-tile
            hero-tile--three
            ${centers[2].span}
          `}
        />


        {/* ====================================================
            CENTRAL BRANDING
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            col-span-2
            row-span-2
            md:col-span-5
            md:col-start-5
            md:row-start-2
            md:row-span-2
            flex
            flex-col
            items-center
            justify-center
            text-center
            p-4
            sm:p-6
            rounded-2xl
            my-1
            md:my-0
            z-10
            overflow-hidden
          "
        >

          {/* ==================================================
              CENTRAL BACKLIGHT
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[80%]
              h-[65%]
              rounded-full
              bg-amber-300/30
              blur-[80px]
            "
          />


          {/* Secondary glow */}

          <div
            className="
              absolute
              w-[55%]
              h-[45%]
              rounded-full
              bg-yellow-200/30
              blur-[50px]
            "
          />


          {/* ==================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10">

            {/* Eyebrow */}

            <motion.span
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="
                block
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.3em]
                text-amber-700
                font-bold
                mb-2
              "
            >
              ISKCON Youth Forum
            </motion.span>


            {/* Decorative ornament */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
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
                delay: 0.55,
              }}
              className="
                text-amber-500
                text-sm
                mb-2
              "
            >
              ✦
            </motion.div>


            {/* Heading */}

            <h1
              className="
                relative
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                font-serif
                text-stone-900
                font-bold
                leading-tight
              "
            >

              {/* Heading backlight */}

              <span
                className="
                  absolute
                  inset-0
                  -z-10
                  blur-2xl
                  bg-amber-300/40
                  scale-110
                "
              />

              One mission,
              <br />

              <span
                className="
                  italic
                  font-normal
                  text-amber-600
                "
              >
                many communities
              </span>

            </h1>


            {/* Supporting text */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="
                text-[11px]
                sm:text-xs
                text-stone-600
                mt-2
                sm:mt-3
                max-w-xs
                mx-auto
                leading-relaxed
              "
            >
              IYF connects young people through spiritual growth,
              meaningful friendships, learning and service.
            </motion.p>


            {/* Button */}

            <motion.button
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
              }}
              transition={{
                duration: 0.6,
                delay: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-4
                px-5
                py-2
                bg-amber-600
                text-white
                font-medium
                text-xs
                rounded-full
                shadow-[0_8px_20px_rgba(180,120,20,0.22)]
                hover:bg-amber-700
                transition-colors
              "
            >
              Explore Centers
            </motion.button>

          </div>


          {/* ==================================================
              DECORATIVE RING
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[90%]
              aspect-square
              rounded-full
              border
              border-dashed
              border-amber-300/20
              pointer-events-none
            "
          />

        </motion.div>


        {/* ====================================================
            CENTER 4 — BOTTOM LEFT
        ==================================================== */}

        <HeroTile
          image={sampleImg}
          animation={tileAnimations[3]}
          delay={0.35}
          className={`
            hero-tile
            hero-tile--four
            ${centers[3].span}
          `}
        />


        {/* ====================================================
            CENTER 5 — BOTTOM CENTER
        ==================================================== */}

        <HeroTile
          image={sampleImg}
          animation={tileAnimations[4]}
          delay={0.45}
          className={`
            hero-tile
            hero-tile--five
            ${centers[4].span}
          `}
        />


        {/* ====================================================
            CENTER 6 — BOTTOM RIGHT
        ==================================================== */}

        <HeroTile
          image={sampleImg}
          animation={tileAnimations[5]}
          delay={0.55}
          className={`
            hero-tile
            hero-tile--six
            ${centers[5].span}
          `}
        />

      </div>

    </section>
  );
}


