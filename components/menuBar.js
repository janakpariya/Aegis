import { Popover } from "@innovaccer/design-system";
import { useRouter } from "next/router";
import React from "react";

const MenuBar = () => {
  const router = useRouter();
  const { pathname } = useRouter();
  const isLinkActive = (routeLink) => pathname.includes(routeLink);
  return (
    <div
      style={{
        backgroundColor: "var(--jal-dark)",
        color: "var(--white)",
      }}
      className="d-flex fjbetween p--8"
    >
      <div className="d-flex">
        <p
          onClick={() => router.push("/home")}
          className="cursor--pointer"
          style={
            isLinkActive("home")
              ? { color: "var(--haldi)", fontWeight: "bolder" }
              : {}
          }
        >
          Home
        </p>
        <p
          onClick={() => router.push("/about")}
          className="cursor--pointer ml--16"
          style={
            isLinkActive("about")
              ? { color: "var(--haldi)", fontWeight: "bolder" }
              : {}
          }
        >
          About Us
        </p>
        <div className="ml--16">
          <Popover
            on="hover"
            trigger={
              <p
                onClick={() => router.push("/products")}
                className="cursor--pointer"
                style={
                  isLinkActive("products")
                    ? { color: "var(--haldi)", fontWeight: "bolder" }
                    : {}
                }
              >
                Product
              </p>
            }
            position="bottom-start"
            appendToBody={false}
            hoverable
          >
            <div
              style={{
                backgroundColor: "var(--jal-dark)",
                color: "var(--white)",
              }}
              className="p--4"
            >
              <p
                className="mb--4 cursor--pointer"
                onClick={() => router.push("/products/insecticides")}
              >
                Insecticides
              </p>
              <p
                className="mb--4 cursor--pointer"
                onClick={() => router.push("/products/herbicides")}
              >
                Herbicides
              </p>
              <p
                className="mb--4 cursor--pointer"
                onClick={() => router.push("/products/fungicides")}
              >
                Fungicides
              </p>
              <p
                onClick={() => router.push("/products/plant-growth-regulator")}
                className="cursor--pointer"
              >
                Plant Growth Regulator
              </p>
            </div>
          </Popover>
        </div>
        <p
          onClick={() => router.push("/contact")}
          className="cursor--pointer ml--16"
          style={
            isLinkActive("contact")
              ? { color: "var(--haldi)", fontWeight: "bolder" }
              : {}
          }
        >
          Contact Us
        </p>
      </div>
      <div>User Login</div>
    </div>
  );
};

export default MenuBar;
