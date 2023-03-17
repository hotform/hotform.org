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