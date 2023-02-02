export type NotionDataRow = {
  title: { id: string; title: { text: { content: string } }[] };
  subtitle: {
    id: string;
    rich_text: { plain_text: { content: string | undefined } }[];
  };
  tags: { id: string; multi_select: { name: { content: string } }[] };
  content: {
    id: string;
    rich_text: { text: { content: string | undefined } }[];
  };
  subContent: {
    id: string;
    rich_text: { text: { content: string | undefined } }[];
  };
  url: { id: string; url: string | null };
  period: {
    id: string;
    rich_text: { text: { content: string | undefined } }[];
  };
  team: {
    id: string;
    rich_text: { text: { content: string | undefined } }[];
  };
  // image: {
  //   id: string;
  //   rich_text: { text: { content: string | undefined } }[];
  // };
};

export type ItemProps = {
  title?: string;
  subtitle?: string;
  content?: string;
  url?: string;
  tags?: string;
  period?: string;
  subContent?: string;
  image?: string;
  className?: string;
  team?: string;
};

export type TabProps = {
  subtitle?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  curTab: boolean;
  children?: React.ReactNode;
};

export type ToogleBtnProps = {
  children: React.ReactNode;
  onClick: React.ReactEventHandler;
};

export type GnbItemProps = {
  title: string;
  subMenu?: {
    sub: string;
  }[];
};
