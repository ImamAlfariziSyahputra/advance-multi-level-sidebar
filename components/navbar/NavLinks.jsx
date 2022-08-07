import Link from "next/link";
import { useState } from "react";
import { links } from "./myLinks";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

export default function NavLinks() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, idx) => (
        <div key={idx}>
          <div className="group px-3 text-left md:cursor-pointer">
            <h1
              className="group flex items-center justify-between py-7 pr-5 md:pr-0"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="inline text-xl md:hidden">
                {heading === link.name ? <IoChevronUp /> : <IoChevronDown />}
              </span>
              <span className="hidden text-xl group-hover:rotate-180 md:ml-2 md:block">
                <IoChevronDown />
              </span>
            </h1>

            {/* Dropdown For Medium Screen */}
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden md:hover:block md:group-hover:block">
                  {/* Tooltip kind of things, "triangle" */}
                  <div className="py-3">
                    <div className="absolute left-3 mt-1 h-4 w-4 rotate-45 bg-white"></div>
                  </div>

                  <div className="grid grid-cols-3 gap-10 bg-white p-3.5">
                    {link.sublinks.map((mysublinks, idx) => (
                      <div key={idx}>
                        <h1 className="flex items-center text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>

                        {mysublinks.sublink.map((slink, idx) => (
                          <li
                            key={idx}
                            className="my-2.5 text-sm text-gray-600"
                          >
                            <Link href={slink.link}>
                              <a className="hover:text-blue-500">
                                {slink.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"} `}>
            {/* sublinks */}
            {link.sublinks.map((slinks, idx) => (
              <div key={idx}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="flex items-center justify-between py-4 pl-7 pr-5 font-semibold md:pr-0"
                  >
                    {slinks.Head}

                    <span className="inline text-xl md:mt-1 md:ml-2">
                      {subHeading === slinks.Head ? (
                        <IoChevronUp />
                      ) : (
                        <IoChevronDown />
                      )}
                    </span>
                  </h1>

                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    } `}
                  >
                    {slinks.sublink.map((slink, idx) => (
                      <li key={idx} className="py-3 pl-14">
                        <Link href={slink.link}>
                          <a className="hover:text-blue-500">{slink.name}</a>
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
