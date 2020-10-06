import React from "react";
import Layout from "../components/layout";
import Slider from "../components/Slider";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <Layout title="Aegis | Home">
      <div className="d-flex--column">
        <Slider />
        <div
          style={{
            backgroundColor: "var(--jal-dark)",
            color: "var(--white)",
          }}
          className="d-flex fjaround p--16"
        >
          <div
            className="d-flex--column facenter cursor--pointer"
            onClick={() => router.push("/products/insecticides")}
          >
            <img src="../images/insecticide.png" />
            <p className="mt--4" style={{ fontSize: 18 }}>
              Insecticides
            </p>
          </div>
          <div
            className="d-flex--column facenter cursor--pointer"
            onClick={() => router.push("/products/herbicides")}
          >
            <img src="../images/herbicide.png" />
            <p className="mt--4" style={{ fontSize: 18 }}>
              Herbicides
            </p>
          </div>
          <div
            className="d-flex--column facenter cursor--pointer"
            onClick={() => router.push("/products/fungicides")}
          >
            <img src="../images/fungicide.png" />
            <p className="mt--4" style={{ fontSize: 18 }}>
              Fungicides
            </p>
          </div>
          <div
            className="d-flex--column facenter cursor--pointer"
            onClick={() => router.push("/products/plant-growth-regulator")}
          >
            <img src="../images/plantgrowthregulator.png" />
            <p className="mt--4" style={{ fontSize: 18 }}>
              Plant Growth Regulator
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
