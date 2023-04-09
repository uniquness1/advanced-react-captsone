import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: aajijola3@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/uniquness1",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/adeola-ajijola-4b9b87135",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/adeola.ajijola",
  },
  {
    icon: faBlogger,
    url: "#",
  },
];

const Header = () => {
  const ref = useRef(0);
  const navRef = useRef(null);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const navRefSet = useRef("");
  const [close, setClose] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const newScrollP = window.scrollY;
      // console.log("ref", ref);
      // console.log("newScrollP", newScrollP);
      if (newScrollP - ref.current > 0) {
        navRefSet.current = "Down";
        // console.log("Down");
      } else if (newScrollP - ref.current < 0) {
        navRefSet.current = "Up";
        // console.log("Up");
      }

      setClose(navRefSet.current === "Down");
      console.log("navRefSet.current", navRefSet.current);
      ref.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      ref={navRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      style={
        close
          ? {
              transform: `translate(${0}px, ${-200}px)`,
              transitionProperty: "transform",
              transitionDuration: ".3s",
              transitionTimingFunction: "ease-in-out",
            }
          : {
              transform: `translate(${0}px, ${0}px)`,
              transitionProperty: "transform",
              transitionDuration: ".3s",
              transitionTimingFunction: "ease-in-out",
            }
      }
      backgroundColor="#18181b"
    >
      {/* <SlideEx /> */}
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map((social) => {
              return (
                <a
                  key={social.url}
                  href={social.url}
                  style={{ paddingRight: "1em" }}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")}>Projects</a>
              <a onClick={handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
