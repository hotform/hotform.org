/* Types */
import {
  MainLayoutAllMDXEdge,
  MainLayoutAllMDXParsedEdge
} from './types';

export const parseEdges = (allMDXEdge: Array<MainLayoutAllMDXEdge>): Array<MainLayoutAllMDXParsedEdge> => {
  const parsedEdges: Array<MainLayoutAllMDXParsedEdge> = [];
  const edges: Array<MainLayoutAllMDXEdge> = [ ...allMDXEdge ];
  const matcher: RegExp = /[^\/]+/g;
  
  edges.some((edge, index) => {
    const paths = edge.node.fields.slug.match(matcher);
    if(paths) return false;
    edges.splice(index, 1);
    parsedEdges.push({
      ...edge,
      children: [],
      key: ''
    });
    return true;
  });
  
  edges.forEach(edge => {
    const paths = edge.node.fields.slug.match(matcher);
    let currentParsedEdges = parsedEdges;
    paths?.forEach((key, index) => {
      const childFound = currentParsedEdges.find(node => node.key === key);
      if(childFound){
        currentParsedEdges = childFound.children;
      }else{
        const slug = `/${paths.slice(0, index + 1).join('/')}/`;
        if(slug.toString() === edge.node.fields.slug.toString()){
          const newChild: MainLayoutAllMDXParsedEdge = {
            ...edge,
            children: [],
            key
          };
          currentParsedEdges.push(newChild);
          currentParsedEdges = newChild.children;
        }
      }
    });
  });
  
  return parsedEdges;
}