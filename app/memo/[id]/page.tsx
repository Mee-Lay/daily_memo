
export default function Page({params}: {params: { id: number }}) {
  return <p>Memo: {params.id}</p>;
}