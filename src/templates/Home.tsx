import { GetPath, TemplateProps } from "@yext/pages";
import Footer from "../components/Footer";
import Headline from "../components/Headline";

export const getPath: GetPath<TemplateProps> = () => {
  return "/";
};

export default function Home() {
  return (
    <>
      <Headline value="Headline" textSize="xl" fontWeight="medium" />
      <Footer />
    </>
  );
}
