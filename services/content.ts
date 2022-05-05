import Contentful, { createClient } from "contentful";

export type Post = {
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
  thumbnail: Contentful.Asset;
  content: Contentful.EntryFields.RichText;
};

const client = createClient({
  space: '3ir2ze2urufy',
  accessToken: 'SbnQk9NFD6i3FtPDYO3EW8WIVdcEOMs9XveGFruKDck'
});

export async function getPosts(): Promise<Contentful.Entry<Post>[]> {
  const { items } = await client.getEntries<Post>({
    content_type: 'post'
  });

  return items;
}

export async function getPost(postId: string): Promise<Contentful.Entry<Post>> {
  const post  = await client.getEntry<Post>(postId);

  return post;
}