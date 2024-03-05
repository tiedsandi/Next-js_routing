import {useRouter} from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>the proejct page for a specifiec project</h1>
    </div>
  );
}
export default SelectedClientProjectPage;
