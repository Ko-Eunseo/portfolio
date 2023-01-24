type rowsStructured = {
  title: string;
  content: string | undefined;
  github_url: string | null;
  tags: {
    content: string;
  };
}[];
