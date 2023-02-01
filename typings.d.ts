type rowsStructured = {
  title: string;
  content: string | undefined;
  url: string | null;
  tags: {
    content: string;
  };
}[];
