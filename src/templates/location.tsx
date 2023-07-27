import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en"], primary: false },
    filter: {},
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export default function location() {
  return <GridContainer />;
}
