export type Category = {
  id?: number;
  name?: string;
  posts?: Post[];
} |null;

export type Location = {
  id?: number;
  city?: string;
  country?: string;
  content?: string;
  population?: number;
  posts?: Post[];
} | null;

export type Post = {
  id?: number;
  title?: string;
  content?: string;
  image?: string;
  days?: number;
  published?: boolean;
  categories?: Category[];
  locationId?: number;
  location?: Location
  price?: number;
} |null;

export type IndividualPost = {
  id?: number;
  title?: string;
  content?: string;
  image?: string;
  days?: number;
  published?: boolean;
  categories?: Category[];
  locationId?: number;
  location: Location
  price?: number;
} | null;

