import Link from 'next/link';
import Button, { ButtonType } from '../components/atoms/Button';
import Heading from '../components/atoms/Heading';
import Blog from '../components/pages/blog/page';
import { BlogProps } from '../components/pages/blog/types';
export const revalidate = 0;

async function getBlogs() {
  const res = await fetch(`${process.env.BASE_URL}/blogs`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Blogs() {
  const blogsData = getBlogs();
  const [blogs] = await Promise.all([blogsData]);

  return (
    <div>
      <Heading>Blogs</Heading>
      <Link href="blogs/create">
        <Button title="Create" buttonType={ButtonType.Primary}></Button>
      </Link>
      <div className="row mb-2">
        {blogs.map(({ id, title, description, date }: BlogProps) => {
          return (
            <Blog
              key={id}
              url={`blogs/${id}`}
              {...{ id, title, description, date }}
            />
          );
        })}
      </div>
    </div>
  );
}
