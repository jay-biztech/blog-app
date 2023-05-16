import BlogDetail from '@/app/components/pages/blog-detail/page';

async function getBlog(id: number) {
  const res = await fetch(`${process.env.BASE_URL}/blogs/${id}`);
  return res.json();
}

export default async function Page({ params }: { params: { id: number } }) {
  const blogData = getBlog(params.id);
  const [{ id, title, description, date }] = await Promise.all([blogData]);

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
