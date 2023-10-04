export interface Post {
  id?: string;
  status: PostStatus;
  title: string;
  content: string;
  tags?: string[];
  createdAt: Date;
}

export enum PostStatus {
  DRAFT,
  PUBLISHED,
  REMOVED,
}
