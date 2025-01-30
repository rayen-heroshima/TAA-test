export interface ESGCategory {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link?: string;
  subcategories?: ESGCategory[];
}

export interface BreadcrumbItem {
  id: string;
  title: string;
  path: string;
}