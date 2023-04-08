export interface MainLayoutAllMDXNodeFields{
  slug: string;
}

export interface MainLayoutAllMDXNodeFrontmatter{
  title: string;
}

export interface MainLayoutAllMDXNode{
  fields: MainLayoutAllMDXNodeFields;
  frontmatter: MainLayoutAllMDXNodeFrontmatter;
}

export interface MainLayoutAllMDXEdge{
  next: MainLayoutAllMDXNode;
  node: MainLayoutAllMDXNode;
  previous: MainLayoutAllMDXNode;
}

export interface MainLayoutAllMDXParsedEdge extends MainLayoutAllMDXEdge{
  children: Array<MainLayoutAllMDXParsedEdge>;
  key: string;
}