export interface ArticleItem {
  type: string;
  id: string;
  attributes: {
    title: string;
    body: string;
    created: string;
    updated: string;
  };
  relationships: {
    author: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}

export interface AuthorItem {
  type: string;
  id: string;
  attributes: {
    name: string;
    age: number;
    gender: string;
  };
}

export interface ApiResponse {
  data: ArticleItem[];
  included: AuthorItem[];
}
