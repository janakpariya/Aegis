import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const IndexPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return <div />;
};

export default IndexPage;
