import Markdown from "marked-react";

export const MarkdownText = ({ body }) => {
  return <Markdown>{body}</Markdown>;
};
