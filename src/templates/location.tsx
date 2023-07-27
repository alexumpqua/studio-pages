import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import HeaderSimple from "../components/HeaderSimple";
import PageLayout from "../components/PageLayout";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id",
    localization: { locales: ["en"], primary: false },
    filter: {},
    fields: ["slug"],
  },
};
export const getPath: GetPath<TemplateProps> = ({
  document,
}: TemplateProps) => {
  return `${document.slug}`;
};

export default function location() {
  return (
    <PageLayout backgroundColor="#FFFFFF">
      <HeaderSimple />
    </PageLayout>
  );
}
