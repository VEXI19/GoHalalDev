import AboutUs from "../icons/AboutUs.svg";
import Authenticity from "../icons/Authenticity.svg";
import FAQ from "../icons/FAQ.svg";
import Career from "../icons/Career.svg";
import Account from "../icons/Account.svg";
import Language from "../icons/Language.svg";
import AboutUs2 from "../icons/user 1AboutUs2.svg";
import OurStory from "../icons/Group 4460OurStory.svg";
import Mission from "../icons/Group 4461Mission&Vision.svg";
import CoreValues from "../icons/GroupCoreValues.svg";
import OurFounders from "../icons/GroupOurFounders.svg";
import Recipes from "../icons/GroupRecipies.svg";
import GoHalalFamily from "../icons/VectorGoHalalFamily.svg";
import Zakat from "../icons/GroupZakat.svg";
import Blog from "../icons/GroupBlog.svg";

function ToBarList(props) {
  var windowWitdth = window.innerWidth;
  window.addEventListener("resize", () => (windowWitdth = window.innerWidth));

  const Tabs =
    windowWitdth <= 1200
      ? [
          {
            text: "About Us",
            icon: AboutUs,
            dropDownList: [
              {
                text: "About Us",
                icon: AboutUs2,
              },
              {
                text: "Our Story",
                icon: OurStory,
              },
              {
                text: "Mission & Vision",
                icon: Mission,
              },
              {
                text: "Core Values",
                icon: CoreValues,
              },
              {
                text: "Our Founders",
                icon: OurFounders,
              },
            ],
          },

          {
            text: "Authenticity",
            icon: Authenticity,
            dropDownList: [],
          },

          {
            text: "FAQ",
            icon: FAQ,
            dropDownList: [
              {
                text: "adsfasfd",
                icon: Account,
              },
              {
                text: "adsfasfd",
                icon: Account,
              },
            ],
          },

          {
            text: "Career",
            icon: Career,
            dropDownList: [
              {
                text: "adsfasfd",
                icon: Account,
              },
              {
                text: "adsfasfd",
                icon: Account,
              },
            ],
          },

          {
            text: "Language",
            icon: Language,
            dropDownList: [
              {
                text: "adsfasfd",
                icon: Account,
              },
              {
                text: "adsfasfdasdfasfdasfafasfd",
                icon: Account,
              },
            ],
          },

          {
            text: "Account",
            icon: Account,
            dropDownList: [
              {
                text: "adsfasfd",
                icon: Account,
              },
              {
                text: "adsfadsfasfsafasfasfd",
                icon: Account,
              },
            ],
          },
          { text: "Recipes", icon: Recipes },
          { text: "Go Halal Family", icon: GoHalalFamily },
          { text: "Zakat", icon: Zakat },

          { text: "Blog", icon: Blog },
        ]
      : [
          {
            text: "About Us",
            icon: AboutUs,
            dropDownList: [
              {
                text: "About Us",
                icon: AboutUs2,
              },
              {
                text: "Our Story",
                icon: OurStory,
              },
              {
                text: "Mission & Vision",
                icon: Mission,
              },
              {
                text: "Core Values",
                icon: CoreValues,
              },
              {
                text: "Our Founders",
                icon: OurFounders,
              },
            ],
          },

          {
            text: "Authenticity",
            icon: Authenticity,
          },

          {
            text: "FAQ",
            icon: FAQ,
            dropDownList: [
              {
                text: "adsfasfd",
                icon: Account,
              },
              {
                text: "adsfasfd",
                icon: Account,
              },
            ],
          },

          {
            text: "Career",
            icon: Career,
            dropDownList: [
              {
                text: "adsfasfd",
                icon: Account,
              },
              {
                text: "adsfasfd",
                icon: Account,
              },
            ],
          },

          {
            text: "Language",
            icon: Language,
            dropDownList: [
              {
                text: "adsfasfd",
                icon: Account,
              },
              {
                text: "adsfasfdasdfasfdasfafasfd",
                icon: Account,
              },
            ],
          },

          {
            text: "Account",
            icon: Account,
            dropDownList: [
              {
                text: "adsfasfd",
                icon: Account,
              },
              {
                text: "adsfadsfasfsafasfasfd",
                icon: Account,
              },
            ],
          },
        ];
  return Tabs;
}

export default ToBarList;
