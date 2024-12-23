import React from "react";

type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];

  // Enum
  category: Category;
};

export enum Category {
  "JS" = "Javascript",
  "TS" = "TypeScript",
  "RC" = "React",
  "NX" = "Next",
}

const Destructuring: React.FC<Props> = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.length > 0 ? (
          tags.map((tag) => <span key={tag}> #{tag}</span>)
        ) : (
          <p>Nenhum tag disponível.</p>
        )}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
};

export default Destructuring;
