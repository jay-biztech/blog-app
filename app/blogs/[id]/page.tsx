import BlogDetail from '@/app/components/pages/blog-detail/page';
import { blogsMock } from '../mock';

export default function Page({ params }: { params: { id: number } }) {
  const { id, title, description, date } = blogsMock[params.id - 1];
  return (
    <div className="row mt-5">
      <BlogDetail
        key={id}
        url={`/blogs/${id}`}
        {...{ id, title, description, date }}
      />
    </div>
  );
}
