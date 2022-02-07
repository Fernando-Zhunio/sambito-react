import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const input = require(`./${slug}.md`);

  return (
    input && (
      <article className="prose prose-sm mb-5 text-gray-900 dark:text-gray-100">
        <ReactMarkdown source={input.default} />
      </article>
    )
  );
};

export default Page;
