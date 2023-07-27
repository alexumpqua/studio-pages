import { GetPath, TemplateProps } from "@yext/pages";
import Footer from "../components/Footer";
import HeaderSimple from "../components/HeaderSimple";
import Headline from "../components/Headline";

export const getPath: GetPath<TemplateProps> = () => {
  return "/";
};

export default function Home() {
  return (
    <>
      <HeaderSimple backgroundColor="#FFFFFF" logo={``} />
      <Headline value="Headline" textSize="xl" fontWeight="medium" />
      <Footer />
    </>
  );
}
