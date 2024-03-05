import Link from 'next/link';

function ClientsPage() {
  const clients = [
    {id: 'sandi', name: 'Sandi'},
    {id: 'fachran', name: 'Fachran'},
  ];
  return (
    <div>
      <h1>the clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
