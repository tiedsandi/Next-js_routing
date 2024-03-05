import {useRouter} from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push('/clients/max/project-a');
  }

  return (
    <div>
      <h1>the projects of a given clinet</h1>
      <button onClick={loadProjectHandler}>Load project a</button>
    </div>
  );
}
export default ClientProjectsPage;
